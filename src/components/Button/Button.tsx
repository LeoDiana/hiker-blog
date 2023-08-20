import { ReactNode } from 'react'

import styles, { ButtonStyleProps } from './styles.ts'

interface ButtonProps extends Partial<ButtonStyleProps> {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} css={styles.button({ variant, size })}>
      {children}
    </button>
  )
}

export default Button
