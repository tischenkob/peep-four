<template>
  <div class="main">
    <div class="row around">
      <router-link id="link-home" to="/">
        <ion-icon name="arrow-round-back" alt="back" />
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
import axios from "axios";

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

      axios
        .get(this.$root.$data.BACKEND_URL + "getEntries")
        .then(res => {
          return res.data;
        })
        .catch(res => {
          alert(res.data);
        });

      return [];
    },
    addEntry(entry) {
      //TODO Query backend

      axios
        .post(this.$root.$data.BACKEND_URL + "addEntry", {
          x: entry.x,
          y: entry.y,
          r: entry.r,
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
        .then(res => {
          this.entries.push(res.data);
        })
        .catch(res => alert(res.data));
    }
  },
  created() {
    this.entries = this.getEntries();
  },
  beforeRouteEnter(to, from, next) {
    next(vue => {
      if (vue.$root.$data.loggedIn) next(to);
      else next("/login");
    });
  }
};
</script>

<style lang="scss" scoped></style>
