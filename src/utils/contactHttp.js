import {loading,success,fail} from './toast'
export default (axios,config)=>{
  let modelName = config.name || 'default'
  const {api} = config
  if(!api)
    throw new Error(`${modelName}中必须有api属性`)
  if(!Object.prototype.toString.call(api))
    throw new Error(`${modelName}中的api属性必须是一个对象`)
  let httpObj = {}
  for (const apiName in api) {
    let {url,method,isForm,data:apiData,toast,hooks,corsUrl,token} = api[apiName]
    apiData = apiData || {}
    hooks = hooks || {}
    const {beforeReq,afterReqSuccess,afterReqFail} = hooks
    //整理要携带的数据
    httpObj[apiName] = async (data={})=>{
      let transformData = null
      if(isForm){
        transformData = new FormData()
        for (let key in data) {
          transformData.append(key,data[key])
        }
        for (let key in apiData) {
          transformData.append(key,apiData[key])
        }
      }else{
        // transformData = data
        transformData = Object.assign(apiData,data)
      }
      let result = ''
      if(corsUrl){
        url = corsUrl + url
        corsUrl = ''
      }
      let headers={}
      let Authorization = (typeof token === 'function') && token()
      if(Authorization){
        headers={Authorization}
      }
      //根据method发送请求
      try {
        beforeReq && beforeReq.call(config)
        toast && loading()
        switch (method) {
          case 'get':
          case 'delete':
            result = await axios({
              url,
              method,
              params:transformData,
              headers
            })
            break;
          case 'put':
          case 'post':
            result = await axios({
              url,
              method,
              data:transformData,
              headers
            })
            break;
        }
        afterReqSuccess && afterReqSuccess.call(config,result)
        toast && success()
      } catch (error) {
        afterReqFail && afterReqFail.call(config)
        toast && fail()
        return Promise.reject(error)
      }
      return result
    }
  }
  return httpObj
}