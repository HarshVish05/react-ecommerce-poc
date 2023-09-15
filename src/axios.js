import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001',
})

// Request Interceptor
instance.interceptors.request.use(
    (config) => {

        // document.getElementById('overlay').style.display='block';
    //     Object.assign(config,{test:'checking request interceptor'})
    //   console.log(config);
      return config;
    },
    (error) => {
      
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
  instance.interceptors.response.use(
    (response) => {
        // document.getElementById('overlay').style.display='none';
        // Object.assign(response,{test:'checking response interceptor'})
        // console.log(response);
      return response;
    },
    (error) => {
      
      return Promise.reject(error);
    }
  );

export default instance