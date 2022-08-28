<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <nav class="navbar navbar-expand-lg stick_header">
  <div class="container-fluid">
       <router-link  class="navbar-brand" to="/">프로젝트 이름</router-link>
    <!-- <a class="navbar-brand" href="#">프로젝트 이름</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <!-- <router-link class="nav-link font-color" to="/">홈</router-link> -->
        </li>
          <li class="nav-item">
             <router-link class="nav-link font-color" to="/agencyList">여행사</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link font-color" to="/travelList">여행 리스트</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/article">게시판</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/purchaseHistory">구매 내역</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/">좋아요(구현 예정)</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/chatList">채팅방</router-link>
        </li>
      </ul>
      <ul>
         <li>
            <img class="algin-login" v-bind:src= "login" style="width: 32px;" @click="loginClick">
        </li>
        <li>
            <img class="algin-logOut" v-bind:src= "logOut" style="width: 32px;" @click="logOutClick">
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>
<style>
.stick_header{
  position : sticky !important;
  top : 0 !important;
  opacity : 0.7 !important;
  backdrop-filter : blur(30px) !important;
  background-color : #D9EDF7;
  z-index: 9999;
 
} 

.font-color {
 color : #31709d !important;
}
.algin-login {
  position : absolute;
  top : 25%;
  right: 7.5%;
  /* margin-left : 10%; */
}

.algin-logOut {
  position : absolute;
  top : 25%;
  right: 3%;
  /* margin-left : 10%; */
}

ul li {list-style-type: none; float: left;}
</style>

<script>
import login from "../../assets/person-circle.svg"
import logOut from "../../assets/box-arrow-right.svg"

export default {
	data: function () {
    return {
      login  : login ,
      logOut : logOut
    }
  },
  methods: {
      loginClick() {
            this.$router.push('/login');
      },

      logOutClick() {
        alert("로그아웃");
      }

  }

}


</script>