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

# 2022 08 20
sweetalert 사용

npm install -S vue-sweetalert2

main.js
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(VueSweetalert2);

사용
this.$swal( 'success','You clicked the <b style="color:red;">error</b> button!','success');
this.$swal(타이틀 ,내용 , "상태값");
상태값 :  success / error , waring , info ,question

# 2022 08 30
현재 진행 사항
메인 화면 작업중
로그인 (완료 [인증 확인])
회원가입 (회원가입 / 이메일 인증 발송 완료)
여행사 (여행사 목록 / 상세 조회 완료)
여행 리스트 (목록 /상세 조회 /아임포트 사용 결제 완료)
게시판 (목록 / 상세 조회 / 등록 / 수정 / 삭제 / 댓글 등록 /댓글 수정 / 댓글 삭제 ) 완료
구매 내역( 목록 / 아임포트 결제 취소 완료)
채팅방 ( stomp 사용 목록 / 입장 / 퇴장 / 채팅방 생성 / 채팅 상세 완료) 
* 처음 접해보는 stomp 소켓 이라 조금 많이 헷갈리고 어려워서 
  조만간 정리해서 깃에 올릴 예정
* 추가 예정[이미지 업로드] 

내 채팅방 (구현 예정) - 차주 진행 예정

사용자 페이지 완료일 9월 말
관리자 페이지 10월 초 진행 예정



