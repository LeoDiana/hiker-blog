import { TwStyle } from 'twin.macro'

import styles from './styles.ts'

interface Location {
  customStyles?: TwStyle
}

function Location({ customStyles }: Location) {
  return (
    <div css={styles.container(customStyles)}>
      <iframe
        width='100%'
        height='208'
        src='https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
      >
        <a href='https://www.maps.ie/population/'>Population Estimator map</a>
      </iframe>
    </div>
  )
}

export default Location
