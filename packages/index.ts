import type { App } from 'vue'

// 暂时导出现有示例组件，后续可以在这里持续新增业务组件
import FinishDialog from './components/finishDialog/components/finishDialog.vue'
import MyTabs from './components/tabs/myTabs.vue'
import TabItem from './components/tabs/tabItem.vue'
export type { FinishDialogSubmitPayload, FinishDialogType } from './components/finishDialog/types'

export { FinishDialog, MyTabs, TabItem }

const components = [FinishDialog, MyTabs, TabItem]

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