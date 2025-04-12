// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
    users: {
        list: '/users',
        create: '/users',
        update: (id) => `/users/${id}`,
        delete: (id) => `/users/${id}`,
        getById: (id) => `/users/${id}`,
    },
    auth: {
        login: '/auth/login',
        register: '/auth/register',
    }
};
