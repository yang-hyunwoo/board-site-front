<template>
  <div   ref="refEditor"></div>
</template>
<script setup>
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
// import Editor from "@toast-ui/editor";
import { ref, onMounted ,defineProps} from "vue";
 
//TODO : ARTICLE 값이나 내용 받아서 넣어주면 될거 같다.initialValue의 값을 변경 시켜 주어야 함
const props = defineProps({                     
    articleId : {
        type:Number,
        required : true
    },
    contentType : {
        type:String,
        required : true
    }
});

const refEditor = ref(null); // template의 ref의 값과 동일한 변수 선언

onMounted( () => { 
   console.log("onMounted")
   console.log(props.articleId);
   console.log(props.contentType);
   
   const xeditor = new Viewer({
    el: refEditor.value,
    height: "500px",
    initialValue: "asdfasdf\n sadfasd",
    initialEditType: "wysiwyg",
    previewStyle: "tab",
    useDefaultHTMLSanitizer: false,
    usageStatistics: false,
    hideModeSwitch: true,   //밑에 창 
  });
  
})

</script>


