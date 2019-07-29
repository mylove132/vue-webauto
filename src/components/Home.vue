<template>
    <div class="row">
        <div class="col-md-2 side-nav" style="margin-left: 20px;margin-top: 50px">
            <div class="panel-group" id="accordion" style="color: white">
                <div class="panel-heading panel yx">
                    <a data-toggle="collapse" href="#jmeterPlatform" class="side-nav-item item-title" style="background-color:#567085;color: white" @click="showJmeterUse()">
                        jmeter平台使用说明
                    </a>
                    <div class="item-body collapse" id='index'>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-xn" id="item-xns" class="side-nav-item item-title" style="background-color:#567085;color: white">
                        jmeter性能报告说明
                    </a>
                    <div id="item-xn" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;">
                            <ul class="list-unstyled">
                                <li class="item-second" id='tps'><a href="#" @click="showTps()">Transactions per Second</a></li>
                                <li class="item-second" id='rtot'><a href="#" @click="showRtot()">Response Times Over Time</a></li>
                                <li class="item-second" id='pmc'><a data-toggle="collapse" data-parent="#accordion" href="#item-pmcc" id="item-pmc" class="side-nav-item item-title" style="background-color:#567085;color: blue">PerfMon Metrics Collector</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="item-pmcc" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;color: blue">
                            <ul class="list-unstyled">
                                <li class="item-second" id='network'><a href="#" @click="showNetwork()">network</a></li>
                                <li class="item-second" id='cpu'><a href="#" @click="showCpu()">cpu</a></li>
                                <li class="item-second" id='disk'><a href="#" @click="showDisk()">disk</a></li></ul>
                        </div>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-cangku" id="headcangku" class="side-nav-item item-title" style="background-color:#567085;color: white">
                        接口类型说明
                    </a>
                    <div id="item-cangku" class="panel-collapse collapse"  style="background-color:#567085;">
                        <div class="item-body">
                            <ul class="list-unstyled">
                                <li class="item-second" id='a'><a href="a.html">dubbo接口</a></li>
                                <li class="item-second" id='b'><a href="b.html">http 接口</a></li>
                                <li class="item-second" id='c'><a href="b.html">websocket 接口</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-jxwz" id="jxwz" class="side-nav-item item-title" style="background-color:#567085;color: white">
                        jmeter精选文章
                    </a>
                    <div id="item-jxwz" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;">
                            <ul class="list-unstyled">
                                <li class="item-second"><a href="javascript:void(0);" @click="addJmeterArticle()">添加jmeter文章</a></li>
                                <li class="item-second"><a href="javascript:void(0);">修改jmeter文章</a></li>
                                <li class="item-second"><a href="javascript:void(0);" @click="articleList()">文章列表</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-caiwu" id="headcaiwu" class="side-nav-item item-title collapsed" style="background-color:#567085;color: white">
                        定时任务
                    </a>
                </div>

            </div>
        </div>
        <div class="col-md-10" id="accordion1">
            <div class="row tm-content-row collapse hide" id="jmeterPlatform" data-parent="#accordion1" style="margin-left: 400px;margin-top: -360px">
                <div class="col-12">
                    <a class="card-link" data-toggle="collapse" href="#collapse1" style="color: white;font-size: 20px;display: block;float: left;margin-left: 200px;text-shadow:5px 2px 6px rgb(12,232,100);">
                         HEADER设置
                    </a>
                    <a class="card-link" data-toggle="collapse" href="#collapse2" style="margin-left:100px;color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px rgb(12,232,100);">
                         COOKIE设置
                    </a>
                    <a class="card-link" data-toggle="collapse" href="#collapse3" style="margin-left: 100px;color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px rgb(12,232,100);">
                         PARAM设置
                    </a>
                    <div class="row tm-content-row collapse hide" id="collapse1" data-parent="#accordion">
                        <div class="col-12 tm-block-col">
                            <div class="tm-bg-primary-dark tm-block tm-block-h-auto" style="height: 270px;overflow-y:auto;margin-left:-800px;margin-top: 80px">
                                <table class="table table-hover tm-table-small tm-product-table" style=''>
                                    <thead>
                                    <tr>
                                        <th nowrap="nowrap" scope="col">header名称</th>
                                        <th nowrap="nowrap" scope="col">header值</th>
                                        <th scope="col">删除</th>
                                    </tr>
                                    </thead>
                                    <tbody id="headerBody">
                                    </tbody>
                                </table>
                                <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" onclick="addHeaderRow()">添加header</a>
                            </div>
                        </div>
                    </div>
                    <div class="row tm-content-row collapse hide" id="collapse2" data-parent="#accordion">
                        <div class="col-12 tm-block-col">
                            <div class="tm-bg-primary-dark tm-block tm-block-h-auto" style="height: 270px;overflow-y:auto;margin-left:-800px;margin-top: 80px">
                                <table class="table table-hover tm-table-small tm-product-table" style=''>
                                    <thead>
                                    <tr>
                                        <th nowrap="nowrap" scope="col">cookie名称</th>
                                        <th nowrap="nowrap" scope="col">cookie值</th>
                                        <th nowrap="nowrap" scope="col">域名</th>
                                        <th nowrap="nowrap" scope="col">路径</th>
                                        <th scope="col">删除</th>
                                    </tr>
                                    </thead>
                                    <tbody id="cookieBody">
                                    </tbody>
                                </table>
                                <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" onclick="addCookieRow()">添加cookie</a>
                            </div>
                        </div>
                    </div>
                    <div class="row tm-content-row collapse hide" id="collapse3" data-parent="#accordion">
                        <div class="col-12 tm-block-col">
                            <div class="tm-bg-primary-dark tm-block tm-block-h-auto" style="height: 270px;overflow-y:auto;margin-left:-800px;margin-top: 80px">
                                <div class="row">
                                    <ul class="which_group" id="routeType" style="width: 99%;margin-left: 300px;margin-top: -20px">
                                        <li id="routeType_0" value="0" @click="checkrouteType(0)" style="color: white;width: 200px">&nbsp;form表单格式 &nbsp;</li>
                                        <li id="routeType_1" value="1" @click="checkrouteType(1)" style="color: white;width: 200px">&nbsp;json格式 &nbsp;</li>
                                    </ul>
                                </div>
                                <div class="row" id="json_content" style="display: none;margin-top: 100px">
                                    <textarea style="width: 800px;height: 300px;background-color: #EEEEEE;border: 2px solid white;border-radius: 5px;color: #0c5460;margin-top: -80px" id="requestParam"></textarea>
                                </div>
                                <div class="row" id="form_content">
                                    <div class="col-12 tm-block-col" style="margin-left: 20px">
                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto" style="height: 270px;overflow-y:auto;margin-left:0px;">
                                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                                <thead>
                                                <tr>
                                                    <th nowrap="nowrap" scope="col">param名称</th>
                                                    <th nowrap="nowrap" scope="col">param值</th>
                                                    <th scope="col">删除</th>
                                                </tr>
                                                </thead>
                                                <tbody id="paramBody">
                                                </tbody>
                                            </table>
                                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" onclick="addparamRow()">添加param</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    export default {
        name: "Home",
        data(){
            return{
            }
        },
        components:{
            mavonEditor
        },
        methods:{
            showJmeterUse:function () {
                
            },
            addJmeterArticle:function () {
                this.$router.push({
                    name: 'addjmeterArticle',
                    query: {
                    }
                })
            },
            articleList:function () {
                this.$router.push({
                    name: 'articleList',
                    query: {
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .side-nav-item {
        display: block;
        padding: 10px 15px 10px 15px;
        background-color: #FFFFFF;
        cursor: pointer;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .item-title {
        background-color: #F5F5F5;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom: 1px solid #DDDDDD;
    }

    .panel-heading {
        margin-top: 5px;
        padding: 0;
        border-radius: 3px;
        border: 1px solid transparent;
        border-color: #DDDDDD;
    }

    .yx{
        width:300px;
        height:auto;
        border:#909090 1px solid;
        background:#fff;
        color:#333;
        filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow:2px 2px 10px #909090;
        font-weight: bold;

    }

    .item-body {
        padding: 10px 15px 5px 15px;
        border-bottom: 1px solid #DDDDDD;
    }
    .item-second {
        margin-top: 5px;
        cursor: pointer;
    }

    .item-second a {
        display: block;
        color: #333366;
        height: 100%;
        width: 100%;
    }
    h1 {
        position: absolute;
        top: -230px;
        left: 700px;
        color: rgb(255,255,255,0.3);
    }
</style>