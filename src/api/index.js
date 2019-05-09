import axios from 'axios';

//axios.defaults.baseURL = 'https://api.douban.com/v2';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let http = {
  post:'',
  get:''
};

http.post = function (api ,data) {
    let params =JSON.stringify(data);
    return new Promise((resolve,reject) =>{
      axios.post(api, params).then(res=>{
          resolve(res);
      })
    })
};

http.get = function (api ,data) {
    let params =JSON.stringify(data);
    return new Promise((resolve,reject) =>{
        axios.get(api, params).then(res=>{
            resolve(res);
        })
    })
};

export default http;