import tw from 'twin.macro'

const SButton = tw.button`
py-3
px-8
rounded-lg
border-r-2
border-b-2
border-zinc-900
bg-amber-300
text-xl
leading-5
hover:bg-amber-400
active:bg-amber-500
text-zinc-900
`

function Button() {
  return <SButton>Button!</SButton>
}

export default Button
