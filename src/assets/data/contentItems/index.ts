import { march2025ContentItems } from './03-2025'
import { june2025ContentItems } from './06-2025'
import { october2025ContentItems } from './10-2025'
import { december2025ContentItems } from './12-2025'

export type {
  ContentItem,
  ContentType,
} from './types'

export {
  issueLongDescriptions,
  getIssueLongDescription,
} from './issueLongDescriptions'

export const contentItems = [
  ...march2025ContentItems,
  ...june2025ContentItems,
  ...october2025ContentItems,
  ...december2025ContentItems,
]