import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTZmN2U5YTFlMWU5MzA1Yzk4ZTVhYiIsInVzZXJuYW1lIjoiZGFjYWJhbGxlcm9AZ21haWwuY29tIiwiZXhwIjoxNjAwNTI1MzYwLCJpYXQiOjE1OTUzNDEzNjB9.hWLqlOgPTxCpvzEp8VqdgMpDnWrtzForJCmu9X6vyak"
    },
});
