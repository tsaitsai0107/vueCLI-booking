<template>
  <div id="step4" v-show="$store.state.step === 4">
    <div class=" title">
      <h4>Booking</h4>
      <button @click="$store.state.step -= 1">x</button>
    </div>

    <div class="modalSeatsInfo">
      <label for="">人數</label>
      <input type="number" v-model.trim="$store.state.bookingTable.people">
      <br>
      <label for="">大名</label>
      <input type="text" v-model.trim="$store.state.bookingTable.name">
      <br>
      <label for="">電話</label>
      <input type="tel" v-model.trim="$store.state.bookingTable.tel">
      <br>
      <label for="">時間</label>
      <input type="text" v-model.trim="$store.state.bookingTable.time">
      <br>
      <button @click="enterInfo()">Booking</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step4',
  props: {
  },
  methods: {
    enterInfo(state) {
      this.$store.commit('enterInfo', state);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#step4 {
  width: 280px;
  border: 1px solid #ccc;
  position: absolute;
  top: 220px;
}

#step4 .title {
  margin: 10px;
}

#step4 .title h4 {
  display: inline;
  margin: 0;
}

#step4 .title button {
  float: right;
  margin: 0;
}

#step4 input {
  margin-left: 10px;
}
</style>
