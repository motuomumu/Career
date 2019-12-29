//包含应用中所有 接口的请求函数的模块
import ajax from './ajax'
import jsonp from 'jsonp'



// //登录接口
// export const reqLogin = (account,password) => ajax('/user/login',{account,password},'POST')
// //注册
// export const reqRegister = (account,password,confirm,residence) =>ajax('/user/register',{account,password,confirm,residence},'POST')
// //添加用户

 //获取天气信息
 export const reqWeather = ()=>{
    return new Promise((resolve,reject)=>{
        const url='http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data)
            if(!err&&data.status==='success'){
               const {dayPictureUrl,weather}= data.results[0].weather_data[0]
               resolve({dayPictureUrl,weather})
            }
            
        })
    })
  
 }
  reqWeather('北京')