<template>
    <div class="" id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-12 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block tm-block-h-auto" style="overflow-y: auto">
                        <h2 class="tm-block-title">聚合报告</h2>
                        <table class="table table-hover tm-table-small tm-product-table" style=''>
                            <thead>
                            <tr>
                                <th nowrap="nowrap" scope="col" v-for="t in thdata">{{t}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td v-for="data1 in tbdata1">{{data1}}</td>
                            </tr>
                            <tr>
                                <td v-for="data2 in tbdata2">{{data2}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block">
                        <h2 class="tm-block-title">Transactions per Second</h2>
                        <img v-bind:src="tpsUrl" style="width: 500px;height: 350px;margin-left: -15px"/>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block">
                        <h2 class="tm-block-title">Response Times Over Time</h2>
                        <img v-bind:src="rtotUrl" style="width: 500px;height: 350px;margin-left: -15px"/>
                    </div>
                </div>
            </div>
        </div>
        <footer class="tm-footer row tm-mt-small">
            <div class="col-12 font-weight-light">
                <p class="text-center text-white mb-0 px-4 small">
                    Copyright &copy; <b>2018</b> All rights reserved.

                    More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                </p>
            </div>
        </footer>
    </div>

</template>

<script>
    import VueElementLoading from 'vue-element-loading'

    export default {
        components: {
            VueElementLoading
        },
        name: "Report",
        data() {
            return {
                tpsUrl: '',
                rtotUrl: '',
                thdata:[],
                tbdata1:[],
                tbdata2:[]
            }
        },
        mounted: function () {

            let id = this.$route.query.history_id
            let script_name = this.$route.query.script_name
            let md5 = this.$route.query.md5
            const self = this
            if(id == null || md5 ==null){
                swal("错误", '请选择历史记录', "error")
            }
            self.bus.$emit('loading', true)
            $.ajax({
                url: this.$api.generateReportUrl + "?id=" + id + "&md5=" + md5,
                type: 'GET',
                success: function (response) {
                    if (response.code == 0) {
                        self.thdata = []
                        self.tpsUrl = response.data.tps;
                        self.rtotUrl = response.data.rtot;
                        let av = response.data.aggregate
                        console.log(av)
                        for (let a1 in av[0].split(',')){
                            self.thdata.push(av[0].split(',')[a1])
                        }
                        for (let a2 in av[1].split(',')){
                            self.tbdata1.push(av[1].split(',')[a2])
                        }
                        for (let a3 in av[2].split(',')){
                            self.tbdata2.push(av[2].split(',')[a3])
                        }
                        self.bus.$emit('loading', false)
                    } else {
                        swal("错误", response.message, "error")
                        self.bus.$emit('loading', false)
                    }
                }
            })
        }
    }
</script>

<style scoped>



</style>