<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px;margin-top: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container" >
                            <!--<table class="table table-hover tm-table-small tm-product-table" style=''>-->
                                <!--<thead>-->
                                <!--<tr>-->
                                    <!--<th scope="col">平台</th>-->
                                    <!--<th scope="col">项目名称</th>-->
                                    <!--<th scope="col">创建人</th>-->
                                    <!--<th scope="col">创建时间</th>-->
                                    <!--<th scope="col">更新时间</th>-->
                                    <!--<th scope="col">项目环境</th>-->
                                    <!--<th scope="col">项目描述</th>-->
                                    <!--<th scope="col">&nbsp;</th>-->
                                    <!--<th scope="col">&nbsp;</th>-->
                                    <!--<th scope="col">&nbsp;</th>-->
                                <!--</tr>-->
                                <!--</thead>-->
                                <!--<tbody>-->
                                <!--<tr v-for="module in moduleList">-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleType[module.type]}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{module.name}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.username}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.ctime}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.update_time}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{moduleEnv[module.env]}}</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{module.desc}}</td>-->
                                    <!--<td>-->
                                        <!--<a href="#" class="tm-product-delete-link" @click="delModule(module.id)">-->
                                            <!--<i class="far fa-trash-alt tm-product-delete-icon"></i>-->
                                        <!--</a>-->
                                    <!--</td>-->
                                    <!--<td>-->
                                        <!--<a href="#" @click="editModal(module)" class="tm-product-delete-link" >-->
                                            <!--<i class="fa fa-align-left tm-product-delete-icon" title="Align Left"></i>-->
                                        <!--</a>-->
                                    <!--</td>-->
                                    <!--<div class="modal fade bs-example-modal-lg" tabindex="-1" id="mainModal" role="dialog" aria-labelledby="gridSystemModalLabel" >-->
                                        <!--<div class="modal-dialog modal-lg" role="document" style="width: 1200px">-->
                                            <!--<div class="modal-content">-->
                                                <!--<div class="modal-header" style="background-color: #567086;">-->
                                                    <!--<h4 class="modal-title" id="gridSystemModalLabel" style="opacity: 1;color: white">项目编辑</h4>-->
                                                    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
                                                <!--</div>-->
                                                <!--<div class="modal-body" style="background-color: #2c3e50;">-->
                                                    <!--<div class="row" style="margin-left: 150px;margin-top: 35px">-->
                                                        <!--<div class="col-md-4">-->
                                                            <!--<nobr>-->
                                                                <!--<strong style="color: white">项目:&nbsp;&nbsp;  </strong>-->
                                                                <!--<select style="width: 130px" id="moduleType">-->
                                                                    <!--<option value="1">教师空间</option>-->
                                                                    <!--<option value="2">教师pad</option>-->
                                                                    <!--<option value="3">学生pad</option>-->
                                                                    <!--<option value="4">商城</option>-->
                                                                <!--</select>-->
                                                                <!--<strong style="color: white;padding-left: 5px">项目名称:&nbsp;&nbsp;  </strong>-->
                                                                <!--<input type="text" placeholder="项目名称" style="border-radius: 5px" id="moduleName" />-->
                                                            <!--</nobr>-->
                                                        <!--</div>-->
                                                    <!--</div>-->
                                                    <!--<div class="row" style="margin-left: 165px;margin-top: 35px">-->
                                                        <!--<nobr>-->
                                                            <!--<strong style="color: white">环境:&nbsp;&nbsp;  </strong>-->
                                                            <!--<select style="width: 130px" id="moduleEnv">-->
                                                                <!--<option value="1">dev</option>-->
                                                                <!--<option value="2">docker-dev</option>-->
                                                                <!--<option value="3">docker-hotfix</option>-->
                                                                <!--<option value="4">stress</option>-->
                                                            <!--</select>-->
                                                            <!--<strong style="color: white;padding-left: 5px">项目描述:&nbsp;&nbsp;  </strong>-->
                                                            <!--<input type="text" placeholder="项目描述" style="border-radius: 5px" id="moduleDesc" />-->
                                                        <!--</nobr>-->
                                                    <!--</div>-->
                                                    <!--<div style="height: 80px"></div>-->
                                                <!--</div>-->
                                                <!--<div class="modal-footer" style="background-color:#567086;">-->
                                                    <!--<button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>-->
                                                    <!--<button type="button" class="btn btn-default" style="background-color:#f5a623;border-radius: 10px" @click="editProject(module)">Save changes</button>-->
                                                <!--</div>-->
                                            <!--</div>&lt;!&ndash; /.modal-content &ndash;&gt;-->
                                        <!--</div>&lt;!&ndash; /.modal-dialog &ndash;&gt;-->
                                    <!--</div>-->
                                    <!--<td>-->
                                        <!--<a href="#" @click="runProject(module.id,module.env)" class="tm-product-delete-link">-->
                                            <!--<i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>-->
                                        <!--</a>-->
                                    <!--</td>-->
                                <!--</tr>-->
                                <!--</tbody>-->
                            <!--</table>-->
                        </div>
                        <!-- table container -->
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addTimeTask()">Add Time Task</a>
                        <div class="modal right fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                             aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">添加定时任务</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                                aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <select style="width: 150px;height: 40px;border-radius: 3px" id="select_task_platform" @change="selectPlatform">
                                            <option value="0">==请选择平台==</option>
                                            <option v-for="project in modulType" v-bind:value="project.value">{{project.name}}</option>
                                        </select>
                                        <select style="width: 150px;height: 40px;border-radius: 3px" id="select_task_project" @change="selectProject">
                                            <option value="0">==请选择项目==</option>
                                            <option v-for="project in typeList" v-bind:value="project.id">{{project.name}}</option>
                                        </select>
                                        <select style="width: 150px;height: 40px;border-radius: 3px" id="select_task_script" @change="selectScript">
                                            <option value="0">==请选择脚本==</option>
                                            <option v-for="script in scriptList" v-bind:value="script.id">{{script.name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
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
    const moduleType={
            1:'教师空间',
            2:'教师pad',
            3:'学生pad',
            4:'商城'
        };
    export default {
        name: "Task",
        data(){
            return{
                projectList:[],
                typeList:[],
                scriptList:[]
            }
        },
        mounted:function(){
            const self = this
            this.$fetch(this.$api.projectUrl).then(response => {
                for(let a of response.data){
                    console.log(a);
                }
                self.projectList = response.data
            })
        },
        computed:{
            modulType(){
                let _list = {}, list = [];

                this.projectList.forEach(v=>{
                    if(!_list[v['type']]) {
                        _list[v['type']] = true;
                        list.push({
                            value: v.type,
                            name: ({
                                1: '教师空间',
                                2: '教师pad',
                                3: '学生pad',
                                4: '商城'
                            })[v.type]
                        });
                     }
                });
                return list;
            }
        },
        methods:{
            addTimeTask:function () {
                $('#taskModal').modal();
                console.log(this.projectList)
            },
            selectPlatform:function () {
                const self = this
                if($('#select_task_platform').val() == 0){
                    return;
                }
                this.$fetch(this.$api.projectUrl+"?type="+$('#select_task_platform').val()).then(response => {
                    if (response.code == 0){
                        self.typeList = response.data
                    }
                })
            },
            selectProject:function(){
                const self = this
                if($('#select_task_project').val() == 0){
                    return;
                };
                self.scriptList = []
                this.$fetch(this.$api.scriptUrl+"?project="+$('#select_task_project').val()).then(response => {
                    if (response.code == 0){
                        self.scriptList = response.data
                    }
                })
            },
            selectScript:function () {

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