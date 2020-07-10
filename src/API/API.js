import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e110966e-f98c-4cb9-bceb-689330c3a1e2',
        'Content-Type': 'application/json'
    }
});

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
}

export const authApi = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password) {
        return instance.post(`auth/login`, { email, password })
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}