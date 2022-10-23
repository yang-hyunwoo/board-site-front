<!-- eslint-disable vue/multi-word-component-names -->
<template >
 <!-- <body class="text-center">
<main class="form-signin w-100 m-auto">  -->
    <div class="ares">
       잠시만 기다려주세요...
  </div>


</template>

<script>

export default {
  components: {
  },

	data: function () {
    return {
      email:"",
      password:"",
      loading:false,
      callbackUrl:'',
      client_id:'',
    }
  },
  mounted() {
    let naverUrl = this.getJsonFromUrl(location.href);    //네이버 팝업의 주소를 받아서 code / state를 가져온다.
    this.naverCodeCallback(naverUrl.code , naverUrl.state,naverUrl.refresh_token);
  },
  methods: {
    getJsonFromUrl(url) {
       var querysplit = url.split("?");
        var query = querysplit[1];
        var result = {};
        query.split("&").forEach(function(part) {
          var item = part.split("=");
          result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    },

    //네이버의 code 와  state를 가지고 사용자를 조회 및 db에 저장을 한다.
    naverCodeCallback(code,state,refresh_token) {
      let parameter = {
          "code" : code,
          "state" : state,
          "refresh_token": refresh_token
        }
        console.log(process.env.VUE_APP_NAVER_CALLBACK_CODE);
      this.$axios.get(process.env.VUE_APP_NAVER_CALLBACK_CODE,{params:parameter}).then((res) =>{
         if(res.data.resultCode=="SUCCESS"){
              window.close();
              opener.location.href="http://localhost:4000";
              localStorage.setItem("token",res.data.result.token);
              window.opener.sessionStorage.setItem("token",res.data.result.token);
          }
        }).catch(() => {
             window.close();
        }).finally(() => {
        });

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

