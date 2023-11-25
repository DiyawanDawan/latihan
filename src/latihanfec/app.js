// const fetch = require('node-fetch');
const idUser = 1;
const url = `https://virtserver.swaggerhub.com/DIYAWANDAWAN_1/hemolife/1.0.0/v1/user/dashboardUser/=${idUser}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzEzYWQxOWQxMGRmZjVlYjI1YjM4Y2Q2NzNlMzM4NiIsInN1YiI6IjY0OTRmZjM3ZDVmZmNiMDBhZDg0YTZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Yh0gJyITW_4mdb9lcgXzb486mCppMjMqs4wOeyadFE'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));