<template>
  <table>
    <div id="table" v-for="entry in entries" :key="entry.id">
      <td>{{ entry.x }}</td>
      <td>{{ entry.y }}</td>
      <td>{{ entry.r }}</td>
      <td>{{ entry.hit }}</td>
    </div>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    entries: { type: Array }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 250px;
}
#table {
  width: 100%;
  & td {
    width: 25%;
    text-align: center;
  }
}
</style>
