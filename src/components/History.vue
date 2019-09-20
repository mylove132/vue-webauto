<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 "
                     style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 180px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_cp" @change="selectCP">
                        <option value="0">请选择测试产品</option>
                        <option v-for="projectType in projectTypeList" v-bind:value="projectType.id">{{projectType.name}}</option>
                    </select>
                    <select style="width: 180px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_project"
                            @change="selectProject">
                        <option value="0">请选择测试项目</option>
                        <option v-for="project in projectList" v-bind:value="project.id">{{project.projectName}}</option>
                    </select>
                    <select style="width: 180px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_script"
                            @change="selectScript">
                        <option value="0">请选择测试脚本</option>
                        <option v-for="script in ScriptSelectList" v-bind:value="script.id">{{script.scriptName}}</option>
                    </select>
                    <input type="text" style="width: 160px;height: 40px;margin-left: 100px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9"
                           id="search" placeholder="模糊匹配脚本名" v-on:keyup="search">
                    <input type="button" value="SEARCH"
                           style="height: 40px;background-color: #f5a623;border-radius: 3px;"
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
                                    <th nowrap="nowrap" scope="col">脚本名称</th>
                                    <th nowrap="nowrap" scope="col">执行策略</th>
                                    <th nowrap="nowrap" scope="col">压测状态</th>
                                    <th nowrap="nowrap" scope="col">压测时间</th>
                                    <th nowrap="nowrap" scope="col">日志</th>
                                    <th nowrap="nowrap" scope="col">报告</th>
                                    <th nowrap="nowrap" scope="col">下载</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="history in historyList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{history.projectName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{history.scriptName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{history.strategy == 0?"人工":"定时任务"}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{history.status}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{history.createTime}}
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="watchLog(history)">
                                            <i class="fa fa-print  tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="watchReport(history.id)" class="tm-product-delete-link">
                                            <i class="fa fa-binoculars tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="downloadReport(history)" class="tm-product-delete-link">
                                            <i class="fa fa-download tm-product-delete-icon" title="Align Left"></i>
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
                    </div>

                </div>
            </div>
        </div>
        <div class="modal right fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">日志</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <pre id="log"></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "History",
        data(){
            return {
                historyList:[],
                projectTypeList:[],
                projectList:[],
                ScriptSelectList:[],
                params:{
                    pageSize: 10,
                    currentPage: 1

                }
            }
        },
        created:function () {
            this.$fetch(this.$api.typeUrl).then(response => {
                if (response.code == 0){
                    this.projectTypeList = response.data
                }
            })
            this.$fetch(this.$api.historyUrl, this.params).then(response => {
                if (response.code == 0){
                    this.historyList = response.data.list
                }
            })
        },
        methods:{
            selectCP:function(){
                this.projectList = []
               let projectValue =  $('#select_cp').val()
                const self = this;
                if (projectValue == 0){
                    return;
                }else {
                    this.$fetch(this.$api.projectUrl+"?typeId="+projectValue).then(response => {
                        self.projectList = response.data.list
                    })
                }
            },
            selectProject:function(){
                this.ScriptSelectList = []
                let cpValue =  $('#select_cp').val()
                let projectValue =  $('#select_project').val()
                if (cpValue == 0){
                    swal("warning", "请选择产品", "warning")
                    return;
                }else {
                    if (projectValue == 0){
                        return;
                    }
                    this.$fetch(this.$api.scriptUrl+"orderByProject/"+projectValue).then(response => {
                        this.ScriptSelectList = response.data.list
                        
                    })
                }
            },
            selectScript:function(){
                if ($("#select_project").val() == 0){
                    swal("warning", "请选择测试项目", "warning")
                    return false;
                }
                let scriptId = $("#select_script").val();
                let self = this
                this.historyList = []
                    self.$fetch(self.$api.historyUrl+"orderByScriptId?scriptId="+scriptId).then(response => {
                        if (response.code == 0){
                            self.historyList = response.data.list
                        }
                    })
            },
            search:function () {
                const search_text = $('#search').val()
                this.$fetch(this.$api.historyUrl + "search?keyword=" + search_text).then(response => {
                    this.historyList = response.data.list
                })
            },
            downloadReport:function(history){
                var url = this.$api.reportDownload;

                url = url + "?md5="+history.md5+"&id="+history.id;
                this.$fetch(url).then(response => {
                    if (response == "下载文件不存在" || response == "下载失败"){
                        swal("错误", response, "error")
                    }
                    else {
                        window.open(url, '_blank');
                    }
                })



            },
            watchReport: function (id) {
                this.$fetch(this.$api.watchReport+"?id="+id).then(
                    response => {
                        if (response.code == 0){
                            window.open(this.$api.report+"/"+response.data.md5+"/index.html","_blank")
                        }else {
                            swal("报告不存在",response.message,"error")
                        }
                    }
                )
            },
            watchLog: function (history) {
                const self = this
                $.ajax({
                    url: this.$api.logUrl + "?id="+history.id+"&md5="+history.md5,
                    type: 'GET',
                    success: function (response) {
                        if (response.code == 0) {
                            $('#myModal').modal()
                            document.getElementById('log').innerHTML = response.data.log
                        } else {
                            swal("错误", response.message, "error")
                        }
                    }
                })
            },
            goto(value){
                let next = this.params.currentPage + parseInt(value);
                this.$fetch(this.$api.historyUrl, {
                    currentPage: next,
                    pageSize:10
                }).then(response => {
                    if (response.code == 0){
                        this.historyList = response.data.list
                    }
                })
                this.params.currentPage = next > 0 ? next : 1;

            }
        }
    }
</script>

<style scoped>
    .modal.left .modal-dialog,
    .modal.right .modal-dialog {
        position: fixed;
        margin: auto;
        width: 850px;

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

    .modal.left .modal-body,
    .modal.right .modal-body {
        padding: 15px 15px 80px;
    }

    /*Left*/
    .modal.left.fade .modal-dialog{
        left: -30px;
        -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
        -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
        -o-transition: opacity 0.3s linear, left 0.3s ease-out;
        transition: opacity 0.3s linear, left 0.3s ease-out;
    }

    .modal.left.fade.in .modal-dialog{
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