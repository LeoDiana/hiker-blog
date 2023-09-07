import { ArrowLongUpIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

import Button from 'components/Button'
import Image from 'components/Image'
import Location from 'components/Location'
import Tag from 'components/Tag'

import HikerExperience from './components/HikerExperience'
import styles from './styles.ts'
import useSitePage from './useSitePage.ts'

const DEFAULT_EXPERIENCES = 2
const EXPANDED_EXPERIENCES = 10

function SitePage() {
  const { t } = useTranslation()
  const {
    isReadMoreOpen,
    expandExperiences,
    data: {
      site: {
        title,
        height,
        location,
        complexity,
        description,
        tags,
        img,
        popularity,
        locationLink,
      },
      experiences,
    },
  } = useSitePage()

  return (
    <div tw='m-16'>
      <div css={styles.info}>
        <Image customStyles={tw`rounded-3xl`} src={img} />
        <div>
          <h1 css={styles.title}>{title}</h1>
          <div css={styles.statsRow}>
            <div css={styles.withIcon}>
              <ArrowLongUpIcon css={styles.icon} />
              <p>{t('site.height', { height })}</p>
            </div>
            <div css={styles.withIcon}>
              <MapPinIcon css={styles.icon} />
              <p>{location}</p>
            </div>
          </div>
          <div css={styles.statsRow}>
            <p css={styles.complexity(complexity)}>{t(`complexity.${complexity}`)}</p>
            <p>{t('site.popularity', { popularity })}</p>
          </div>
          <div css={styles.additionalInfo}>
            <p css={styles.description}>{description}</p>
            <div css={styles.tags}>
              <div css={styles.withIcon}>
                <TagIcon css={styles.icon} />
                <p>{t('site.tags')}: </p>
              </div>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <Location customStyles={styles.map} locationLink={locationLink} />
          </div>
        </div>
      </div>
      <div css={styles.experiencesSection}>
        <h2 css={styles.hikersExperiences}>{t('site.hikersExperiences')}</h2>
        <div css={styles.experiences}>
          {experiences
            .slice(0, isReadMoreOpen ? EXPANDED_EXPERIENCES : DEFAULT_EXPERIENCES)
            .map((experience) => (
              <HikerExperience key={experience.id} {...experience} />
            ))}
        </div>
        {!isReadMoreOpen && (
          <Button variant='tertiary' onClick={expandExperiences}>
            {t('readMore')}
          </Button>
        )}
        <Button>{t('site.addYourExperience')}</Button>
      </div>
    </div>
  )
}

export default SitePage
