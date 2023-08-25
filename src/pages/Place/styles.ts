import tw from 'twin.macro'

const styles = {
  title: tw`text-5xl font-semibold`,
  description: tw`text-base`,
  tags: tw`flex flex-row gap-3 items-center`,
  hikersExperiences: tw`text-3xl font-medium`,
  experiencesSection: tw`flex flex-col items-center mt-16`,
  experiences: tw`flex flex-col gap-8 mt-8`,
  info: tw`grid grid-cols-2 gap-14`,
  map: tw`h-52 rounded-lg overflow-hidden`,
  icon: tw`w-5 h-5`,
  statsRow: tw`flex flex-row gap-2 mt-1`,
  withIcon: tw`flex flex-row gap-1 items-center`,
  additionalInfo: tw`flex flex-col gap-6 mt-6`,
}

export default styles
