<template>
  <div class="table">
    <!-- page头部 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <!-- table:数据表格 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
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
        <el-table-column
          v-bind="propItem"
          align="center"
          :show-overflow-tooltip="true"
        >
          <template #default="scoped">
            <slot :name="propItem.slotName" :row="scoped.row">
              {{ scoped.row[propItem.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- page底部：默认为分页器 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          small="small"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
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
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      console.log(`${pageSize} items per page`)
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      console.log(`current page: ${currentPage}`)
      emit('update:page', { ...props.page, currentPage })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>
<style scoped lang="scss">
.table {
  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
    .handler {
      align-items: center;
    }
  }
  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: end;
  }
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
