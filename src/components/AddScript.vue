<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">

                            <form class="form-horizontal" style="color: white">
                                <fieldset>
                                    <div id="legend" class="">
                                        <legend class="">添加测试脚本</legend>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="control-group http dubbo socket">
                                                <!-- Text input-->
                                                <label class="control-label" for="interfaceName">接口名称</label>
                                                <div class="controls">
                                                    <input type="text" id="interfaceName" style="width:200px" placeholder="请输入接口名称" class="input-xlarge">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http socket">
                                                <!-- Text input-->
                                                <label class="control-label" for="requestUrl">接口url</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口地址" id="requestUrl"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http">
                                                <!-- Text input-->
                                                <label class="control-label" for="requestType">请求类型</label>
                                                <div class="controls">
                                                    <select class="input-xlarge" style="width:200px" id="requestType">
                                                        <option value="1">GET</option>
                                                        <option value="2">POST</option>
                                                        <option value="3">DELETE</option>
                                                    </select>
                                                </div>
                                                <p></p>
                                            </div>
                                            <div class="control-group dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="paramType">参数类型</label>
                                                <div class="controls">
                                                    <input type="text" style="width:200px" placeholder="请输入参数类型" id="paramType"
                                                           class="input-xlarge">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">

                                                <!-- Text input-->
                                                <label class="control-label" for="requestParam">参数</label>
                                                <div class="controls">
                                                    <textarea type="text" id="requestParam" placeholder="请输入参数（json格式）" class="input-xlarge" style="width: 200px;height: 80px"></textarea>
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <a href="#" id="addHttp" @click="addHttpScript()">
                                                <canvas id="myCanvas" width="200" height="150">
                                                    Your browser does not support the HTML5 canvas tag.
                                                </canvas>
                                            </a>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="#" id="addDubbo" @click="addDubboScript()">
                                                    <canvas id="myCanvas1" width="200" height="300">
                                                        Your browser does not support the HTML5 canvas tag.
                                                    </canvas>
                                                    </a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="#" @click="addSocketScript()" id="addSocket">
                                                    <canvas id="myCanvas2" width="200" height="300">
                                                        Your browser does not support the HTML5 canvas tag.
                                                    </canvas>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="timeOut">接口超时时间</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口超时时间" id="timeOut"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="pre_time">接口压测时长(s)</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口超时时间" id="pre_time"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="pre_num">接口压测并发数</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口超时时间" id="pre_num"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="interfaceVersion">接口版本</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口版本" id="interfaceVersion"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="interface">接口</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口" id="interface"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="methodName">方法名</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口方法" id="methodName"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </fieldset>
                            </form>

                        </div>
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addScript()">Add new
                            Script</a>
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="runScripts()">run scripts</a>
                    </div>
                </div>
            </div>
        </div>
        <footer class="tm-footer row tm-mt-small">
            <div class="col-12 font-weight-light">
                <p class="text-center text-white mb-0 px-4 small">
                    Copyright &copy; <b>2018</b> All rights reserved.

                    More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect
                    from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "AddScript",
        data() {
            return {
                bg1: 'rgba(120, 155, 255, 0.1)',
                bg2: 'rgba(210,105,30, 0.1)',
                bg3: 'rgba(0,100,0, 0.1)',
                isShowHttp:false,
                isShowDubbo:false,
                isShowSocket:false,
                module_id:this.$route.query.module_id
            }
        },
        mounted: function () {
            $('.control-group').css('display','none')
            this.drawHttp()
            this.drawDubbo()
            this.drawSocket()

        },
        methods: {
            drawHttp: function () {
                var c = document.getElementById("myCanvas");
                var context = c.getContext("2d");
                context.beginPath();
                context.arc(100, 85, 60, 0, 2 * Math.PI);
                context.fillStyle = this.bg1;
                context.fill();
                context.font = 'bold 35px Arial';
                context.textAlign = 'center';
                context.textBaseline = 'bottom';
                context.fillStyle = '#ccc';
                context.fillText("http", 100, 100);
                context.stroke();
            },
            drawDubbo: function () {
                var c1 = document.getElementById("myCanvas1");
                var context1 = c1.getContext("2d");

                context1.beginPath();
                context1.fillStyle = '#000';
                context1.arc(70, 65, 60, 0, 2 * Math.PI);
                context1.fillStyle = this.bg2;
                context1.fill();
                context1.font = 'bold 35px Arial';
                context1.textAlign = 'center';
                context1.textBaseline = 'bottom';
                context1.fillStyle = '#ccc';
                context1.fillText("duubo", 70, 80);
                context1.stroke();
            },
            drawSocket: function () {
                var c2 = document.getElementById("myCanvas2");
                var context2 = c2.getContext("2d");
                context2.beginPath();
                context2.arc(90, 65, 60, 0, 2 * Math.PI);
                context2.fillStyle = this.bg3;
                context2.fill();
                context2.font = 'bold 35px Arial';
                context2.textAlign = 'center';
                context2.textBaseline = 'bottom';
                context2.fillStyle = '#ccc';
                context2.fillText("socket", 90, 80);
                context2.stroke();
            },
            addHttpScript: function () {
                if (this.isShowHttp == false) {
                this.bg1 = 'rgba(120, 155, 255, 1)'
                this.drawHttp();
                this.isShowHttp = true;
                $('#addDubbo').css("pointer-events","none");
                $('#addSocket').css("pointer-events","none");
                $('.http').css('display','block')
                }else {
                    this.bg1 = 'rgba(120, 155, 255, 0.1)'
                    this.drawHttp();
                    this.isShowHttp = false;
                    $('#addDubbo').css("pointer-events","auto");
                    $('#addSocket').css("pointer-events","auto");
                    $('.http').css('display','none')
                }

            },
            addDubboScript:function () {
                if (this.isShowDubbo == false) {
                    this.bg2 = 'rgba(210,105,30, 1)'
                    this.drawDubbo()
                    this.isShowDubbo = true;
                    $('#addHttp').css("pointer-events","none");
                    $('#addSocket').css("pointer-events","none");
                    $('.dubbo').css('display','block')
                }else {
                    this.bg2 = 'rgba(210,105,30, 0.1)'
                    this.drawDubbo()
                    this.isShowDubbo = false;
                    $('#addHttp').css("pointer-events","auto");
                    $('#addSocket').css("pointer-events","auto");
                    $('.dubbo').css('display','none')
                }
            },
            addSocketScript:function () {
                if (this.isShowSocket == false) {
                    this.bg3 = 'rgba(0,100,0, 1)'
                    this.drawSocket()
                    this.isShowSocket = true;
                    $('#addHttp').css("pointer-events","none");
                    $('#addDubbo').css("pointer-events","none");
                    $('.socket').css('display','block')
                }else {
                    this.bg3 = 'rgba(0,100,0, 0.1)'
                    this.drawSocket()
                    this.isShowSocket = false;
                    $('#addHttp').css("pointer-events","auto");
                    $('#addDubbo').css("pointer-events","auto");
                    $('.socket').css('display','none')
                }
            },
            addScript:function () {
                if(this.isShowHttp === true){
                    this.$post(this.$api.addcriptUrl,this.qs.stringify({
                        pre_interface_name:$('#interfaceName').val(),
                        url:$('#requestUrl').val(),
                        pre_type:1,
                        pre_interface_request_type:$('#requestType').val(),
                        pre_interface_param_value:$('#requestParam').val(),
                        pre_interface_timeout_time:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_num:$('#pre_num').val(),
                        module_id:this.module_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }
                    })
                }else if (this.isShowDubbo === true){
                    this.$post(this.$api.addcriptUrl,this.qs.stringify({
                        pre_interface_name:$('#interfaceName').val(),
                        pre_interface_param_type:$('#paramType').val(),
                        pre_type:2,
                        pre_interface:$('#interface').val(),
                        pre_interface_method:$('#methodName').val(),
                        pre_interface_version:$('#interfaceVersion').val(),
                        pre_interface_param_value:$('#requestParam').val(),
                        pre_interface_timeout_time:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_num:$('#pre_num').val(),
                        module_id:this.module_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }
                    })
                }else if(this.isShowSocket == true){
                    this.$post(this.$api.addcriptUrl,this.qs.stringify({
                        pre_interface_name:$('#interfaceName').val(),
                        url:$('#requestUrl').val(),
                        pre_type:3,
                        pre_interface_request_type:$('#requestType').val(),
                        pre_interface_param_value:$('#requestParam').val(),
                        pre_interface_timeout_time:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_num:$('#pre_num').val(),
                        module_id:this.module_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }
                    })
                }
            },
            runScripts:function () {
                this.$router.push({
                    name:'scripts',
                    query:{
                        module_id:this.$route.query.module_id
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>