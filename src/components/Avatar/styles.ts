import tw from 'twin.macro'

const sizes = {
  sm: tw`w-12 h-12`,
  md: tw`w-16 h-16`,
  lg: tw`w-28 h-28`,
  xl: tw`w-40 h-40`,
} as const

export interface AvatarStyle {
  size: keyof typeof sizes
}

const styles = {
  avatar: ({ size }: AvatarStyle) => [
    tw`rounded-full bg-zinc-400 overflow-hidden shrink-0 flex`,
    sizes[size],
  ],
}

export default styles
