<template>
    <div class="" id="home">
        <div class="container mt-5" id="accordion">
            <div class="row tm-content-row">

                <div class="col-12 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <label style="color: red;margin-left: -20px;margin-right: 40px">*</label>
                        <select class="col-md-11 custom-select" id="env">
                            <option value="0">请选择测试环境</option>
                            <option v-for="envs in envList" :value="envs.id">{{envs.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                    <div style="float: left;margin-left: 50px;color: white;margin-top: -10px">单点登录</div>
                    <div class="testswitch" style="margin-left: 40px;margin-top: -15px">
                        <input class="testswitch-checkbox" id="onoffswitch" type="checkbox" @click="isCasLogin">
                        <label class="testswitch-label" for="onoffswitch">
                            <span class="testswitch-inner" data-on="ON" data-off="OFF"></span>
                            <span class="testswitch-switch"></span>
                        </label>
                    </div>
                        <div style="display: none;color: white" id="user">
                            用户名：<input type="text" id="username" style="border-radius: 5px" /><p></p><label style="margin-left: 260px">密码：</label><input type="text" id="password" style="border-radius: 5px"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 tm-block-col">
                    <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <a class="card-link" data-toggle="collapse" href="#collapse1" style="color: white;font-size: 20px;display: block;float: left;margin-left: 200px;text-shadow:5px 2px 6px rgb(12,232,100);">
                            <label class="http" style="color: red;margin-left: -20px;margin-right: 20px;display: block;float: left">*</label> HEADER设置
                        </a>
                        <a class="card-link" data-toggle="collapse" href="#collapse2" style="margin-left:100px;color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px rgb(12,232,100);">
                            <label class="http" style="color: red;margin-left: -20px;margin-right: 20px;display: block;float: left">*</label> COOKIE设置
                        </a>
                        <a class="card-link" data-toggle="collapse" href="#collapse3" style="margin-left: 100px;color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px rgb(12,232,100);">
                            <label class="http dubbo websocket" style="color: red;margin-left: -20px;margin-right: 20px;display: block;float: left">*</label> PARAM设置
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


            <div class="row tm-content-row">
                <div class="tm-block-col tm-col-account-settings">
                    <div class="tm-bg-primary-dark tm-block tm-block-settings">
                        <h2 class="tm-block-title">请求设置</h2>
                        <form action="" class="tm-signup-form row">
                            <div class="form-group col-lg-6 http dubbo">
                                <label class="http dubbo websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="interfaceName">接口名称</label>
                                <input
                                        id="interfaceName"
                                        name="interfaceName"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6 htttp socket">
                                <label class="http websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="requestUrl">URL</label>
                                <input
                                        id="requestUrl"
                                        name="requestUrl"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="http websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="requestType">请求方式</label>
                                <select class="form-control" style="width:200px;text-align: center" id="requestType">
                                    <option value="0" selected="selected">请选择请求方式</option>
                                    <option value="1">GET</option>
                                    <option value="2">POST</option>
                                    <option value="3">DELETE</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="dubbo" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="interface">dubbo接口</label>
                                <input
                                        id="interface"
                                        name="interface"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="dubbo" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="methodName">方法</label>
                                <input
                                        id="methodName"
                                        name="methodName"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="dubbo" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="paramType">参数类型</label>
                                <input
                                        id="paramType"
                                        name="paramType"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6 dubbo">
                                <label class="dubbo" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="interfaceVersion">版本号</label>
                                <input
                                        id="interfaceVersion"
                                        name="interfaceVersion"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tm-block-col tm-col-account-settings ">
                    <div class="tm-bg-primary-dark tm-block tm-block-settings">
                        <h2 class="tm-block-title">Jmeter Settings</h2>
                        <form action="" class="tm-signup-form row">
                            <div class="form-group col-lg-6">
                                <label class="http dubbo websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="pre_num">并发数</label>
                                <input
                                        id="pre_num"
                                        name="name"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="http dubbo websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="pre_time">压测时长</label>
                                <input
                                        id="pre_time"
                                        name="pre_time"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="http dubbo websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="assert_text">响应断言</label>
                                <input
                                        id="assert_text"
                                        name="assert_text"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label class="http dubbo websocket" style="color: red;margin-left: 60px;margin-right: -50px;display: block;float: left">*</label><label for="timeOut">接口超时时间</label>
                                <input
                                        id="timeOut"
                                        name="timeOut"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">

                                <label for="ip">监听服务器IP</label>
                                <input
                                        id="ip"
                                        name="ip"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="port">监听服务器端口</label>
                                <input
                                        id="port"
                                        name="port"
                                        type="text"
                                        class="form-control validate"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="testRequest()">测试接口</a>
            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="editScriptSubmit()">保存编辑</a>
            <div class="modal right fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">测试结果</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
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

                    More Templates <a href="http://www.cssmoban.com/" target="_blank" title="OKAY">OKAY</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
        var i=0;
        var j=0;
        var z=0;
        window.addCookieRow=function(){
        var mytable = document.getElementById("cookieBody");
        var mytr = mytable.insertRow();
        mytr.setAttribute("id","tr"+i);
        var mytd_1=mytr.insertCell();
        var mytd_2=mytr.insertCell();
        var mytd_3=mytr.insertCell();
        var mytd_4=mytr.insertCell();
        var mytd_5=mytr.insertCell();
        mytd_1.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"cookieName\"/>\n" +
            "                                            </td>";
        mytd_2.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"cookieValue\"/>\n" +
            "                                            </td>";
        mytd_3.innerHTML=" <td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"cookieDomain\"/>\n" +
            "                                            </td>";
        mytd_4.innerHTML=" <td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"cookiePath\"/>\n" +
            "                                            </td>";
        mytd_5.innerHTML="<td>\n" +
            "                                                <a href=\"javascript:void(0);\" class=\"tm-product-delete-link\" onclick=\"delCookieTr("+i+")\">\n" +
            "                                                    <i class=\"far fa-trash-alt tm-product-delete-icon\"></i>\n" +
            "                                                </a>\n" +
            "                                            </td>";
        i++;
    };
        window.addHeaderRow=function(){
        var mytable = document.getElementById("headerBody");
        var mytr = mytable.insertRow();
        mytr.setAttribute("id","tr"+j);
        var mytd_1=mytr.insertCell();
        var mytd_2=mytr.insertCell();
        var mytd_3=mytr.insertCell();
        mytd_1.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"headerName\"/>\n" +
            "                                            </td>";
        mytd_2.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"headerValue\"/>\n" +
            "                                            </td>";
        mytd_3.innerHTML="<td>\n" +
            "                                                <a href=\"javascript:void(0);\" class=\"tm-product-delete-link\" onclick=\"delHeaderTr("+j+")\">\n" +
            "                                                    <i class=\"far fa-trash-alt tm-product-delete-icon\"></i>\n" +
            "                                                </a>\n" +
            "                                            </td>";
        j++;
    };
        window.addparamRow=function(){
        var mytable = document.getElementById("paramBody");
        var mytr = mytable.insertRow();
        mytr.setAttribute("id","tr"+z);
        var mytd_1=mytr.insertCell();
        var mytd_2=mytr.insertCell();
        var mytd_3=mytr.insertCell();
        mytd_1.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"paramName\"/>\n" +
            "                                            </td>";
        mytd_2.innerHTML="<td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">\n" +
            "                                                <input type=\"text\" class=\"paramValue\"/>\n" +
            "                                            </td>";
        mytd_3.innerHTML="<td>\n" +
            "                                                <a href=\"javascript:void(0);\" class=\"tm-product-delete-link\" onclick=\"delParamTr("+z+")\">\n" +
            "                                                    <i class=\"far fa-trash-alt tm-product-delete-icon\"></i>\n" +
            "                                                </a>\n" +
            "                                            </td>";
        z++;
    };

        window.delCookieTr=function(i){
        var mytable = document.getElementById("cookieBody");
        var myrow = document.getElementById("tr"+i);
        mytable.deleteRow(myrow.rowIndex-1);
    };
        window.delHeaderTr=function(i){
        var mytable = document.getElementById("headerBody");
        var myrow = document.getElementById("tr"+i);
        mytable.deleteRow(myrow.rowIndex-1);
    };
        window.delParamTr=function(i){
        var mytable = document.getElementById("paramBody");
        var myrow = document.getElementById("tr"+i);
        mytable.deleteRow(myrow.rowIndex-1);
    };
    import  axios from 'axios';
    export default {
        name: "EditScriptView",
        data(){
            return{
                id: 0,
                headerIndex: 0,
                paramsIndex: 0,
                cStore: [],
                ccStore: [],
                hStore: [],
                hhStore: [],
                pStore: [],
                ppStore: [],
                $script: [],
                cookieList:[],
                requestTypeList:[],
                envList:[],
                script_id: 0
            }
        },
        created:function () {
            this.$fetch(this.$api.requestTypeUrl).then(response => {
                this.requestTypeList = response.data
            });
            this.$fetch(this.$api.envUrl).then(response => {
                this.envList = response.data
            });
        },
        mounted: function () {
            $('.http').css('display', 'none')
            $('.dubbo').css('display', 'none')
            $('.websocket').css('display', 'none')
            $('.control-group').css('display', 'none')
            const self = this
            self.bus.$emit('loading', true)
            this.script_id = this.$route.query.script_id
            $(".env").val(1);
            this.$fetch(this.$api.scriptUrl + this.script_id).then(response => {
                if (response.code == 0) {
                    self.bus.$emit('loading', false)
                    self.$script = response.data
                    console.log(self.$script)
                    let script = self.$script
                    if (script.protocolId == 1) {
                        $('.http').css('display', 'block')
                        $('#interfaceName').val(script.name)
                        $('#assert_text').val(script.assertText)
                        $('#requestUrl').val(script.url)
                        $('#requestType').val(script.requestTypeId)
                        $('#pre_num').val(script.preNumber)
                        $('#timeOut').val(script.timeOut)
                        $('#pre_time').val(script.preTime)
                        $('#requestParam').val(script.params)
                        $('#ip').val(script.ip)
                        $('#port').val(script.port)

                        if (script.username != null){
                            $("#onoffswitch").prop("checked",true);
                            $("#user").css('display','block');
                            $("#username").val(script.username);
                            $("#password").val(script.password)
                        }

                        if (script.cookie != null) {
                            JSON.parse(script.cookie).forEach(function (cookie, index) {
                                addCookieRow();
                                document.getElementsByClassName("cookieName")[index].value = cookie.cookieKey;
                                document.getElementsByClassName("cookieValue")[index].value = cookie.cookieValue;
                                document.getElementsByClassName("cookieDomain")[index].value = cookie.domain;
                                document.getElementsByClassName("cookiePath")[index].value = cookie.path;
                                }
                            )};

                        if (script.header != null) {
                            JSON.parse(script.header).forEach(function (header, index) {
                                addHeaderRow();
                                document.getElementsByClassName("headerName")[index].value = header.headerKey;
                                document.getElementsByClassName("headerValue")[index].value = header.headerValue;

                            });
                        }
                        if (script.params != null) {
                            if (script.params.toString().indexOf('paramskey') != -1) {
                                $("#routeType_0").css('background-color','#ff6200')
                                $("#routeType_1").css('background-color','#425c6f')
                                $('#form_content').css('display','block')
                                $('#json_content').css('display','none')
                                $("#requestParams").val("")
                                JSON.parse(script.params).forEach(function (param, index) {
                                   addparamRow();
                                    document.getElementsByClassName("paramName")[index].value = param.paramskey;
                                    document.getElementsByClassName("paramValue")[index].value = param.paramsvalue;

                                });
                            }else {
                                $("#routeType_1").css('background-color','#ff6200')
                                $("#routeType_0").css('background-color','#425c6f')
                                $('#form_content').css('display','none')
                                $('#json_content').css('display','block')
                                $("#requestParams").val(script.params)
                            }
                        }
                    }
                    else if (script.protocolId == 2) {
                        $('.dubbo').css('display', 'block')
                        $('#interfaceName').val(script.name)
                        $('#assert_text').val(script.assertText)
                        $('#paramType').val(script.paramType)
                        $('#requestParam').val(script.params)
                        $('#pre_num').val(script.preNumber)
                        $('#timeOut').val(script.timeOut)
                        $('#pre_time').val(script.preTime)
                        $('#ip').val(script.ip)
                        $('#port').val(script.port)
                        $('#interface').val(script.ins)
                        $('#interfaceVersion').val(script.version)
                        $('#methodName').val(script.method)
                    }
                }
                else {
                    self.bus.$emit('loading', false)
                    swal("Error", response.message, "error")
                }
            })
        },
        methods:{

            isCasLogin:function(){
                if ($("#onoffswitch").is(':checked')) {
                    $("#user").css('display','block');
                } else {
                    $("#user").css('display','none');
                }

            },

            checkrouteType:function (id) {
                if (id == 0){
                    $("#routeType_0").css('background-color','#ff6200')
                    $("#routeType_1").css('background-color','#425c6f')
                    $('#form_content').css('display','block')
                    $('#json_content').css('display','none')
                }else if (id == 1){
                    $("#routeType_1").css('background-color','#ff6200')
                    $("#routeType_0").css('background-color','#425c6f')
                    $('#form_content').css('display','none')
                    $('#json_content').css('display','block')
                }
            },
            verityHttp: function () {
                if ($('#interfaceName').val() == '' || $('#interfaceName').val() == null) {
                    $('#interfaceName').focus()
                    $("#interfaceName").focus(function () {
                        $("#interfaceName").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入项目名称', "warning")
                    return;
                } else if ($('#requestUrl').val() == '' || $('#requestUrl').val() == null) {
                    $('#requestUrl').focus()
                    $("#requestUrl").focus(function () {
                        $("#requestUrl").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入url', "warning")
                    return;
                } else if ($('#assert_text').val() == '' || $('#assert_text').val() == null) {
                    $('#assert_text').focus()
                    $("#assert_text").focus(function () {
                        $("#assert_text").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入断言结果', "warning")
                    return;
                } else if ($('#timeOut').val() == '' || $('#timeOut').val() == null) {
                    $('#timeOut').focus()
                    $("#timeOut").focus(function () {
                        $("#timeOut").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入超时时间', "warning")
                    $('#timeOut').focus()
                    return;
                } else if ($('#pre_time').val() == '' || $('#pre_time').val() == null) {
                    $('#pre_time').focus()
                    $("#pre_time").focus(function () {
                        $("#pre_time").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入压测时长', "warning")
                    return;
                } else if ($('#pre_num').val() == '' || $('#pre_num').val() == null) {
                    $('#pre_num').focus()
                    $("#pre_num").focus(function () {
                        $("#pre_num").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入压测并发数', "warning")
                    return;
                }
                return true;

            },
            verityUserPassword:function(){
                if ($('#username').val() == '' || $('#username').val() == null) {
                    $('#username').focus()
                    $("#username").focus(function () {
                        $("#username").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入登录的用户名', "warning")
                    return;
                }
                if ($('#password').val() == '' || $('#password').val() == null) {
                    $('#password').focus()
                    $("#password").focus(function () {
                        $("#password").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入登录的密码', "warning")
                    return;
                }
            },
            verityDubbo: function () {
                if ($('#interfaceName').val() == '' || $('#interfaceName').val() == null) {
                    $('#interfaceName').focus()
                    $("#interfaceName").focus(function () {
                        $("#interfaceName").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入项目名称', "warning")
                    return;
                }else if ($('#env').val() == 0){
                    swal ( "Warning" ,  '请选择环境' ,  "warning" )
                    return;
                }else if ($('#paramType').val() == '' || $('#paramType').val() == null) {
                    $('#paramType').focus()
                    $("#paramType").focus(function () {
                        $("#paramType").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入请求参数类型', "warning")
                    return;
                } else if ($('#assert_text').val() == '' || $('#assert_text').val() == null) {
                    $('#assert_text').focus()
                    $("#assert_text").focus(function () {
                        $("#assert_text").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入断言结果', "warning")
                    return;
                } else if ($('#interface').val() == '' || $('#interface').val() == null) {
                    $('#interface').focus()
                    $("#interface").focus(function () {
                        $("#interface").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入接口', "warning")
                    $('#timeOut').focus()
                    return;
                } else if ($('#methodName').val() == '' || $('#methodName').val() == null) {
                    $('#methodName').focus()
                    $("#methodName").focus(function () {
                        $("#methodName").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入接口方法', "warning")
                    return;
                } else if ($('#interfaceVersion').val() == '' || $('#interfaceVersion').val() == null) {
                    $('#interfaceVersion').focus()
                    $("#interfaceVersion").focus(function () {
                        $("#interfaceVersion").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入版本', "warning")
                    return;
                } else if ($('#timeOut').val() == '' || $('#timeOut').val() == null) {
                    $('#timeOut').focus()
                    $("#timeOut").focus(function () {
                        $("#timeOut").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入超时时间', "warning")
                    return;
                } else if ($('#requestParam').val() == '' || $('#requestParam').val() == null) {
                    $('#requestParam').focus()
                    $("#requestParam").focus(function () {
                        $("#requestParam").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入参数', "warning")
                    return;
                }
                else if ($('#pre_time').val() == '' || $('#pre_time').val() == null) {
                    $('#pre_time').focus()
                    $("#pre_time").focus(function () {
                        $("#pre_time").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入压测时长', "warning")
                    return;
                } else if ($('#pre_num').val() == '' || $('#pre_num').val() == null) {
                    $('#pre_num').focus()
                    $("#pre_num").focus(function () {
                        $("#pre_num").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入压测并发数', "warning")
                    return;
                }
                return true;

            },
            editScriptSubmit: function () {
                this.cStore = [];
                this.hStore = [];
                this.pStore = [];
                if (this.$script.protocolId == 1) {
                    if (!this.verityHttp()) {
                        return false;
                    }
                    let script = this.$script;
                    let cookieKey = document.getElementsByClassName('cookieName')
                    let cookieValue = document.getElementsByClassName('cookieValue')
                    let cookieDomain = document.getElementsByClassName('cookieDomain')
                    let cookiePath = document.getElementsByClassName('cookiePath')
                    for (let i = 0; i < cookieKey.length; i++) {
                        this.cStore.push({"cookieKey": cookieKey[i].value, "cookieValue": cookieValue[i].value,"domain":cookieDomain[i].value,"path":cookiePath[i].value})
                    }
                    let headerKey = document.getElementsByClassName('headerName')
                    let headerValue = document.getElementsByClassName('headerValue')
                    for (let i = 0; i < headerKey.length; i++) {
                        this.hStore.push({"headerKey": headerKey[i].value, "headerValue": headerValue[i].value})
                    }
                    let paramsKey = document.getElementsByClassName('paramName')
                    let paramsValue = document.getElementsByClassName('paramValue')
                    for (let i = 0; i < paramsKey.length; i++) {
                        this.pStore.push({"paramskey": paramsKey[i].value, "paramsvalue": paramsValue[i].value})
                    }
                    let pm;
                    let paramValue = $("#requestParam").val();
                    if (paramsKey.length != 0 && paramValue == '[]'){
                        pm = JSON.stringify(this.pStore)
                    } else if (paramsKey.length == 0 && paramValue != ''){
                        pm = paramValue
                    } else {
                        pm = JSON.stringify(this.pStore)
                    }
                    this.bus.$emit('loading', true);
                    this.$put(this.$api.scriptUrl, this.qs.stringify({
                        name: $('#interfaceName').val(),
                        id:script.id,
                        url: $('#requestUrl').val(),
                        protocolId: 1,
                        cookie: JSON.stringify(this.cStore),
                        header: JSON.stringify(this.hStore),
                        params: pm,
                        assertText: $('#assert_text').val(),
                        requestTypeId: $('#requestType').val(),
                        timeOut: $('#timeOut').val(),
                        preTime: $('#pre_time').val(),
                        preNumber: $('#pre_num').val(),
                        ip: $('#ip').val(),
                        port: $('#port').val(),
                        projectId: this.$script.projectId,
                        userId: localStorage.user_id,
                        username:$("#username").val(),
                        password:$("#password").val()
                    })).then(response => {
                        if (response.code == 0) {
                            this.bus.$emit('loading', false)
                            swal("修改成功", $('#interfaceName').val() + "修改成功!", "success")
                            this.$router.push({
                                name: 'scripts',
                                query: {
                                    module_id:this.$script.projectId
                                }
                            })
                        } else {
                            this.bus.$emit('loading', false)
                            swal("Error", response.message, "error")
                        }
                    })
                } else if (this.$script.protocolId == 2) {
                    if (!this.verityDubbo()) {
                        return false;
                    }
                    this.bus.$emit('loading', true)
                    this.$put(this.$api.scriptUrl, this.qs.stringify({
                        name: $('#interfaceName').val(),
                        protocolId: 2,
                        id:this.$script.id,
                        assertText: $('#assert_text').val(),
                        paramType: $('#paramType').val(),
                        params: $('#requestParam').val(),
                        timeOut: $('#timeOut').val(),
                        preTime: $('#pre_time').val(),
                        preNumber: $('#pre_num').val(),
                        projectId: this.$script.project,
                        ins: $('#interface').val(),
                        method: $('#methodName').val(),
                        ip: $('#ip').val(),
                        port: $('#port').val(),
                        version: $('#interfaceVersion').val(),
                        userId: localStorage.user_id
                    })).then(response => {
                        if (response.code == 0) {
                            this.bus.$emit('loading', false)
                            swal("修改成功", $('#interfaceName').val() + "修改成功!", "success")
                            this.$router.push({
                                name: 'scripts',
                                query: {
                                    module_id: this.$script.projectId
                                }
                            })
                        } else {
                            this.bus.$emit('loading', false)
                            swal("Error", response.message, "error")
                        }
                    })
                }
            },
            testRequest: function () {
                this.ccStore = []
                this.hhStore = []
                this.ppStore = []
                let cookieKey = document.getElementsByClassName('cookieKey')
                let cookieValue = document.getElementsByClassName('cookieValue')
                let cookieDomain = document.getElementsByClassName('cookieDomain')
                let cookiePath = document.getElementsByClassName('cookiePath')
                for (let i = 0; i < cookieKey.length; i++) {
                    this.ccStore.push({"cookieKey": cookieKey[i].value, "cookieValue": cookieValue[i].value,"domain":cookieDomain[i].value,"path":cookiePath[i].value})
                }
                let headerKey = document.getElementsByClassName('headerName')
                let headerValue = document.getElementsByClassName('headerValue')
                for (let i = 0; i < headerKey.length; i++) {
                    this.hhStore.push({"headerKey": headerKey[i].value, "headerValue": headerValue[i].value})
                }
                let paramsKey = document.getElementsByClassName('paramName')
                let paramsValue = document.getElementsByClassName('paramValue')
                for (let i = 0; i < paramsKey.length; i++) {
                    this.ppStore.push({"paramskey": paramsKey[i].value, "paramsvalue": paramsValue[i].value})
                }
                let pm;
                let paramValue = $("#requestParam").val();
                if (paramsKey.length != 0 && paramValue == ''){
                    pm = JSON.stringify(this.ppStore)
                } else if (paramsKey.length == 0 && paramValue != ''){
                    pm = paramValue
                } else {
                    pm = JSON.stringify(this.ppStore)
                }
                let self = this

                if ($("#onoffswitch").is(':checked')) {
                    if (!this.verityHttp()) {
                        return false;
                    }
                    // if (!this.verityUserPassword()) {
                    //     return false;
                    // }
                    this.bus.$emit('loading', true);
                    $.ajax({
                        url: this.$api.testUrl,
                        type: 'POST',
                        data: {
                            "url": $('#requestUrl').val(),
                            "protocolId": 1,
                            "isCas": true,
                            "cookie": JSON.stringify(self.ccStore),
                            "header": JSON.stringify(self.hhStore),
                            "requestTypeId": $('#requestType').val(),
                            "timeOut":$('#timeOut').val(),
                            "params": pm,
                            "username":$("#username").val(),
                            "password":$("#password").val()
                        },
                        success: function (response) {
                            if (response.code == 0) {
                                self.bus.$emit('loading', false)
                                $("#myModal").modal()
                                try {
                                    let result = new JSONFormat(response.data,4).toString()
                                    document.getElementById("writePlace").innerHTML = result;
                                }catch (e) {
                                    document.getElementById("writePlace").innerHTML = response.data
                                }

                            }else{
                                self.bus.$emit('loading', false)
                                swal("Warning", response.msg, "warning")
                            }
                        },
                        error:function () {
                            self.bus.$emit('loading', false)
                        }
                    })
                }else {
                if (this.$script.protocolId == 1) {
                    if (!this.verityHttp()) {
                        return false;
                    }
                    this.bus.$emit('loading', true)
                    $.ajax({
                        url: this.$api.testUrl,
                        type: 'POST',
                        data: {
                            "url": $('#requestUrl').val(),
                            "protocolId": 1,
                            "cookie": JSON.stringify(self.ccStore),
                            "header": JSON.stringify(self.hhStore),
                            "requestTypeId": $('#requestType').val(),
                            "timeOut":$('#timeOut').val(),
                            "params": pm
                        },
                        success: function (response) {
                            if (response.code == 0) {
                                self.bus.$emit('loading', false)
                                $("#myModal").modal()
                                try {
                                    let result = new JSONFormat(response.data,4).toString()
                                    document.getElementById("writePlace").innerHTML = result;
                                }catch (e) {
                                    document.getElementById("writePlace").innerHTML = response.data
                                }

                            }else{
                                self.bus.$emit('loading', false)
                                swal("Warning", response.msg, "warning")
                            }
                        },
                        error:function () {
                            self.bus.$emit('loading', false)
                        }
                    })
                } else if (this.$script.protocolId == 2) {
                    if (!this.verityDubbo()) {
                        return;
                    }
                    var jsonParam = {};
                    var paramArray = new Array();
                    jsonParam["paramType"] = $('#paramType').val();
                    jsonParam["paramValue"] = $('#requestParam').val();
                    paramArray.push(jsonParam);

                    var jsonData = {};
                    jsonData["address"] = $("#env").val();
                    jsonData["interfaceName"] = $('#interface').val();
                    jsonData["methodName"] = $('#methodName').val();
                    jsonData["timeOut"] = $('#timeOut').val();
                    jsonData["version"] = $('#interfaceVersion').val();
                    jsonData["requestParamTypeArgs"] = paramArray;

                    self.bus.$emit('loading', true)
                    $.ajax({
                        type: "POST",
                        url: self.$api.dubboTest,
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(jsonData),
                        dataType: "json",
                        success: function (response) {
                            console.log(response)
                            if (response.code == 0) {
                                self.bus.$emit('loading', false)
                                $("#myModal").modal()
                                try {
                                    let result = new JSONFormat(JSON.stringify(response.data), 4).toString()
                                    document.getElementById("writePlace").innerHTML = result;
                                }catch (e) {
                                    console.log(e)
                                    document.getElementById("writePlace").innerHTML = response.data;
                                }
                            }else {
                                self.bus.$emit('loading', false)
                                swal("Warning", response.message, "warning")
                            }
                        },
                        error: function (message) {
                            self.bus.$emit('loading', false)
                            $("#myModal").modal()
                            let result = new JSONFormat(JSON.stringify(message.responseJSON), 4).toString()
                            document.getElementById("writePlace").innerHTML = result;
                        }
                    });

                }
                }
            }
        }

    }
</script>

<style scoped>
    .which_group {
        list-style:none;
        margin:0;
        padding:0;
        width:100%;
        font-size:11px;
        color:#595959;
    }
    .which_group li {
        float:left;
        list-style:none;
        padding:7px;
        cursor:pointer;
        box-Shadow:1px 2px 3px #D9D9D9;
    }
    .which_group li:first-child {
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
    }
    .which_group li:last-child {
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;
    }

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

    .testswitch {
        position: relative;
        float: left;
        width: 90px;
        margin: 0;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select: none;
    }

    .testswitch-checkbox {
        display: none;
    }

    .testswitch-label {
        display: block;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid #999999;
        border-radius: 20px;
    }

    .testswitch-inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
    }

    .testswitch-inner::before, .testswitch-inner::after {
        display: block;
        float: right;
        width: 50%;
        height: 30px;
        padding: 0;
        line-height: 30px;
        font-size: 14px;
        color: white;
        font-family:
                Trebuchet, Arial, sans-serif;
        font-weight: bold;
        box-sizing: border-box;
    }

    .testswitch-inner::after {
        content: attr(data-on);
        padding-left: 10px;
        background-color: #00e500;
        color: #FFFFFF;
    }

    .testswitch-inner::before {
        content: attr(data-off);
        padding-right: 10px;
        background-color: #EEEEEE;
        color: #999999;
        text-align: right;
    }

    .testswitch-switch {
        position: absolute;
        display: block;
        width: 22px;
        height: 22px;
        margin: 4px;
        background: #FFFFFF;
        top: 0;
        bottom: 0;
        right: 56px;
        border: 2px solid #999999;
        border-radius: 20px;
        transition: all 0.3s ease-in 0s;
    }

    .testswitch-checkbox:checked + .testswitch-label .testswitch-inner {
        margin-left: 0;
    }

    .testswitch-checkbox:checked + .testswitch-label .testswitch-switch {
        right: 0px;
    }

</style>