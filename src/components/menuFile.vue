<template>
  <div class="main">
    <tagPanel/>
  </div>
</template>

<script>
// import FileSaver from 'file-saver'
import tagPanel from './tagPanel.vue'
// import videoElement from './videoElement.vue'
// import {
//   QSpinnerGears,
//   QSpinnerPie
// } from 'quasar'
export default {
  name: 'menu',
  created () {
    let _documents = []
    this.$axios.get('/api/files/listAll').then(({ data }) => {
      _documents = data
      if (_documents.length > 0) {
        _documents.forEach((doc) => {
          this.documents.push({
            name: doc.title,
            status: '',
            message: ''
          })
        })
        console.log(this.documents)
        this.dataReady = true
      }
    })
  },
  data () {
    return {
      documents: [],
      dataReady: false,
      currentDoc: null
      // pageName: 'introbio',
    }
  },
  components: {
    tagPanel
  }
}
</script>

<style lang="scss" scoped>
.main {
    height: 100%;
    overflow: hidden;
}
</style>
