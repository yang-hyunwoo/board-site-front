<template>
    <ToastEditor  @contentChange="editorContent"></ToastEditor>
<button @click="regArticle">등록</button>
</template>


<script>

 import ToastEditor from '@/components/editor/ToastEditor.vue'

export default {
	data: function () {
    return {
        articleId:0,
        contentChange:''
    }
  },
  components :{
        ToastEditor
  },
  created(){
    this.articleId=1;
    console.log("111");
  },    
  methods: {
        editorContent(value){
            this.contentChange =  value;
        },
        regArticle(){
            console.log(this.contentChange);
        }
  }

}

</script>