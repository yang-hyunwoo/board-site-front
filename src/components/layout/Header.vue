<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg stick_header">
    <div class="container-fluid"  style="margin: 0 10vw;">
       <router-link  class="navbar-brand" to="/">프로젝트 이름</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav__list">
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/tourList">관광지</router-link>
        </li>
          <li class="nav-item">
             <router-link class="nav-link font-color" to="/agencyList">여행사</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link font-color" to="/travelList">여행 리스트</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/article">자유 게시판</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/purchaseHistory">구매 내역</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/myHeart">좋아요</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/chatList">채팅방</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link font-color" to="/myPage">마이 페이지</router-link>
        </li>
      </ul>
      <div class="nav__login">
        <img class="nav__login__profile" v-bind:src= "login" style="width: 32px;" @click="loginClick" v-if="authChk">
        <img v-bind:src= "logOut" style="width: 32px;" @click="logOutClick">
      </div>
      
        
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

.nav{
  display:flex;
  justify-content: space-between;
  
}
.nav__login__profile{
  margin-right:10px;
}

@media (max-width: 991px) {
  .nav{
    flex-direction: column;
    align-items:flex-end ;
  }
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
      logOut : logOut,
      authChk: true,
    }
  },
  created() {
    if(sessionStorage.getItem("token")!=null){
        this.authChk = false;
      } else {      
        this.authChk = true;
    }
  },
  methods: {
      loginClick() {
            this.$router.push('/login');
      },

      logOutClick() {
        localStorage.clear();
        sessionStorage.clear();
        this.authChk = true;
        this.$router.push('/');
      }

  }

}


</script>