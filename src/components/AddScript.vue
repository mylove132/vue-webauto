<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">

                            <form class="form-horizontal" style="color: white">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="control-group http dubbo socket">
                                                <!-- Text input-->
                                                <label class="control-label" for="requestType">项目</label>
                                                <div class="controls">
                                                    <select class="input-xlarge" style="width:200px;height: 30px;" id="project">
                                                        <option value="0">==请选择项目==</option>
                                                        <option v-for="project in projectList" :value="project.id">{{project.name}}</option>
                                                    </select>
                                                </div>
                                                <p></p>
                                            </div>
                                            <div class="control-group http dubbo socket">
                                                <!-- Text input-->
                                                <label class="control-label" for="requestType">协议</label>
                                                <div class="controls">
                                                    <select class="input-xlarge" style="width:200px;height: 30px;" id="protocol" @change="getDubboServer()">
                                                        <option value="0">==请选择协议==</option>
                                                        <option value="1">HTTP</option>
                                                        <option value="2">DUBBO</option>
                                                        <option value="3">SOCKET</option>
                                                    </select>
                                                </div>
                                                <p></p>
                                            </div>
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

                                            <div class="control-group dubbo">

                                                <!-- Text input-->
                                                <label class="control-label" for="requestParam">参数</label>
                                                <div class="controls">
                                                    <textarea type="text" id="requestParam" placeholder="请输入参数（json格式）" class="input-xlarge" style="width: 200px;height: 80px"></textarea>
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">

                                                <!-- Text input-->
                                                <label class="control-label" for="requestParam">断言</label>
                                                <div class="controls">
                                                    <textarea type="text" id="assert_text" placeholder="请输入响应断言" class="input-xlarge" style="width: 200px;height: 80px"></textarea>
                                                </div>
                                            </div>
                                            <div class="control-group http">
                                                <label class="control-label"></label>
                                                <div class="controls">
                                                    <!-- Multiple Checkboxes -->
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="isParams" value="是否包含参数" @click="addParams()">
                                                        是否包含参数
                                                    </label>
                                                </div>

                                            </div>
                                            <div class="control-group http">
                                                <label class="control-label"></label>
                                                <div class="controls">
                                                    <!-- Multiple Checkboxes -->
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="isCookie" value="是否包含cookie" @click="addCookie()">
                                                        是否包含cookie
                                                    </label>
                                                </div>

                                            </div>
                                            <div class="control-group http">
                                                <label class="control-label"></label>
                                                <div class="controls">
                                                    <!-- Multiple Checkboxes -->
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="isHeader" value="是否包含header" @click="addHeader()">
                                                        是否包含header
                                                    </label>
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
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="ip">服务器监听ip</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入服务器监听ip" id="ip"
                                                           class="input-xlarge" style="width:200px">
                                                    <p class="help-block"></p>
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="port">服务器监听端口</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入服务器监听端口" id="port"
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
                                                           class="input-xlarge" list="interfaces" style="width:200px">
                                                    <datalist id="interfaces">
                                                        <option v-for="service in services" :value="service">{{service}}</option>
                                                    </datalist>
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
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="testRequest()">Test Interface</a>
                    </div>
                </div>
            </div>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addCookieModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel1" style="color: white">添加Cookie</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body cookieBody" style="background-color: #2c3e50;">
                            <button type="button" class="btn btn-default addBtn" style="float: left" @click="addCookieBtn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" id="addCookieSubmit">Add Cookie</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addHeaderModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel12" style="color: white">添加Header</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body header-body" style="background-color: #2c3e50;">
                            <button type="button" class="btn btn-default addBtn" style="float: left" @click="addHeaderBtn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
                            <label style="color: white">如需使用随机字符串用$random代替</label>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" id="addHeaderSubmit">Add Header</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addParamsModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel13" style="color: white">添加参数</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body params-body" style="background-color: #2c3e50;">
                            <button type="button" class="btn btn-default addBtn" style="float: left" @click="addParamsBtn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" id="addParamsSubmit">Add Params</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
            <div class="modal right fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">测试结果</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                            <div id="writePlace" style="text-align: initial;padding:0px 25px;white-space: pre-line;word-wrap:break-word;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="tm-footer row tm-mt-small">
            <div class="col-12 font-weight-light">
                <p class="text-center text-white mb-0 px-4 small">
                    Copyright &copy; <b>2018</b> All rights reserved.

                    More Templates <a href="http://okjiaoyu.cn/" target="_blank" title="模板之家">OK教育</a> - Collect
                    from <a href="http://okjiaoyu.cn/" title="网页模板" target="_blank">OK教育</a>
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
                id:0,
                paramsIndex:0,
                headerIndex:0,
                bg1: 'rgba(120, 155, 255, 0.1)',
                bg2: 'rgba(210,105,30, 0.1)',
                bg3: 'rgba(0,100,0, 0.1)',
                isShowHttp:false,
                isShowDubbo:false,
                isShowSocket:false,
                projectList:[],
                module_id:this.$route.query.module_id,
                services:[]
            }
        },
        created:function(){
            this.$fetch(this.$api.projectUrl).then(response => {
                this.projectList = response.data
            });
        },
        mounted: function () {
            $('.control-group').css('display','none')
            this.drawHttp()
            this.drawDubbo()
            this.drawSocket()

        },
        methods: {
            formatJson:function (json, options) {
                var reg = null,
                    formatted = '',
                    pad = 0,
                    PADDING = '    ';
                options = options || {};
                options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
                options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
                if (typeof json !== 'string') {
                    json = JSON.stringify(json);
                } else {
                    json = JSON.parse(json);
                    json = JSON.stringify(json);
                }
                reg = /([\{\}])/g;
                json = json.replace(reg, '\r\n$1\r\n');
                reg = /([\[\]])/g;
                json = json.replace(reg, '\r\n$1\r\n');
                reg = /(\,)/g;
                json = json.replace(reg, '$1\r\n');
                reg = /(\r\n\r\n)/g;
                json = json.replace(reg, '\r\n');
                reg = /\r\n\,/g;
                json = json.replace(reg, ',');
                if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
                    reg = /\:\r\n\{/g;
                    json = json.replace(reg, ':{');
                    reg = /\:\r\n\[/g;
                    json = json.replace(reg, ':[');
                }
                if (options.spaceAfterColon) {
                    reg = /\:/g;
                    json = json.replace(reg, ':');
                }
                (json.split('\r\n')).forEach(function (node, index) {
                    //console.log(node);
                    var i = 0,
                        indent = 0,
                        padding = '';

                    if (node.match(/\{$/) || node.match(/\[$/)) {
                        indent = 1;
                    } else if (node.match(/\}/) || node.match(/\]/)) {
                        if (pad !== 0) {
                            pad -= 1;
                        }
                    } else {
                        indent = 0;
                    }

                    for (i = 0; i < pad; i++) {
                        padding += PADDING;
                    }

                    formatted += padding + node + '\r\n';
                    pad += indent;
                });
                return formatted;
            },
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
            verityHttp:function(){
                if ( $('#project').val() == 0){
                    swal ( "Warning" ,  '请选择项目' ,  "warning" )
                    return false;
                }else if ($('#interfaceName').val() == '' || $('#interfaceName').val() == null){
                    $('#interfaceName').focus()
                    $("#interfaceName").focus(function(){
                        $("#interfaceName").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入项目名称' ,  "warning" )
                    return;
                }else if ($('#requestUrl').val() == '' || $('#requestUrl').val() == null){
                    $('#requestUrl').focus()
                    $("#requestUrl").focus(function(){
                        $("#requestUrl").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入url' ,  "warning" )
                    return;
                }else if ($('#assert_text').val() == '' || $('#assert_text').val() == null){
                    $('#assert_text').focus()
                    $("#assert_text").focus(function(){
                        $("#assert_text").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入断言结果' ,  "warning" )
                    return;
                }else if ($('#timeOut').val() == '' || $('#timeOut').val() == null){
                    $('#timeOut').focus()
                    $("#timeOut").focus(function(){
                        $("#timeOut").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入超时时间' ,  "warning" )
                    $('#timeOut').focus()
                    return;
                }else if ($('#pre_time').val() == '' || $('#pre_time').val() == null){
                    $('#pre_time').focus()
                    $("#pre_time").focus(function(){
                        $("#pre_time").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入压测时长' ,  "warning" )
                    return;
                }else if ($('#pre_num').val() == '' || $('#pre_num').val() == null){
                    $('#pre_num').focus()
                    $("#pre_num").focus(function(){
                        $("#pre_num").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入压测并发数' ,  "warning" )
                    return;
                }
                return true;

            },
            verityDubbo:function(){
                if ( $('#project').val() == 0){
                    swal ( "Warning" ,  '请选择项目' ,  "warning" )
                    return false;
                }else if ($('#interfaceName').val() == '' || $('#interfaceName').val() == null){
                    $('#interfaceName').focus()
                    $("#interfaceName").focus(function(){
                        $("#interfaceName").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入项目名称' ,  "warning" )
                    return;
                }else if ($('#paramType').val() == '' || $('#paramType').val() == null){
                    $('#paramType').focus()
                    $("#paramType").focus(function(){
                        $("#paramType").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入请求参数类型' ,  "warning" )
                    return;
                }else if ($('#assert_text').val() == '' || $('#assert_text').val() == null){
                    $('#assert_text').focus()
                    $("#assert_text").focus(function(){
                        $("#assert_text").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入断言结果' ,  "warning" )
                    return;
                }else if ($('#interface').val() == '' || $('#interface').val() == null){
                    $('#interface').focus()
                    $("#interface").focus(function(){
                        $("#interface").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入接口' ,  "warning" )
                    $('#timeOut').focus()
                    return;
                }else if ($('#methodName').val() == '' || $('#methodName').val() == null){
                    $('#methodName').focus()
                    $("#methodName").focus(function(){
                        $("#methodName").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入接口方法' ,  "warning" )
                    return;
                }else if ($('#interfaceVersion').val() == '' || $('#interfaceVersion').val() == null){
                    $('#interfaceVersion').focus()
                    $("#interfaceVersion").focus(function(){
                        $("#interfaceVersion").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入版本' ,  "warning" )
                    return;
                }else if ($('#timeOut').val() == '' || $('#timeOut').val() == null){
                    $('#timeOut').focus()
                    $("#timeOut").focus(function(){
                        $("#timeOut").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入超时时间' ,  "warning" )
                    return;
                }else if ($('#requestParam').val() == '' || $('#requestParam').val() == null){
                    $('#requestParam').focus()
                    $("#requestParam").focus(function(){
                        $("#requestParam").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入参数' ,  "warning" )
                    return;
                }
                else if ($('#pre_time').val() == '' || $('#pre_time').val() == null){
                    $('#pre_time').focus()
                    $("#pre_time").focus(function(){
                        $("#pre_time").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入压测时长' ,  "warning" )
                    return;
                }else if ($('#pre_num').val() == '' || $('#pre_num').val() == null){
                    $('#pre_num').focus()
                    $("#pre_num").focus(function(){
                        $("#pre_num").css("background-color","#FFFFCC");
                    });
                    swal ( "Warning" ,  '请输入压测并发数' ,  "warning" )
                    return;
                }
                return true;

            },
            addScript:function () {
                if(this.isShowHttp === true){
                    if(!this.verityHttp()){
                        return;
                    }
                    let cookies;
                    let header;
                    let params;
                    if ($('#isCookie').prop("checked") == true){
                        cookies = localStorage.getItem('cookieStore')
                    }
                    if ($('#isHeader').prop("checked") == true){
                        header = localStorage.getItem('headerStore')
                    }
                    if ($('#isParams').prop("checked") == true){
                        params = localStorage.getItem('paramsStore')
                    }
                    this.$post(this.$api.scriptUrl,this.qs.stringify({
                        name:$('#interfaceName').val(),
                        url:$('#requestUrl').val(),
                        protocol:1,
                        assert_text:$('#assert_text').val(),
                        cookie:cookies,
                        header:header,
                        request_type:$('#requestType').val(),
                        params:params,
                        time_out:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_number:$('#pre_num').val(),
                        project:$('#project').val(),
                        ip:$('#ip').val(),
                        port:$('#port').val(),
                        user:localStorage.user_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }else {
                            swal ( "错误" ,  response.msg ,  "error" )
                        }
                    })
                }else if (this.isShowDubbo === true){
                    if (!this.verityDubbo()){
                        return false;
                    }
                    this.$post(this.$api.scriptUrl,this.qs.stringify({
                        name:$('#interfaceName').val(),
                        param_type:$('#paramType').val(),
                        protocol:2,
                        assert_text:$('#assert_text').val(),
                        ins:$('#interface').val(),
                        method:$('#methodName').val(),
                        version:$('#interfaceVersion').val(),
                        params:$('#requestParam').val(),
                        time_out:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_number:$('#pre_num').val(),
                        project:this.module_id,
                        user:localStorage.user_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }else {
                            swal ( "错误" ,  response.msg ,  "error" )
                        }
                    })
                }else if(this.isShowSocket == true){
                    this.$post(this.$api.scriptUrl,this.qs.stringify({
                        name:$('#interfaceName').val(),
                        url:$('#requestUrl').val(),
                        protocol:3,
                        request_type:$('#requestType').val(),
                        params:$('#requestParam').val(),
                        time_out:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_number:$('#pre_num').val(),
                        project:this.module_id,
                        user:localStorage.user_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }else {
                            swal ( "错误" ,  response.msg ,  "error" )
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
            },
            testRequest:function(){
                let cookies;
                let header;
                let params;
                if ($('#isCookie').prop("checked") == true){
                    cookies = localStorage.getItem('cookieStore')
                }
                if ($('#isHeader').prop("checked") == true){
                    header = localStorage.getItem('headerStore')
                }
                if ($('#isParams').prop("checked") == true){
                    params = localStorage.getItem('paramsStore')
                }
                const self = this
                if(this.isShowHttp === true){
                        if(!this.verityHttp()){
                            return;
                        }
                    self.bus.$emit('loading', true)
                    $.ajax({
                        url:this.$api.testUrl,
                        type:'GET',
                        data:{
                            "url":$('#requestUrl').val(),
                            "protocol":1,
                             "cookie":cookies,
                             "header":header,
                             "request_type":$('#requestType').val(),
                             "params":params
                        },
                        success:function (response) {
                            if (response.code == 0) {
                                self.bus.$emit('loading', false)
                                $("#myModal").modal()
                                let result = new JSONFormat(response.data,4).toString()
                                document.getElementById("writePlace").innerHTML = result;
                            }else {
                                swal("Warning", response.msg, "warning")
                            }
                        }
                    })
                }else if (this.isShowDubbo === true){
                    if(!this.verityDubbo()){
                        return;
                    }
                    self.bus.$emit('loading', true)
                    $.ajax({
                        url:this.$api.testUrl,
                        type:'GET',
                        data:{
                            "url": $('#requestUrl').val(),
                            "protocol": 2,
                            "param_type": $('#paramType').val(),
                            "params": $('#requestParam').val(),
                            "time_out": $('#timeOut').val(),
                            "pre_time": $('#pre_time').val(),
                            "pre_number": $('#pre_num').val(),
                            "version": $('#interfaceVersion').val(),
                            "ins":$('#interface').val(),
                            "method":$('#methodName').val(),
                            "env":this.$route.query.env
                        },
                        success:function (response) {
                            if (response.code == 0) {
                                self.bus.$emit('loading', false)
                                $("#myModal").modal()
                                let result = new JSONFormat(response.data,4).toString()
                                document.getElementById("writePlace").innerHTML = result;
                            }else {
                                swal("Warning", response.msg, "warning")
                            }
                        }
                    })
                }
            },
            addCookie:function () {
                $("#addCookieModal").modal()
            },
            addHeader:function(){
                $('#addHeaderModal').modal()
            },
            addParams:function(){
                $('#addParamsModal').modal()
            },
            addParamsBtn:function(){
                let $paramsHtml = '<div class="form-group paramsHead" style="clear: both;">\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px">\n' +
                    '                                    <input class="form-control paramsKey" name="paramsName" placeholder="params key" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <input class="form-control paramsValue" name="paramsValue" placeholder="params value" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <button type="button" class="btn btn-default removeButton" style="border-radius: 5px;height: 45px"><i class="fa fa-minus"></i>\n' +
                    '                                    </button>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                $('.params-body').append($paramsHtml)
                this.paramsIndex++;
                let self = this
                let delEle = document.getElementsByClassName('removeButton')[self.paramsIndex-1]
                if (delEle != null){
                    delEle.onclick = function () {
                        let paramHead = document.getElementsByClassName('paramsHead')[self.paramsIndex-1];
                        if (paramHead != null){
                            var result = paramHead.parentNode.removeChild(paramHead);
                            if (result != null){
                                self.paramsIndex -= 1
                            }
                        }
                    }
                }
                document.getElementById('addParamsSubmit').onclick = function () {
                    localStorage.removeItem('paramsStore')
                    let cookieKey = document.getElementsByClassName('paramsKey')
                    let cookieValue = document.getElementsByClassName('paramsValue')
                    let paramsStore = [];
                    for (let i = 0;i<cookieKey.length;i++){
                        let k = cookieKey[i].value
                        let v = cookieValue[i].value
                        paramsStore.push({"paramskey":k,"paramsvalue":v})
                    }
                    localStorage.setItem('paramsStore',JSON.stringify(paramsStore))
                    $("#addParamsModal").modal('hide')
                }
            },
            addCookieBtn:function () {
                let $cookieHtml = '<div class="form-group cookieHead" style="clear: both;">\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px">\n' +
                    '                                    <input class="form-control cookieKey" name="cookieName" placeholder="cookie key" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <input class="form-control cookieValue" name="cookieValue" placeholder="cookie value" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <button type="button" class="btn btn-default removeButton" style="border-radius: 5px;height: 45px"><i class="fa fa-minus"></i>\n' +
                    '                                    </button>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                $('.cookieBody').append($cookieHtml)
                this.id++;
                let self = this
                let delEle = document.getElementsByClassName('removeButton')[self.id-1]
                if (delEle != null) {
                    delEle.onclick = function () {
                        let cookieHead = document.getElementsByClassName('cookieHead')[self.id - 1];
                        if (cookieHead != null) {
                            var result = cookieHead.parentNode.removeChild(cookieHead);
                            if (result != null) {
                                self.id -= 1
                            }
                        }
                    }
                }

                document.getElementById('addCookieSubmit').onclick = function () {
                    localStorage.removeItem('cookieStore')
                    let cookieKey = document.getElementsByClassName('cookieKey')
                    let cookieValue = document.getElementsByClassName('cookieValue')
                    let cookieStore = [];
                    for (let i = 0;i<cookieKey.length;i++){
                        cookieStore.push({"cookieKey":cookieKey[i].value,"cookieValue":cookieValue[i].value})
                    }
                    localStorage.setItem('cookieStore',JSON.stringify(cookieStore))
                    $("#addCookieModal").modal('hide')
                }
            },
            addHeaderBtn:function () {
                let $cookieHtml = '<div class="form-group headers" style="clear: both;">\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px">\n' +
                    '                                    <input class="form-control headerKey" name="headerName" placeholder="header key" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <input class="form-control headerValue" name="headerValue" placeholder="header value" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-top: 15px;margin-left: 70px">\n' +
                    '                                    <button type="button" class="btn btn-default removeHeaderButton" style="border-radius: 5px;height: 45px"><i class="fa fa-minus"></i>\n' +
                    '                                    </button>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                $('.header-body').append($cookieHtml)
                this.headerIndex++;
                let self = this
                let delEle = document.getElementsByClassName('removeButton')[self.headerIndex-1]
                if (delEle != null) {
                    delEle.onclick = function () {
                        let head = document.getElementsByClassName('headers')[self.headerIndex - 1];
                        if (head != null) {
                            var result = head.parentNode.removeChild(head);
                            console.log(result)
                            if (result != null) {
                                self.headerIndex -= 1
                            }
                        }
                    }
                }
                document.getElementById('addHeaderSubmit').onclick = function () {
                    localStorage.removeItem('headerStore')
                    let headerKey = document.getElementsByClassName('headerKey')
                    let headerValue = document.getElementsByClassName('headerValue')
                    let headerStore = [];
                    for (let i = 0;i<headerKey.length;i++){
                        headerStore.push({"headerKey":headerKey[i].value,"headerValue":headerValue[i].value})
                    }
                    localStorage.setItem('headerStore',JSON.stringify(headerStore))
                    $("#addHeaderModal").modal('hide')
                }
            },
            getDubboServer:function () {
                if ($('#protocol').val() == 2){
                    let env = this.$route.query.module_env
                    let protocol = 2
                    const self = this
                    this.$fetch(this.$api.dubboServer+"?env="+env+"&protocol="+protocol).then(response => {
                        if (response.code == 0){
                            self.services = response.data[0]
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .modal.left .modal-dialog,
    .modal.right .modal-dialog {
        position: fixed;
        margin: auto;
        width: 650px;

        max-width: 850px;
        height: 100%;
        -webkit-transform: translate3d(0%, 0, 0);
        -ms-transform: translate3d(0%, 0, 0);
        -o-transform: translate3d(0%, 0, 0);
        transform: translate3d(0%, 0, 0);
    }

    .modal.left .modal-content,
    .modal.right .modal-content {
        height: 100%;
        overflow-y: auto;
        overflow-x: auto;
    }

    #result {
        height: 500px;
    }

    .modal.left .modal-body,
    .modal.right .modal-body {
        padding: 15px 15px 80px;
    }

    /*Left*/
    .modal.left.fade .modal-dialog {
        left: -30px;
        -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
        -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
        -o-transition: opacity 0.3s linear, left 0.3s ease-out;
        transition: opacity 0.3s linear, left 0.3s ease-out;
    }

    .modal.left.fade.in .modal-dialog {
        left: 0;
    }

    /*Right*/
    .modal.right.fade .modal-dialog {
        right: 0px;
        -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
        -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
        -o-transition: opacity 0.3s linear, right 0.3s ease-out;
        transition: opacity 0.3s linear, right 0.3s ease-out;
    }

    .modal.right.fade.in .modal-dialog {
        right: 0;
    }

    /* ----- MODAL STYLE ----- */
    .modal-content {
        border-radius: 0;
        border: none;
    }

    .modal-header {
        color: black;
        border-bottom-color: black;
        background-color: white;
    }

    pre {
        font-family: 'consolas';
    }

    .Canvas {
        font: 14px/18px 'consolas';
        background-color: #ECECEC;
        color: #000000;
        border: solid 1px #CECECE;
    }

    .ObjectBrace {
        color: #00AA00;
        font-weight: bold;
    }

    .ArrayBrace {
        color: #0033FF;
        font-weight: bold;
    }

    .PropertyName {
        color: #CC0000;
        font-weight: bold;
    }

    .String {
        color: #007777;
    }

    .Number {
        color: #AA00AA;
    }

    .Boolean {
        color: #0000FF;
    }

    .Function {
        color: #AA6633;
        text-decoration: italic;
    }

    .Null {
        color: #0000FF;
    }

    .Comma {
        color: #000000;
        font-weight: bold;
    }

    PRE.CodeContainer {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .json_key {
        color: #92278f;
        font-weight: bold;
    }

    .json_null {
        color: #f1592a;
        font-weight: bold;
    }

    .json_string {
        color: #3ab54a;
        font-weight: bold;
    }

    .json_number {
        color: #25aae2;
        font-weight: bold;
    }

    .json_boolean {
        color: #f98280;
        font-weight: bold;
    }

    .json_link {
        color: #61D2D6;
        font-weight: bold;
    }

    .json_array_brackets {
    }
</style>