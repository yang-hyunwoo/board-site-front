<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',

  beforeMount() {
    window.addEventListener("load", this.onLoad);
    window.addEventListener("beforeunload", this.onUnload);
  },
  beforeDestroy() {
    window.removeEventListener("load", this.onLoad);
    window.removeEventListener("beforeunload", this.onUnload);
  },
  methods: {
    onLoad(event) {
      if(sessionStorage.getItem("token")!=null){
        console.log("::::"+sessionStorage.getItem("token"));
        window.localStorage.setItem("token", sessionStorage.getItem("token"));
      }
    },
    onUnload(event) {
      window.localStorage.removeItem("token");
    }
  }

}

</script>