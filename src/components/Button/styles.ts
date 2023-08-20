import tw from 'twin.macro'

export interface ButtonStyleProps {
  variant: 'primary' | 'secondary' | 'tertiary'
  size: 'md' | 'sm'
}

const sizes = {
  sm: tw`h-8 text-base`,
  md: tw`h-12 text-xl`,
}

const variants = {
  primary: tw`text-zinc-900 rounded-lg bg-amber-400 hover:bg-amber-300 active:bg-amber-500 disabled:bg-zinc-300`,
  secondary: tw`box-border text-zinc-600 outline outline-2 outline-zinc-500 rounded-lg 
    hover:bg-zinc-200 active:bg-zinc-300 disabled:bg-zinc-300`,
  tertiary: tw`text-zinc-500 underline disabled:opacity-50`,
}

const styles = {
  button: ({ variant, size }: ButtonStyleProps) => [tw`px-8`, sizes[size], variants[variant]],
}

export default styles
