<template>
  <div
    class="input"
    :class="{ 'input-invalid': fail, 'input-valid': success, 'input-all': allW}">
    <label
      class="input__label"
      >{{title}}</label>
    <input
      class="input__box"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <span
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
     type: {
       type: String,
       default: 'text'
     },
     value: {
       type: String,
       default: null
     },
     title: {
       type: String
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
     },
     allW: {
       type: Boolean,
       default: false
     }
   }
 }
 </script>