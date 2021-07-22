<template>
  <q-scroll-area
    horizontal
    :thumb-style="thumbStyle"
    style="width: 100%; height: 100%;padding-bottom:0.8rem;"
  >
    <q-table
      class="c-table"
      style="height:100%;backgroundColor:transparent;"
      flat
      dense
      hide-bottom
      :data="data.data.tableData"
      :columns="data.data.columns"
      virtual-scroll
      @row-click="rowClick"
      row-key="name"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
    />
  </q-scroll-area>
</template>

<script>
export default {
  name: "ctable",
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      thumbStyle: {
        borderRadius: "2ren",
        backgroundColor: "#027be3",
        width: "3rem",
        opacity: 0.75
      }
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  // components: { SearchTable },
  methods: {
    rowClick(e, row) {
      console.log(this.data.title, row);
      this.$store.commit("SET_MAP_DATA", {
        Type: "AIAlarm",
        Message: {
          alarmId: row.name,
          url: row.url || "",
          location: row.location || "",
          typeName: row.typeName || "",
          imageUrl: row.imageUrl || ""
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";

.q-table--dense .q-table tbody td {
  font-size: 1.4rem !important;
}
.c-table .q-table__middle {
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
}
.c-table .q-table tbody td,
.c-table .q-table thead td {
  font-size: 1.4rem !important;
}
</style>
