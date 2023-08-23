import tw from 'twin.macro'

const styles = {
  container: tw`flex flex-row gap-4 h-40`,
  head: tw`flex flex-row gap-6 items-end`,
  author: tw`text-xl`,
  date: tw`text-text-secondary`,
  summary: tw`line-clamp-5 mt-2`,
  photo: tw`rounded-lg h-40 w-40 shrink-0`,
}

export default styles
