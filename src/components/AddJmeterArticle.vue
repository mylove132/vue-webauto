<template>
    <div>
        <div style="margin-left: -200px;margin-top: 30px;margin-bottom: 30px">
        <label style="color: white">文章标题：</label><input type="text" id="articleTitle" style="width: 400px;border-radius: 5px" />
            <label style="color: white;margin-left: 500px">文章类别：</label>
            <select style="width: 200px" id="category">
            <option value="0">请选择测试环境</option>
            <option v-for="category in categoryList" :value="category.id">{{category.name}}</option>
        </select>
        </div>
        <mavonEditor v-model="value" :ishljs="true" ref=md
                     style="max-height: 1000px;height: 600px;width: 1500px;margin-left: 20px"
                     @imgAdd="$imgAdd" @imgDel="$imgDel"/>
        <a href="javascript:void(0);" class="btn btn-primary btn-block text-uppercase mb-3" style="background-color: #668B8B;width: 1500px;
        margin-left: 20px" @click="addArticle()">保存</a>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import axios from 'axios'
    export default {
        name: "AddJmeterArticle",
        data(){
            return{
                value:'',
                categoryList:[],
                img_file:[],
                toolbars: {
                    bold: true, // 粗体
                    italic: true,// 斜体
                    header: true,// 标题
                    underline: true,// 下划线
                    strikethrough: true,// 中划线
                    mark: true,// 标记
                    superscript: true,// 上角标
                    subscript: true,// 下角标
                    quote: true,// 引用
                    ol: true,// 有序列表
                    ul: true,// 无序列表
                    link: true,// 链接
                    imagelink: true,// 图片链接
                    code: true,// code
                    table: true,// 表格
                    subfield: true,// 是否需要分栏
                    fullscreen: true,// 全屏编辑
                    readmodel: true,// 沉浸式阅读
                    htmlcode: true,// 展示html源码
                    help: true// 帮助
                }
            }
        },
        components: {
            mavonEditor
        },
        created(){
            this.$fetch(this.$api.categoryurl).then(response => {
                if (response.code == 0){
                    this.categoryList = response.data
                }
            })
        },
        methods:{
            addArticle:function () {
                let title = $("#articleTitle").val();
                if ($('#articleTitle').val() == '' || $('#articleTitle').val() == null) {
                    $('#articleTitle').focus()
                    $("#articleTitle").focus(function () {
                        $("#articleTitle").css("background-color", "#FFFFCC");
                    });
                    swal("Warning", '请输入文章title', "warning")
                    return;
                }
                if ($('#category').val() == 0 || $('#category').val() == null) {
                    $('#category').focus()
                    swal("Warning", '请选择文章类别', "warning")
                    return;
                }
                if (this.value == ""||this.value == null){
                    swal("Warning", '请输入文章内容', "warning")
                    return;
                }
                this.$post(this.$api.articleUrl,this.qs.stringify({
                    title:title,
                    content:this.value,
                    categoryId:$('#category').val(),
                    userId:localStorage.getItem('user_id')
                })).then(response => {
                    console.log(response.data)
                    if (response.code == 0){
                        this.$router.push({
                            name: 'articleList',
                            query: {
                            }
                        })
                        swal("success", '添加成功', "success")
                    }
                })
            },
            $imgAdd(pos, $file) {
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('image', $file);
                this.img_file[pos] = $file;
                axios({
                    url: '/api/common/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((res) => {
                    let _res = res.data.data;
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    this.$refs.md.$img2Url(pos, _res.url);
                })
            },
            $imgDel(pos) {
                delete this.img_file[pos];
            }

        }
    }
</script>

<style scoped>

</style>