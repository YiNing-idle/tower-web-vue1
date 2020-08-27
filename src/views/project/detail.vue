<template>
  <div id="projectDetail" class="app-container">
    <div class="box-center"></div>
    <Timeline :project="project" />
  </div>
</template>

<script>
import Timeline from './components/Timeline'

export default {
  name: 'ProjectDetail',
  components: { Timeline },
  data(){
    return {
      project: {}
    }
  }
}

</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}
</style>

