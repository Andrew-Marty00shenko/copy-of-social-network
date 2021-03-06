import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e110966e-f98c-4cb9-bceb-689330c3a1e2',
    }
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            });
    },
    getUserProfile(userId) {
        return profileApi.getUserProfile(userId);
    }
}

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
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
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