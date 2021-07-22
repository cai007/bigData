import Vue from 'vue';
export const exist = Vue.directive('exist', {
  inserted: (el, binding, vnode) => {
    if (vnode.context.$route.meta && vnode.context.$route.meta.permission) {
      let permission = vnode.context.$route.meta.permission;
      if (!permission.includes(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      el.parentNode && el.parentNode.removeChild(el)
    }
    //vnode.context.$route.meta
    //el.parentNode && el.parentNode.removeChild(el)
  }
})
