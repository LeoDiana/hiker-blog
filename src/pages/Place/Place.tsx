import { ArrowLongUpIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline'
import tw from 'twin.macro'

import Button from '../../components/Button'
import HikerExperience from '../../components/HikerExperience'
import Image from '../../components/Image'
import Location from '../../components/Location'
import Tag from '../../components/Tag'

import styles from './styles.ts'

const imgSrc =
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'

const page = {
  title: 'Mont Blanc',
  height: '4,807',
  location: 'France, Italy',
  complexity: 'medium',
  description:
    'Mont Blanc is the highest mountain in the Alps and Western Europe, and the highest mountain in Europe outside the Caucasus mountains, rising 4,807.81 m above sea level, located on the French-Italian border. It is the second-most prominent mountain in Europe, after Mount Elbrus, and it is the eleventh most prominent mountain summit in the world.',
  tags: ['Seven Summits', 'Europe', 'Alps'],
}

function Place() {
  const { title, height, location, complexity, description, tags } = page

  return (
    <div tw='m-16'>
      <div css={styles.info}>
        <Image customStyles={tw`rounded-3xl`} src={imgSrc} />
        <div>
          <h1 css={styles.title}>{title}</h1>
          <div css={styles.statsRow}>
            <div css={styles.withIcon}>
              <ArrowLongUpIcon css={styles.icon} />
              <p>{height} m</p>
            </div>
            <div css={styles.withIcon}>
              <MapPinIcon css={styles.icon} />
              <p>{location}</p>
            </div>
          </div>
          <div css={styles.statsRow}>
            <p>{complexity}</p>
            <p>15% were here</p>
          </div>
          <div css={styles.additionalInfo}>
            <p css={styles.description}>{description}</p>
            <div css={styles.tags}>
              <div css={styles.withIcon}>
                <TagIcon css={styles.icon} />
                <p>Tags: </p>
              </div>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <Location customStyles={styles.map} />
          </div>
        </div>
      </div>
      <div css={styles.experiencesSection}>
        <h2 css={styles.hikersExperiences}>Hikers experiences</h2>
        <div css={styles.experiences}>
          <HikerExperience />
        </div>
        <Button variant='tertiary'>Read more</Button>
        <Button>Add your experience</Button>
      </div>
    </div>
  )
}

export default Place
