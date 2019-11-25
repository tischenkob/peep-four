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
      time: "",
      date: ""
    };
  },
  methods: {
    updateTime() {
      let d = new Date();
      this.time = d.getHours() + ":" + d.getMinutes();
      this.date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    }
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 11000);
  }
};
</script>

<style scoped language="scss" />
