import { useState } from 'react'
import { TwStyle } from 'twin.macro'

import styles from './styles.ts'

// TODO Open full image view (with carousel) on click

interface ImageProps {
  src: string
  customStyles?: TwStyle
  alt?: string
}

function Image({ src, customStyles, alt = "User's photo" }: ImageProps) {
  const [isError, setIsError] = useState(false)

  return (
    <div css={styles.container(customStyles)}>
      {!isError && <img css={styles.image} alt={alt} src={src} onError={() => setIsError(true)} />}
    </div>
  )
}

export default Image
