import { TwStyle } from 'twin.macro'

import styles, { ComponentStyleProps } from './styles'

interface ComponentProps extends Partial<ComponentStyleProps> {
  customStyles?: TwStyle
}

function Component({ customStyles, size = 'md' }: ComponentProps) {
  return (
    <div css={styles.container(customStyles)}>
      <div css={styles.component({ size })}>Your brand new component!</div>
    </div>
  )
}

export default Component
