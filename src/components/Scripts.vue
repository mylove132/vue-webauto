<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 "
                     style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 150px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_project"
                            @change="filterProject">
                        <option value="0">请选择项目</option>
                        <option v-for="project in projectList" :value="project.id">{{project.name}}</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_protocol"
                            @change="filterProtocol">
                        <option value="0">请选择协议</option>
                        <option value="1">HTTP</option>
                        <option value="2">DUBBO</option>
                        <option value="3">SOCKET</option>
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
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="script in scriptList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.projectname}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.username}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{reuqetType[script.request_type]}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{interfaceType[script.protocol]}}
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                        <!--{{script.create_time}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                        <!--{{script.update_time}}-->
                                    <!--</td>-->
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.pre_time}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{script.pre_number}}
                                    </td>
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.url}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.ins}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.method}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.params}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.param_type}}</td>-->
                                    <td>
                                        <a href="#" class="tm-product-delete-link" @click="delScript(script.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="editScript(script.id,script.project)" class="tm-product-delete-link">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="seeLog()" class="tm-product-delete-link"
                                           v-if="script_run_status">
                                            <i class="fa fa-spinner tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="#" @click="runScript(script.id)" class="tm-product-delete-link"
                                           v-else="script_run_status">
                                            <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                        </a>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addScripts()">Add new
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
                users: [],
                reuqetType: {
                    1: "GET",
                    2: "POST",
                    3: "DELETE"
                },
                interfaceType: {
                    1: 'HTTP',
                    2: 'DUBBO',
                    3: 'SOCKET'
                }
            }
        },

        destroyed() {
            this.websock.close() //离开路由之后断开websocket连接
        },
        created: function () {
            this.initWebSocket()
            this.getScriptsList()
            this.$fetch(this.$api.projectUrl).then(response => {
                this.projectList = response.data
            });
            this.$fetch(this.$api.userUrl).then(resonse => {
                console.log(resonse.data)
                if (resonse.code == 0) {
                    this.users = resonse.data
                } else {
                    return []
                }
            })
        },
        mounted: function () {

        },
        methods: {
            initWebSocket() { //初始化weosocket
                const wsuri = this.$api.wsUrl;
                this.websock = new WebSocket(wsuri);
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen() { //连接建立之后执行send方法发送数据
                console.log("建立连接成功")
            },
            websocketonerror() {//连接建立失败重连
                this.initWebSocket();
            },
            websocketonmessage(e) { //数据接收
                const logs = ''
                const redata = JSON.parse(e.data);
                console.log(redata)
                logs = logs + redata.message
                document.getElementById('log').innerHTML = logs
                if (redata.code == 0){
                    this.script_run_status = true
                } else if (redata.code == 2){
                    this.script_run_status = false
                    swal(
                        'success!',
                        'this script run success.',
                        'success'
                    );
                }
                $('#log').text(redata.message)
            },
            websocketsend(Data) {//数据发送
                this.websock.send(Data);
            },
            websocketclose(e) {  //关闭
                console.log('断开连接', e);
            },
            getScriptsList: function () {
                if (this.$route.query.module_id != null) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + this.$route.query.module_id).then(response => {
                        this.scriptList = response.data
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
                        module_id: this.$route.query.module_id,
                        module_env: this.$route.query.module_env
                    }
                })
            },
            filterProject: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                if (protocolIndex != 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&protocol=" + protocolIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (protocolIndex != 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&protocol=" + protocolIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (protocolIndex == 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex == 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex != 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?protocol=" + protocolIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex == 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex != 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?user=" + userIndex + "&protocol=" + protocolIndex).then(response => {
                        this.scriptList = response.data
                    })
                }
                else {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                }
            },
            filterProtocol: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                if (projectIndex != 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&protocol=" + protocolIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex != 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&protocol=" + protocolIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?protocol=" + protocolIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex == 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl).then(response => {
                        this.scriptList = response.data
                    })
                } else if (protocolIndex == 0 && projectIndex != 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex == 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (protocolIndex == 0 && projectIndex != 0 && userIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?user=" + userIndex + "&project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                }
                else {
                    this.$fetch(this.$api.scriptUrl + "?protocol=" + protocolIndex).then(response => {
                        this.scriptList = response.data
                    })
                }

            },
            filterUser: function () {
                const projectIndex = $('#select_project').val();
                const protocolIndex = $('#select_protocol').val();
                const userIndex = $('#select_user').val();
                if (projectIndex != 0 && protocolIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&protocol=" + protocolIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex != 0 && protocolIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?protocol=" + protocolIndex + "&user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (projectIndex == 0 && protocolIndex == 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl).then(response => {
                        this.scriptList = response.data
                    })
                } else if (protocolIndex == 0 && projectIndex != 0 && userIndex == 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (userIndex == 0 && protocolIndex == 0 && projectIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                } else if (userIndex == 0 && projectIndex != 0 && protocolIndex != 0) {
                    this.$fetch(this.$api.scriptUrl + "?project=" + projectIndex + "&project=" + projectIndex).then(response => {
                        this.scriptList = response.data
                    })
                }
                else {
                    this.$fetch(this.$api.scriptUrl + "?user=" + userIndex).then(response => {
                        this.scriptList = response.data
                    })
                }

            },
            search: function () {
                const search_text = $('#search').val()
                this.$fetch(this.$api.scriptUrl + "?search=" + search_text).then(response => {
                    this.scriptList = response.data
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
                        self.$del(self.$api.scriptUrl + id + "/").then(response => {
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
            editScript: function (script_id,env) {
                 this.$fetch(this.$api.projectUrl+env).then(response => {
                    if (response.code == 0){
                        this.$router.push({
                            path: 'editScript',
                            query: {
                                script_id: script_id,
                                env:response.data.env
                            }
                        })
                    }else {
                        swal(
                            'warning!',
                            response.msg,
                            'warning'
                        );
                    }
                })

            },
            seeLog:function(){
                $('#logModal').modal()
            },
            runScript: function (id) {
                this.$post(this.$api.execScriptUrl,this.qs.stringify({
                    user:localStorage.user_id,
                    id:id
                })).then(response => {
                    if(response.code == 5001){
                        swal(
                            '!',
                            response.msg,
                            'warning'
                        );
                    }else if(response.code == 5002){
                        swal(
                            '!',
                            response.msg,
                            'warning'
                        );
                    }
                })
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