import { defineAppSetup } from '@slidev/types'
import { vFit } from '../composables/vFit'

export default defineAppSetup(({ app }) => {
  app.directive('fit', vFit)
})
