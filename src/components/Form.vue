<template>
  <form id="controls" v-on:submit.prevent>
    <select name="x" id="x-value">
      <option value="-3">-3</option>
    </select>
    <input type="text" name="y" id="y-value" placeholder="-3 ... 5" />
    <select name="r" id="r-value">
      <option value="-3">-3</option>
    </select>
  </form>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style>
form {
  width: 250px;
  height: 250px;
}
</style>