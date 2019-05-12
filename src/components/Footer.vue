<template>
    <footer class="footer">
        <div class="container">
            <p>叶尾</p>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer {
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 148px;
        background: -webkit-linear-gradient(left,#000000,#9acfea); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(right,#000000,#9acfea); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient(right,#000000,#9acfea); /* Firefox 3.6 - 15*/
        background: linear-gradient(to right, #000000,#9acfea); /* 标准的语法 */
    }

</style>