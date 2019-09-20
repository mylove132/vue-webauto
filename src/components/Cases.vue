<template>
    <div class="row">
        <div class="col-md-2 side-nav" style="margin-left: 20px;margin-top: 50px">
            <div class="panel-group" id="accordion" style="color: white">
                <div class="panel-heading panel yx" style="margin-top: 30px" v-for="pro in projectList">
                    <a data-toggle="collapse" data-parent="#accordion" :href="'#'+generateId(pro.id)" id="jxwz" class="side-nav-item item-title" style="background-color:#567085;color: white">
                        {{pro.name}}
                    </a>
                    <div :id="generateId(pro.id)" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;">
                            <ul class="list-unstyled">
                                <li class="item-second"><a href="javascript:void(0);" style="margin-top: 10px" @click="getCaseList(module.id)" v-for="module in pro.moduleList">{{module.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8" style="display: block;margin-left: 150px;margin-top: 50px">
                <div>
                    <div class="tm-product-table-container" v-if="caseList.length != 0">
                        <table class="table table-hover tm-table-small tm-product-table" style='' >
                            <thead>
                            <tr>
                                <th nowrap="nowrap" scope="col">项目</th>
                                <th nowrap="nowrap" scope="col">用户</th>
                                <th nowrap="nowrap" scope="col">接口名称</th>
                                <th nowrap="nowrap" scope="col">请求方式</th>
                                <th nowrap="nowrap" scope="col">接口类型</th>
                                <th nowrap="nowrap" scope="col">压测时长</th>
                                <th nowrap="nowrap" scope="col">压测数</th>
                                <th scope="col">删除</th>
                                <th scope="col">编辑</th>
                                <th scope="col">压测运行</th>
                                <th scope="col">服务器</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="cas in caseList">
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.projectName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.userName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.scriptName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                    class="tm-product-name">{{cas.requestTypeName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                    class="tm-product-name">{{cas.protocolName}}
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                    <!--{{script.create_time}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                    <!--{{script.update_time}}-->
                                    <!--</td>-->
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.preTime}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.preNumber}}
                                </td>
                                <td>
                                    <a href="javascript:void(0);" class="tm-product-delete-link" @click="">
                                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link">
                                        <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link">
                                        <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                    <button @click="seeLog" style="display: none">查看日志</button>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link" v-show="script.ip != null && script.ip != '' && script.ip != 'localhost'">
                                        <i class="fa fa-server tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page-box" v-else="caseList == 0">
                        获取模块列表
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name: "Cases",
        data(){
            return{
                projectList: [],
                caseList: []
            }
        },
        created:function(){
            let self = this;
            this.$fetch(this.$api.casProject).then(
                response => {
                    if (response.code == 0){
                        self.projectList = response.data.list
                    }
                }
            )
        },
        methods:{
            generateId:function(id){
                return "qa-"+id;
            },
            getCaseList:function(moduleId){

            },
            casLogin:function () {
                this.$post(this.$api.casLogin,this.qs.stringify({
                    url:$("#url").val(),
                    username:$("#username").val(),
                    password:$("#password").val(),
                })).then( response => {
                    if (response.code == 0){
                        const cookies = response.data;
                        cookies.forEach(cookie => {
                            console.log("cookie name:"+cookie.name);
                            console.log("cookie value:"+cookie.value);
                            console.log("cookie domain:"+cookie.domain);
                            console.log("cookie path:"+cookie.path);
                            console.log("cookie expir:"+cookie.expiryDate);
                            document.cookie = cookie.name + "=" + cookie.value + ";" + cookie.expiryDate + ";path="+cookie.path;
                        })
                    }else{
                        swal("登录失败","","error")
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