import type { App } from 'vue'

// 暂时导出现有示例组件，后续可以在这里持续新增业务组件
import FinishDialog from './finishDialog/components/finishDialog.vue'
export type { FinishDialogSubmitPayload,FinishDialogType } from '../packages/finishDialog/types'

export { FinishDialog }

const components = [FinishDialog]

export default {
  install(app: App) {
    components.forEach((component) => {
      const name = (component as any).name
      if (name) {
        app.component(name, component)
      }
    })
  }
}