<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 " style=" vertical-align: middle;height:100px;margin-left: -30px">
                    <select style="width: 150px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_platform" @change="filterPlatform">
                        <option value="0">请选择平台</option>
                        <option v-for="type in typeList" v-bind:value="type.id">{{type.name}}</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_env" @change="filterEnv">
                        <option value="0">请选择环境</option>
                        <option v-for="env in envList" v-bind:value="env.id">{{env.name}}</option>
                </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_user" @change="filterUser">
                        <option value="0">请选择用户</option>
                        <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
                    </select>
                    <input type="text" style="width: 160px;height: 40px;margin-left: 100px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="search" placeholder="模糊匹配项目名" v-on:keyup="search">
                    <input type="button" value="SEARCH" style="height: 40px;background-color: #f5a623;border-radius: 3px;" @click="search">
                </div>
            </div>
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px;margin-top: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container" >
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th scope="col">平台</th>
                                    <th scope="col">项目名称</th>
                                    <th scope="col">创建人</th>
                                    <th scope="col">创建时间</th>
                                    <th scope="col">更新时间</th>
                                    <th scope="col">项目环境</th>
                                    <th scope="col">项目描述</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="module in moduleList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.typeName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{module.projectName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.userName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.createTime}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.updateTime}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.envName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.descption}}</td>
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delModule(module.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editModal(module)" class="tm-product-delete-link" >
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="mainModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                                        <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                                            <div class="modal-content">
                                                <div class="modal-header" style="background-color: #567086;">
                                                    <h4 class="modal-title" id="gridSystemModalLabel" style="opacity: 1;color: white">项目编辑</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body" style="background-color: #2c3e50;">
                                                    <div class="row" style="margin-left: 150px;margin-top: 35px">
                                                        <div class="col-md-4">
                                                            <nobr>
                                                                <strong style="color: white">项目:&nbsp;&nbsp;  </strong>
                                                                <select style="width: 130px" id="moduleType">
                                                                    <option v-for="type in typeList" v-bind:value="type.id">{{type.name}}</option>
                                                                </select>
                                                                <strong style="color: white;padding-left: 5px">项目名称:&nbsp;&nbsp;  </strong>
                                                                <input type="text" placeholder="项目名称" style="border-radius: 5px" id="moduleName" />
                                                            </nobr>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="margin-left: 165px;margin-top: 35px">
                                                        <nobr>
                                                            <strong style="color: white">环境:&nbsp;&nbsp;  </strong>
                                                            <select style="width: 130px" id="moduleEnv">
                                                                <option v-for="env in envList" v-bind:value="env.id">{{env.name}}</option>
                                                            </select>
                                                            <strong style="color: white;padding-left: 5px">项目描述:&nbsp;&nbsp;  </strong>
                                                            <input type="text" placeholder="项目描述" style="border-radius: 5px" id="moduleDesc" />
                                                        </nobr>
                                                    </div>
                                                   <div style="height: 80px"></div>
                                                </div>
                                                <div class="modal-footer" style="background-color:#567086;">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                                                    <button type="button" class="btn btn-default" style="background-color:#f5a623;border-radius: 10px" @click="editProject(module)">Save changes</button>
                                                </div>
                                            </div><!-- /.modal-content -->
                                        </div><!-- /.modal-dialog -->
                                    </div>
                                    <td>
                                        <a href="javascript:void(0);" @click="runProject(module.id,module.env)" class="tm-product-delete-link">
                                            <i class="fa fa-th-list tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="page-box" style="margin-left: 780px">
                            <button @click="goto(-1)" id="beforeBtn" style="color: black;background-color: white;border-radius: 5px"> 上一页</button>
                            <label style="color: white;margin-left: 20px;margin-right: 20px">当前页: {{params.currentPage}}</label>
                            <button @click="goto(+1)" id="netBtn" style="color: black;background-color: white;border-radius: 5px"> 下一页</button>
                        </div>
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addModule()">Add new product</a>
                        <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                            <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                                <div class="modal-content">
                                    <div class="modal-header" style="background-color: #567086;">
                                        <h4 class="modal-title" id="gridSystemModalLabel1" style="color: white">添加项目</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body" style="background-color: #2c3e50;">
                                        <div class="row" style="margin-left: 150px;margin-top: 35px">
                                            <div class="col-md-4">
                                                <nobr>
                                                    <strong style="color: white">平台:&nbsp;&nbsp;  </strong>
                                                    <select style="width: 130px" id="addModuleType">
                                                        <option v-for="type in typeList" v-bind:value="type.id">{{type.name}}</option>
                                                    </select>
                                                    <strong style="color: white;padding-left: 5px">项目名称:&nbsp;&nbsp;  </strong>
                                                    <input type="text" placeholder="项目名称" style="border-radius: 5px" id="addModuleName" />
                                                </nobr>
                                            </div>
                                        </div>
                                        <div class="row" style="margin-left: 165px;margin-top: 35px">
                                            <nobr>
                                                <strong style="color: white">环境:&nbsp;&nbsp;  </strong>
                                                <select style="width: 130px" id="addModuleEnv">
                                                    <option v-for="env in envList" v-bind:value="env.id">{{env.name}}</option>
                                                </select>
                                                <strong style="color: white;padding-left: 5px">项目描述:&nbsp;&nbsp;  </strong>
                                                <input type="text" placeholder="项目描述" style="border-radius: 5px" id="addModuleDesc" />
                                            </nobr>
                                        </div>
                                        <div style="height: 80px"></div>
                                    </div>
                                    <div class="modal-footer" style="background-color: #567086;">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                                        <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addProject()">Add Project</button>
                                    </div>
                                </div><!-- /.modal-content -->
                            </div><!-- /.modal-dialog -->
                        </div>>
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
        <!-- 模态框（Modal） -->
<!-- /.modal -->
    </div>
</template>

<script>
    export default {
        name: "Project",
        data() {
            return {
                typeList:[],
                envList:[],
                moduleList: [],
                users:[],
                params:{
                    pageSize: 10,
                    currentPage: 1
                }
            }
        },
        created: function () {
            this.getProject();
            this.$fetch(this.$api.typeUrl).then(response => {
                if(response.code == 0){
                    this.typeList = response.data
                }
            }),
             this.$fetch(this.$api.envUrl).then(response => {
                if(response.code == 0){
                    this.envList = response.data
                }
            }),
            this.$fetch(this.$api.userUrl).then(resonse => {
                    if (resonse.code == 0){
                        this.users =  resonse.data.list
                    }else {
                        return []
                    }
                })
        },
        methods: {
            getProject: function () {
                this.$fetch(this.$api.projectUrl).then(response => {
                    this.moduleList = response.data.list
                })
            },
            delModule: function (id) {
                let self = this
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to delete this!",
                    type: 'warning',
                    background:'#EEEEE0',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#f5a623',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        self.$del(self.$api.projectUrl + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this project have delete.',
                                    'success'
                                );
                                self.getProject()
                            }
                        })
                    }
                })

            },
            editModal:function(module){
                $('#mainModal').modal()
                $('#moduleName').val(module.projectName)
                $('#moduleDesc').val(module.descption)
                $('#moduleType').val(module.typeId)
                $('#moduleEnv').val(module.envId)
            },
            editProject: function (module) {
                this.$put(this.$api.projectUrl, this.qs.stringify({
                    name: $('#moduleName').val(),
                    descption: $('#moduleDesc').val(),
                    type: $('#moduleType').val(),
                    env: $('#moduleEnv').val(),
                    id:module.id
                })).then(response => {
                    if (response.code == 0){
                        $('#mainModal').modal('hide')
                        swal(
                            'Edited!',
                            'this project save done.',
                            'success'
                        );
                        this.getProject()
                    }else {
                        swal ( "Error" ,  response.msg ,  "error" )
                    }
                }).catch( error => {
                    swal ( "Error" ,  error ,  "error" )
                })
            },
            addModule:function () {
                $('#addModal').modal()
                $('#moduleName').val()
                $('#moduleDesc').val()
                $('#moduleType').val(0)
                $('#moduleEnv').val(0)
            },
            addProject: function () {
                this.$post(this.$api.projectUrl, this.qs.stringify({
                    name: $('#addModuleName').val(),
                    descption: $('#addModuleDesc').val(),
                    type: $('#addModuleType').val(),
                    env: $('#addModuleEnv').val(),
                    userId: localStorage.user_id
                })).then(response => {
                    if (response.code == 0){
                        swal(
                            'Add!',
                            'this project have added.',
                            'success'
                        );
                        $('#addModal').modal('hide')
                        this.getProject()
                    }else {
                        swal ( "Error" ,  response.message ,  "error" )
                    }
                }).catch( error => {
                    swal ( "Error" ,  error ,  "error" )
                })
            },
            filterPlatform:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                this.$fetch(this.$api.projectUrl+"filter?typeId="+platformIndex+"&envId="+envIndex+"&userId="+userIndex).then(response => {
                            this.moduleList = response.data.list
                        })
            },
            filterEnv:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                 this.$fetch(this.$api.projectUrl+"filter?typeId="+platformIndex+"&envId="+envIndex+"&userId="+userIndex).then(response => {
                            this.moduleList = response.data.list
                        })
            },
            filterUser:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                 this.$fetch(this.$api.projectUrl+"filter?typeId="+platformIndex+"&envId="+envIndex+"&userId="+userIndex).then(response => {
                            this.moduleList = response.data.list
                        })
            },
            search:function(){
                const search_text = $('#search').val()
                this.$fetch(this.$api.projectUrl+"search?keyword="+search_text).then(response => {
                    this.moduleList = response.data.list
                })
            },
            runProject:function (id,env) {
                this.$fetch(this.$api.scriptUrl+"orderByProject/"+id).then(response => {
                    console.log(response)
                    if (response.code == 0 && (response.data).length == 0){
                        let self = this
                        swal({
                            title: 'Are you need add scripts?',
                            text: "该项目暂时不存在脚本，是否添加!",
                            type: 'info',
                            background:'#EEEEE0',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#f5a623',
                            confirmButtonText: 'Yes,add!'
                        }).then(function(isConfirm) {
                            if (isConfirm) {
                                self.$router.push({
                                    name:'addScripts',
                                    query:{
                                        module_id:id,
                                        module_env:env
                                    }
                                })
                            }
                        })
                    }
                    else if (response.code == 0 && (response.data).length != 0) {
                        this.$router.push({
                            name:'scripts',
                            query:{
                                module_id:id,
                                module_env:env
                            }
                        })
                    }
                    else {
                        swal ( "未知错误" ,  response.msg ,  "error" )
                    }
                })
            },
            goto(value){
                let next = this.params.currentPage + parseInt(value);
                this.$fetch(this.$api.projectUrl, {
                    currentPage: next,
                    pageSize:10
                }).then(response => {
                    if (response.code == 0){
                        this.moduleList = response.data.list
                    }
                })
                this.params.currentPage = next > 0 ? next : 1;

            }
        }
    }
</script>

<style scoped>
    table{

        　　table-layout: fixed;
    }
    table td.name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

</style>