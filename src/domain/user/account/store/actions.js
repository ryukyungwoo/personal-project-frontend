


import axiosInst from '@/utility/axiosInst'

export default {
    requestRegisterAccountToSpring ({ }, payload) {

        const { email, password } = payload

        return axiosInst.spring.post('/account/sign-up', { email, password })
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
            if(res.data == true) {
                const cookieString = document.cookie;
                const cookies = cookieString.split(';');
                console.log("궁금해: " + cookies)

                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();

                    var separatorIndex = cookie.indexOf('=');
                    var name = cookie.substring(0, separatorIndex);
                
                    if (name === "AccessToken") {
                        localStorage.setItem("isLogin", true)
                    }
                }
                alert('로그인되었습니다.')
                router.push('/')
            } else {
                alert('로그인이 실패하였습니다.')
            }
        })
        // .catch(() => {
        //     alert('로그인이 실패하였습니다.')
        // })
    },
    requestLogOutAccountToSpring({}, ) {
        const userToken = localStorage.getItem('userToken')
        return axiosInst.spring.post('/account/sign-out', { userToken })
        .then(() => {
            alert('로그아웃 되셨습니다')
            localStorage.removeItem("userToken", userToken)
        })
    }
}