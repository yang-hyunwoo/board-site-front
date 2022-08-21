<template>
<div class="margincustom margintpcust">
    <h2>{{title}}</h2>
</div>
<div class="margincustom">
  {{travel_name}} 
</div>
<div class="margincustom">
  <span style="font-size:13px;">마감일 : {{travel_end_at}}</span> <span style="font-size:13px; color: gray;">조회수:{{read_count}}</span>
</div>


  <div ref="refEditor" class="margincustom margintpcust"></div>
  <div class="margincustom">
  <span style="font-size:15px;">가격:<span class="deco" >{{$numberWithCommas(real_pay)}}</span><span style="color:red; margin-left: 1rem;">{{sale_percent}}</span> <span style="margin-left:1rem;">{{$numberWithCommas(sale_paid)}}</span></span>
</div>
</template>
<script setup>
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { ref, onMounted ,defineProps} from "vue";
const axios = require("axios");
 
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
let content ;
const title = ref("");
const travel_name = ref("");
const read_count = ref("");
const travel_end_at = ref("");
const real_pay = ref("");
const sale_percent = ref("");
const sale_paid = ref("");


onMounted( async () => { 
   console.log("onMounted")
   console.log(props.articleId);
   console.log(props.contentType);
   
  if(props.contentType=="travel") {
      await axios.get(process.env.VUE_APP_TRAVEL_DETAIL+props.articleId).then((res) =>{
          if(res.data.resultCode=="SUCCESS"){
            content              = res.data.result.content;
            title.value          = res.data.result.title;
            travel_name.value    = res.data.result.travelAgencyName;
            read_count.value     = res.data.result.read_count;
            travel_end_at.value  = res.data.result.travel_end_at.substr(0,4)+"-"+res.data.result.travel_end_at.substr(4,2)+"-"+res.data.result.travel_end_at.substr(6);
            real_pay.value       = res.data.result.real_paid+" 원";
            sale_percent.value   = res.data.result.sale_percent+" %";
            sale_paid.value      = res.data.result.sale_paid+" 원";
          }
        }).catch(() => {
            alert("잠시 후 다시 시도해주세요.");
        }).finally(() => {
        });
  }


   const xeditor = new Viewer({
    el: refEditor.value,
    height: "500px",
    initialValue: content,
    initialEditType: "wysiwyg",
    previewStyle: "tab",
    useDefaultHTMLSanitizer: false,
    usageStatistics: false,
    hideModeSwitch: true,   //밑에 창 
  });
  
})

</script>

<style>
  .margincustom {
    margin-left : 2rem;
  }
  .margintpcust {
    margin-top : 2rem;
  }
.deco{
  text-decoration: line-through;
}
</style>


