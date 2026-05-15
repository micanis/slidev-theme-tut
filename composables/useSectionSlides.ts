import type { TocItem, SlideRoute } from '@slidev/types'

export function filterSectionSlides(tocTree: TocItem[], slides: SlideRoute[]): TocItem[] {
  return tocTree.filter((i) =>
    (slides.find((s) => s.no === i.no) as any)?.meta?.slide?.frontmatter?.layout === 'section'
  )
}
