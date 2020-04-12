import { Toast } from 'vant';
export function loading() {
  Toast.loading({
    message: '加载中...',
    duration:0
  });
}
export function success() {
  Toast.clear()
  Toast.success({
    message:'加载成功！',
    duration:1000
  })
}
export function fail() {
  Toast.clear()
  Toast.fail({
    message:'加载失败！'
  })
}