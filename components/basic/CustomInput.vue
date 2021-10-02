<template>
  <div
    class="input"
    :class="{ 'input-invalid': fail, 'input-valid': success}">
    <label
      class="input__label"
      >{{title}}</label>
    <input
      type="text"
      class="input__box"
      :placeholder="placeholder">
    <span
      v-if="message"
      class="input__message">{{message}}</span>
  </div>
</template>
 
 <script>
 export default {
   props: {
     placeholder: {
       type: String,
       default: 'google@gmail.com'
     },
     title: {
       type: String,
       required: true
     },
     fail: {
       type: Boolean,
       default: false
     },
     success: {
       type: Boolean,
       default: false
     },
     message: {
       type: String,
       default: ''
     }
   }
 }
 </script>