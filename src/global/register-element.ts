import { App } from 'vue'
import 'element-plus/dist/index.css'
import { ElButton } from 'element-plus'
const components = [ElButton]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
