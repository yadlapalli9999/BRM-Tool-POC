export const isLoggedIn = () => {
    return !!sessionStorage.getItem('access_token');
};

export const getToken = () => {
    return sessionStorage.getItem('access_token');
};
