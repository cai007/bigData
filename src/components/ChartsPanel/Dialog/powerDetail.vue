<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'中天街主街片区'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section horizontal>
      <q-card-section class="q-pt-md" style="width:10rem">
        <div id="powerChart" style="height:10rem"></div>
      </q-card-section>
      <q-card-section class="column flex-center">
        <q-list dense class="q-pt-md">
          <q-item>
            <q-item-section avatar>
              本月用量
            </q-item-section>
            <q-item-section>
              <q-item-label caption>89kW·h</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              电量余量
            </q-item-section>
            <q-item-section>
              <q-item-label caption>12kW·h</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              平均用量
            </q-item-section>
            <q-item-section>
              <q-item-label caption>2.5kW·h</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
export default {
  name: "power",
  data() {
    return {};
  },
  components: {
    DialogDraggable
  },
  props: {
    detailDialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped></style>
