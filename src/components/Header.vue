<template>
  <header class="d-flex align-items-center justify-content-between px-4">
    <h1>BOOLFLIX</h1>
    <div class="search">
      <input type="text" v-model="key" @keyup.enter="sendTerm" />
      <button @click="sendTerm">Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      key: "",
    };
  },
  methods: {
    sendTerm() {
      this.$emit("get-term", this.key);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #000;
  height: 80px;
  h1 {
    color: red;
  }
}
</style>