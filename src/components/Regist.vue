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
                                <div class="form-group">
                                    <label for="username">Email</label>
                                    <input
                                            name="email"
                                            type="text"
                                            class="form-control validate"
                                            id="email"
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
                                            class="btn btn-primary btn-block text-uppercase" @click="register()"
                                    >
                                        Register
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
name: "Register",
    data(){
    return{}
    },
    methods:{
        register:function () {
            if ($("#username").val() == ""||$("#username").val()==null){

                $("#username").focus();
                $("#username").focus(function(){
                    $("#username").css("background-color","black");
                });
                swal("warning","请输入用户名","warning");
                return;
            }
            if ($("#email").val() == ""||$("#email").val()==null){

                $("#email").focus();
                $("#email").focus(function(){
                    $("#email").css("background-color","black");
                });
                swal("warning","请输入邮箱","warning");
                return;
            }
            if ($("#password").val() == ""||$("#password").val()==null){

                $("#password").focus();
                $("#password").focus(function(){
                    $("#password").css("background-color","black");
                });
                swal("warning","请输入密码","warning");
                return;
            }

            this.$post(this.$api.userUrl,this.qs.stringify({
                name:$("#username").val(),
                email:$("#email").val(),
                password:$("#password").val()
            })).then(response => {
                if (response.code == 0){
                    this.$router.push("/login");
                    swal("success","注册成功","success");
                }else if (response.code == -1) {
                    swal("error","注册失败","error")
                }else {
                    swal("warning",response.message,"warning")
                }
            })
        }
    }
}
</script>

<style scoped>

</style>