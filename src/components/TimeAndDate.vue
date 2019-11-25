<template>
  <div>
    <span id="time"> {{ time }}</span> |
    <span id="date">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: "TimeAndDate",
  data() {
    return {
      time: "time 1000",
      date: ""
    };
  },
  methods: {
    // updateTime: function() {
    //   let d = new Date();
    //   this.time = d.getHours + ":" + d.getMinutes;
    //   this.date = d.getDate;
    // }
  },
  mounted() {
  }
};
</script>

<style scoped language="scss" />
