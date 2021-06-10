
import axios from 'axios';
import {
  userLogout,
} from '../actions/UserStateActions';
import store from '../configs/store';

export default class RequestService {
  constructor(route = '') {
    let uri = 'https://fliprfantasybackend.herokuapp.com' || '';
    this.url = `${uri}/${route}`;

    axios.defaults.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  // setToken = async(data) => {
  //   localStorage.setItem('xyz-access-token',data.token);
  //   localStorage.setItem('createdAt',data.createdAt);
  // }

  getToken = async() => {
    // const token = await localStorage.getItem('xyz-access-token');
    // const created = await localStorage.getItem('createdAt');
    // const curr = Date();
    // const expiry = 24*30*60*1000;
    // if(curr-Date.parse(created)>expiry){
    //   console.log('session expired');
    //   await this.logout();
    // }

    const state = store.getState();
    const token = state.userDetails.token;
    return token;
  }

  loggedIn = async() => {
    // const token = await localStorage.getItem('xyz-access-token');
    // if(token!==null&&token.length===51){
    //   const created = await localStorage.getItem('createdAt');
    //   const curr = new Date();
    //   const expiry = 24*30*60*1000;
    //   //console.log('time to expire', curr-Date.parse(created));
    //   if(curr-Date.parse(created)>expiry){
    //     console.log('session expired');
    //     await this.logout();
    //     return false;
    //   }
    //   console.log('check login token--------', token);
    //   return true;
    // }
    const state = store.getState();
    const user = state.userDetails;
    return user.loggedIn;
  }

  logout = async () => {
    axios.defaults.headers['xyz-access-token'] = await localStorage.getItem('xyz-access-token');
    try {
      const res = await axios({ method: 'PUT',  url: `${this.url}/logout`});
      await localStorage.clear();
      store.dispatch(userLogout())
      return res.data;
    } catch (error) {
      return error.response;
    }

    // await localStorage.removeItem("xyz-access-token");
    // await localStorage.removeItem("createdAt");
  }

  post = async (data, headers = axios.defaults.headers, id = '') => {
    console.log('data',data);
    if (await this.loggedIn()) {
      axios.defaults.headers['auth-token'] = await this.getToken();
      try {
        const res = await axios({ method: 'POST',  url: `${this.url}${id}`, data, headers });
        console.log('put res', res);
        return res.data;
      } catch (error) {
        console.log('put res', error);
        return error.response;
      }
    }
    return {
      success: 'false',
      status: 'unauthorized',
      message: 'Token not found, Login and try again.',
    };
  };

  put = async (data, headers = axios.defaults.headers, id = '') => {
    if (await this.loggedIn()) {
      axios.defaults.headers['auth-token'] = await this.getToken();
      try {
        const res = await axios({ method: 'PUT',  url: `${this.url}/${id}`, data, headers });
        return res.data;
      } catch (error) {
        return error.response;
      }
    }
    else{
      try {
        const res = await axios({ method: 'PUT',  url: `${this.url}/${id}`, data, headers });
        return res.data;
      } catch (error) {
        return error.response;
      }
    }
  };

  get = async (id = '') => {
    console.log('url' + this.url + id);

    if (await this.loggedIn()) {
      axios.defaults.headers['auth-token'] = await this.getToken();
      try {
        const res = await axios({ methods: 'GET', url: `${this.url}${id}` });
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    }
    else{
      try {
        const res = await axios({ methods: 'GET', url: `${this.url}/${id}` });
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    }
  };

  auth = async(username, password) => {
    try {
      const res = await axios({ method: 'POST', url: `${this.url}/login`, data : { username, password } });
      //await this.setToken(res.data);
      console.log('logged in', res.data);
      return res.data;
    } catch (error) {
      console.log('login erorrrrrrrr', error);
      return{
        success: false,
        ...error.response,
      }
    }
  }

  register = async(username, password, contact_number) => {
    try {
      const res = await axios({ method: 'POST', url: `${this.url}/register`, data : { username, password, contact_number } });
      console.log('registered', res.data);
      return res.data;
    } catch (error) {
      console.log('register erorrrrrrrr', error);
      return{
        success: false,
        ...error.response,
      }
    }
  }

  reg = async(user) => {
    try {
      const res = await axios({ method: 'POST', url: `${this.url}/signup`, data : user });
      return res.data;
    } catch (error) {
      return{
        success: false,
        ...error.response,
      }
    }
  }
}