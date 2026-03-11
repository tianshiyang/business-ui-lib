/**
 * `FinishDialog` 提交事件载荷
 */
export interface FinishDialogSubmitPayload {
  username: string
  password: string
}

export type FinishDialogType = 'login' | 'createAccount'
