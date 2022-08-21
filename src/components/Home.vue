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

<div class="container marketing mgt">
    <p>추천 여행사</p>
    <div class="row">
      <div class="col-lg-4" v-for="(item,index) of agency_random_list" :key="index">
       <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2 class="fw-normal">{{item.name}}</h2>
        <p>{{item.detail}}</p>
        <p><a class="btn btn-secondary" @click="test">{{item.name}} 여행사 둘러보기</a></p>
      </div>
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
      chk :false,
      agency_random_list : [],
    }
  },

  created(){
    this.index = 0;
    this.chk = true;
    this.init();
  },

  methods: {

    init() {
      this.travelAgencyRandom();
    },

    travelAgencyRandom() {
        this.$axios.get(process.env.VUE_APP_TRIP_AGENCY_RANDOM).then((res) =>{
          if(res.data.resultCode=="SUCCESS"){
            this.agency_random_list=[];
            res.data.result.forEach(element => {
              let obj = [];
              obj.name      = element.name;
              obj.agency_id = element.id;
              obj.detail    = element.detail.substr(0,20)+".....";

              this.agency_random_list.push(obj);
            });
          }
        }).catch(() => {
             this.$swal('','잠시후 다시 이용해주세요.','error');
        }).finally(() => {
        });
    },








    test() {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
    // let param = {
    //   "title": "test",
    //   "content" : "Test"
    // }
    this.$axios.get("/api/trip/articles/1" ,this.$tokenCheck()==true?{headers}:"").then(() =>{
            // this.$router.push();
        }).catch((error) => {
             this.$swal('',error.response.data.result,'error');
        }).finally(() => {
          this.loading = false;
        });

        alert("111");
    },
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
