import { useState } from 'react'

import styles, { AvatarStyle } from './styles.ts'

// TODO add default image
// TODO implement redirect

interface Avatar extends Partial<AvatarStyle> {
  src?: string
  alt?: string
}

function Avatar({ src, alt = 'User avatar', size = 'md' }: Avatar) {
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
