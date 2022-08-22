<template>
    <ToastViewer :articleId="articleId" :contentType="contentType" ></ToastViewer>
    <div>
      댓글 영역으로 잡는다.
    </div>
<button @click="ssss">수정</button>
<button @click="ssss2">삭제</button>
</template>


<script>

 import ToastViewer from '@/components/editor/ToastViewer.vue'

export default {
	data: function () {
    return {
        articleId:0,
        contentType:'',
        articleDetail : this.$route.query.sn,
    }
  },
  components :{
        ToastViewer
  },
  created(){
    this.articleId=this.articleDetail;
    this.contentType ="article"
  },    
  methods: {

  }

}
</script>