import type { App, CSSProperties, Component, ComponentPublicInstance, ComputedRef, Ref } from 'vue'

export type ComponentProps = ComponentPublicInstance['$props']

export type ModalId = number | string | symbol
export type StyleValue = string | CSSProperties | (string | CSSProperties)[]

export type ModalSlot<T extends Record<string, any> = {}> = string | {
  component: Component
  attrs?: T
}

export type UseModalOptionsPrivate<
  ModalProps extends ComponentProps = {},
  DefaultSlotProps extends ComponentProps = {},
> = {
  context?: Vfm
  component: Component
  attrs?: ModalProps
  slots?: {
    default: ModalSlot<DefaultSlotProps>
    [key: string]: ModalSlot
  }

  id?: symbol
  modelValue?: boolean
  resolveOpened?: () => void
  resolveClosed?: () => void
}

export type ModalOptions<
ModalProps extends ComponentProps,
DefaultSlotProps extends ComponentProps = {},
> = Pick<
UseModalOptionsPrivate<ModalProps, DefaultSlotProps>,
| 'context'
| 'component'
| 'attrs'
| 'slots'
>

export type UseModalOptions<
  ModalProps extends ComponentProps,
  DefaultSlotProps extends ComponentProps = {},
> = Omit<ModalOptions<ModalProps, DefaultSlotProps>, 'slots'> & {
  slots?: {
    default: ModalSlot<DefaultSlotProps> | Component
    [key: string]: ModalSlot | Component
  }
}

export type UseModalReturnType<ModalProps extends ComponentProps, DefaultSlotProps extends ComponentProps> = {
  options: ModalOptions<ModalProps, DefaultSlotProps>
  open: () => Promise<string>
  close: () => Promise<string>
  patchOptions: (options: ModalOptions<ModalProps, DefaultSlotProps>) => void
  destroy: () => void
}

export type Vfm = {
  install(app: App): void
  modals: ComputedRef<Modal>[]
  openedModals: ComputedRef<Modal>[]
  dynamicModals: UseModalOptionsPrivate[]
  modalsContainers: Ref<symbol[]>
  get: (modalId: ModalId) => undefined | ComputedRef<Modal>
  toggle: (modalId: ModalId, show?: boolean) => undefined | Promise<string>
  open: (modalId: ModalId) => undefined | Promise<string>
  close: (modalId: ModalId) => undefined | Promise<string>
  closeAll: () => Promise<[PromiseSettledResult<Promise<string>[]>]>
}

export type InternalVfm = {
  deleteFromModals: (modal: ComputedRef<Modal>) => void
  moveToLastOpenedModals: (modal: ComputedRef<Modal>) => void
  deleteFromOpenedModals: (modal: ComputedRef<Modal>) => void
  openLastOverlay: () => Promise<void>
  resolvedClosed: (index: number) => void
  resolvedOpened: (index: number) => void
}

export type Modal = {
  modalId?: ModalId
  hideOverlay: Ref<boolean | undefined> | undefined
  overlayVisible: Ref<boolean>
  focus: () => void
  toggle: (show?: boolean) => Promise<string>
}
