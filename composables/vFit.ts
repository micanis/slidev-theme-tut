export const vFit = {
  mounted(el: HTMLElement) {
    const wrapper = document.createElement('div')
    wrapper.style.cssText = 'width:100%;height:100%;overflow:hidden;display:grid;grid-template-rows:1fr;'

    const inner = document.createElement('div')
    inner.style.cssText = 'width:100%;height:100%;min-height:0;'

    while (el.firstChild) {
      inner.appendChild(el.firstChild)
    }
    wrapper.appendChild(inner)
    el.appendChild(wrapper)

    const minScale = 0.35
    let frameId = 0
    const baseFontSizes = new WeakMap<HTMLElement, number>()

    const getFitElements = () => {
      return [inner, ...Array.from(inner.querySelectorAll<HTMLElement>('*'))]
    }

    const resetKnownFontSizes = () => {
      for (const target of getFitElements()) {
        const baseFontSize = baseFontSizes.get(target)
        if (baseFontSize) {
          target.style.fontSize = `${baseFontSize}px`
        }
      }
    }

    const prepareBaseFontSizes = () => {
      for (const target of getFitElements()) {
        if (!baseFontSizes.has(target)) {
          baseFontSizes.set(target, Number.parseFloat(getComputedStyle(target).fontSize) || 16)
        }
      }
    }

    const applyScale = (scale: number) => {
      prepareBaseFontSizes()

      for (const target of getFitElements()) {
        const baseFontSize = baseFontSizes.get(target)
        if (baseFontSize) {
          target.style.fontSize = `${baseFontSize * scale}px`
        }
      }
    }

    const elementFits = (target: HTMLElement) => {
      const heightFits = !target.clientHeight || target.scrollHeight <= target.clientHeight + 1
      const widthFits = !target.clientWidth || target.scrollWidth <= target.clientWidth + 1

      return heightFits && widthFits
    }

    const fits = () => {
      return elementFits(wrapper) && getFitElements().every(elementFits)
    }

    const update = () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(() => {
        frameId = 0

        if (!wrapper.clientHeight || !wrapper.clientWidth) return

        resetKnownFontSizes()
        applyScale(1)

        if (fits()) return

        let low = minScale
        let high = 1

        for (let i = 0; i < 12; i += 1) {
          const scale = (low + high) / 2
          applyScale(scale)

          if (fits()) {
            low = scale
          } else {
            high = scale
          }
        }

        applyScale(low)
      })
    }

    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(wrapper)
    resizeObserver.observe(inner)

    const mutationObserver = new MutationObserver(update)
    mutationObserver.observe(inner, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    ;(el as any)._fitResizeObserver = resizeObserver
    ;(el as any)._fitMutationObserver = mutationObserver
    ;(el as any)._fitFrameId = () => frameId

    update()
  },

  unmounted(el: HTMLElement) {
    const resizeObserver = (el as any)._fitResizeObserver as ResizeObserver
    const mutationObserver = (el as any)._fitMutationObserver as MutationObserver
    const getFrameId = (el as any)._fitFrameId as (() => number) | undefined

    resizeObserver?.disconnect()
    mutationObserver?.disconnect()

    const frameId = getFrameId?.()
    if (frameId) {
      cancelAnimationFrame(frameId)
    }
  }
}
