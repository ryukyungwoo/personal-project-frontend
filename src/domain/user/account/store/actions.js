import axiosInst from '@/utility/axiosInst'

export default {
    requestRegisterAccountToSpring ({ }, payload) {

        const { email, password, phoneNumber, nickname, address } = payload

        return axiosInst.spring.post('/account/sign-up', { email, password, phoneNumber, nickname, address })
            .then((res) => {
                alert('회원 신청하기 성공')
                return res.data
            })
            .catch(() => {
                alert('문제 발생')
            })
    },
    requestLoginAccountToSpring({}, payload) {
        const{ email, password } = payload
            
        return axiosInst.spring.post('/account/sign-in', { email, password })
        .then((res) => {
            if (res.data != null) {
                alert('로그인되었습니다.')
                localStorage.setItem('isLogin', 'true'); // 로그인 상태 저장
    
                // 서버에서 반환된 refreshTokenExpires 값을 사용합니다.
                const refreshTokenExpires = new Date(res.data);
    
                const remainingTime = refreshTokenExpires.getTime() - new Date().getTime();
    
                // 로그아웃 또는 만료 시 실행되는 함수
                const logoutOrExpire = () => {
                    localStorage.removeItem('isLogin');
                    alert('로그아웃 되셨습니다.');
                };
            
                setTimeout(logoutOrExpire, remainingTime); // 쿠키 만료 시간에 맞추어 설정
    
            } else {
                alert('로그인이 실패하였습니다.')
            }
        })
    },
    
    requestLogOutAccountToSpring({}, ) {
        return axiosInst.spring.post('/account/sign-out')
        .then(() => {
            localStorage.setItem("isLogin", false)
            alert('로그아웃 되셨습니다')
        })
    },
    requestCheckEmailToSpring({}, payload) {
        const {email} = payload
        return axiosInst.spring.post('/account/check-duplicate-email', {email})
        .then((res) => {
            if (res.data === false) {
                alert("이미 등록된 이메일입니다.")
                return
            }
            alert("사용 가능한 이메일입니다.")
            return res.data
        })
    },
    requestCheckNicknameToSpring({}, payload) {
        const {nickname} = payload
        return axiosInst.spring.post('/account/check-duplicate-nickname', {nickname})
        .then((res) => {
            if (res.data === false) {
                alert("이미 등록된 닉네임입니다.")
                return
            }
            alert("사용 가능한 닉네임입니다.")

            return res.data
        })
    },
    requestCheckPhonenumberToSpring({}, payload) {
        const {phoneNumber} = payload
        return axiosInst.spring.post('/account/check-duplicate-phoneNumber', {phoneNumber})
        .then((res) => {
            if (res.data === false) {
                alert("이미 등록된 전화번호입니다.")
                return
            }
            alert("사용 가능한 전화번호입니다.")

            return res.data
        })
    },
}