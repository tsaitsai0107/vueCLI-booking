<template>
  <div id="step1" v-show="$store.state.step === 1">
    <h1>Booking System</h1>
    <h3>Table counts:</h3>
    <input
      type="number"
      v-model.trim="$store.state.insertedTables"
      @keyup.enter="createTable(state)"
    />
    <br />
    <button @click="createTable(state)">Create tables</button>
  </div>
</template>

<script>
export default {
  name: "step1",
  props: {},
  methods: {
    createTable(state) {
      this.$store.commit("createTable", state);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#step1 input {
  display: block;
  margin: 10px auto;
}
</style>
