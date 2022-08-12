<!-- eslint-disable vue/multi-word-component-names -->
<template >
 <!-- <body class="text-center">
<main class="form-signin w-100 m-auto">  -->
    <div class="ares">
  <form>
    <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-4 matop" >
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-3" @click="join" ><a style="text-decoration: underline; cursor: pointer;">회원이 아니신가요?</a></p>
    <p class="mt-3" @click="pwChk"><a style="text-decoration: underline; cursor: pointer;">비밀번호 찾기</a></p>
  </form>
  </div>
<!-- </main>


    
  </body> -->
</template>

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

<script>
export default {
	data: function () {
    return {
    }
  },
  methods: {
      join() {
        this.$router.push("/join");
      },
      pwChk() {
        alert("비밀번호")
      }

  }

}


</script>