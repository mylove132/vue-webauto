<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container" >
                            <table class="table table-hover tm-table-small tm-product-table" style='table-layout: fixed'>
                                <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">项目</th>
                                    <th scope="col">项目名称</th>
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
                                    <th scope="row"><input type="checkbox"/></th>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleType[module.module_type]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{module.module_name}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.create_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.update_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleEnv[module.module_env]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.module_desc}}</td>
                                    <td>
                                        <a href="#" class="tm-product-delete-link" @click="delModule(module.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="editModal(module)" class="tm-product-delete-link" >
                                            <i class="fa fa-align-left tm-product-delete-icon" title="Align Left"></i>
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
                                                                    <option value="1">教师空间</option>
                                                                    <option value="2">教师pad</option>
                                                                    <option value="3">学生pad</option>
                                                                    <option value="4">商城</option>
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
                                                                <option value="1">dev</option>
                                                                <option value="2">docker-dev</option>
                                                                <option value="3">docker-hotfix</option>
                                                                <option value="4">stress</option>
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
                                        <a href="#" @click="runProject(module.id)" class="tm-product-delete-link">
                                            <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
                                                    <strong style="color: white">项目:&nbsp;&nbsp;  </strong>
                                                    <select style="width: 130px" id="addModuleType">
                                                        <option value="1">教师空间</option>
                                                        <option value="2">教师pad</option>
                                                        <option value="3">学生pad</option>
                                                        <option value="4">商城</option>
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
                                                    <option value="1">dev</option>
                                                    <option value="2">docker-dev</option>
                                                    <option value="3">docker-hotfix</option>
                                                    <option value="4">stress</option>
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

                    More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect
                    from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                </p>
            </div>
        </footer>
        <!-- 模态框（Modal） -->
<!-- /.modal -->
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                moduleType:{
                    1:'教师空间',
                    2:'教师pad',
                    3:'学生pad',
                    4:'商城'
                },
                moduleEnv:{
                    1:'dev',
                    2:'docker-dev',
                    3:'docker-hotfix',
                    4:'stress'
                },
                moduleList: []
            }
        },
        created: function () {
            this.getProjectByUser()
        },
        methods: {
            getProjectByUser: function () {
                this.$fetch(this.$api.projectUrl + localStorage.user).then(response => {
                    console.log(response)
                    this.moduleList = response.moduleList
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
                        self.$del(self.$api.projectDetailUrl + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this project have delete.',
                                    'success'
                                );
                                self.getProjectByUser()
                            }
                        })
                    }
                })

            },
            editModal:function(module){
                $('#mainModal').modal()
                $('#moduleName').val(module.module_name)
                $('#moduleDesc').val(module.module_desc)
                $('#moduleType').val(module.module_type)
                $('#moduleEnv').val(module.module_env)
            },
            editProject: function (module) {
                this.$post(this.$api.projectDetailUrl, this.qs.stringify({
                    id: module.id,
                    module_name: $('#moduleName').val(),
                    module_desc: $('#moduleDesc').val(),
                    module_type: $('#moduleType').val(),
                    module_env: $('#moduleEnv').val(),
                    user: localStorage.user
                })).then(response => {
                    if (response.code == 0){
                        $('#mainModal').modal('hide')
                        this.getProjectByUser()
                    }else {
                        swal ( "Oops" ,  response.msg ,  "error" )
                    }
                }).catch( error => {
                    swal ( "Oops" ,  error ,  "error" )
                })
            },
            addModule:function () {
                $('#addModal').modal()
            },
            addProject: function () {
                this.$post(this.$api.projectDetailUrl, this.qs.stringify({
                    module_name: $('#addModuleName').val(),
                    module_desc: $('#addModuleDesc').val(),
                    module_type: $('#addModuleType').val(),
                    module_env: $('#addModuleEnv').val(),
                    user: localStorage.user
                })).then(response => {
                    if (response.code == 0){
                        $('#addModal').modal('hide')
                        this.getProjectByUser()
                    }else {
                        swal ( "Oops" ,  response.msg ,  "error" )
                    }
                }).catch( error => {
                    swal ( "Oops" ,  error ,  "error" )
                })
            },
            runProject:function (id) {
                this.$fetch(this.$api.queryScriptUrl+id).then(response => {
                    console.log(response)
                    if (response.code == 0 && (response.scriptsList).length == 0){
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
                                        module_id:id
                                    }
                                })
                            }
                        })
                    }
                    else if (response.code == 0 && (response.scriptsList).length != 0) {
                        this.$router.push({
                            name:'scripts',
                            query:{
                                module_id:id
                            }
                        })
                    }
                    else {
                        swal ( "未知错误" ,  response.msg ,  "error" )
                    }
                })
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