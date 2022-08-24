<template>
<!-- 여행 리스트 -->
<div v-if="props.contentType=='travel'">
<div class="margincustom margintpcust">
    <h2>{{title}}</h2>
</div>
<div class="margincustom">
  {{travel_name}} 
</div>
<div class="margincustom">
  <span style="font-size:13px;">마감일 : {{travel_end_at}}</span> <span style="font-size:13px; color: gray;">조회수:{{read_count}}</span>
</div>
</div>
<!-- 여행 리스트 -->


<!-- 게시판 -->
<div v-if="props.contentType=='article'">
<div class="custom-div" v-if="auth_article">
  <button class="btn-cl-cus-upd" @click="upd_click">수정</button><button  class="btn-cl-cus-del" @click="delete_click">삭제</button>
</div>
<div class="margincustom margintpcust">
    <h2>{{title}}</h2>
</div>
<div class="margincustom">
  {{nickname}} 
</div>
<div class="margincustom">
  <span style="font-size:13px;">등록일 : {{created_at}}</span> <span style="font-size:13px; color: gray;">조회수:{{read_count}}</span>
</div>
</div>
<!-- 게시판 -->


  <div ref="refEditor" class="margincustom margintpcust"></div>
  <div class="margincustom" v-if="props.contentType=='travel'">
  <span style="font-size:15px;">가격:<span class="deco" >{{$numberWithCommas(real_pay)}}</span><span style="color:red; margin-left: 1rem;">{{sale_percent}}</span> <span style="margin-left:1rem;">{{$numberWithCommas(sale_paid)}}</span></span>
</div>
</template>
<script setup>
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { ref, onMounted ,defineProps,inject} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const axios = require("axios");
const swal = inject('$swal')
 
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
const nickname = ref("");
const created_at = ref("");
const auth_article = ref("");
// const emit =   defineEmits(['contentChange']);

function tokenChk() {
  let token = localStorage.getItem("token");
      if(token == null || token.length==0 || token == "null" || token == "undefined" || token ==undefined) {
          return false;
      } 
          return true;
}
function delete_click(){
            swal.fire({
                        title: '삭제 하시겠습니까?',
                        text: '다시 되돌릴 수 없습니다.',
                        icon: 'warning',
                        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                        confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
                        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                        cancelButtonText: '취소', // cancel 버튼 텍스트 지정
                        reverseButtons: true, // 버튼 순서 거꾸로
   
      }).then(result => {
         if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
             const headers = {
               'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          axios.put(process.env.VUE_APP_ARTICLE_DETAIL+props.articleId+"/delete",null,{headers}).then((res) =>{
          if(res.data.resultCode=="SUCCESS"){
              swal('','삭제되었습니다.','success');
              router.push("/article");
          }
        }).catch(() => {
           history.back(-1);
        }).finally(() => {
        });
          }
      });
}

function upd_click() {
        router.push({
          path: "/articleModify",
          name: "articleModify",
          query: { sn: props.articleId }
        });
}

onMounted( async () => { 
   console.log("onMounted")
  //  console.log(props.articleId);
  //  console.log(props.contentType);
   
  if(props.contentType=="travel") {
      await axios.get(process.env.VUE_APP_TRAVEL_DETAIL+props.articleId).then((res) =>{
          if(res.data.resultCode=="SUCCESS"){
            content              = res.data.result.content;
            title.value          = res.data.result.title;
            travel_name.value    = res.data.result.travelAgencyName;
            read_count.value     = res.data.result.read_count;
            travel_end_at.value  = res.data.result.travel_end_at.substr(0,4)+"."+res.data.result.travel_end_at.substr(4,2)+"."+res.data.result.travel_end_at.substr(6);
            real_pay.value       = res.data.result.real_paid+" 원";
            sale_percent.value   = res.data.result.sale_percent+" %";
            sale_paid.value      = res.data.result.sale_paid+" 원";
          }
        }).catch(() => {
           history.back(-1);
        }).finally(() => {
        });
  }

  if(props.contentType=="article") {
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }


    await axios.get(process.env.VUE_APP_ARTICLE_DETAIL+props.articleId,tokenChk()==true?{headers}:"").then((res) =>{
      console.log(res);
          if(res.data.resultCode=="SUCCESS"){
            content              = res.data.result.content;
            title.value          = res.data.result.title;
            nickname.value    = res.data.result.nickName;
            read_count.value     = res.data.result.readCount;
            created_at.value  = res.data.result.createdAt.substr(0,4)+"."+res.data.result.createdAt.substr(5,2)+"."+res.data.result.createdAt.substr(8,2);
            auth_article.value   = res.data.result.authChk;
            // emit('contentChange',res.data.result.articleCommentResponses);
          }
        }).catch(() => {
           history.back(-1);
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
.btn-cl-cus-upd {
    background-color: rgba(0,0,0,0);
    color: skyblue;
    border: 0px ;
    /* width : 15%; */
    font-size: 13px;
} 
.btn-cl-cus-del {
    background-color: rgba(0,0,0,0);
    color: red;
    border: 0px ;
    /* width : 15%; */
    font-size: 13px;
} 
.custom-div {
  display: flex;
  justify-content: end;
  margin-top:2rem;
}
</style>


