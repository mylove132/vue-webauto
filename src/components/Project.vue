<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 " style=" vertical-align: middle;height:100px;margin-left: -30px">
                    <select style="width: 150px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_platform" @change="filterPlatform">
                        <option value="0">请选择平台</option>
                        <option value="1">教师空间</option>
                        <option value="2">教师pad</option>
                        <option value="3">学生pad</option>
                        <option value="4">商城</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_env" @change="filterEnv">
                        <option value="0">请选择环境</option>
                        <option value="1">dev</option>
                    <option value="2">docker-dev</option>
                    <option value="3">docker-hotfix</option>
                    <option value="4">stress</option>
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
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleType[module.type]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{module.name}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.username}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.ctime}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.update_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleEnv[module.env]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.desc}}</td>
                                    <td>
                                        <a href="#" class="tm-product-delete-link" @click="delModule(module.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="editModal(module)" class="tm-product-delete-link" >
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
                                        <a href="#" @click="runProject(module.id,module.env)" class="tm-product-delete-link">
                                            <i class="fa fa-th-list tm-product-delete-icon" title="Align Left"></i>
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
                                                    <strong style="color: white">平台:&nbsp;&nbsp;  </strong>
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
                moduleList: [],
                users:[]
            }
        },
        created: function () {
            this.getProject();
            this.$fetch(this.$api.userUrl).then(resonse => {
                    console.log(resonse.data)
                    if (resonse.code == 0){
                        this.users =  resonse.data
                    }else {
                        return []
                    }
                })
        },
        methods: {
            getProject: function () {
                this.$fetch(this.$api.projectUrl).then(response => {
                    this.moduleList = response.data
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
                        self.$del(self.$api.projectUrl + id+'/').then(response => {
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
                $('#moduleName').val(module.name)
                $('#moduleDesc').val(module.desc)
                $('#moduleType').val(module.type)
                $('#moduleEnv').val(module.env)
            },
            editProject: function (module) {
                this.$put(this.$api.projectUrl+module.id+"/", this.qs.stringify({
                    name: $('#moduleName').val(),
                    desc: $('#moduleDesc').val(),
                    type: $('#moduleType').val(),
                    env: $('#moduleEnv').val(),
                    user: localStorage.user_id
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
            },
            addProject: function () {
                this.$post(this.$api.projectUrl, this.qs.stringify({
                    name: $('#addModuleName').val(),
                    desc: $('#addModuleDesc').val(),
                    type: $('#addModuleType').val(),
                    env: $('#addModuleEnv').val(),
                    user: localStorage.user_id
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
                        swal ( "Error" ,  response.msg ,  "error" )
                    }
                }).catch( error => {
                    swal ( "Error" ,  error ,  "error" )
                })
            },
            filterPlatform:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                    if (envIndex != 0 && userIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&env="+envIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(envIndex != 0 && userIndex == 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&env="+envIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(envIndex == 0 && userIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(platformIndex == 0 && envIndex == 0 && userIndex == 0){
                        this.$fetch(this.$api.projectUrl).then(response => {
                            this.moduleList = response.data
                        })
                    }
                    else{
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex).then(response => {
                            this.moduleList = response.data
                        })
                }
            },
            filterEnv:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                    if (platformIndex != 0 && userIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&env="+envIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(platformIndex != 0 && userIndex == 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&env="+envIndex).then(response => {
                            console.log(response)
                            this.moduleList = response.data
                        })
                    }else if(platformIndex == 0 && userIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?env="+envIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(platformIndex == 0 && envIndex == 0 && userIndex == 0){
                        this.$fetch(this.$api.projectUrl).then(response => {
                            this.moduleList = response.data
                        })
                    }else{
                        this.$fetch(this.$api.projectUrl+"?env="+envIndex).then(response => {
                            this.moduleList = response.data
                        })
                }
            },
            filterUser:function(){
                const platformIndex = $('#select_platform').val();
                const envIndex = $('#select_env').val();
                const userIndex = $('#select_user').val();
                    if (platformIndex != 0 && envIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&env="+envIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(platformIndex != 0 && envIndex == 0){
                        this.$fetch(this.$api.projectUrl+"?type="+platformIndex+"&user="+userIndex).then(response => {
                            console.log(response)
                            this.moduleList = response.data
                        })
                    }else if(platformIndex == 0 && envIndex != 0){
                        this.$fetch(this.$api.projectUrl+"?env="+envIndex+"&user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                    }else if(platformIndex == 0 && envIndex == 0 && userIndex == 0){
                        this.$fetch(this.$api.projectUrl).then(response => {
                            this.moduleList = response.data
                        })
                    }else{
                        this.$fetch(this.$api.projectUrl+"?user="+userIndex).then(response => {
                            this.moduleList = response.data
                        })
                }
            },
            search:function(){
                const search_text = $('#search').val()
                this.$fetch(this.$api.projectUrl+"?search="+search_text).then(response => {
                    this.moduleList = response.data
                })
            },
            runProject:function (id,env) {
                this.$fetch(this.$api.scriptUrl+"?project="+id).then(response => {
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