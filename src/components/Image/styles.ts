import tw, { TwStyle } from 'twin.macro'

const styles = {
  container: (customStyles?: TwStyle) => [tw`bg-zinc-400 overflow-hidden`, customStyles],
  image: tw`object-cover w-full h-full`,
}

export default styles
