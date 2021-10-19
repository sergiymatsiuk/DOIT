<template>
  <div class="lazy-loading"></div>
</template>

<script>
export default {
  name: 'lazy-loading',
  methods: {
    setLoadingObserver() {
      const loadingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$emit('get')
          }
        })
      })
      loadingObserver.observe(document.querySelector('.lazy-loading'))
    }
  },
  mounted () {
    this.setLoadingObserver()
  }
}
</script>