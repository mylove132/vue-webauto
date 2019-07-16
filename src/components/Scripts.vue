<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 "
                     style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 150px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_project"
                            @change="filterProject">
                        <option value="0">请选择项目</option>
                        <option v-for="project in projectList" :value="project.id">{{project.projectName}}</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_protocol"
                            @change="filterProtocol">
                        <option value="0">请选择协议</option>
                        <option v-for="protocol in protocolList" :value="protocol.id">{{protocol.name}}</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_user"
                            @change="filterUser">
                        <option value="0">请选择用户</option>
                        <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
                    </select>
                    <input type="text" style="width: 160px;height: 40px;margin-left: 100px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9"
                           id="search" placeholder="模糊匹配脚本名" v-on:keyup="search">
                    <input type="button" value="SEARCH"
                           style="height: 40px;background-color: #f5a623;border-radius: 3px;color: white"
                           @click="search">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col"
                     style="margin-left: -30px;margin-top: -40px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">项目</th>
                                    <th nowrap="nowrap" scope="col">用户</th>
                                    <th nowrap="nowrap" scope="col">脚本名称</th>
                                    <th nowrap="nowrap" scope="col">请求方式</th>
                                    <th nowrap="nowrap" scope="col">接口类型</th>
                                    <th nowrap="nowrap" scope="col">压测时长</th>
                                    <th nowrap="nowrap" scope="col">压测数</th>
                                    <!--<th nowrap="nowrap" scope="col">接口url</th>
                                    <th nowrap="nowrap" scope="col">接口</th>
                                    <th nowrap="nowrap" scope="col">接口方法</th>
                                    <th nowrap="nowrap" scope="col">参数类型</th>
                                    <th nowrap="nowrap" scope="col">参数值</th>-->
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                    <th scope="col">运行</th>
                                    <th scope="col">服务器</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="script in scriptList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.projectName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.userName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.scriptName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{script.requestTypeName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{script.protocolName}}
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                        <!--{{script.create_time}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                        <!--{{script.update_time}}-->
                                    <!--</td>-->
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.preTime}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.preNumber}}
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delScript(script.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editScript(script.id,script.envId)" class="tm-product-delete-link">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="runScript(script.id)" class="tm-product-delete-link">
                                            <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <button @click="seeLog" style="display: none">查看日志</button>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="watchServer(script.ip)" class="tm-product-delete-link" v-show="script.ip != null && script.ip != '' && script.ip != 'localhost'">
                                            <i class="fa fa-server tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="page-box" style="margin-left: 780px">
                            <button @click="goto(-1)" id="beforeBtn" style="color: black;background-color: yellow;border-radius: 5px"> 上一页</button>
                            <label style="color: white;margin-left: 20px;margin-right: 20px">当前页: {{params.currentPage}}</label>
                            <button @click="goto(+1)" id="netBtn" style="color: black;background-color: yellow;border-radius: 5px"> 下一页</button>
                        </div>
                        <!-- table container -->
                        <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addScripts()">Add new
                            Scripts</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bs-example-modal-lg" tabindex="-1" id="logModal" role="dialog"
             aria-labelledby="gridSystemModalLabel">
            <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                <div class="modal-content">
                    <div class="modal-header" style="background-color: #567086;">
                        <h4 class="modal-title" id="gridSystemModalLabel12" style="color: white">运行日志</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body header-body" style="background-color: #2c3e50;">
                        <pre id="log">

                        </pre>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        <footer class="tm-footer row tm-mt-small">
            <div class="col-12 font-weight-light">
                <p class="text-center text-white mb-0 px-4 small">
                    Copyright &copy; <b>2018</b> All rights reserved.

                    More Templates <a href="http://okjiaoyu.cn/" target="_blank" title="OK教育">OK教育</a> - Collect
                    from <a href="http://okjiaoyu.cn/" title="网页模板" target="_blank">OK教育</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Scripts",
        data() {
            return {
                id: 0,
                script_run_status: false,
                headerIndex: 0,
                scriptList: [],
                projectList: [],
                protocolList:[],
                users: [],
                runStatus:true,
                params:{
                    pageSize: 10,
                    currentPage: 1
                }
            }
        },
        created: function () {
            this.getScriptsList()
            this.$fetch(this.$api.protocolUrl).then(response => {
                this.protocolList = response.data
            });
            this.$fetch(this.$api.projectUrl).then(response => {
                this.projectList = response.data.list
            });
            this.$fetch(this.$api.userUrl).then(resonse => {
                console.log(resonse.data)
                if (resonse.code == 0) {
                    this.users = resonse.data.list
                } else {
                    return []
                }
            })
        },
        mounted: function () {
            console.log(this.projectList)
        },
        methods: {
            getScriptsList: function () {
                if (this.$route.query.module_id != null) {
                    this.$fetch(this.$api.scriptUrl + "orderByProject/" + this.$route.query.module_id).then(response => {
                        this.scriptList = response.data.list
                    })
                }else {
                    this.$fetch(this.$api.scriptUrl).then(response => {
                        this.scriptList = response.data
                    })
                }
            },
            addScripts: function () {
                this.$router.push({
                    name: 'addScripts',
                    query: {
                    }
                })
            },
            filterProject: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                this.$fetch(this.$api.scriptUrl + "filter?projectId=" + projectIndex + "&protocolId=" + protocolIndex + "&userId=" + userIndex).then(response => {
                    this.scriptList = response.data.list
                })
            },
            filterProtocol: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                this.$fetch(this.$api.scriptUrl + "filter?projectId=" + projectIndex + "&protocolId=" + protocolIndex + "&userId=" + userIndex).then(response => {
                    this.scriptList = response.data.list
                })
            },
            filterUser: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                this.$fetch(this.$api.scriptUrl + "filter?projectId=" + projectIndex + "&protocolId=" + protocolIndex + "&userId=" + userIndex).then(response => {
                    this.scriptList = response.data.list
                })
            },
            search: function () {
                const search_text = $('#search').val()
                this.$fetch(this.$api.scriptUrl + "search?keyword=" + search_text).then(response => {
                    this.scriptList = response.data.list
                })
            },
            delScript: function (id) {
                let self = this
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to delete this!",
                    type: 'warning',
                    background: '#EEEEE0',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#f5a623',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        self.$del(self.$api.scriptUrl + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this script have delete.',
                                    'success'
                                );
                                self.getScriptsList();
                            }
                        })
                    }
                })
            },
            editScript: function (script_id,envId) {
                        this.$router.push({
                            path: 'editScript',
                            query: {
                                script_id: script_id,
                                env:envId
                            }
                        })
            },
            seeLog:function(){
                $('#logModal').modal()
            },
            watchServer:function(ip){
                window.open("http://"+ip+":19999","_blank")
            },
            runScript: function (id) {
                this.$fetch(this.$api.execScriptUrl+"?scriptId="+id+"&userId="+localStorage.user_id).then(response => {
                    if (response.code == 0){
                        swal("脚本开始执行","","success")
                    }else {
                        swal("",response.message,"warning")
                    }
                })
            },
            goto(value){
                let next = this.params.currentPage + parseInt(value);
                this.$fetch(this.$api.scriptUrl + "orderByProject/" + this.$route.query.module_id, {
                    currentPage: next,
                    pageSize:10
                }).then(response => {
                    if (response.code == 0){
                        this.scriptList = response.data.list
                    }
                })
                this.params.currentPage = next > 0 ? next : 1;

            }
        }

    }
</script>

<style scoped>
    .grebtn {
        display: inline-block;
        padding: 0.5em 1.25em;
        border: 1px solid;
        border-radius: 2px;
        vertical-align: bottom;
        font-weight: inherit;
        border-color: #208000 #1F7F00;
        background-color: #289600;
        box-shadow: inset 0 0 1px rgba(255, 255, 255, .6), 0 1px #8DBF62;
        color: #fff;
        text-shadow: 0 -1px #137900;
        margin: 100px auto;
    }

    dot {
        display: inline-block;
        height: 1em;
        line-height: 1;
        text-align: left;
        vertical-align: -.25em;
        overflow: hidden;
    }

    dot::before {
        display: block;
        content: '...\A..\A.';
        white-space: pre-wrap;
        animation: dot 3s infinite step-start both;
    }

    @keyframes dot {
        33% {

            transform: translateY(-2em);

        }

        66% {

            transform: translateY(-1em);

        }

    }



</style>