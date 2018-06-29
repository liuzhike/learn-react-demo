import axios from 'axios'

export const getAxios = (url, params = {}, sucFn=()=>{}, failFn=()=>{}) => {
  axios.get(url, {params: params})
    .then( (res) => {
      sucFn(res)
    })
    .catch((error) =>{
      failFn(error)
    });
}

export const postAxios = (url, params = {}, sucFn=()=>{}, failFn=()=>{}) => {
  axios.post(url, params)
    .then( (res) => {
      sucFn(res)
    })
    .catch((error) =>{
      failFn(error)
    });
}
