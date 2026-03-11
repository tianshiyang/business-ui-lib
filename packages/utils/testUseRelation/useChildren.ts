import { getCurrentInstance, provide } from "vue"

export const useChildren = (key: symbol) => {
  const instance = getCurrentInstance()
  provide(key, Object.assign({
    props: instance!.props,
  }))
  return
}