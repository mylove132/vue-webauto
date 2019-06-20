<template>
    <div class="row">
        <div class="col-md-2 side-nav" style="margin-left: 20px;margin-top: 50px">
            <div class="panel-group" id="accordion" style="color: yellow">
                <div class="panel-heading panel yx">
                    <a href="#" class="side-nav-item item-title" style="background-color:#567085;color: yellow" @click="showJmeterUse()">
                        jmeter使用说明
                    </a>
                    <div class="item-body collapse" id='index'>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-xn" id="item-xns" class="side-nav-item item-title" style="background-color:#567085;color: yellow">
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
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-cangku" id="headcangku" class="side-nav-item item-title" style="background-color:#567085;color: yellow">
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
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-jxwz" id="jxwz" class="side-nav-item item-title" style="background-color:#567085;color: yellow">
                        jmeter精选文章
                    </a>
                    <div id="item-jxwz" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;">
                            <ul class="list-unstyled">
                                <li class="item-second"><a href="#">添加jmeter文章</a></li>
                                <li class="item-second"><a href="#">修改jmeter文章</a></li>
                                <li class="item-second"><a href="#">文章列表</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="panel-heading panel yx" style="margin-top: 30px">
                    <a data-toggle="collapse" data-parent="#accordion" href="#item-caiwu" id="headcaiwu" class="side-nav-item item-title collapsed" style="background-color:#567085;color: yellow">
                        定时任务
                    </a>
                </div>

            </div>
        </div>
        <div class="col-md-10">
            <h1>welcome to okay jmeter web platform !!!</h1>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return{}
        },
        methods:{
            showJmeterUse:function () {
                
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