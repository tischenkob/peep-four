<template>
  <div>
    <div id="table" v-for="entry in entries" :key="entry.id">
      <span>{{entry.x}}</span>
      <span>{{entry.y}}</span>
      <span>{{entry.r}}</span>
      <span>{{entry.hit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    entries: { type: Array }
  }
};
</script>

<style scoped>
#table {
  width: 250px;
}
</style>
