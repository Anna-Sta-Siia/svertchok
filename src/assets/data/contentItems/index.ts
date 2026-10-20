import { contentItems022019 } from './02-2019'
import { contentItems102019 } from './10-2019'

import { contentItems012020 } from './01-2020'
import { contentItems042020 } from './04-2020'
import { contentItems092020 } from './09-2020'
import { contentItems122020 } from './12-2020'

import { contentItems022021 } from './02-2021'
import { contentItems052021 } from './05-2021'
import { contentItems092021 } from './09-2021'
import { contentItems122021 } from './12-2021'

import { contentItems02032022 } from './02-03-2022'
import { contentItems05062022 } from './05-06-2022'
import { contentItems102022 } from './10-2022'
import { contentItems122022 } from './12-2022'

import { contentItems032023 } from './03-2023'
import { contentItems062023 } from './06-2023'
import { contentItems102023 } from './10-2023'
import { contentItems122023 } from './12-2023'

import { contentItems032024 } from './03-2024'
import { contentItems062024 } from './06-2024'
import { contentItems102024 } from './10-2024'
import { contentItems122024 } from './12-2024'

import { march2025ContentItems } from './03-2025'
import { june2025ContentItems } from './06-2025'
import { october2025ContentItems } from './10-2025'
import { december2025ContentItems } from './12-2025'

import { contentItems052026 } from './05-2026'

export type {
  ContentItem,
  ContentType,
} from './types'

export {
  issueLongDescriptions,
  getIssueLongDescription,
} from './issueLongDescriptions'

export const contentItems = [
  ...contentItems022019,
  ...contentItems102019,

  ...contentItems012020,
  ...contentItems042020,
  ...contentItems092020,
  ...contentItems122020,

  ...contentItems022021,
  ...contentItems052021,
  ...contentItems092021,
  ...contentItems122021,

  ...contentItems02032022,
  ...contentItems05062022,
  ...contentItems102022,
  ...contentItems122022,

  ...contentItems032023,
  ...contentItems062023,
  ...contentItems102023,
  ...contentItems122023,

  ...contentItems032024,
  ...contentItems062024,
  ...contentItems102024,
  ...contentItems122024,

  ...march2025ContentItems,
  ...june2025ContentItems,
  ...october2025ContentItems,
  ...december2025ContentItems,

  ...contentItems052026,
]