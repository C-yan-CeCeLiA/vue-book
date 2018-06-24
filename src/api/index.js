import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8888"
// axios.interceptors.response.use((res)=>{
//   return res.data
// })
//获取轮播图
export let getSliders =  ()=>{
  return axios.get("/sliders");
}
//获取热门图书
export let getHotBook = ()=>{
  return axios.get("/hot");

}
//获取全部图书
export let getBook = ()=>{
  return axios.get("/book");
}
//删除某一本图书
export let removeBook = (id)=>{
  return axios.delete(`/book?id=${id}`)
}
//获取某一本图书
export let findOneBook = (id)=>{
  return axios.get(`/book?id=${id}`)
}
//更改某本图书
export let upData =(id,data)=>{
  return axios.put(`/book?id=${id}`,data)//axios.put允许对在数据提交前进行修改
}
//put 修改数据
//添加一本书
export let add = (data) =>{
  return axios.post("/book",data)
}
//post 提交数据


//home页  两个请求一起发送
export let getAll = ()=>{
  return axios.all([getSliders(),getHotBook()]);
}

//获取分页图书
export let pagination = (offset)=>{
  return axios.get(`/page?offset=${offset}` )
}

//购物车

// export let shoppingBook = (id) =>{
//   return axios.post(`/book?id=${id}`,id)
// }