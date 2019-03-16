<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'">
        <q-toolbar-title>
          Asset Library
          <div slot="subtitle">Keybridge Technologies, Inc.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container style="height:100%;">
      <menuFile />
    </q-page-container>
  </q-layout>
</template>

<script>
import menuFile from '../components/menuFile.vue'
export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    menuFile
  }
}
</script>

<style>
</style>
