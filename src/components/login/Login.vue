<!-- eslint-disable vue/multi-word-component-names -->
<template >
 <!-- <body class="text-center">
<main class="form-signin w-100 m-auto">  -->
    <div class="ares">
  <!-- <form  @submit="login"> -->
    <div>
<img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">로그인</h1>
    <div>

  </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
      <label for="floatingPassword">Password</label>
    </div>
    <!-- <div id="naver_id_login" ></div> -->
    <div class="checkbox mb-4 matop" style="display:flex;" >
      <button @click="naverLoginClick" style="border: 0;"><img v-bind:src="naverLogin" style="width:100px;" /></button>
      <!-- <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label> -->
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="login" >로그인</button>
    <p class="mt-3" @click="join" ><a style="text-decoration: underline; cursor: pointer;">회원이 아니신가요?</a></p>
    <p class="mt-3" @click="pwChk"><a style="text-decoration: underline; cursor: pointer;">비밀번호 찾기</a></p>
  <!-- </form> -->
  </div>

  </div>
  
 <BlackBg v-if="loading"></BlackBg>

</template>

<script>
import BlackBg from "../loading/BlackBg"
import naverLogin from "../../assets/btnG_축약형.png"
export default {
  components: {
    BlackBg,
  },
	data: function () {
    return {
      email:"",
      password:"",
      loading:false,
      callbackUrl:'',
      client_id:'',
      naverLogin: naverLogin
    }
  },
  mounted() {
    this.$axios.get(process.env.VUE_APP_NAVER_CLIENT_ID_CALLBACK).then((res) =>{
          if(res.data.resultCode=="SUCCESS"){
              console.log(res);
              this.client_id = res.data.result.clientId;
               this.callbackUrl = res.data.result.callbackUrl;
              
        
          }
        }).catch(() => {
             this.$swal('','잠시후 다시 이용해주세요.','error');
        }).finally(() => {
        });
  },
  methods: {
    naverLoginClick() {
      this.naverLoginPop(this.client_id,this.callbackUrl)
    },
      join() {
        this.$router.push("/join");
      },
      login() {
          if(this.$emptyChk(this.email)){
                  this.$swal('', "아이디를 입력해주세요.",'waring');
                  return ;
          }
          if(this.$emptyChk(this.password)){
                  this.$swal('', "비밀번호를 입력해주세요.",'waring');
                  return ;
          }
          let param = {
                  "email" : this.email ,
                  "password" : this.password 
          }
          this.loading = true;

        this.$axios.post(process.env.VUE_APP_TRIP_LOGIN ,param).then((res) =>{
            sessionStorage.setItem("token",res.data.result.token);
            localStorage.setItem("token",res.data.result.token);
            this.$router.push("/");
        }).catch((error) => {
             this.$swal('',error.response.data.result,'error');
        }).finally(() => {
          this.loading = false;
        });
      },
      pwChk() {
        console.log(localStorage.getItem("token"));
        alert("추후 예정");
      },

      //네이버 로그인 이벤트  window 팝업 호출 한다 . NaverLoginCallback.vue로 이동 
      naverLoginPop(client_id , callbackUrl) {
        let uri = 'https://nid.naver.com/oauth2.0/authorize?' +
            'response_type=code' +                  
            '&client_id=' +client_id +     
            '&state=NAVER_LOGIN_TEST' +           
            '&redirect_uri='+callbackUrl;  
            window.open(uri, "Naver Login Test PopupScreen", "width=500, height=600");
       
      }

  }

}


</script>


<style>
    .ares{
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 16rem;
        background: #f5f5f5;
    }
    html {
        background: #f5f5f5;
    }

    .matop {
        margin-top: 0.5rem;
    }
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      } 
    </style>

