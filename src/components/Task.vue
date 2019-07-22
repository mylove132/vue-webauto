<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px;margin-top: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container" >
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th scope="col">项目名称</th>
                                    <th scope="col">脚本名称</th>
                                    <th scope="col">创建人</th>
                                    <th scope="col">cron表达式</th>
                                    <th scope="col">创建时间</th>

                                    <th scope="col">定时任务说明</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                    <th scope="col">状态</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="task in taskList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{task.projectName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{task.scriptName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{task.createName}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{task.cron}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{task.createTime}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{task.description}}</td>
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delTask(task.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editTask(task)" class="tm-product-delete-link" >
                                            <i class="fa fa-align-left tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-if="task.status == 0">
                                        <a href="javascript:void(0);" @click="pauseTask(task.id)" class="tm-product-delete-link">
                                            <i class="fa fa-pause tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-else="task.status == 1">
                                        <a href="javascript:void(0);" @click="resumeTask(task.id)" class="tm-product-delete-link">
                                            <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
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
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addTimeTask()">添加定时任务</a>
                        <div class="modal right fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                             aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">添加定时任务</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                                aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body" style="background-color: #4d6579">
                                        <div class="" id="h1">
                                            <div class="container mt-5">
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_task_platform" @change="selectPlatform">
                                                                <option value="0">请选择平台</option>
                                                                <option v-for="projectType in projectTypeList" v-bind:value="projectType.id">{{projectType.name}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_task_project" @change="selectProject">
                                                                <option value="0">请选择项目</option>
                                                                <option v-for="project in projectList" v-bind:value="project.id">{{project.projectName}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_task_script" @change="selectScript">
                                                                <option value="0">请选择脚本</option>
                                                                <option v-for="script in scriptList" v-bind:value="script.id">{{script.scriptName}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="desc">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <input
                                                                        id="description"
                                                                        type="text"
                                                                        class="form-control validate"
                                                                        placeholder="定时任务说明"
                                                                        style="color: white;"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="crontab" style="display: none;">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <input
                                                                        id="cronId"
                                                                        type="text"
                                                                        class="form-control validate"
                                                                        placeholder="请输入cron表达式"
                                                                        style="color: white;margin-left: 0px;width: 300px;float: left;height: 50px;margin-top: -20px"
                                                                />
                                                                <button class="form-group" @click="checkCron()" style="margin-left: 30px;float: left;height: 50px;margin-top: -20px;background-color: #f6a735;color: white;border-radius: 5px">验证cron表达式</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="addBtn" style="display: none">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <button class="form-group" @click="addTask()" style="margin-left: 180px;float: left;height: 50px;margin-top: -20px;background-color: #f6a735;color: white;border-radius: 5px">添加定时任务</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                        </div>
                                        <div>
                                            <div class="col-md-12">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>>

                        <div class="modal right fade" id="editTaskModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                             aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myEditModalLabel">修改定时任务</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                                aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body" style="background-color: #4d6579">
                                        <div class="" id="h">
                                            <div class="container mt-5">
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_edit_task_platform" @change="selectEditPlatform">
                                                                <option value="0">请选择平台</option>
                                                                <option v-for="projectType in projectTypeList" v-bind:value="projectType.id">{{projectType.name}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_edit_task_project" @change="selectEditProject">
                                                                <option value="0">请选择项目</option>
                                                                <option v-for="project in projectSelectList" v-bind:value="project.id">{{project.projectName}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <select class="custom-select" id="select_edit_task_script">
                                                                <option value="0">请选择脚本</option>
                                                                <option v-for="script in scriptList" v-bind:value="script.id">{{script.scriptName}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="desc_edit">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <input
                                                                        id="description_edit"
                                                                        type="text"
                                                                        class="form-control validate"
                                                                        placeholder="定时任务说明"
                                                                        style="color: white;"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="crontab_edit">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <input
                                                                        id="cronIdEdit"
                                                                        type="text"
                                                                        class="form-control validate"
                                                                        placeholder="请输入cron表达式"
                                                                        style="color: white;margin-left: 0px;width: 300px;float: left;height: 50px;margin-top: -20px"
                                                                />
                                                                <button class="form-group" @click="checkEditCron()" style="margin-left: 30px;float: left;height: 50px;margin-top: -20px;background-color: #f6a735;color: white;border-radius: 5px">验证cron表达式</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="row tm-content-row" id="addBtnEdit">
                                                    <div class="col-12 tm-block-col">
                                                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                                                            <div class="form-group col-lg-12">
                                                                <button class="form-group" @click="editBtn()" style="margin-left: 180px;float: left;height: 50px;margin-top: -20px;background-color: #f6a735;color: white;border-radius: 5px">修改定时任务</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                        </div>
                                        <div>
                                            <div class="col-md-12">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        name: "Task",
        data(){
            return{
                taskList:[],
                projectTypeList:[],
                projectList:[],
                scriptList:[],
                scriptEditList:[],
                projectSelectList:[],
                taskId:0,
                status:0
            }
        },
        created:function(){
            this.$fetch(this.$api.taskUrl+"/list").then(response => {
                if (response.code == 0){
                    this.taskList = response.data.list
                }else {
                    swal("错误", response.message, "error")
                }
            });
            this.$fetch(this.$api.typeUrl).then(response => {
                if (response.code == 0){
                    this.projectTypeList = response.data
                }else {
                    swal("错误", response.message, "error")
                }
            })
        },
        methods:{
            addTimeTask:function () {
                $('#taskModal').modal();
            },
            selectPlatform:function () {
                const self = this
                this.projectList = []
                if($('#select_task_platform').val() == 0){
                    return;
                }else {
                    this.$fetch(this.$api.projectUrl+"typeId/"+$('#select_task_platform').val()).then(response => {
                        self.projectList = response.data.list
                    })
                }
            },
            selectEditPlatform:function(){
                const self = this
                this.projectSelectList = []
                if($('#select_edit_task_platform').val() == 0){
                    return;
                }else {
                    self.$fetch(self.$api.projectUrl+"typeId/"+$('#select_edit_task_platform').val()).then(response => {
                        self.projectSelectList = response.data
                    })
                }
            },
            selectProject:function(){
                const self = this
                this.scriptList = []
                if($('#select_task_project').val() == 0){
                    return;
                }
                this.$fetch(this.$api.scriptUrl+"orderByProject/"+$('#select_task_project').val()).then(response => {
                    if (response.code == 0){
                        self.scriptList = response.data.list
                    }
                })
            },
            selectEditProject:function(){
                let self = this
                this.scriptList = []
                if($('#select_edit_task_project').val() == 0){
                    return;
                }this.$fetch(this.$api.scriptUrl+"orderByProject/"+$('#select_edit_task_project').val()).then(response => {
                    if (response.code == 0){
                        self.scriptList = response.data.list
                    }
                })
            },
            selectScript:function(){
                let script = $("#select_task_script").val();
                if (script != 0){
                    $("#crontab").css('display','block')
                    $("#addBtn").css('display','block')
                }else{
                    $("#crontab").css('display','none')
                    $("#addBtn").css('display','none')
                }
            },
            checkCron:function () {
                let cron = $("#cronId").val()
                this.$fetch(this.$api.checkCronUrl+"?cron="+cron).then(response => {
                    if (response.code == 0){
                        let result = response.data
                        if (result == true){
                            swal("表达式正确", response.message, "success")
                        }else {
                            swal("错误", "表达式错误", "error")
                        }
                    }
                })
            },
            checkEditCron:function(){
                let cron = $("#cronIdEdit").val()
                this.$fetch(this.$api.checkCronUrl+"?cron="+cron).then(response => {
                    if (response.code == 0){
                        let result = response.data
                        if (result == true){
                            swal("表达式正确", response.message, "success")
                        }else {
                            swal("错误", "表达式错误", "error")
                        }
                    }
                })
            },
            addTask:function () {
                let params = JSON.stringify({
                    "beanName":"execJmeterScript",
                    "methodName":"execJmeterScript",
                    "params":localStorage.user_id+","+$("#select_task_script").val(),
                    "cronExpression":$("#cronId").val(),
                    "remark": $("#description").val(),
                    "scriptId":$("#select_task_script").val(),
                    "userId":localStorage.user_id
                });
                let self= this;
                $.ajax({
                    url:this.$api.taskUrl,
                    headers:{'token': this.$store.state.token,'Content-Type':'application/json;charset=utf8'},
                    type:"POST",
                    dateType:'json',
                    data:params,
                    success:function (response) {
                        if (response.code == 0){
                            self.$fetch(self.$api.taskUrl+"/list").then(response => {
                                if (response.code == 0){
                                    self.taskList = response.data.list
                                }else {
                                    swal("错误", response.message, "error")
                                }
                            })
                            swal("添加成功", response.message, "success")
                            $('#taskModal').modal('hide');
                        }
                    }
                })
            },
            delTask:function (taskId) {
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
                        self.$del(self.$api.taskUrl+"/batchDel/"+taskId).then(response => {
                            if (response.code == 0){
                                self.$fetch(self.$api.taskUrl+"/list").then(response => {
                                    if (response.code == 0){
                                        self.taskList = response.data.list
                                    }else {
                                        swal("错误", response.message, "error")
                                    }
                                })
                            }else {
                                swal("错误", response.message, "error")
                            }
                        })
                    }
                })
            },
            editTask:function (task) {
                console.log(task)
                let self = this
                this.taskId = task.id
                this.status = task.status
                $("#editTaskModal").modal()
                $("#description_edit").val(task.description);
                $("#cronIdEdit").val(task.cron)
                $("#select_edit_task_platform").val(task.typeId)
                this.projectSelectList = []
                if($('#select_edit_task_platform').val() == 0){
                    return;
                }else {
                    this.$fetch(this.$api.projectUrl+"typeId/"+$('#select_edit_task_platform').val()).then(response => {
                        this.projectSelectList = response.data.list
                    })
                };
                if($('#select_edit_task_project').val() == 0){
                    return;
                }this.$fetch(this.$api.scriptUrl+"orderByProject/"+$('#select_edit_task_project').val()).then(response => {
                    if (response.code == 0){
                        self.scriptList = response.data.list
                    }
                });
            },
            pauseTask:function (taskId) {
                this.$fetch(this.$api.taskUrl+"/pause/"+taskId).then(response => {
                    if (response.code == 0){
                        this.$fetch(this.$api.taskUrl+"/list").then(response => {
                            if (response.code == 0){
                                swal("定时任务已暂停","","success")
                                this.taskList = response.data.list
                            }else {
                                swal("错误", response.message, "error")
                            }
                        })
                    }
                })
            },
            resumeTask:function (taskId) {
                this.$fetch(this.$api.taskUrl+"/resume/"+taskId).then(response => {
                    if (response.code == 0){
                        this.$fetch(this.$api.taskUrl+"/list").then(response => {
                            if (response.code == 0){
                                swal("定时任务已重新启动","","success")
                                this.taskList = response.data.list
                            }else {
                                swal("错误", response.message, "error")
                            }
                        })
                    }
                })
            },
            editBtn:function () {
                if ($("#select_edit_task_project").val() == 0){
                    swal("请选择项目", "", "warning")
                    return;
                }
                if ($("#select_edit_task_script").val() == 0){
                    swal("请选择脚本", "", "warning");
                    return;
                }
                let params = JSON.stringify({
                    "beanName":"execJmeterScript",
                    "methodName":"execJmeterScript",
                    "params":localStorage.user_id+","+$("#select_edit_task_script").val(),
                    "cronExpression":$("#cronIdEdit").val(),
                    "remark": $("#description_edit").val(),
                    "scriptId":$("#select_edit_task_script").val(),
                    "userId":localStorage.user_id,
                    "status":this.status
                });
                let self= this;
                $.ajax({
                    url:this.$api.taskUrl+"/"+self.taskId,
                    headers:{'token': this.$store.state.token,'Content-Type':'application/json;charset=utf8'},
                    type:"PUT",
                    dateType:'json',
                    data:params,
                    success:function (response) {
                        if (response.code == 0){
                            self.$fetch(self.$api.taskUrl+"/list").then(response => {
                                if (response.code == 0){
                                    self.taskList = response.data.list
                                }else {
                                    swal("错误", response.message, "error")
                                }
                            })
                            swal("修改成功", response.message, "success")
                            $('#editTaskModal').modal('hide');
                        }else {
                            swal("error",response.message,"error")
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
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
</style>