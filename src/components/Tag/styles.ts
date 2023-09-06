import tw from 'twin.macro'

const colors = [
  tw`bg-amber-200`,
  tw`bg-blue-200`,
  tw`bg-green-200`,
  tw`bg-purple-200`,
  tw`bg-indigo-200`,
  tw`bg-red-200`,
  tw`bg-pink-200`,
]

function pickColor(text: string) {
  const sum = text.split('').reduce((acc, curr) => {
    return acc + curr.charCodeAt(0)
  }, 0)
  return colors[sum % colors.length]
}

interface TagStyle {
  text: string
}

const styles = {
  tag: ({ text }: TagStyle) => [
    tw`text-sm text-zinc-900 leading-none rounded-lg py-1 px-2 w-min whitespace-nowrap`,
    pickColor(text),
  ],
}

export default styles
