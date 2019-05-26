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
                                                </div>
                                            </div>
                                            <div class="control-group http socket dubbo">

                                                <!-- Text input-->
                                                <label class="control-label" for="requestParam">断言</label>
                                                <div class="controls">
                                                    <textarea type="text" id="assert" placeholder="请输入响应断言" class="input-xlarge" style="width: 200px;height: 80px"></textarea>
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
                headerIndex:0,
                bg1: 'rgba(120, 155, 255, 0.1)',
                bg2: 'rgba(210,105,30, 0.1)',
                bg3: 'rgba(0,100,0, 0.1)',
                isShowHttp:false,
                isShowDubbo:false,
                isShowSocket:false,
                projectList:[],
                module_id:this.$route.query.module_id
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
                    let cookies;
                    let header;
                    if ($('#isCookie').prop("checked") == true){
                        cookies = localStorage.getItem('cookieStore')
                    }
                    if ($('#isHeader').prop("checked") == true){
                        header = localStorage.getItem('headerStore')
                    }
                    this.$post(this.$api.scriptUrl,this.qs.stringify({
                        name:$('#interfaceName').val(),
                        url:$('#requestUrl').val(),
                        protocol:1,
                        assert_text:$('#assert').val(),
                        cookie:cookies,
                        header:header,
                        request_type:$('#requestType').val(),
                        params:$('#requestParam').val(),
                        time_out:$('#timeOut').val(),
                        pre_time:$('#pre_time').val(),
                        pre_number:$('#pre_num').val(),
                        project:$('#project').val(),
                        user:localStorage.user_id
                    })).then(response => {
                        if(response.code == 0){
                            swal ( "添加成功" ,  $('#interfaceName').val()+"添加成功!" ,  "success" )
                        }else {
                            swal ( "错误" ,  response.msg ,  "error" )
                        }
                    })
                }else if (this.isShowDubbo === true){
                    this.$post(this.$api.scriptUrl,this.qs.stringify({
                        name:$('#interfaceName').val(),
                        param_type:$('#paramType').val(),
                        protocol:2,
                        assert_text:$('#assert').val(),
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
            addCookie:function () {
                $("#addCookieModal").modal()
            },
            addHeader:function(){
                $('#addHeaderModal').modal()
            },
            addCookieBtn:function () {
                let index = this.id
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
                index++;
                this.id = index;
                let idNum = this.id
                let self = this
                document.getElementsByClassName('removeButton')[idNum-1].onclick = function () {
                    document.getElementsByClassName('cookieHead')[idNum-1].remove();
                    self.id -= 1
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
                let index = this.headerIndex
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
                index++;
                this.headerIndex = index;
                let idNum = this.headerIndex
                let self = this
                document.getElementsByClassName('removeHeaderButton')[idNum-1].onclick = function () {
                    document.getElementsByClassName('headers')[idNum-1].remove();
                    self.headerIndex -= 1
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
            }
        }
    }
</script>

<style scoped>

</style>