
import axiosInst from '@/utility/axiosInst'

export default {
    // requestSpringToCheckEmailDuplication ({ }, payload) {
    //     const { email } = payload
    //     console.log('email: ' + email)

    //     return axiosInst.spring.get(`/account/check-email/${email}`)
    //         .then((res) => {
    //             if (res.data) {
    //                 alert('사용 가능한 이메일입니다')
    //                 return true
    //             } else {
    //                 alert('중복된 이메일입니다')
    //                 return false
    //             }
    //         })
    //         .catch((res) => {
    //             alert("문제 발생!")
    //         })
    // },
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
    requestLoginAccountToSpring({ }, payload) {
        const{ email, password } = payload

        return axiosInst.spring.post('/account/sign-in', { email, password })
        .then((res) => {
            alert('로그인 성공')
            let userToken = res.data.userToken;
            localStorage.setItem("userToken", userToken)
        })
        .catch(() => {
            alert('문제 발생')
        })
    }
}