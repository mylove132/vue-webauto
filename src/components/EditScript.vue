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
                                        <legend class="">修改测试脚本</legend>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3" style="margin-left: -10px;">
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
                                        </div>
                                        <div class="col-md-6" style="margin-left: 10px;margin-top: 15px">
                                            <div class="control-group http" id="cookieList">
                                                <div>
                                                    <button type="button" class="btn btn-default addBtn" style="border-radius:6px;float: left;margin-bottom: 5px" id="addBtn"><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            <div class="control-group http" id="headerList">
                                                <div>
                                                    <button type="button" class="btn btn-default addBtn" style="border-radius:6px;float: left;margin-top: 5px;margin-bottom: 5px" id="addHeaderBtn"><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3" style="margin-left: -10px;">
                                            <div class="control-group http socket dubbo">
                                                <!-- Text input-->
                                                <label class="control-label" for="timeOut">接口超时时间</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="请输入接口超时时间(milliseconds)" id="timeOut"
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
                                                <label class="control-label" for="pre_num">响应断言</label>
                                                <div class="controls">
                                                    <input type="text" placeholder="断言" id="response_assert"
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
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="editScriptSubmit()">Save Script</a>
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
        name: "EditScript",
        data(){
            return {
                cStore:[],
                hStore:[],
                $script:{},
                module_id:0
            }
        },
        mounted:function () {
            this.$script = this.$route.query.script
            this.module_id = this.$route.query.module_id
            let script = this.$script
            console.log(this.$script)
            $('.control-group').css('display','none')
            if (script.pre_type == 1){
                $('.http').css('display','block')
                $('#interfaceName').val(script.pre_interface_name)
                $('#response_assert').val(script.response_assert)
                $('#requestUrl').val(script.url)
                $('#requestType').val(script.pre_interface_request_type)
                $('#requestType').val(script.pre_interface_request_type)
                $('#pre_num').val(script.pre_num)
                $('#timeOut').val(script.pre_interface_timeout_time)
                $('#pre_time').val(script.pre_time)
                $('#requestParam').val(script.pre_interface_param_value)
                let $cookieHtml = '<div class="form-group cookieHead" style="clear: both">\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-left: -20px">\n' +
                    '                                    <input class="form-control cookieKey" name="cookieName" placeholder="cookie key" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '\n' +
                    '                                <div class="col-sm-2" style="float: left; margin-left: 100px">\n' +
                    '                                    <input class="form-control cookieValue" name="cookieValue" placeholder="cookie value" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-left: 100px">\n' +
                    '                                    <button type="button" class="btn btn-default removeButton" style="border-radius: 5px;height: 45px"><i class="fa fa-minus"></i>\n' +
                    '                                    </button>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                console.log(script.cookies)
                let _self = this
                if(script.cookies != null) {
                    JSON.parse(script.cookies).forEach(function (cookie, index) {
                        $('#cookieList').append($cookieHtml)
                        document.getElementsByClassName('cookieKey')[index].value = cookie.cookieKey
                        document.getElementsByClassName('cookieValue')[index].value = cookie.cookieValue
                        document.getElementsByClassName('removeButton')[index].onclick = function () {
                            document.getElementsByClassName('cookieHead')[index].remove();
                            _self.id -= 1
                        }
                    });
                }
                document.getElementById('addBtn').onclick = function () {
                    this.id = document.getElementsByClassName('cookieHead').length
                    let index = this.id
                    $('#cookieList').append($cookieHtml)
                    index++;
                    this.id = index;
                    let idNum = this.id
                    let self = this
                    document.getElementsByClassName('removeButton')[idNum-1].onclick = function () {
                        document.getElementsByClassName('cookieHead')[idNum-1].remove();
                        self.id -= 1
                    }
                }
                let $headerHtml = '<div class="form-group headers" style="clear: both">\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-left: -20px">\n' +
                    '                                    <input class="form-control headerKey" name="cookieName" placeholder="header key" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '\n' +
                    '                                <div class="col-sm-2" style="float: left; margin-left: 100px">\n' +
                    '                                    <input class="form-control headerValue" name="cookieValue" placeholder="header value" style="border-radius: 5px;height: 45px;width:180px;background-color: white;color: black"/>\n' +
                    '                                </div>\n' +
                    '                                <div class="col-sm-2" style="float: left;margin-left: 100px">\n' +
                    '                                    <button type="button" class="btn btn-default removeHeaderButton" style="border-radius: 5px;height: 45px"><i class="fa fa-minus"></i>\n' +
                    '                                    </button>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                console.log(script.header)
                if (script.header != null) {
                    JSON.parse(script.header).forEach(function (header, index) {
                        $('#headerList').append($headerHtml)
                        document.getElementsByClassName('headerKey')[index].value = header.headerKey
                        document.getElementsByClassName('headerValue')[index].value = header.headerValue
                        document.getElementsByClassName('removeHeaderButton')[index].onclick = function () {
                            document.getElementsByClassName('headers')[index].remove();
                            _self.headerIndex -= 1
                        }
                    });
                }
                document.getElementById('addHeaderBtn').onclick = function () {
                    this.headerIndex = document.getElementsByClassName('headers').length
                    let index = this.headerIndex
                    $('#headerList').append($headerHtml)
                    index++;
                    this.headerIndex = index;
                    let idNum = this.headerIndex
                    let self = this
                    document.getElementsByClassName('removeHeaderButton')[idNum-1].onclick = function () {
                        document.getElementsByClassName('headers')[idNum-1].remove();
                        self.headerIndex -= 1
                    }
                }
            }
        },
        methods:{
            editScriptSubmit:function () {
                let script = this.$script;
                let cookieKey = document.getElementsByClassName('cookieKey')
                let cookieValue = document.getElementsByClassName('cookieValue')
                for (let i = 0;i<cookieKey.length;i++){
                    this.cStore.push({"cookieKey":cookieKey[i].value,"cookieValue":cookieValue[i].value})
                }
                let headerKey = document.getElementsByClassName('headerKey')
                let headerValue = document.getElementsByClassName('headerValue')
                for (let i = 0;i<headerKey.length;i++){
                    this.hStore.push({"headerKey":headerKey[i].value,"headerValue":headerValue[i].value})
                }
                this.$post(this.$api.scriptUrl,this.qs.stringify({
                    id:script.id,
                    pre_interface_name:$('#interfaceName').val(),
                    url:$('#requestUrl').val(),
                    pre_type:1,
                    cookies:JSON.stringify(this.cStore),
                    header:JSON.stringify(this.hStore),
                    response_assert:$('#response_assert').val(),
                    pre_interface_request_type:$('#requestType').val(),
                    pre_interface_param_value:$('#requestParam').val(),
                    pre_interface_timeout_time:$('#timeOut').val(),
                    pre_time:$('#pre_time').val(),
                    pre_num:$('#pre_num').val(),
                    module_id:this.$route.query.module_id
                })).then(response => {
                    console.log(response)
                    if(response.code == 0){
                        swal ( "修改成功" ,  $('#interfaceName').val()+"修改成功!" ,  "success" )
                        this.$router.push({
                            name:'scripts',
                            query:{
                                module_id:this.module_id
                            }
                        })
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>