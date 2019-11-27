<template>
  <div class="main">
    <div class="row around">
      <router-link id="link-home" to="/">
        <ion-icon name="ios-arrow-round-back" alt="back" />
      </router-link>
      <TimeAndDate />
      <button
        id="history-button"
        :class="['icon-button', { active: showHistory }]"
        @click="showHistory = !showHistory"
      >
        <ion-icon name="time"></ion-icon>
      </button>
    </div>
    <div class="row around">
      <CoordPlane id="coords" :entries="entries" @addentry="addEntry" />
      <keep-alive>
        <component :is="currentTab" :entries="entries" @addentry="addEntry"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CoordPlane from "../components/CoordPlane.vue";
import Form from "../components/Form.vue";
import TimeAndDate from "../components/TimeAndDate.vue";
import Table from "../components/Table.vue";

export default {
  name: "Main",
  components: { CoordPlane, Form, Table, TimeAndDate },
  data() {
    return {
      showHistory: false,
      entries: []
    };
  },
  computed: {
    currentTab() {
      return this.showHistory ? "Table" : "Form";
    }
  },
  methods: {
    getEntries() {
      // TODO Query backend
      let entries = [];

      // let adddress = "liza/api/"
      // this.$http.get(adddress + "getEntries")
      // .then((res) => {
      //   entries = res.data;
      // });

      return entries;
    },
    addEntry(entry){
      //TODO Query backend

      // this.$http.post("addEntry", entry)
      // .then((res) => {
      //   this.entries.push(res.data);
      // })
      // .catch(alert("Error"))

      this.entries.push(entry);
    }
  },
  created() {
    this.entries = this.getEntries();
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped></style>
