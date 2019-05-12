<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col" style="margin-left: -30px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">
                            <table class="table table-hover tm-table-small tm-product-table" style='table-layout: fixed'>
                                <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th  nowrap="nowrap" scope="col">脚本名称</th>
                                    <th nowrap="nowrap" scope="col">请求方式</th>
                                    <th nowrap="nowrap" scope="col">接口类型</th>
                                    <th nowrap="nowrap" scope="col">创建时间</th>
                                    <th nowrap="nowrap" scope="col">更新时间</th>
                                    <th nowrap="nowrap" scope="col">压测时长</th>
                                    <th nowrap="nowrap" scope="col">压测数</th>
                                    <th nowrap="nowrap" scope="col">接口url</th>
                                    <th nowrap="nowrap" scope="col">接口</th>
                                    <th nowrap="nowrap" scope="col">接口方法</th>
                                    <th nowrap="nowrap" scope="col">参数类型</th>
                                    <th nowrap="nowrap" scope="col">参数值</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="script in scriptList">
                                    <th scope="row"><input type="checkbox"/></th>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_interface_name}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{reuqetType[script.pre_interface_request_type]}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" class="tm-product-name">{{interfaceType[script.pre_type]}},
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.create_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.update_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_time}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_num}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.url}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_interface}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_interface_method}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_interface_param_type}}</td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{script.pre_interface_param_value}}</td>
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
                        <a href="#" class="btn btn-primary btn-block text-uppercase mb-3" @click="addScripts()">Add new Scripts</a>
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
    </div>
</template>

<script>
    export default {
        name: "Scripts",
        data(){
            return {
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
        methods:{
            getScriptsList:function () {
                this.$fetch(this.$api.queryScriptUrl+this.$route.query.module_id).then(response => {
                    this.scriptList = response.scriptsList
                })
            },
            addScripts:function () {
                this.$router.push({
                    name:'addScripts',
                    query:{
                        module_id:this.$route.query.module_id
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>