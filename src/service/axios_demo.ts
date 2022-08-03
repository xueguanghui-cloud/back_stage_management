import axios from 'axios'
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data.data)
// })

// get请求
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'codexgh',
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res.data.args)
//   })

// post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'codexgh',
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res.data.data)
//   })

// axios 配置选项
axios.defaults.baseURL = 'http://httpbin.org/'
axios.defaults.timeout = 5000
// get请求
// axios
//   .get('/get', {
//     params: {
//       name: 'codexgh',
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res.data.args)
//   })

// // post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'codexgh',
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res.data.data)
//   })

// axios.all
/* axios
  .all([
    axios.get('/get', {
      params: {
        name: 'codexgh',
        age: 22
      }
    }),
    axios.post('/post', {
      data: {
        name: 'codexgh',
        age: 22
      }
    })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  }) */
// axios 拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2)
// axios.interceptors.response.use(fn1, fn2)

/* axios.interceptors.request.use(
  (config) => {
    // 添加token
    // isLoading
    return config
  },
  (err) => {
    console.log('请求发送成功')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')

    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
) */
