import tw from 'twin.macro'

import { Complexity } from './types.ts'

const styles = {
  title: tw`text-5xl font-semibold`,
  description: tw`text-base`,
  tags: tw`flex flex-row gap-3 items-center`,
  hikersExperiences: tw`text-3xl font-medium`,
  experiencesSection: tw`flex flex-col items-center mt-16 gap-8`,
  experiences: tw`flex flex-col gap-8`,
  info: tw`grid grid-cols-2 gap-14`,
  map: tw`h-52 rounded-lg overflow-hidden`,
  icon: tw`w-5 h-5`,
  statsRow: tw`flex flex-row gap-2 mt-1`,
  withIcon: tw`flex flex-row gap-1 items-center`,
  additionalInfo: tw`flex flex-col gap-6 mt-6`,
  complexity: (complexity: Complexity) => {
    switch (complexity) {
      case Complexity.low:
        return tw`text-green-500`
      case Complexity.medium:
        return tw`text-yellow-500`
      case Complexity.high:
        return tw`text-orange-500`
      case Complexity.extreme:
        return tw`text-red-500`
    }
  },
}

export default styles
