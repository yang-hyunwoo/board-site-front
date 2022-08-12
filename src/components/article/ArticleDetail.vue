<template>
    <ToastViewer :articleId="articleId" :contentType="contentType" ></ToastViewer>
        {{articleId}}
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
    }
  },
  components :{
        ToastViewer
  },
  created(){
    this.articleId=1;
    this.contentType ="article"
    console.log("111");
  },    
  methods: {

  }

}
</script>