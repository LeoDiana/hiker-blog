import { useState } from 'react'

import styles, { AvatarStyleProps } from './styles.ts'

// TODO add default image
// TODO implement redirect

interface AvatarProps extends Partial<AvatarStyleProps> {
  src: string
  alt?: string
}

function Avatar({ src, alt = 'User avatar', size = 'md' }: AvatarProps) {
  const [isError, setIsError] = useState(false)

  return (
    <div
      onClick={() => {
        console.log(`redirect to ${src} profile`)
      }}
      css={styles.avatar({ size })}
    >
      {!isError && <img alt={alt} src={src} onError={() => setIsError(true)} />}
    </div>
  )
}

export default Avatar
