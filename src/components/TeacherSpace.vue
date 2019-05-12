<template>
    <div class="content">
        <div class="row" style="margin-top: 50px;">
            <div class="col-md-6">
                <div class="input-group col-md-6" style="margin-top:5px;positon:relative;margin-left: 80px">
                    <span class="input-group-btn">
                        <div class="col-sm-6">
                        <select class="form-control" id="modTypes" style="border-radius:6px;">
                                                            <option value="1">教师空间</option>
                                                            <option value="2">教师pad</option>
                                                            <option value="4">商城</option>
                                                            <option value="3">学生pad</option>
                                                        </select>
                        <select class="form-control" id="modules" style="border-radius:6px;">
                                                                <option value="1">请选择</option>
                                                            <option value="1">教师空间</option>
                                                            <option value="2">教师pad</option>
                                                            <option value="4">商城</option>
                                                            <option value="3">学生pad</option>
                                                        </select>
                            </div>
                        <button class="btn btn-info btn-search" style="border-radius:6px;margin-left: 10px">查找</button>
                        <button class="btn btn-info btn-search"
                                style="margin-left:3px;border-radius:6px;margin-left: 10px"
                                data-toggle="modal"
                                data-target="#myModal">添加</button>
                    </span>
                </div>
                <div class="modal right fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" id="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                                <h4 class="modal-title" id="myModalLabel">添加模块</h4>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="moduleName">模块名称</label>
                                        <input type="text" class="form-control" id="moduleName" placeholder="模块名称">
                                    </div>
                                    <div class="form-group">
                                        <label for="moduleDesc">模块描述</label>
                                        <input type="text" class="form-control" id="moduleDesc" placeholder="模块功能说明">
                                    </div>
                                    <div class="form-group">
                                        <label for="moduleDesc">模块类型</label>
                                        <select class="form-control" id="moduleType">
                                            <option value="1">教师空间</option>
                                            <option value="2">教师pad</option>
                                            <option value="4">商城</option>
                                            <option value="3">学生pad</option>
                                        </select>
                                    </div>
                                    <button type="button" class="btn btn-info" id="addModule" @click="addModule()">添加
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" style="margin-top: 10px;margin-left: 10px" v-show="datas.length != 0">
                <div>
                    <table class="table" style="background-color: #ccc;border-radius: 6px;">
                        <thead>
                        <tr>
                            <th>模块名称</th>
                            <th>创建时间</th>
                            <th>更新时间</th>
                            <th>模块描述</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="item in datas">
                            <td>{{item.module_name}}</td>
                            <td>{{item.create_time}}</td>
                            <td>{{item.update_time}}</td>
                            <td>{{item.module_desc}}</td>
                            <td>
                                <button style="margin-left: 3px" class="btn btn-primary" data-toggle="modal"
                                        data-target="#editModal" v-on:click="editModule(item)">
                                    编辑
                                </button>
                                <div class="modal right fade" id="editModal" tabindex="-1" role="dialog"
                                     aria-labelledby="myModalLabel"
                                     aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-hidden="true">
                                                    &times;
                                                </button>
                                                <h4 class="modal-title">修改模块</h4>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="moduleName">模块名称</label>
                                                        <input type="text" class="form-control" id="moduleNameEdit"
                                                               placeholder="模块名称">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="moduleDesc">模块描述</label>
                                                        <input type="text" class="form-control" id="moduleDescEdit"
                                                               placeholder="模块功能说明">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="moduleDesc">模块类型</label>
                                                        <select class="form-control" id="moduleTypeEdit">
                                                            <option value="1">教师空间</option>
                                                            <option value="2">教师pad</option>
                                                            <option value="4">商城</option>
                                                            <option value="3">学生pad</option>
                                                        </select>
                                                    </div>
                                                    <button type="button" class="btn btn-info"
                                                            @click="saveModule(item.id)">修改
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button style="margin-left: 3px" class="btn btn-danger" @click="delModule(item.id)">删除
                                </button>
                                <button style="margin-left: 3px" class="btn btn-info" @click="runModule(item.id)">测试接口
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div id="example" style="text-align: center">
                    <ul id="pageLimit"></ul>
                </div>
            </div>
            <div id="operate" class="col-md-6">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeacherSpace",
        data() {
            return {
                datas: []
            }

        },
        created: function () {
            this.$fetch(this.$api.teacherSpaceModule + sessionStorage.user).then(response => {
                this.datas = response.moduleList
            })
        },
        methods: {
            editModule: function (item) {
                $('#moduleNameEdit').val(item.module_name);
                $('#moduleDescEdit').val(item.module_desc);
                $('#moduleTypeEdit').val(item.module_type);
            },
            saveModule: function (id) {
                this.$post(this.$api.teacherSpaceModuleDetail, this.qs.stringify({
                    id: id,
                    module_name: $('#moduleNameEdit').val(),
                    module_desc: $('#moduleDescEdit').val(),
                    user: sessionStorage.user,
                    module_type: $('#moduleTypeEdit').val()
                })).then(response => {
                    if (response.code == 0) {
                        this.$fetch(this.$api.teacherSpaceModule + sessionStorage.user).then(response => {
                            this.datas = response.moduleList
                            $('#editModal').modal('hide')
                        })
                    }
                })
            },
            delModule: function (id) {
                this.$del(this.$api.teacherSpaceModuleDetail + id).then(response => {
                    if (response.code == 0) {
                        this.$fetch(this.$api.teacherSpaceModule + sessionStorage.user).then(response => {
                            this.datas = response.moduleList
                        })
                    }
                })
            },
            runModule: function (id) {

            },
            addModule: function () {
                this.$post(this.$api.teacherSpaceModuleDetail, this.qs.stringify({
                    module_name: $('#moduleName').val(),
                    module_desc: $('#moduleDesc').val(),
                    user: sessionStorage.user,
                    module_type: $('#moduleType').val()
                })).then(response => {
                    if (response.code == 0) {
                        this.$fetch(this.$api.teacherSpaceModule + sessionStorage.user).then(response => {
                            this.datas = response.moduleList
                            $('#myModal').modal('hide')

                        })
                    }
                })
            }


        },
        mounted: function () {
            const self = this;
            $('#pageLimit').bootstrapPaginator({
                currentPage: 1,
                numberOfPages: 5,
                totalPages: 3,
                size: "normal",
                bootstrapMajorVersion: 3,
                alignment: "right",
                itemTexts: function (type, page, current) {
                    switch (type) {
                        case "first":
                            return "首页";
                        case "prev":
                            return "上一页";
                        case "next":
                            return "下一页";
                        case "last":
                            return "末页";
                        case "page":
                            return page;
                    }//默认显示的是第一页。
                },
                onPageClicked: function (event, originalEvent, type, page) {//给每个页眉绑定一个事件，其实就是ajax请求，其中page变量为当前点击的页上的数字。
                    self.$fetch(self.$api.teacherSpaceModule + sessionStorage.user, {
                        pageNo: page
                    }).then(response => {
                        console.log(response)
                        self.datas = response.moduleList
                    })
                }
            });
        }
    }
</script>

<style scoped>
    .content {
        background: -webkit-linear-gradient(left, #000000, #9acfea); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(right, #000000, #9acfea); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient(right, #000000, #9acfea); /* Firefox 3.6 - 15*/
        background: linear-gradient(to right, #000000, #9acfea); /* 标准的语法 */
    }

    .mybtn {
        position: fixed;
        right: 10px;
        bottom: 20px;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 0px;
        text-align: center;
        line-height: 50px;
    }

    .modal.left .modal-dialog,
    .modal.right .modal-dialog {
        position: fixed;
        margin: auto;
        width: 420px;
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
    }

    .modal.left .modal-body,
    .modal.right .modal-body {
        padding: 15px 15px 80px;
    }

    /*Left*/
    .modal.left.fade .modal-dialog {
        left: -320px;
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
        right: -320px;
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
        border-bottom-color: #EEEEEE;
        background-color: #FAFAFA;
    }

</style>
