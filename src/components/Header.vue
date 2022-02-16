<template>
  <header class="d-flex align-items-center justify-content-between px-4">
    <h1 @click="resetTerm" role="button">BOOLFLIX</h1>
    <div class="search d-flex align-content-center">
      <input
        type="text"
        v-model.trim="key"
        @keyup.enter="sendTerm"
        :placeholder="placeholder"
      />
      <button class="btn btn-danger btn-sm ms-2" @click="sendTerm">
        Cerca
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["placeholder"],
  data() {
    return {
      key: "",
    };
  },
  methods: {
    sendTerm() {
      this.$emit("get-term", this.key);
    },
    resetTerm() {
      this.$emit("get-term", "");
      this.key = "";
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
  input {
    color: #dc3545;
    border-radius: 8px;
    &:focus-visible {
      outline: 1px auto #dc3545;
    }
  }
}
</style>