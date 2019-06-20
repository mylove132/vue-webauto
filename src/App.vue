<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Loading></Loading>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Loading from './components/Loading'
    export default {
        name: "app",
        components:{
            Header,
            Loading
        }
        // created:function () {
        //     if (sessionStorage.getItem("store")) {
        //         this.$store.replaceState(
        //             Object.assign(
        //                 {},
        //                 this.$store.state,
        //                 JSON.parse(sessionStorage.getItem("store"))
        //             )
        //         );
        //         sessionStorage.removeItem("store")
        //     }
        //
        //     //在页面刷新时将vuex里的信息保存到sessionStorage里
        //     window.addEventListener("beforeunload", () => {
        //         alert('wwwww')
        //         sessionStorage.setItem("store", JSON.stringify(this.$store.state));
        //     });
        //}
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
