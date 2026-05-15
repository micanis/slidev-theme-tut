declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module 'vue' {
  import type { SlideRoute, TocItem, SlidevConfig, SlidevThemeConfig } from '@slidev/types'

  interface SlidevNav {
    slides: SlideRoute[]
    currentPage: number
    tocTree: TocItem[]
  }

  interface ComponentCustomProperties {
    $slidev: {
      nav: SlidevNav
      configs: SlidevConfig
      themeConfigs: SlidevThemeConfig
    }
  }
}
