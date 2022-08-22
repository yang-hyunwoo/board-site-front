<template>
 <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">여행 리스트</h1>
        <p class="lead text-muted">나에게 맞는 여행을 찾아보세요</p>
          <div>
          <input class="form-control mr-sm-2 custombar" type="search" placeholder="제목을 입력해주세요." aria-label="Search" v-model="travel_title" v-on:keyup.enter="travelSearch">
          <button class="btn btn-outline-success my-2 my-sm-0" style="margin-left:1rem;" @click="travelSearch" >Search</button>
            </div>
      </div>
    </div>
  </section>
 
 <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div class="col curcus" v-for="(item,index) of travel_list"   :key="index" @click="todoCclick(item.id)">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">{{item.title}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <p>{{item.name}}</p>
                </div>
                    <small class="text-muted">조회 : {{item.read_count}}</small>
              </div>
                   <small class="text-muted">{{item.start_de}} ~ {{item.end_de}}</small>        
                   <div>
                     <small class="text-muted">가격:<span class="deco">{{item.real_pay}}</span> <span style="color: red;">{{item.sale_percent}}</span>  {{item.sale_pay}} </small>         
                   </div>         
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <BlackBg v-if="loading"></BlackBg>
<Pagination v-if="pageChk" :pageListItem="pageListItem" @pageCurrent="pageCurr" :pageTotal="pageTotal"></Pagination>
</template>

<script>
import Pagination from '../layout/Pagination';
export default {
	data: function () {
    return {
      pageListItem : 9 ,
      page : 0 ,
      travel_title : "" ,
      pageTotal : 0 ,
      pageChk : false ,
      travel_list : [] ,
       loading:false,
    }
  },
  components: {
    Pagination,
  },
  created() {

      this.init();
  },

  methods: {

    init() {

        this.travelList();

    },
    travelList() {

      let parameter = {
        "page" : this.page,
        "travelAgencyTitleName" : this.travel_title
      }
      this.loading = true;
      this.$axios.get(process.env.VUE_APP_TRAVEL_LIST,{params:parameter}).then((res) =>{
         if(res.data.resultCode=="SUCCESS"){
          this.pageTotal = res.data.result.totalElements;
            this.travel_list=[];
            res.data.result.content.forEach(element => {
                let obj = [];
                obj.title         = element.title;
                obj.name          = element.travelAgencyName;
                obj.id            = element.id;
                obj.start_de      = this.$splitDateHyphen(element.travel_start_at);
                obj.end_de        = this.$splitDateHyphen(element.travel_end_at);
                obj.read_count    = element.read_count;
                obj.real_pay      = element.real_paid+"원";
                obj.sale_percent  = element.sale_percent+"%";
                obj.sale_pay      = element.sale_paid+"원";
                this.travel_list.push(obj);
            });
          }
        }).catch(() => {
             this.$swal('','잠시후 다시 이용해주세요.','error');
        }).finally(() => {
          this.pageChk = true;
          this.loading = false;
        });
    },

    pageCurr(value){
      this.page = value-1;
      this.travelList();
    },

    travelSearch(){
       this.page = 0;
       this.pageChk=false;
       this.travelList();
    },


    todoCclick(value) {
       this.$router.push({
        path: "/TravelDetail",
        name: "travelDetail",
        query: { sn: value }
      });
    }
  }

}
</script>
<style>
.custombar{
  width: 50%;
  display: inline-block;
}
.deco{
  text-decoration: line-through;
}
.curcus{
   cursor: pointer;
}

</style>
