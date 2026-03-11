import { inject } from "vue"

export const useParent = (key: symbol) => {
  const parent: any = inject(key, null)
  return parent
}