import { TwStyle } from 'twin.macro'

import styles, { ComponentStyle } from './styles'

interface Component extends Partial<ComponentStyle> {
  customStyles?: TwStyle
}

function Component({ customStyles, size = 'md' }: Component) {
  return (
    <div css={styles.container(customStyles)}>
      <div css={styles.component({ size })}>Your brand new component!</div>
    </div>
  )
}

export default Component
