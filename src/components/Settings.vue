<template>
    <div class="" id="home">
        <div class="container mt-5">

            <div class="row tm-content-row" style="margin-bottom: 30px">
                <a class="card-link" data-toggle="collapse" href="#collapse1" id="system" style="color: white;font-size: 20px;display: block;float: left;margin-left: 250px;text-shadow:5px 2px 6px #6666CC;" @click="selectSystem">
                    压测系统设置
                </a>
                <a class="card-link" data-toggle="collapse" href="#collapse2" id="user" style="color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px #6666CC;" @click="selectUser">
                    用户系统设置
                </a>
                <a class="card-link" data-toggle="collapse" href="#collapse3" id="cases" style="margin-left: 50px;color: white;font-size: 20px;display: block;float: left;text-shadow:5px 2px 6px #6666CC;" @click="selectCases">
                    用例系统设置
                </a>
                <a style="float: left;margin-left: 300px"></a>
            </div>
            <div id="collapse1" class="show collapse" data-parent="#home">
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title">测试环境配置</h2>
                            <table class="table table-hover tm-table-small tm-product-table">
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">id</th>
                                    <th nowrap="nowrap" scope="col">环境</th>
                                    <th nowrap="nowrap" scope="col">zookeeper</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                    <!--<th scope="col"></th>-->
                                </tr>
                                </thead>
                                <tbody id="envTbody">
                                <tr v-for="(env,index) in envList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{env.id}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!env.status">
                                        {{env.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!env.status">
                                        <input type="text" id="envId" v-bind:value="env.name"/>
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!env.status">
                                        {{env.zk}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!env.status">
                                        <input type="text" id="zkId" v-bind:value="env.zk"/>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delEnv(env.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editEnv(env,index)" class="tm-product-delete-link" v-if="!env.status">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="saveEnv(env.id)" class="tm-product-delete-link" v-else="!env.status">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-show="env.status">
                                        <a href="javascript:void(0);" @click="cancelEdit()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addEnv()">添加环境</a>
                        </div>
                    </div>
                </div>
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title">测试系统配置</h2>
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">id</th>
                                    <th nowrap="nowrap" scope="col">系统</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(type,index) in typeList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{type.id}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!type.status">
                                        {{type.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!type.status">
                                        <input type="text" id="typeId" v-bind:value="type.name"/>
                                    </td>
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!type.status">-->
                                    <!--{{type.url}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!type.status">-->
                                    <!--<input type="text" id="urlId" v-bind:value="type.url"/>-->
                                    <!--</td>-->
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delType(type.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editType(type,index)" class="tm-product-delete-link" v-if="!type.status">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="saveType(type.id)" class="tm-product-delete-link" v-else="!type.status">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-show="type.status">
                                        <a href="javascript:void(0);" @click="cancelEditType()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addType()">添加系统</a>
                        </div>
                    </div>
                </div>
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title">请求方式配置</h2>
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">id</th>
                                    <th nowrap="nowrap" scope="col">请求方式</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(requestType,index) in requestTypeList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{requestType.id}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!requestType.status">
                                        {{requestType.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!requestType.status">
                                        <input type="text" id="requestTypeId" v-bind:value="requestType.name"/>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delRequestType(requestType.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editRequestType(requestType,index)" class="tm-product-delete-link" v-if="!requestType.status">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="saveRequestType(requestType)" class="tm-product-delete-link" v-else="!requestType.status">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>

                                        <!--<a href="javascript:void(0);" @click="editRequestType(requestType,index)" class="tm-product-delete-link">-->
                                        <!--<i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>-->
                                        <!--</a>-->
                                    </td>
                                    <td v-show="requestType.status">
                                        <a href="javascript:void(0);" @click="cancelEditRequestType()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addRequestType()">添加请求方式</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="collapse2" class="collapse hide" data-parent="#home">
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title" style="float: left;margin-left: 500px">权限配置</h2>
                            <input type="text" style="float: left;margin-left: 200px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9"
                                   id="search" placeholder="模糊匹配用户名" v-on:keyup="search">
                            <input type="button" value="SEARCH"
                                   style="margin-left: -20px;background-color: #f5a623;border-radius: 3px;color: white"
                                   @click="search">
                            <table class="table table-hover tm-table-small tm-product-table">
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">用户</th>
                                    <th nowrap="nowrap" scope="col">角色id</th>
                                    <th nowrap="nowrap" scope="col">角色</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(role, index) in roleList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{role.userName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" >
                                        {{role.roleId}}
                                    </td>

                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!role.editStatus">
                                        {{role.role}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!role.editStatus">
                                        <select style="width: 130px;" id="editRoleSelect">
                                            <option v-for="r in listRole" v-bind:value="r.id">{{r.role}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editRole(role,index)" class="tm-product-delete-link" v-if="!role.editStatus">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="saveRole(role)" class="tm-product-delete-link" v-else="!role.editStatus">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-show="role.editStatus">
                                        <a href="javascript:void(0);" @click="cancelEditRole()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="collapse3" class="collapse hide" data-parent="#home">
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title">用例项目配置</h2>
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">id</th>
                                    <th nowrap="nowrap" scope="col">项目</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(pro,index) in caseProjectList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{pro.id}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!pro.status">
                                        {{pro.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!pro.status">
                                        <input type="text" id="proId" v-bind:value="pro.name"/>
                                    </td>
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!type.status">-->
                                    <!--{{type.url}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!type.status">-->
                                    <!--<input type="text" id="urlId" v-bind:value="type.url"/>-->
                                    <!--</td>-->
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delPro(pro.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editPro(pro,index)" class="tm-product-delete-link" v-if="!pro.status">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="savePro(pro.id)" class="tm-product-delete-link" v-else="!pro.status">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-show="pro.status">
                                        <a href="javascript:void(0);" @click="cancelEditPro()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addCaseProject()">添加项目</a>
                        </div>
                    </div>
                </div>
                <div class="row tm-content-row">
                    <div class="col-12 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 class="tm-block-title">用例模块配置</h2>
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">id</th>
                                    <th nowrap="nowrap" scope="col">环境</th>
                                    <th nowrap="nowrap" scope="col">项目</th>
                                    <th nowrap="nowrap" scope="col">模块</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(module,index) in caseModuleList">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{module.id}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!module.status">
                                        {{module.name}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!module.status">
                                        <input type="text" id="moduleId" v-bind:value="module.name"/>
                                    </td>
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-if="!type.status">-->
                                    <!--{{type.url}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" v-else="!type.status">-->
                                    <!--<input type="text" id="urlId" v-bind:value="type.url"/>-->
                                    <!--</td>-->
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delModule(module.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editModule(module,index)" class="tm-product-delete-link" v-if="!module.status">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                        <a href="javascript:void(0);" @click="saveModule(module.id)" class="tm-product-delete-link" v-else="!module.status">
                                            <i class="fa fa-check tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                    <td v-show="pro.status">
                                        <a href="javascript:void(0);" @click="cancelEditPro()" class="tm-product-delete-link">
                                            <i class="fa fa-thumbs-down tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addCaseProject()">添加项目</a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- row -->
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addEnvModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel1" style="color: white">添加环境</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body" style="background-color: #2c3e50;">
                            <div class="row" style="margin-left: 150px;margin-top: 35px">
                                <div class="col-md-8">
                                    <nobr>
                                        <label style="color: white;margin-left: -120px"><strong>环境名称:</strong></label>
                                        <input id="addEnvName" type="text" style="border-radius: 5px;border: #2e6e9e 2px solid;margin-left: 5px" />
                                        <strong style="color: white">zk地址:&nbsp;&nbsp;</strong>
                                        <input id="addEnvZk" type="text" style="border-radius: 5px;border: #2e6e9e 2px solid" />
                                    </nobr>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addEnvSubmit">添加</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addTypeModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel2" style="color: white">添加环境</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body" style="background-color: #2c3e50;">
                            <div class="row" style="margin-left: 150px;margin-top: 35px">
                                <div class="col-md-8">
                                    <nobr>
                                        <label style="color: white;margin-left: -120px"><strong>系统名称:</strong></label>
                                        <input id="addTypeName" type="text" style="border-radius: 5px;border: #2e6e9e 2px solid;margin-left: 5px" />
                                    </nobr>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addTypeSubmit">添加</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addRequestTypeModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel3" style="color: white">添加请求方式</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body" style="background-color: #2c3e50;">
                            <div class="row" style="margin-left: 150px;margin-top: 35px">
                                <div class="col-md-8">
                                    <nobr>
                                        <label style="color: white;margin-left: -120px"><strong>请求方式:</strong></label>
                                        <input id="addRequestTypeName" type="text" style="border-radius: 5px;border: #2e6e9e 2px solid;margin-left: 5px" />
                                    </nobr>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addRequestTypeSubmit">添加</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
            <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addCaseProjectModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
                <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #567086;">
                            <h4 class="modal-title" id="gridSystemModalLabel5" style="color: white">添加用例项目</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body" style="background-color: #2c3e50;">
                            <div class="row" style="margin-left: 150px;margin-top: 35px">
                                <div class="col-md-8">
                                    <nobr>
                                        <label style="color: white;margin-left: -120px"><strong>项目名称:</strong></label>
                                        <input id="addProjectName" type="text" style="border-radius: 5px;border: #2e6e9e 2px solid;margin-left: 5px" />
                                    </nobr>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="background-color: #567086;">
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                            <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addCaseProjectSubmit">添加</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data(){
            return{
                userId:0,
                envList:[],
                typeList:[],
                requestTypeList:[],
                roleList:[],
                listRole:[],
                caseProjectList: [],
                caseModuleList: []
            }
        },
        created:function () {
            this.$fetch(this.$api.envUrl).then(response => {
                if (response.code == 0){
                    response.data.forEach(v=>{
                        v.status = false;
                    })
                    this.envList = response.data
                }
            });
            this.$fetch(this.$api.casModuleject).then(response => {
                if (response.code == 0){
                    response.data.list.forEach(v=>{
                        v.status = false;
                    })
                    this.caseModuleList = response.data.list
                }
            });
            this.$fetch(this.$api.typeUrl).then(response => {
                if (response.code == 0){
                    response.data.forEach(v=>{
                        v.status = false;
                    })
                    this.typeList = response.data
                }
            });
            this.$fetch(this.$api.casProject).then(response => {
                if (response.code == 0){
                    response.data.list.forEach(v=>{
                        v.status = false;
                    })
                    this.caseProjectList = response.data.list
                }
            });
            this.$fetch(this.$api.requestTypeUrl).then(response => {
                if (response.code == 0){
                    response.data.forEach(v=>{
                        v.editStatus = false;
                    })
                    this.requestTypeList = response.data
                }
            });
            this.$fetch(this.$api.roleUrl).then(response => {
                if (response.code == 0){
                    response.data.forEach(v=>{
                        v.editStatus = false;
                    })
                    this.roleList = response.data
                }
            });
            this.$fetch(this.$api.listRoleUrl).then(response => {
                if (response.code == 0){
                    this.listRole = response.data
                }
            });
        },
        methods:{
            addCaseProject:function(){
                $("#addCaseProjectModal").modal()
            },
            addCaseProjectSubmit:function(){
                this.$post(this.$api.casProject,this.qs.stringify({
                    name:$("#addProjectName").val()
                })).then( response => {
                    if (response.code == 0){
                        $("#addCaseProjectModal").modal("hide")
                        swal("success","添加成功","success");
                        this.$fetch(this.$api.casProject).then(response => {
                            if (response.code == 0){
                                this.caseProjectList = response.data.list
                            }
                        });
                    } else{
                        swal("success",response.message,"error");
                    }
                })
            },
            delPro:function(proId){

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
                        self.$del(self.$api.casProject+"?projectId="+proId).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this env have delete.',
                                    'success'
                                );
                                self.$fetch(self.$api.casProject).then(response => {
                                    if (response.code == 0){
                                        self.caseProjectList = response.data.list
                                    }
                                });
                            }
                        })
                    }
                })

            },
            savePro:function(id){
                let proName = $("#proId").val();
                if (proName == null || "" == proName){
                    swal("error","项目名称不能为空","error");
                    return;
                }
                this.$put(this.$api.casProject,this.qs.stringify({
                    id:id,
                    name:proName
                })).then(response => {
                    if (response.code == 0){
                        swal("success","项目更新完成","success");
                        this.$fetch(this.$api.casProject).then(response => {
                            if (response.code == 0){
                                this.caseProjectList = response.data.list
                            }
                        });
                    }else {
                        swal("error",response.message,"error");
                    }
                })
            },
            cancelEditPro:function(){
                this.$fetch(this.$api.casProject).then(response => {
                    if (response.code == 0){
                        this.caseProjectList = response.data.list
                    }
                });
            },
            editPro:function(pro,index){
                pro.status = true;
                this.$set(this.caseProjectList, index, pro);
            },
            selectSystem:function(){
                $("#system").css('background','#008080')
                $("#user").css('background','')
                $("#cases").css('background','')
            },
            selectUser:function(){
                $("#system").css('background','')
                $("#user").css('background','#008080')
                $("#cases").css('background','')
            },
            selectCases:function(){
                $("#system").css('background','')
                $("#user").css('background','')
                $("#cases").css('background','#008080')
            },
            delEnv:function (id) {
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
                        self.$del(self.$api.envUrl+"/" + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this env have delete.',
                                    'success'
                                );
                                self.$fetch(self.$api.envUrl).then(response => {
                                    if (response.code == 0){
                                        self.envList = response.data
                                    }
                                });
                            }
                        })
                    }
                })
            },
            editEnv:function (env,index) {
                env.status = true;
                this.$set(this.envList, index, env);
            },
            addEnv:function () {
                $("#addEnvModal").modal()
            },
            addEnvSubmit:function(){
                if ($("#addEnvName").val() == "" || $("#addEnvName").val() == null){
                    $("#addEnvName").focus();
                    swal("warning","环境名称不能为空","warning");
                    return;
                }
                if ($("#addEnvZk").val() == "" || $("#addEnvZk").val() == null){
                    $("#addEnvZk").focus();
                    swal("warning","zk地址不能为空","warning");
                    return;
                }
                this.$post(this.$api.envUrl,this.qs.stringify({
                    name:$("#addEnvName").val(),
                    zk:$("#addEnvZk").val()
                })).then(response => {
                    if (response.code == 0){
                        $("#addEnvModal").modal('hide')
                        swal("success","添加完成","success");
                        this.$fetch(this.$api.envUrl).then(response => {
                            if (response.code == 0){
                                this.envList = response.data
                            }
                        });
                    }
                }).catch(res => {
                    swal("error","测试环境添加失败","error")
                })
            },
            cancelEdit:function(){
                this.$fetch(this.$api.envUrl).then(response => {
                    if (response.code == 0){
                        this.envList = response.data
                    }
                });
            },
            saveEnv:function(id){
                if ($("#envId").val() == "" || $("#envId").val() == null){
                    $("#envId").focus();
                    swal("warning","环境名称不能为空","warning");
                    return;
                }
                if ($("#zkId").val() == "" || $("#zkId").val() == null){
                    $("#zkId").focus();
                    swal("warning","zk地址不能为空","warning");
                    return;
                }
                this.$put(this.$api.envUrl,this.qs.stringify({
                    id:id,
                    name:$("#envId").val(),
                    zk:$("#zkId").val()
                })).then(response => {
                    if (response.code == 0){
                        swal("success","修改完成","success");
                        this.$fetch(this.$api.envUrl).then(response => {
                            if (response.code == 0){
                                this.envList = response.data
                            }
                        });
                    }
                }).catch(res => {
                    swal("error","修改失败","error");
                })
            },
            delType:function (id) {
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
                        self.$del(self.$api.typeUrl+"/" + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this type have delete.',
                                    'success'
                                );
                                self.$fetch(self.$api.typeUrl).then(response => {
                                    if (response.code == 0){
                                        self.typeList = response.data
                                    }
                                });
                            }
                        })
                    }
                })
            },
            editType:function (type,index) {
                type.status = true;
                this.$set(this.typeList, index, type);
            },
            saveType:function(id){
                if ($("#typeId").val() == "" || $("#typeId").val() == null){
                    $("#typeId").focus();
                    swal("warning","系统名称不能为空","warning");
                    return;
                }
                this.$put(this.$api.typeUrl,this.qs.stringify({
                    id:id,
                    name:$("#typeId").val()
                })).then(response => {
                    if (response.code == 0){
                        swal("success","修改完成","success");
                        this.$fetch(this.$api.typeUrl).then(response => {
                            if (response.code == 0){
                                this.typeList = response.data
                            }
                        });
                    }
                }).catch(res => {
                    swal("error","修改失败","error");
                })
            },
            cancelEditType:function(){
                this.$fetch(this.$api.typeUrl).then(response => {
                    if (response.code == 0){
                        this.typeList = response.data
                    }
                });
            },
            addType:function () {
                $("#addTypeModal").modal()
            },
            addTypeSubmit:function(){
                if ($("#addTypeName").val() == "" || $("#addTypeName").val() == null){
                    $("#addTypeName").focus();
                    swal("warning","环境名称不能为空","warning");
                    return;
                }
                this.$post(this.$api.typeUrl,this.qs.stringify({
                    name:$("#addTypeName").val(),
                    url:$("#urlId").val()
                })).then(response => {
                    if (response.code == 0){
                        $("#addTypeModal").modal('hide')
                        swal("success","添加完成","success");
                        this.$fetch(this.$api.typeUrl).then(response => {
                            if (response.code == 0){
                                this.typeList = response.data
                            }
                        });
                    }
                }).catch(res => {
                    swal("error","测试环境添加失败","error")
                })
            },
            delRequestType:function (id) {
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
                        self.$del(self.$api.requestTypeUrl+"/" + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this env have delete.',
                                    'success'
                                );
                                self.$fetch(self.$api.requestTypeUrl).then(response => {
                                    if (response.code == 0){
                                        self.requestTypeList = response.data
                                    }
                                });
                            }
                        })
                    }
                })
            },
            editRequestType:function (requestType,index) {
                requestType.status = true;
                this.$set(this.requestTypeList, index, requestType);
            },
            saveRequestType:function(requestType){
                this.$put(this.$api.requestTypeUrl,this.qs.stringify({
                    id:requestType.id,
                    name:$("#requestTypeId").val()
                })).then(response => {
                    if(response.code == 0){
                        swal("success","修改完成","success");
                        this.$fetch(this.$api.requestTypeUrl).then(response => {
                            if (response.code == 0){
                                this.requestTypeList = response.data
                            }
                        });
                    }
                }).catch(resp => {
                    swal("error","修改环境失败","error")
                })
            },
            cancelEditRequestType:function(){
                this.$fetch(this.$api.requestTypeUrl).then(response => {
                    if (response.code == 0){
                        this.requestTypeList = response.data
                    }
                });
            },
            addRequestType:function () {
                $("#addRequestTypeModal").modal()
            },
            addRequestTypeSubmit:function(){
                if ($("#addRequestTypeName").val() == "" || $("#addRequestTypeName").val() == null){
                    $("#addRequestTypeName").focus();
                    swal("warning","环境名称不能为空","warning");
                    return;
                }
                this.$post(this.$api.requestTypeUrl,this.qs.stringify({
                    name:$("#addRequestTypeName").val()
                })).then(response => {
                    if (response.code == 0){
                        $("#addRequestTypeModal").modal('hide')
                        swal("success","添加完成","success");
                        this.$fetch(this.$api.requestTypeUrl).then(response => {
                            if (response.code == 0){
                                this.requestTypeList = response.data
                            }
                        });
                    }
                }).catch(res => {
                    swal("error","测试环境添加失败","error")
                })
            },
            editRole:function (role,index) {
                this.$fetch(this.$api.roleUrl+"/"+localStorage.user_id).then(response => {
                    console.log(response)
                    if (response.code == 0){
                        if (response.data<2){
                            swal("warning","没有权限修改用户权限","warning");
                            return;
                        }else {
                           role.editStatus = true;
                            this.$set(this.roleList, index, role);
                        }
                    } 
                });
            },
            saveRole:function(role){
                let userId = role.id;
                let roleId = $("#editRoleSelect").val()
                this.$fetch(this.$api.roleUrl+"/update/"+userId+"/"+roleId).then(response => {
                    if (response.code == 0){
                        swal("success","修改完成","success");
                        this.$fetch(this.$api.roleUrl).then(response => {
                            if (response.code == 0){
                                this.roleList = response.data
                            }
                        });
                    }
                })
            },
            cancelEditRole:function(){
                this.$fetch(this.$api.roleUrl).then(response => {
                    if (response.code == 0){
                        this.roleList = response.data
                    }
                });
            },
            search:function () {
                this.$fetch(this.$api.roleUrl+"/search?keyword="+$("#search").val()).then(response => {
                    if (response.code == 0){
                        this.roleList = response.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>