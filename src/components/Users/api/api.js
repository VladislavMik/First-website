import Axios from "axios"



const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { 'API-KEY': 'b60ab6ec-ae5f-4906-8b64-ae66db48984f' }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }  ,  
    getProfile(userId) {
        return profileAPI.getProfile(userId)
            
    }

}



export const profileAPI = { 
    getProfile(userId) {
        return instance.get(`profile/` + userId)
   },
   getStatus(userId) {
        return instance.get('profile/status/' + userId)
   }, 
   updateStatus(status) {
        return instance.put('profile/status', {status: status})
   }

}


export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
