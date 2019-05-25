<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 " style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 150px;height: 40px;border-radius: 3px" id="select_project" @change="filterProject">
                        <option value="0">==请选择平台==</option>
                        <option value="1">教师空间</option>
                        <option value="2">教师pad</option>
                        <option value="3">学生pad</option>
                        <option value="4">商城</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px" id="select_env" @change="filterProtocol">
                        <option value="0">==请选择环境==</option>
                        <option value="1">dev</option>
                        <option value="2">docker-dev</option>
                        <option value="3">docker-hotfix</option>
                        <option value="4">stress</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px" id="select_user" @change="filterUser">
                        <option value="0">==请选择用户==</option>
                        <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
                    </select>
                    <input type="text" style="width: 160px;height: 40px;margin-left: 100px;border-radius: 3px" id="search" placeholder="模糊匹配项目名" v-on:keyup="search">
                    <input type="button" value="SEARCH" style="height: 40px;background-color: #f5a623;border-radius: 3px" @click="search">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px;margin-top: -40px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th  nowrap="nowrap" scope="col">项目</th>
                                    <th  nowrap="nowrap" scope="col">用户</th>
                                    <th  nowrap="nowrap" scope="col">脚本名称</th>
                                    <th nowrap="nowrap" scope="col">请求方式</th>
                                    <th nowrap="nowrap" scope="col">接口类型</th>
                                    <th nowrap="nowrap" scope="col">创建时间</th>
                                    <th nowrap="nowrap" scope="col">更新时间</th>
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
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.projectname}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.username}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.name}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{reuqetType[script.request_type]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{interfaceType[script.protocol]}}
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.create_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.update_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_number}}</td>
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
                                        <a href="#" @click="editScript(script)" class="tm-product-delete-link" >
                                            <i class="fa fa-align-left tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="runScript(script.id)" class="tm-product-delete-link">
                                            <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addScripts()">Add new Scripts</a>
                    </div>
                </div>
            </div>
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
        data(){
            return {
                id:0,
                headerIndex:0,
                scriptList:[],
                reuqetType:{
                    1:"GET",
                    2:"POST",
                    3:"DELETE"
                },
                interfaceType:{
                    1:'HTTP',
                    2:'DUBBO',
                    3:'SOCKET'
                }
            }
        },
        created:function () {
           this.getScriptsList()
        },
        mounted:function(){

        },
        methods:{
            getScriptsList:function () {
                this.$fetch(this.$api.scriptUrl+"?project="+this.$route.query.module_id).then(response => {
                    this.scriptList = response.data
                })
            },
            addScripts:function () {
                this.$router.push({
                    name:'addScripts',
                    query:{
                        module_id:this.$route.query.module_id
                    }
                })
            },
            filterProjet:function(){
                const projectIndex = $('#filterProject').val();
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
                }else if(platformIndex == 0&envIndex == 0 && userIndex == 0){
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
                }else if(platformIndex == 0&envIndex == 0 && userIndex == 0){
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
                }else if(platformIndex == 0&envIndex == 0 && userIndex == 0){
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
            delScript:function (id) {
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
                        self.$del(self.$api.scriptUrl+id).then(response => {
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
            editScript:function (script) {
                //$('#mainModal').modal()
                this.$router.push({
                    path:'editScript',
                    query:{
                        script:script,
                        module_id:this.$route.query.module_id
                    }
                })
            },
            runScript:function (id) {
                this.$fetch(this.$api.execScriptUrl+id).then(response => {

                })
            }
        }
    }
</script>

<style scoped>

</style>