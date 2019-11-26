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
      <CoordPlane id="coords" :entries="entries" />
      <keep-alive>
        <component :is="currentTab" :entries="entries"></component>
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
      let entries = [
        { x: -1, y: 2, r: 3, hit: true },
        { x: 2, y: -1, r: 1, hit: false },
        { x: -3, y: -4, r: 2, hit: true },
        { x: 4, y: 3, r: 0, hit: false }
      ];
      return entries;
    }
  },
  created() {
    this.entries = this.getEntries();
  }
};
</script>

<style lang="scss" scoped></style>
