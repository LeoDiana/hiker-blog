import { ReactNode } from 'react'

import styles, { ButtonStyle } from './styles.ts'

interface Button extends Partial<ButtonStyle> {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

function Button({ children, onClick, variant = 'primary', size = 'md', disabled = false }: Button) {
  return (
    <button onClick={onClick} disabled={disabled} css={styles.button({ variant, size })}>
      {children}
    </button>
  )
}

export default Button
