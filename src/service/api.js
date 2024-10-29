import axios  from 'axios';

axios.defaults.baseURL  = 'http://localhost:8080';

export const RegisterApi = (inputs) => {
    let data = {
        name: inputs.username,
        email:  inputs.email,
        password: inputs.password
    };
    console.log(data)
    return axios.post('/user/register',data)
}

export const LoginApi = (inputs) => {
        let data = {
            email:  inputs.email,
            password: inputs.pass
        };
        const response = axios.post('/user/login',data)
        return response;
}

export const fetchUserApi = (inputs) => {
    let data = {
        userId:  inputs.userId
    };
    const response = axios.post('/user/login',data)
    return response;
}