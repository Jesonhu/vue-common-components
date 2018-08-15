/**
 * fastclick插件配置[A0016]
 * @desc 解决移动端点击300ms延迟的问题
 */
import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  });
}
/* End============================== */