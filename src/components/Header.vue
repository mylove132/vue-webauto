<template>
    <nav class="navbar navbar-expand-xl">
        <div class="container h-100">
            <router-link class="navbar-brand" to="/">
                <h1 class="tm-site-title mb-0">压测平台</h1>
            </router-link>
            <button class="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars tm-nav-icon"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto h-100">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="fas fa-tachometer-alt"></i>
                            首页
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/report">
                            <i class="far fa-file-alt"></i>
                            Reports
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/history">
                            <i class="fa fa-history"></i>
                            历史记录
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/account">
                            <i class="far fa-user"></i>
                            Accounts
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/timing">
                            <i class="fa fa-bell"></i>
                            定时任务
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/settings">
                            <i class="fas fa-cog"></i>
                            Settings
                        </router-link>
                    </li>

                </ul>
                <ul class="navbar-nav" v-if="isLogin">
                    <li class="nav-item">
                        <router-link class="nav-link d-block" to="/login">
                            登录
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link d-block" to="/register">
                            注册
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav" v-else="isLogin">
                    <li class="nav-item">
                        <router-link class="nav-link d-block" to="/accounts">
                            {{user}}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-block" href="#" @click="logout()">
                            退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                active:true,
                isActive:0
            }
        },
        computed :{
            isLogin:function(){
                return !this.$store.getters.isLoggedIn
            },
            user:function () {
                return this.$store.getters.username
            }
        },
        methods:{
            logout: function() {
                this.$store.dispatch('LogOut')
                this.$router.push({ path: '/login' })
            }
        }
    }
</script>

<style scoped>

</style>
