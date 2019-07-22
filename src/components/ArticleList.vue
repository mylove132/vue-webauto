<template>
    <div id="home">
        <div class="container mt-5">
            <div class="row tm-content-row">

                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-12 tm-block-col"
                     style="margin-left: -30px;margin-top: -40px">
                    <div class="form-group col-sm-4 col-md-4 col-lg-2 col-xl-4 "
                         style=" vertical-align: middle; float: left;margin-left: -100px">
                        <select style="width:200px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9;margin-top: 10px"
                                id="select_category"
                                @change="filterCategory">
                            <option value="0">请选择分类</option>
                            <option v-for="category in categoryList" :value="category.id">{{category.name}}</option>
                        </select>
                        <select style="width:200px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9;margin-top: 50px"
                                id="select_user"
                                @change="filterUser">
                            <option value="0">请选择用户</option>
                            <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
                        </select>
                        <input type="text"
                               style="width:200px;height: 40px;border-radius: 3px;background-color: #394f62;color: white;border: 2px solid #4084c9;margin-top: 50px;margin-left: 65px"
                               id="search" placeholder="模糊匹配文章标题" v-on:keyup="search">
                        <input type="button" value="SEARCH"
                               style="height: 40px;background-color: #f5a623;border-radius: 3px;color: white;"
                               @click="search">
                    </div>
                    <div v-for="article in articleList" style="margin-left: 300px;margin-top: 10px;">
                        <ul>
                            <li @click="seeArticleDetail(article)" style="border-radius: 5px">{{article.title}}<span style="margin-left: -25px;margin-right: -50px">
                                <i class="fa fa-user" aria-hidden="true"></i> {{article.userName}}
                            </span><span style="margin-right: -35px">
                                <i class="fa fa-tree" aria-hidden="true"></i> {{article.categoryName}}
                            </span><span>{{article.updateTime}}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        data() {
            return {
                articleList: [],
                categoryList: [],
                users: [],
                params: {
                    pageSize: 10,
                    currentPage: 1
                }
            }
        },

        created() {
            this.$fetch(this.$api.articleUrl).then(response => {
                if (response.code == 0) {
                    this.articleList = response.data.list
                }
            });
            this.$fetch(this.$api.categoryurl).then(response => {
                if (response.code == 0) {
                    this.categoryList = response.data
                }
            });
            this.$fetch(this.$api.userUrl).then(resonse => {
                if (resonse.code == 0) {
                    this.users = resonse.data.list
                }
            })
        },
        methods: {
            delArticle: function (id) {
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
                        self.$del(self.$api.articleUrl + "/" + id).then(response => {
                            if (response.code == 0) {
                                swal(
                                    'Deleted!',
                                    'this script have delete.',
                                    'success'
                                );
                                this.$fetch(this.$api.articleUrl).then(response => {
                                    if (response.code == 0) {
                                        this.articleList = response.data.list
                                    }
                                });
                            }
                        })
                    }
                })
            },
            editArticle: function (article) {

            },
            filterUser: function () {
            },
            filterCategory: function () {
            },
            search: function () {
            },
            addArticle: function () {
                this.$router.push({
                    name: 'addjmeterArticle',
                    query: {}
                })
            },
            seeArticleDetail: function (article) {
                this.$router.push({
                    name: 'articleDetail',
                    query: {}
                })
            },
            goto(value) {
                let next = this.params.currentPage + parseInt(value);
                this.$fetch(this.$api.articleUrl, {
                    currentPage: next,
                    pageSize: 10
                }).then(response => {
                    if (response.code == 0) {
                        this.articleList = response.data.list
                    }
                })
                this.params.currentPage = next > 0 ? next : 1;

            }
        }
    }
</script>

<style scoped>
    ul {

        list-style-type: none;
        font-size: 0.8em;

    }

    li {
        padding: 0.7em;
        padding-left: 1.75em;
        border-bottom: 1px dashed black;
        background-color: #394f62;
        background-size: 2em 2em;
        background-position: 0 0.1em;
        color: white;
        text-align: left;
    }

    li > span {
        diaplay: inlie-block;
        float: right;
        width: 12em;
    }
</style>