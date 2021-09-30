import http from './base-api-service';

const sendMail = (data) => http.post('/contact', data)

const service = {
    sendMail
}

export default service;