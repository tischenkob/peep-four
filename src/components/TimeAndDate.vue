<template>
  <div>
    <span id="date" :title="date">{{ day }}</span>
    <span id="time"> {{ time }}</span>
  </div>
</template>

<script>
export default {
  name: "TimeAndDate",
  data() {
    return {
      time: "",
      date: "",
      day: "",
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  },
  methods: {
    updateTime() {
      let d = new Date();
      this.time = d.getHours() + ":" + d.getMinutes();
      this.date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
      this.day = this.week[d.getDay() - 1];
    }
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 11000);
  }
};
</script>

<style scoped language="scss">
div {
  position: relative;
  bottom: -34px;
}
</style>
