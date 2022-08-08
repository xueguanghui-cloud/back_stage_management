<template>
  <div class="gh-form">
    <el-form :label-width="labelWidth">
      <el-row :gutter="20">
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout"
            ><el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- input || password -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                ></el-input>
              </template>
              <!-- select -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <!-- datapicker -->
              <template v-else-if="item.type === 'datapicker'">
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template> </el-form-item
          ></el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
    }
  },
  setup(props) {
    return {}
  }
})
</script>
<style scoped lang="scss">
.gh-form {
  padding-top: 18px;
}
</style>
