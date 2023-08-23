import Avatar from '../Avatar'
import Image from '../Image'

import styles from './styles.ts'
import 'twin.macro'

interface HikerExperienceProps {}

const experience = {
  author: 'Eduard Redcliff',
  date: '23.10.2013',
  summary:
    "Greetings, fellow adventurers! Today, I am thrilled to share with you the incredible tale of my ascent to Mont Blanc, the majestic monarch of the European Alps. Rising above the pristine landscapes of France and Italy, Mont Blanc's allure is irresistible to mountaineers seeking a challenge and a glimpse into the realm of eternal snow and ice.",
}

const imgSrc =
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'

// eslint-disable-next-line no-empty-pattern
function HikerExperience({}: HikerExperienceProps) {
  const { author, date, summary } = experience

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
      <Image src={imgSrc} customStyles={styles.photo} />
      <Image src={imgSrc} customStyles={styles.photo} />
    </div>
  )
}

export default HikerExperience
