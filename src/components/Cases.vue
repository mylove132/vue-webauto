<template>
    <div class="row">
        <div class="col-md-2 side-nav" style="margin-left: 20px;margin-top: 50px">
            <div class="panel-group" id="accordion" style="color: white">
                <div class="panel-heading panel yx" style="margin-top: 30px" v-for="pro in projectList">
                    <a data-toggle="collapse" data-parent="#accordion" :href="'#'+generateId(pro.id)" id="jxwz" class="side-nav-item item-title" style="background-color:#567085;color: white">
                        {{pro.name}}
                    </a>
                    <div :id="generateId(pro.id)" class="panel-collapse collapse">
                        <div class="item-body" style="background-color:#567085;">
                            <ul class="list-unstyled">
                                <li class="item-second"><a href="javascript:void(0);" style="margin-top: 10px" @click="getCaseList(module.id)" v-for="module in pro.moduleList">{{module.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8" style="display: block;margin-left: 150px;margin-top: 50px">
                <div>
                    <div class="tm-product-table-container" v-if="caseList.length != 0">
                        <table class="table table-hover tm-table-small tm-product-table" style='' >
                            <thead>
                            <tr>
                                <th nowrap="nowrap" scope="col">项目</th>
                                <th nowrap="nowrap" scope="col">用户</th>
                                <th nowrap="nowrap" scope="col">接口名称</th>
                                <th nowrap="nowrap" scope="col">请求方式</th>
                                <th nowrap="nowrap" scope="col">接口类型</th>
                                <th nowrap="nowrap" scope="col">压测时长</th>
                                <th nowrap="nowrap" scope="col">压测数</th>
                                <th scope="col">删除</th>
                                <th scope="col">编辑</th>
                                <th scope="col">压测运行</th>
                                <th scope="col">服务器</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="cas in caseList">
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.projectName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.userName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.scriptName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                    class="tm-product-name">{{cas.requestTypeName}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                                    class="tm-product-name">{{cas.protocolName}}
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                    <!--{{script.create_time}}-->
                                    <!--</td>-->
                                    <!--<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">-->
                                    <!--{{script.update_time}}-->
                                    <!--</td>-->
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.preTime}}
                                </td>
                                <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    {{cas.preNumber}}
                                </td>
                                <td>
                                    <a href="javascript:void(0);" class="tm-product-delete-link" @click="">
                                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link">
                                        <i class="fa fa-edit tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link">
                                        <i class="fa fa-play-circle tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                    <button @click="seeLog" style="display: none">查看日志</button>
                                </td>
                                <td>
                                    <a href="javascript:void(0);" @click="" class="tm-product-delete-link" v-show="script.ip != null && script.ip != '' && script.ip != 'localhost'">
                                        <i class="fa fa-server tm-product-delete-icon" title="Align Left"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page-box" v-else="caseList == 0">
                        <svg height="0" width="0" style="position: absolute; margin-left: -100%;">

                        <defs>

                            <filter id='shadow'>
                                <feComponentTransfer in="SourceGraphic">
                                    <feFuncR type="discrete" tableValues="0"/>
                                    <feFuncG type="discrete" tableValues="0"/>
                                    <feFuncB type="discrete" tableValues="0"/>
                                </feComponentTransfer>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComponentTransfer><feFuncA type="linear" slope="0.2"/></feComponentTransfer>
                                <feOffset dx="5" dy="1" result="shadow"/>
                                <feComposite in="SourceGraphic" />
                            </filter>

                            <linearGradient id="tab-1-bg" x1="0%" y1="0%" x2="0%" y2="65%">
                                <stop offset="0%" style="stop-color: rgba(136, 195, 229, 1.0);" />
                                <stop offset="100%" style="stop-color: rgba(118, 160, 192, 1.0);" />
                            </linearGradient>

                            <linearGradient id="tab-2-bg" x1="0%" y1="0%" x2="0%" y2="65%">
                                <stop offset="0%" style="stop-color: rgba(149, 190, 233, 1.0);" />
                                <stop offset="100%" style="stop-color: rgba(112, 153, 213, 1.0);" />
                            </linearGradient>

                            <linearGradient id="tab-3-bg" x1="0%" y1="0%" x2="0%" y2="65%">
                                <stop offset="0%" style="stop-color: rgba(61, 149, 218, 1.0);" />
                                <stop offset="100%" style="stop-color: rgba(43, 130, 197, 1.0);" />
                            </linearGradient>

                            <linearGradient id="tab-4-bg" x1="0%" y1="0%" x2="0%" y2="65%">
                                <stop offset="0%" style="stop-color: rgba(72, 204, 243, 1.0);" />
                                <stop offset="100%" style="stop-color: rgba(71, 194, 243, 1.0);" />
                            </linearGradient>

                        </defs>

                        <path id="tab-shape" class="tab-shape" d="M116.486,29.036c-23.582-8-14.821-29-42.018-29h-62.4C5.441,0.036,0,5.376,0,12.003v28.033h122v-11H116.486z">
                        </path>
                    </svg>

                        <nav role="navigation" class="main-navigation" style="margin-top: 10px">
                            <ul>
                                <li class="tab-1 active" data-bg-color="rgba(118, 160, 192, 1.0)">
                                    <a href="" @click.stop.prevent="tabClick('cas')">
                                        <span>单点测试</span>
                                        <svg viewBox="0 0 122 40">
                                            <use xlink:href="#tab-shape"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="tab-2" data-bg-color="rgba(112, 153, 213, 1.0)">
                                    <a href="" @click.stop.prevent="tabClick('http')">
                                        <span>http接口</span>
                                        <svg viewBox="0 0 122 40">
                                            <use xlink:href="#tab-shape"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="tab-3" data-bg-color="rgba(43, 130, 197, 1.0)">
                                    <a href="" @click.stop.prevent="tabClick('dubbo')">
                                        <span>dubbo接口</span>
                                        <svg viewBox="0 0 122 40">
                                            <use xlink:href="#tab-shape"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div class="main-content">
                           <div  v-show="currentTab == 'cas'"  id="cas">
                               <div class="row">
                                   <div class="col-md-8">
                               <form class="form-horizontal" role="form">
                                   <div class="form-group">
                                       <div class=" col-sm-5">
                                           <input type="text" class="form-control" id="url" placeholder="请输入地址" style="margin-left:220px;border-radius: 5px">
                                       </div>
                                   </div>
                                   <div class="form-group">
                                       <div class="col-sm-5">
                                           <input type="text" class="form-control" id="username" placeholder="请输入用户名" style="margin-left:220px;border-radius: 5px">
                                       </div>
                                   </div>
                                   <div class="form-group">
                                       <div class="col-sm-5">
                                           <input type="password" class="form-control" id="password" placeholder="请输入密码" style="margin-left:220px;border-radius: 5px">
                                       </div>
                                   </div>
                               </form>
                                   </div>
                                   <div class="col-md-4">
                                       <div class="form-group">
                                           <div class="col-sm-5">
                                               <select class="form-control input-sm" id="envId">
                                                   <option :value="env.id" v-for="env in envList">{{env.env}}</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div class="form-group">
                                           <div class="col-sm-5">
                                               <input type="button" class="form-control" id="casLogin"  @click="casLogin" value="登录" style="border-radius: 5px;margin-top: 50px">
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                            <div v-show="currentTab == 'http'" id="http">
                                这事http接口
                            </div>
                            <div  v-show="currentTab == 'dubbo'" id="dubbo">

                            </div>
                        </div>
                        <div class="modal right fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                             aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">测试结果</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                                aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <div id="writePlace" style="text-align: initial;padding:0px 25px;white-space: pre-line;word-wrap:break-word;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    window.onload=function () {
        var menuItems = $('.main-navigation li');
        menuItems.on("click", function(event) {
            menuItems.removeClass("active");
            $(this).addClass("active");
            $(".main-content").css({
                "background": $(this).data("bg-color")
            });

            event.preventDefault();
        });
    }
    export default {
        name: "Cases",
        data(){
            return{
                currentTab:'cas',
                projectList: [],
                caseList: [],
                envList: []
            }
        },
        created:function(){
            let self = this;
            this.$fetch(this.$api.casProject).then(
                response => {
                    if (response.code == 0){
                        self.projectList = response.data.list
                    }else {
                        swal("获取项目列表失败","fail","error")
                    }
                }
            ),
                this.$fetch(this.$api.envUrl).then(
                    response => {
                        if (response.code == 0){
                            self.envList = response.data
                        }else {
                            swal("获取项目列表失败","fail","error")
                        }
                    }
                )
        },
        methods:{
            tabClick(tabName){
                this.currentTab = tabName;
            },
            generateId:function(id){
                return "qa-"+id;
            },
            getCaseList:function(moduleId){

            },
            casLogin:function () {
                this.bus.$emit('loading', true);
                this.$post(this.$api.casLogin,this.qs.stringify({
                    url:$("#url").val(),
                    username:$("#username").val(),
                    password:$("#password").val(),
                    envId:$("#envId").val()
                })).then( response => {
                    if (response.code == 0){
                        this.bus.$emit('loading', false);
                        $("#myModal").modal()
                        try {
                            let result = new JSONFormat(JSON.stringify(response.data), 4).toString()
                            document.getElementById("writePlace").innerHTML = result;
                        }catch (e) {
                            console.log(e)
                            document.getElementById("writePlace").innerHTML = response.data;
                        }
                        const cookies = response.data;
                        cookies.forEach(cookie => {
                            console.log("cookie name:"+cookie.name);
                            console.log("cookie value:"+cookie.value);
                            console.log("cookie domain:"+cookie.domain);
                            console.log("cookie path:"+cookie.path);
                            console.log("cookie expir:"+cookie.expiryDate);
                            document.cookie = cookie.name + "=" + cookie.value + ";" + cookie.expiryDate + ";path="+cookie.path;
                        })
                    }else{
                        swal("登录失败","","error")
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .side-nav-item {
        display: block;
        padding: 10px 15px 10px 15px;
        background-color: #FFFFFF;
        cursor: pointer;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .item-title {
        background-color: #F5F5F5;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom: 1px solid #DDDDDD;
    }

    .panel-heading {
        margin-top: 5px;
        padding: 0;
        border-radius: 3px;
        border: 1px solid transparent;
        border-color: #DDDDDD;
    }

    .yx{
        width:300px;
        height:auto;
        border:#909090 1px solid;
        background:#fff;
        color:#333;
        filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow:2px 2px 10px #909090;
        font-weight: bold;

    }

    .item-body {
        padding: 10px 15px 5px 15px;
        border-bottom: 1px solid #DDDDDD;
    }
    .item-second {
        margin-top: 5px;
        cursor: pointer;
    }

    .item-second a {
        display: block;
        color: #333366;
        height: 100%;
        width: 100%;
    }
    h1 {
        position: absolute;
        top: -230px;
        left: 700px;
        color: rgb(255,255,255,0.3);
    }

    a {
        text-decoration: none;
    }

    .main-navigation {
        overflow: hidden;
        position: relative;
        padding: 0 0 0 1rem;
        /*  &::after {
            content: "";
            position: absolute;
            bottom: 16px;
            left: 0;
            width: 798px;
            height: 12px;
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
            z-index: 5;
          }*/
    }
    .main-navigation ul {
        list-style: none;
        padding: 0;
    }
    .main-navigation li {
        float: left;
        width: 12rem;
        height: 5rem;
        margin: 0 0 0 -1rem;
        position: relative;
    }
    .main-navigation li.active {
        z-index: 6;
    }
    .main-navigation a {
        position: relative;
        display: inline-block;
        color: white;
        width: 100%;
        height: 100%;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-size: 1.4rem;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }
    .main-navigation svg {
        width: 120%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }
    .main-navigation span {
        position: relative;
        padding: 1rem 0 0 3.3rem;
        z-index: 2;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .main-navigation .tab-1 {
        z-index: 4;
    }
    .main-navigation .tab-1 svg {
        fill: url(#tab-1-bg);
    }
    .main-navigation .tab-2 {
        z-index: 3;
    }
    .main-navigation .tab-2 svg {
        fill: url(#tab-2-bg);
    }
    .main-navigation .tab-3 {
        z-index: 2;
    }
    .main-navigation .tab-3 svg {
        fill: url(#tab-3-bg);
    }
    .main-navigation .tab-4 {
        z-index: 1;
    }
    .main-navigation .tab-4 svg {
        fill: url(#tab-4-bg);
    }

    .main-content {
        position: relative;
        z-index: 10;
        background: #76a0c0;
        margin: -1.6rem 0 0 0;
        padding: 3rem;
        border-radius: 15px;
        border-top-left-radius: 0;
    }

    .article {
        background: white;
        padding: 5rem;
        border-radius: 8px;
    }
    .article h2 {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-size: 3rem;
        color: #76a0c0;
        margin: 0 0 0.5rem 0;
    }
    .which_group {
        list-style:none;
        margin:0;
        padding:0;
        width:100%;
        font-size:11px;
        color:#595959;
    }
    .which_group li {
        float:left;
        list-style:none;
        padding:7px;
        cursor:pointer;
        box-Shadow:1px 2px 3px #D9D9D9;
    }
    .which_group li:first-child {
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
    }
    .which_group li:last-child {
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;
    }

    .modal.left .modal-dialog,
    .modal.right .modal-dialog {
        position: fixed;
        margin: auto;
        width: 650px;

        max-width: 850px;
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
        overflow-x: auto;
    }

    #result {
        height: 500px;
    }

    .modal.left .modal-body,
    .modal.right .modal-body {
        padding: 15px 15px 80px;
    }

    /*Left*/
    .modal.left.fade .modal-dialog {
        left: -30px;
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
        right: 0px;
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
        color: black;
        border-bottom-color: black;
        background-color: white;
    }

    pre {
        font-family: 'consolas';
    }

    .Canvas {
        font: 14px/18px 'consolas';
        background-color: #ECECEC;
        color: #000000;
        border: solid 1px #CECECE;
    }

    .ObjectBrace {
        color: #00AA00;
        font-weight: bold;
    }

    .ArrayBrace {
        color: #0033FF;
        font-weight: bold;
    }

    .PropertyName {
        color: #CC0000;
        font-weight: bold;
    }

    .String {
        color: #007777;
    }

    .Number {
        color: #AA00AA;
    }

    .Boolean {
        color: #0000FF;
    }

    .Function {
        color: #AA6633;
        text-decoration: italic;
    }

    .Null {
        color: #0000FF;
    }

    .Comma {
        color: #000000;
        font-weight: bold;
    }

    PRE.CodeContainer {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .json_key {
        color: #92278f;
        font-weight: bold;
    }

    .json_null {
        color: #f1592a;
        font-weight: bold;
    }

    .json_string {
        color: #3ab54a;
        font-weight: bold;
    }

    .json_number {
        color: #25aae2;
        font-weight: bold;
    }

    .json_boolean {
        color: #f98280;
        font-weight: bold;
    }

    .json_link {
        color: #61D2D6;
        font-weight: bold;
    }

    .json_array_brackets {
    }

</style>