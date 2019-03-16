<template>
  <q-card inline style="margin: 0.5% 0.2% 0.2% 0.2%; width: 20%; height:100%;">
    <q-scroll-area style="height: calc(100vh - 60px - 2vh);"
        :delay="1500">
    <q-list>
      <q-item class="item" :class="{picked: i == pickedIndex}" v-for ="(tag, i) in listTags" :key="i" @click.native="chooseTag(tag)">
        <q-item-main >
          <q-item-tile label>{{tag}}</q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
    </q-scroll-area>
  </q-card>
</template>

<script>
export default {
  name: 'tagPanel',
  created () {
    this.$axios.get('/api/tags/')
      .then((response) => {
        let data = response.data
        console.log(data)
        this.listTags = data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      listTags: [],
      pickedIndex: -1,
      filter: ''
    }
  },
  methods: {
    chooseTag (index) {
      this.pickedIndex = index
      this.$emit('chosenVideo', this.listTags[index])
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
}
.picked{
  background: rgba(20, 11, 11, 0.5);
}
</style>
