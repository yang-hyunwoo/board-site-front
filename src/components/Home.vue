<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
    <div class="carousel-indicators" v-if="chk">
      <!--슬라이드 갯수-->
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" :class="{active:index==0}" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarouse1" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarouse1" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarouse1" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#myCarouse1" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner" >
      <div :class='index == 0 ? "carousel-item active" : "carousel-item"' style="height: 29rem;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <!-- <img v-bind:src= "login" style="width: 100%; height: 100%;"  @click="loginClick"> -->
      <div class="container">
          <div class="carousel-caption text-start">
            <h1>여행사 여행 제목</h1>
            <p>여행사 여행 간략 설명 정도</p>
            <p><a class="btn btn-lg btn-primary" href="#">$250,000</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 29rem;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
           <h1>여행사 여행 제목2</h1>
            <p>여행사 여행 간략 설명 정도2</p>
            <p><a class="btn btn-lg btn-primary" href="#">$300,000</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 29rem;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
             <h1>여행사 여행 제목3</h1>
             <p>여행사 여행 간략 설명 정도3</p>
             <p><a class="btn btn-lg btn-primary" href="#">$400,000</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 29rem;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-start">
             <h1>여행사 여행 제목4</h1>
             <p>여행사 여행 간략 설명 정도4</p>
             <p><a class="btn btn-lg btn-primary" href="#">$450,000</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 29rem;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-start">  <!-- text-start / text-end /null 앞 뒤 중간 -->
             <h1>여행사 여행 제목5</h1>
             <p>여행사 여행 간략 설명 정도5</p>
             <p><a class="btn btn-lg btn-primary" href="#">$500,000</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
  </div>

<button @Click="aaa">ddd</button>
<div class="container marketing mgt">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">여행사</h2>
        <p>여행사 설명</p>
        <p><a class="btn btn-secondary" href="#">여행사 여행 리스트2</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">여행사2</h2>
        <p>여행사 설명2</p>
        <p><a class="btn btn-secondary" href="#">여행사 여행 리스트2</a></p> </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">여행사</h2>
        <p>여행사 설명2</p>
        <p><a class="btn btn-secondary" href="#">여행사 여행 리스트2</a></p> </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <p> 오늘의 추천 여행지</p>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">부산 </h2>
        <p class="lead">부산의 어쩌고 </p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">담양</h2>
        <p class="lead">어쩌고 저쩌고</p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">울산</h2>
        <p class="lead">어쩌고 저쩌고2</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">




  
</div>
  </div>
</template>

<script>
import login from "../assets/test.png"
// import hideKey from 'dotenv';

export default {
	data: function () {
    return {
      login  : login ,
      index : 0,
      chk :false
    }
  },
  created(){
    this.index = 0;
    this.chk = true;
  },
  methods: {
    aaa() {
      // var IMP = window.IMP;
      // IMP.init(process.env.VUE_APP_IAMPORT);

    

      // IMP.request_pay({ // param
      //       pg: "html5_inicis",
      //       pay_method: "card",
      //       name: "title",
      //       amount: 1000,
      //       buyer_email: "gildong@gmail.com",
      //       buyer_name: "홍길동",
      //       buyer_tel: "010-4242-4242",
      //     }, rsp => { // callback
      //       if (rsp.success) {
      //         console.log(rsp);
      //         // 결제 성공 시 로직,
      //       } else {
      //         console.log(rsp);
      //         // 결제 실패 시 로직,
      //       }
      //     });




      //    this.$axios.get("/api/trip/articles")
      // .then(res => {
      //   console.log(res.data);
      // })
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mgt{
  margin-top: 1.5rem;
}
</style>
