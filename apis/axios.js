
const axios =obj=>{
  return new Promise((res,rej)=>{
    uni.request({
      ...obj,
      success:(data)=>{
        res(data)
      },
      fail:(err)=>{
        rej(err)
      }
    })
  })
}

export default axios