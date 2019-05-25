<template>
    <div id="content">
    <div class="container tm-mt-big tm-mb-big">
        <div class="row">
            <div class="col-12 mx-auto tm-login-col">
                <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
                    <div class="row mt-2">
                        <div class="col-12">
                            <form class="tm-login-form">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input
                                            name="username"
                                            type="text"
                                            class="form-control validate"
                                            id="username"
                                            value=""
                                            required
                                    />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="password">Password</label>
                                    <input
                                            name="password"
                                            type="password"
                                            class="form-control validate"
                                            id="password"
                                            value=""
                                            required
                                    />
                                </div>
                                <div class="form-group mt-4">
                                    <button
                                            type="button"
                                            class="btn btn-primary btn-block text-uppercase" @click="login()"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {}
        },
        methods: {
            login: function () {
                let params = this.qs.stringify({
                    email: $('#username').val(),
                    password: $("#password").val()
                });
                this.$store.dispatch('Login',params).then(response => {
                    this.$router.push({ path: '/' })
                })
            }
        }

    }
</script>

<style scoped>


</style>