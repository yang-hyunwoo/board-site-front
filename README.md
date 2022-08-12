# board-site-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 2022 08 12
에디터를 사용하기 위해 많은 자료를 뒤져보고 어떤 에디터를 사용해야 되나 많이 찾았는데
tiptap / toast ui editor 가 제일 유명한거 같아
tiptap 을 다운하여 사용했는데 조금 애매한 느낌이 있어
toast ui editor 로 변경 하여 개발 했다.
현재 나의 프로젝트는 vue3으로 설정되어있어 정식적으로는 toast ui가 지원을 해주지 않아
javascript 형식으로 수정 하여 개발을 했다.

<template>
  <div   ref="refEditor"></div>
</template>
editor 컴포넌트 
<script setup>
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Editor from "@toast-ui/editor";
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { ref, onMounted,defineEmits } from "vue";

const emit =   defineEmits(['contentChange']);
const refEditor = ref(null); // template의 ref의 값과 동일한 변수 선언

onMounted( () => { 
   console.log("onMounted")
   const xeditor = new Editor({
    el: refEditor.value,
    height: "500px",
    initialValue: "",             //init value 
    initialEditType: "wysiwyg",
    previewStyle: "tab",
    useDefaultHTMLSanitizer: false,
    usageStatistics: false,
    hideModeSwitch: true,   //밑에 창 
    events: {                                               //editor의 값이 변경 될때마다 emit으로 부모 컴포넌트에 던져 준다.
        change : ()=> emit('contentChange',xeditor.getHTML())
    },
    toolbarItems:[                                           //toolbar의 아이템
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task'],
        ['table', 'image', 'link'],
        ['scrollSync'],
    ],
    

  });
  
})

</script>

<template>
    <ToastEditor  @contentChange="editorContent"></ToastEditor>
<button @click="regArticle">등록</button>
</template>


emit 으로 왔다갔다 하는 파일

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