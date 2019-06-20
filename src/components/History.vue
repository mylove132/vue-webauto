<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 "
                     style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 180px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_cp" @change="selectCP">
                        <option value="0">请选择测试产品</option>
                        <option value="1">教师空间</option>
                        <option value="2">教师pad</option>
                        <option value="3">学生pad</option>
                        <option value="4">商城</option>
                    </select>
                    <select style="width: 180px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_project"
                            @change="selectProject">
                        <option value="0">请选择测试项目</option>
                        <option v-for="project in projectList" v-bind:value="project.id">{{project.name}}</option>
                    </select>
                    <select style="width: 180px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_script"
                            @change="selectScript">
                        <option value="0">请选择测试脚本</option>
                        <option v-for="script in ScriptSelectList" v-bind:value="script.id">{{script.name}}</option>
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
                                    <th nowrap="nowrap" scope="col">执行人</th>
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
                                        {{history.project_name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{history.script_name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{history.username}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{history.status}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{history.create_time}}
                                    <td>
                                        <a href="#" class="tm-product-delete-link" @click="watchLog(history)">
                                            <i class="fa fa-print  tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="watchReport(history)" class="tm-product-delete-link">
                                            <i class="fa fa-binoculars tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click="downloadReport(history)" class="tm-product-delete-link">
                                            <i class="fa fa-download tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
        name: "History",
        data(){
            return {
                historyList:[],
                projectList:[],
                ScriptSelectList:[]
            }
        },
        created:function () {
            this.$fetch(this.$api.historyUrl).then(response => {
                if (response.code == 0){
                    this.historyList = response.data
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
                    this.$fetch(this.$api.projectUrl+"?type="+projectValue).then(response => {
                        self.projectList = response.data
                    })
                }
            },
            selectProject:function(){
                this.ScriptSelectList = []
                this.historyList = []
                let cpValue =  $('#select_cp').val()
                let projectValue =  $('#select_project').val()
                const self = this;
                if (cpValue == 0){
                    swal("warning", "请选择产品", "warning")
                    return;
                }else {
                    if (projectValue == 0){
                        return;
                    }
                    this.$fetch(this.$api.scriptUrl+"?project="+projectValue).then(response => {
                        if (response.code == 0){
                            self.ScriptSelectList = response.data
                            self.ScriptSelectList.forEach(function (script,index) {
                                self.$fetch(self.$api.historyUrl+"?script="+script.id).then(response => {
                                    if (response.code == 0){
                                        if (response.data.length != 0){
                                            for (let tem in response.data){
                                                console.log(response.data[tem])
                                                self.historyList.push(response.data[tem])
                                            }
                                        }

                                    }
                                })
                            })
                        }
                        
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
                    self.$fetch(self.$api.historyUrl+"?script="+scriptId).then(response => {
                        if (response.code == 0){
                            self.historyList = response.data
                        }
                    })
            },
            search:function () {
                
            },
            downloadReport:function(history){
                var url = this.$api.reportDownload;

                url = url + '?history_id='+history.id+'&script_name='+history.script_name+'&md5='+history.md5;
                this.$fetch(url).then(response => {
                    if (response.code == 6001){
                        swal("warning", response.msg, "warning")
                        return;
                    }else if (response.code == 6002){
                        swal("warning", response.msg, "warning")
                        return;
                    }else if (response.code == 6003){
                        swal("warning", response.msg, "warning")
                        return;
                    }
                    else {
                        window.open(url, '_blank');
                    }
                })



            },
            watchReport: function (history) {
                const self = this
                this.$router.push({
                    name:'report',
                    query:{
                        history_id:history.id,
                        script_name:history.script_name,
                        md5:history.md5
                    }
                })
            },
            watchLog: function (history) {
                const self = this
                $.ajax({
                    url: this.$api.logUrl + "?history_id=" + history.id + "&script_name=" + history.script_name + "&md5=" + history.md5,
                    type: 'GET',
                    success: function (response) {
                        if (response.code == 0) {
                            $('#myModal').modal()
                            document.getElementById('log').innerHTML = response.data.log
                        } else {
                            swal("错误", response.msg, "error")
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