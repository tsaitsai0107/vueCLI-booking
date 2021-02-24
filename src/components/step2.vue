<template>
  <div id="step2" v-show="$store.state.step === 2">
    <div id="tables">
      <h4>How many seats do you want in a table?</h4>
      <div class="oneLine" v-for="(table, index) in $store.state.tables" :key="index">
        {{index + 1}} .
        <input type="number" v-model.trim="table.seats" @keyup.enter="$store.state.step += 1">
      </div>
      <br>
      <button @click="$store.state.step += 1">Create seats</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step2',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#step2 .oneLine {
  display: flex;
  justify-content: center;
  margin: 10px 0px;
}
</style>
