export const vFit = {
  mounted(el: HTMLElement) {
    const wrapper = document.createElement('div')
    wrapper.style.cssText = 'width:100%;height:100%;overflow:hidden;display:grid;grid-template-rows:1fr;'

    const inner = document.createElement('div')
    inner.style.cssText = 'width:100%;height:100%;min-height:0;transform-origin:top left;'

    while (el.firstChild) {
      inner.appendChild(el.firstChild)
    }
    wrapper.appendChild(inner)
    el.appendChild(wrapper)

    const update = () => {
      inner.style.transform = 'none'
      const containerHeight = wrapper.clientHeight
      const contentHeight = inner.scrollHeight

      if (contentHeight > containerHeight && contentHeight > 0) {
        const scale = Math.max(0.5, containerHeight / contentHeight)
        inner.style.transform = `scale(${scale})`
      }
    }

    const observer = new ResizeObserver(update)
    observer.observe(inner)
    ;(el as any)._fitObserver = observer

    requestAnimationFrame(update)
  },

  unmounted(el: HTMLElement) {
    const observer = (el as any)._fitObserver as ResizeObserver
    observer?.disconnect()
  }
}
