import { createStore } from "vuex";

export default createStore({
  state: {
    step: 1,
    insertedTables: "",
    tables: [
      //{ seats: null, people: 0, name: "", tel: "", time: "" },
    ],
    bookingTable: {
      // seats: null, people: 0, name: "", tel: "", time: ""
    },
    bookingTableIndex: null,
  },
  mutations: {
    createTable(state) {
      for (let i = 1; i <= state.insertedTables; i++) {
        state.tables.push({
          seats: null,
          people: "0",
          name: "",
          tel: "",
          time: "",
        });
      }
      state.insertedTables = "";
      state.step = 2;
    },
    openInfo(state, data) {
      state.bookingTable = { ...data.table };
      state.bookingTableIndex = data.index;
      state.step = 4;
    },
    enterInfo(state) {
      state.tables[state.bookingTableIndex] = state.bookingTable;
      state.step = 3;
    },
  },
  actions: {},
  modules: {},
});
