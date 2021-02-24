<template>
  <div id="page3" v-show="$store.state.step === 3 || $store.state.step === 4">
    <div id="step3" @click="openInfo(index, table)" v-for="(table, index) in $store.state.tables" :key="index">
      <div class="seatsInfo">
        <div>{{table.people}}/{{table.seats}}
          <div>{{table.name}}</div>
          <div>{{table.tel}}</div>
          <div>{{table.time}}</div>
        </div>
      </div>
    </div>

    <step4></step4>

  </div>
</template>

<script>
import step4 from './step4'

export default {
  name: 'step3',
  props: {
  },
  components: {
    step4,
  },
  methods: {
    openInfo(index, table) {
      this.$store.commit('openInfo', {
        index,
        table,
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page3 {
  display: inline-flex;
}

#step3 {
  margin: 0 10px;
  padding: 20px 10px;
  border: 1px solid #000;

  cursor: pointer;
}

#step3 .seatsInfo {
  width: 60px;
}
</style>
