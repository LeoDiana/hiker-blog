import { TwStyle } from 'twin.macro'

import styles from './styles.ts'

interface Location {
  customStyles?: TwStyle
  locationLink: string
}

function Location({ customStyles, locationLink }: Location) {
  return (
    <div css={styles.container(customStyles)}>
      <iframe width='100%' height='208' src={locationLink} />
    </div>
  )
}

export default Location
