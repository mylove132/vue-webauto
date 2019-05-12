<template>
    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="addModal" role="dialog" aria-labelledby="gridSystemModalLabel" >
        <div class="modal-dialog modal-lg" role="document" style="width: 1200px">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #000000;opacity:0.5;border-radius: 10px">
                    <h4 class="modal-title" id="gridSystemModalLabel1" style="color: white">添加项目</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body" style="background-color: #2c3e50;border-radius: 10px">
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
                <div class="modal-footer" style="background-color: #000000;opacity:0.5;border-radius: 10px">
                    <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:#ffeeba;border-radius: 10px">Close</button>
                    <button type="button" class="btn btn-primary" style="border-radius: 10px" @click="addProject()">Add Project</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>