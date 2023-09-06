import 'twin.macro'

import Avatar from 'components/Avatar'
import Image from 'components/Image'

import { Experience } from '../../types.ts'

import styles from './styles.ts'

interface HikerExperience extends Experience {}

const imgSrc =
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'

// eslint-disable-next-line no-empty-pattern
function HikerExperience({ author, date, summary, images }: HikerExperience) {
  return (
    <div css={styles.container}>
      <Avatar src={imgSrc} size='lg' />
      <div tw='shrink'>
        <div css={styles.head}>
          <p css={styles.author}>{author}</p>
          <p css={styles.date}>{date}</p>
        </div>
        <p css={styles.summary}>{summary}</p>
      </div>
      {images.map((image) => (
        <Image key={image} src={image} customStyles={styles.photo} />
      ))}
    </div>
  )
}

export default HikerExperience
