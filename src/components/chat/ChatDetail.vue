<template>


<div class="container"> 
<button>목록으로 이동</button>
<h3 class=" text-center">채팅방 이름</h3>

<button>채팅방 나가기</button>

<div class="messaging">
  <div class="inbox_msg">
    <div class="inbox_people">
      <div class="headind_srch">
        <div class="recent_heading">
          <h4>참여 인원</h4>
        </div>
      </div>
      <div class="inbox_chat">
        <div class="chat_list active_chat">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sunil"> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mesgs">
      <div class="msg_history" ref='messages'>
        <div  v-for="(item,index) of messageList" :key="index">
        <div class="incoming_msg" v-if="!item.id_chk">
          <!-- <div class="incoming_msg_img"> <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="sunil"> </div> -->
          <div class="received_msg">
            <span>{{item.nick_name}}</span>
            <div class="received_withd_msg">
              <p>{{item.content}}</p>
              <span class="time_date">{{item.created_time}} | {{item.created_at}}</span></div>
          </div>
        </div>

        <div class="outgoing_msg" v-if="item.id_chk">
          <div class="sent_msg">
            <p>{{item.content}}</p>
            <span class="time_date">{{item.created_time}} | {{item.created_at}}</span> </div>
        </div>
    </div>
      </div>
      <div class="type_msg">
        <div class="input_msg_write">
          <input type="text" class="write_msg" placeholder="Type a message" v-model="send_message" />
          <button class="msg_send_btn" type="button" @click="send_message_click"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<BlackBg v-if="loading"></BlackBg>
</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import BlackBg from "../loading/BlackBg"
export default {
	data: function () {
    return {
        messageList: [],
        stompClient:'',
        room_id:this.$route.query.sn,
        loading : false,
        send_message:"",
        user_id:"",
    }
  },
    components :{
        BlackBg
    },
    created() {
        this.init();
    },  
    methods: {
        init() {
                this.userId();
                this.roomMessage();
                this.connect();
        },
        userId(){
          const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
            this.$axios.get(process.env.VUE_APP_CHAT_ROOM_MESSAGE_ID,{headers}).then((res) =>{
                if(res.data.resultCode=="SUCCESS"){
                    if(res.data.result!="" || res.data.result!=undefined || res.data.result!="undefined"){
                      console.log(res.data.result);
                         this.user_id = res.data.result;

                    }
                    
                }
            }).catch((error) => {
                this.$swal('',error.response.data.result,'error');
                this.$router.push("/");
            }).finally(() => {
            this.loading = false;
            });
        },

        roomMessage() {
            const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
            this.loading = true;
             this.$axios.get(process.env.VUE_APP_CHAT_ROOM_MESSAGE+this.room_id,{headers}).then((res) =>{
                if(res.data.resultCode=="SUCCESS"){
                    if(res.data.result.length!=0){
                    this.messageList = [] ;
                    res.data.result.forEach(element => {
                        let obj = [];
                        obj.id_chk = element.idChk;
                        obj.nick_name = element.nickName;
                        obj.content = element.content;
                        obj.created_time = element.createdAt.substr(11,5);
                        obj.created_at = element.createdAt.substr(5,2)+"."+element.createdAt.substr(8,2);
                        this.messageList.push(obj);
                    })
                }
                }
            }).catch((error) => {
                this.$swal('',error.response.data.result,'error');
                this.$router.push("/");
            }).finally(() => {
            this.loading = false;
            });
        },

        send_message_click() {
            const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
              const msg = {
              chatRoomId :  this.room_id ,
              content    : this.send_message,
              TripUserId : this.user_id
              }
              this.send_message="";
              this.stompClient.send("/app/new-Message",JSON.stringify(msg),headers);
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
                
                this.stompClient.subscribe("/topic/new-Message", res => {
                  let chat = JSON.parse(res.body).result;
                  console.log(chat.userId);
                  console.log(this.user_id);
                  let obj = [];
                  if(this.user_id == chat.userId){
                    obj.id_chk = true;
                  } else {
                    obj.id_chk = false;
                  }
                  
                  obj.nick_name = chat.nickName;
                  obj.content = chat.content;
                  obj.created_time = chat.createdAt.substr(11,5);
                  obj.created_at = chat.createdAt.substr(5,2)+"."+chat.createdAt.substr(8,2);
                  this.messageList.push(obj);
                });

                },
                error => {
                // 소켓 연결 실패
                console.log('소켓 연결 실패', error);
                this.connected = false;
                }
            );        
    },
  },
  watch: {
        messages() {
            // 화면에 추가된 후 동작하도록
            this.$nextTick(() => {
                let messages = this.$refs.messages;

                messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
            });
        },
    },
}


</script>

<style scoped>
.container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>