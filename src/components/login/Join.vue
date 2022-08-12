<template>
 <div class="py-5 text-center bakr">
      <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h2>회원가입</h2>
      <p class="lead">회원가입을 환영합니다.</p>
    </div>

    <div class="row g-5 ars">
      <div class="col-md-7 col-lg-8">
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-10">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div class="col-10">
              <label for="email" class="form-label">비밀번호 </label>
              <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력해주세요.">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div class="col-10">
              <label for="email" class="form-label">비밀번호 확인</label>
              <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력해주세요.">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div class="col-10">
              <label for="email" class="form-label">이름</label>
              <input type="email" class="form-control" id="email" placeholder="이름을 입력해주세요.">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
           <div class="col-10">
              <label for="email" class="form-label">닉네임 </label>
              <input type="email" class="form-control" id="email" placeholder="닉네임을 입력해주세요.">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

           <div class="col-10">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">남자</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">여자</label>
            </div>
          </div>

          </div>

          <p class="my-4"></p>



        </form>

 <div class="col-10">
 <button class="w-100 btn btn-primary btn-lg" type="submit" @click="joinSucc">회원가입 하기</button>
  </div>
  <p class="my-4"></p>
   <div class="col-10">
<button class="w-100 btn btn-primary btn-lg"  @click="backClick">뒤로가기 빨간색</button>
  </div>

</div>

    </div>
</template>

<style>
  .ars {
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    
  }
  .row {
    margin-left  : 0 !important;
    margin-right : 0 !important;

  }
  .row > * {
    padding-left: calc(var(--bs-gutter-x) * 1.0) !important;
  }
  .bakr{
    background: #f5f5f5; 
  }
  html{
       background: #f5f5f5;
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
      backClick() {
        this.$router.push("/");
      }
  }

}


</script>