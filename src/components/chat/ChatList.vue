<template>
<div class="container bootstrap snippets bootdey" style="margin-top:2rem;">




  <div class="jumbotron list-content">
    <ul class="list-group">
      <li href="#" class="list-group-item title">
        채팅방
      </li>
      <li href="#" class="list-group-item text-left" v-for="(item,index) of roomList" :key="index">
        <label class="name">
            {{item.room_name}}<br>
        </label>
        <label class="pull-right">
            <button class="btn btn-danger" style="font-size:10px" @click="chatDetail(item.id)">입장하기</button>
        </label>
        <label class="pull-right" style="margin-right:3rem;">{{item.roomPersonIngCount}} / {{item.roomCount}} 명</label>
        <div class="break"></div>
      </li>
    </ul>
  </div>
     <button class="btn btn-danger" style="font-size:10px" @click="newRoom">채팅방 생성</button>
  </div>

 <Pagination v-if="pageChk" :pageListItem="pageListItem" @pageCurrent="pageCurr" :pageTotal="pageTotal"></Pagination>
<BlackBg v-if="loading"></BlackBg>

</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import Pagination from '../layout/Pagination';
import BlackBg from "../loading/BlackBg"

export default {
	data: function () {
    return {
        roomList: [],
        pageListItem : 10 ,
        page : 0 ,
        pageTotal : 0 ,
        pageChk : false ,
        loading : false,
        stompClient:'',
        
    }
  },
    components :{
         Pagination,
         BlackBg
        
    },
    created() {
        //  this.connect();
        this.init();
    },  
    methods: {
        init() {
                this.roomListAxios();
                this.connect();
        },
        roomListAxios() {
            let parameter = {
            "page" : this.page
            }
            // this.loading = true;
            console.log(process.env.VUE_APP_CHAT_LIST);
             this.$axios.get(process.env.VUE_APP_CHAT_LIST,{params:parameter}).then((res) =>{
                console.log(res);
                if(res.data.resultCode=="SUCCESS"){
                    this.pageTotal = res.data.result.totalElements;
                    console.log(this.pageTotal);
                    this.roomList = [] ;
                    res.data.result.content.forEach(element => {
                        let obj = [];
                        obj.room_name = element.roomName;
                        obj.id        = element.id;
                        obj.roomCount = element.roomCount;
                        obj.roomPersonIngCount = element.roomPersonIngCount;
                        this.roomList.push(obj);
                    })
                }
                if(this.pageTotal==0){
                     this.pageChk = false;
                } else {
                    this.pageChk = true;
                }
            }).catch((error) => {
                this.$swal('',error.response.data.result,'error');
            }).finally(() => {
            this.loading = false;
            });
        },

        newRoom() {
            let title = prompt('제목을 입력해주세요.', "100자 이하");
            let count = prompt('인원수를 입력해주세요.', 5);
            let param = {
                "publicRoom" : true,
                "roomCount"  : count,
                "roomName"   : title

            }
            let parameter = {
            "page" : this.page
            }
            const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
            console.log(process.env.VUE_APP_CHAT_ROOM_SAVE);
             this.$axios.post(process.env.VUE_APP_CHAT_ROOM_SAVE,param,{headers}).then((res) =>{
                  this.stompClient.send("/app/roomList");
                  // this.stompClient.subscribe("/topic/roomList", res => {
                  // });
                  //  this.roomListAxios();
                  
            }).catch((error) => {
              console.log(error);
            }).finally(() => {
            });

        },

        connect() {
          const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
            const serverURL = "http://localhost:8081/ws/chat"
            let socket = new SockJS(serverURL);
            this.stompClient = Stomp.over(socket);
            console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
            this.stompClient.connect(
              headers,
                frame => {
                // 소켓 연결 성공
                this.connected = true;
                console.log('소켓 연결 성공', frame);
                
                //새 채팅글 입력시 채팅방 리로드
                this.stompClient.subscribe("/topic/roomList", res => {
                  this.roomListAxios();

                });

                // this.stompClient.subscribe("/topic/api/chat/new-room", res => {
                //     console.log(res);
                //     this.roomListAxios();

                //     // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
                //     // this.recvList.push(JSON.parse(res.body))
                // });

                // this.stompClient.send("/topic/api/chat/rooms", res => {
                //     console.log("111");
                //     this.roomListAxios();

                //     // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
                //     // this.recvList.push(JSON.parse(res.body))
                // });
                //   this.stompClient.subscribe("/send", res => {
                //     console.log('구독으로 받은 메시지 입니다.', res.body);

                //     // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
                //     this.recvList.push(JSON.parse(res.body))
                //   });
                },
                error => {
                // 소켓 연결 실패
                console.log('소켓 연결 실패', error);
                this.connected = false;
                }
            );        
    },
    chatDetail(value) {
      this.$router.push({
          path: "/chatDetail",
          name: "chatDetail",
          query: { sn: value }
        });
        // console.log(value);
    },

    pageCurr(value){
        this.page = value-1;
        this.roomListAxios();
      },
  }
}


</script>


<style scoped>
.list-content{
 min-height:300px;
}
.list-content .list-group .title{
  background:#5bc0de;
  border:2px solid #DDDDDD;
  font-weight:bold;
  color:#FFFFFF;
}
.list-group-item img {
    height:80px; 
    width:80px;
}

.jumbotron .btn {
    padding: 5px 5px !important;
    font-size: 12px !important;
}
.prj-name {
    color:#5bc0de;    
}
.break{
    width:100%;
    margin:20px;
}
.name {
    color:#5bc0de;    
}
</style>