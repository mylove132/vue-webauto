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
    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {}
        },
        methods: {
            randomString: function (len) {
                var len = len || 32;
                var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
                var maxPos = $chars.length;
                var pwd = '';
                for (var i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;

            },
            login: function () {
                let user = {
                    account: $('#username').val(),
                    passwd: $("#password").val()
                };
                const self = this;
                $.ajax({
                    type: 'POST',
                    url: "http://family.okjiaoyu.cn/api/openlogin",
                    headers:{ 'Content-Type': 'application/json',
                        'requestid': "jmeter_" + this.randomString(8)},
                    data:JSON.stringify(user),
                    success: function(res){
                        if (res.errcode != 0) {
                            swal("warning", res.errmsg, "warning");
                        } else {
                            self.$store.dispatch('Login', self.qs.stringify(user)).then(response => {
                                self.$router.push({path: '/'})
                            })
                        }
                    },
                    error: function(xhr, type){
                        swal("warning", xhr.errmsg, "warning");
                    }});

                // axios.post("http://family.okjiaoyu.cn/api/openlogin",
                //     {
                //         data: user
                //     },
                //     {
                //         headers: {
                //             'Content-Type': 'application/json',
                //             'requestid': "jmeter_" + this.randomString(8)
                //         }
                //     }
                // ).then(res => {
                //     if (res.data.errcode != 0) {
                //         swal("warning", res.errmsg, "warning");
                //     } else {
                //         this.$store.dispatch('Login', user).then(response => {
                //             this.$router.push({path: '/'})
                //         })
                //     }
                // })




                // this.$post("http://family.okjiaoyu.cn/api/openlogin",user,headers={
                //      'Content-Type': 'application/json','requestid':this.randomString(32)
                // }).then(response => {
                //     if (response.errcode != 0){
                //         swal("warning",response.errmsg,"warning");
                //     }else {
                //         this.$store.dispatch('Login',user).then(response => {
                //             this.$router.push({ path: '/' })
                //         })
                //     }
                // })
                // this.$store.dispatch('Login',user).then(response => {
                //     this.$router.push({ path: '/' })
                // })
            }
        }

    }
</script>

<style scoped>


</style>