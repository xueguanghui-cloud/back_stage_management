import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTable,
  ElTabPane,
  ElTabs
} from 'element-plus'
const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTable,
  ElTabPane,
  ElTabs
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
