<template>
    <div class="loading" v-show="loading">
        <img src="../assets/loading.gif">
    </div>
</template>
<script>
    export default {
        name: 'Loading',
        data() {
            return {
                loading: false
            }
        },
        created() {
            var that = this;
            this.bus.$on('loading', function (data) {
                that.loading = !!data;
            })
        }
    }
</script>
<style scoped lang="scss">
    .loading {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: rgba(51, 51, 51, 0.8);
        p {
            padding: .15rem .15rem .2rem;
            color: #fff;
            font-size: .16rem;
        }
    }
</style>
