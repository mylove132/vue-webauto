<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">
                <div class="form-group col-sm-12 col-md-12 col-lg-4 col-xl-12 "
                     style=" vertical-align: middle;height:100px;margin-left: -30px;">
                    <select style="width: 150px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_category"
                            @change="filterCategory">
                        <option value="0">请选择分类</option>
                        <option v-for="category in categoryList" :value="category.id">{{category.name}}</option>
                    </select>
                    <select style="width: 150px;height: 40px;margin-left: 80px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9" id="select_user"
                            @change="filterUser">
                        <option value="0">请选择用户</option>
                        <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
                    </select>
                    <input type="text" style="width: 160px;height: 40px;margin-left: 100px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9"
                           id="search" placeholder="模糊匹配脚本名" v-on:keyup="search">
                    <input type="button" value="SEARCH"
                           style="height: 40px;background-color: #f5a623;border-radius: 3px;color: white"
                           @click="search">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col"
                     style="margin-left: -30px;margin-top: -40px">
                    <div class="tm-bg-primary-dark tm-block tm-block-products">
                        <div class="tm-product-table-container">
                            <table class="table table-hover tm-table-small tm-product-table" style=''>
                                <thead>
                                <tr>
                                    <th nowrap="nowrap" scope="col">标题</th>
                                    <th nowrap="nowrap" scope="col">分类</th>
                                    <th nowrap="nowrap" scope="col">创建人</th>
                                    <th nowrap="nowrap" scope="col">创建时间</th>
                                    <th nowrap="nowrap" scope="col">更新时间</th>
                                    <th scope="col">删除</th>
                                    <th scope="col">编辑</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="article in articleList" @click="seeArticleDetail(article)">
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{article.title}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{article.categoryName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                        {{article.userName}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{article.createTime}}
                                    </td>
                                    <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                        class="tm-product-name">{{article.updateTime}}
                                    <td>
                                        <a href="javascript:void(0);" class="tm-product-delete-link" @click="delArticle(article.id)">
                                            <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" @click="editArticle(article)" class="tm-product-delete-link">
                                            <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="page-box" style="margin-left: 780px">
                            <button @click="goto(-1)" id="beforeBtn" style="color: black;background-color: yellow;border-radius: 5px"> 上一页</button>
                            <label style="color: white;margin-left: 20px;margin-right: 20px">当前页: {{params.currentPage}}</label>
                            <button @click="goto(+1)" id="netBtn" style="color: black;background-color: yellow;border-radius: 5px"> 下一页</button>
                        </div>
                        <!-- table container -->
                        <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" @click="addArticle()">Add new
                            Scripts</a>
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
        name: "ArticleList",
        data(){
            return {
                articleList:[],
                categoryList:[],
                users:[],
                params:{
                    pageSize: 10,
                    currentPage: 1
                }
            }
        },

        created(){
            this.$fetch(this.$api.articleUrl).then(response =>{
                if (response.code == 0){
                    this.articleList=response.data.list
                }
            });
            this.$fetch(this.$api.categoryurl).then(response => {
                if (response.code == 0){
                    this.categoryList = response.data
                }
            });
            this.$fetch(this.$api.userUrl).then(resonse => {
                if (resonse.code == 0) {
                    this.users = resonse.data.list
                }
            })
        },
        methods:{
            delArticle:function (id) {
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
                        self.$del(self.$api.articleUrl +"/"+ id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this script have delete.',
                                    'success'
                                );
                                this.$fetch(this.$api.articleUrl).then(response =>{
                                    if (response.code == 0){
                                        this.articleList=response.data.list
                                    }
                                });
                            }
                        })
                    }
                })
            },
            editArticle:function (article) {
                
            },
            filterUser:function(){},
            filterCategory:function(){},
            search:function(){},
            addArticle:function(){
                this.$router.push({
                    name: 'addjmeterArticle',
                    query: {
                    }
                })
            },
            seeArticleDetail:function(article){
                this.$router.push({
                    name: 'articleDetail',
                    query: {
                    }
                })
            },
            goto(value){
                let next = this.params.currentPage + parseInt(value);
                this.$fetch(this.$api.articleUrl, {
                    currentPage: next,
                    pageSize:10
                }).then(response => {
                    if (response.code == 0){
                        this.articleList = response.data.list
                    }
                })
                this.params.currentPage = next > 0 ? next : 1;

            }
        }
    }
</script>

<style scoped>

</style>