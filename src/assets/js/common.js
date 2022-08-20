export default{
    install(Vue){

        //이메일 정규식
        Vue.config.globalProperties.$emailValidation = function(data){
            var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if(regExp.test(data)){
                return true;
            }else{
                return false;
                
            }
        }
        
        //최소 8자 , 하나 이상의 문자 , 하나의 숫자 및 하나의 특수 문자 
        Vue.config.globalProperties.$passwordValidation = function(data) {
            var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
            if(regExp.test(data)) {
                return true;
            } else {
                return false;
            }
        }

        Vue.config.globalProperties.$phoneNumberValidation = function(data) {
            var regExp = /^\d{3}-\d{3,4}-\d{4}$/i;
            if(regExp.test(data)) {
                return true;
            } else {
                return false;
            }
        }
        
        Vue.config.globalProperties.$phoneNumberGetMask = function(data) {
            let res = ''
            if(data.length < 8) {
                if(data.length>=4){
                    res = data.substr(0, 3) + '-' + data.substr(3,3)+ data.substr(6);
                }else{
                    res = data
                }
            } else if(data.length == 8) {
                res = data.substr(0, 3) + '-' + data.substr(3,3)+ '-' + data.substr(6)
            } else if(data.length == 9) {
                res = data.substr(0, 3) + '-' + data.substr(3, 3) + '-' + data.substr(6)
            } else if(data.length == 10) {
                res = data.substr(0, 3) + '-' + data.substr(3, 3) + '-' + data.substr(6)
            } else if(data.length > 10) {
                res = data.substr(0, 3) + '-' + data.substr(3, 4) + '-' + data.substr(7)
            }
            return res;
        }
    }
}