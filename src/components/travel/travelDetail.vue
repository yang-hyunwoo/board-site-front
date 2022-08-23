<template>
    <ToastViewer :articleId="articleId" :contentType="contentType" ></ToastViewer>
<div class="d-grid gap-2 col-6 mx-auto">
  <br>
  <button class="btn btn-primary" type="button" @click="reserve">예약하기</button>
</div>
</template>


<script>

 import ToastViewer from '@/components/editor/ToastViewer.vue'

export default {
  
	data: function () {
    return {
        articleId    : 0,
        contentType  : '',
        travelDetail : this.$route.query.sn,
    }
  },
  components :{
        ToastViewer
  },
  created(){
    this.articleId=Number(this.travelDetail);
    this.contentType ="travel"
  },    
  methods: {
    reserve(){
      this.$router.push({
        path: "/travelPaymentIng",
        name: "travelPaymentIng",
        query: { sn: this.articleId }
      });
    }

  }

}
</script>