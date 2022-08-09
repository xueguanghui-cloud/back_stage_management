<template>
  <div class="table">
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        label="序号"
        align="center"
        width="50px"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80px"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scoped">
            <slot :name="propItem.slotName" :row="scoped.row">
              {{ scoped.row[propItem.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    return { handleSelectionChange }
  }
})
</script>
<style scoped></style>
