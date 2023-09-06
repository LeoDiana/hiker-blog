import { useState } from 'react'

import { Complexity, Experience, Site } from './types.ts'

const imgSrc =
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'

interface SitePage {
  // this is what api will return
  site: Site
  experiences: Experience[]
}

function useSitePage() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)

  function expandExperiences() {
    setIsReadMoreOpen(true)
  }

  // get id from route
  // retrieve data using this id

  const site = {
    title: 'Mont Blanc',
    height: 4807,
    location: 'France, Italy',
    complexity: Complexity.high,
    description:
      'Mont Blanc is the highest mountain in the Alps and Western Europe, and the highest mountain in Europe outside the Caucasus mountains, rising 4,807.81 m above sea level, located on the French-Italian border. It is the second-most prominent mountain in Europe, after Mount Elbrus, and it is the eleventh most prominent mountain summit in the world.',
    tags: ['Seven Summits', 'Europe', 'Alps'],
    img: imgSrc,
    popularity: 15,
  } satisfies Site

  const experiences = [
    {
      id: '1234',
      author: 'Eduard Redcliff',
      date: '23.10.2013',
      summary:
        "Greetings, fellow adventurers! Today, I am thrilled to share with you the incredible tale of my ascent to Mont Blanc, the majestic monarch of the European Alps. Rising above the pristine landscapes of France and Italy, Mont Blanc's allure is irresistible to mountaineers seeking a challenge and a glimpse into the realm of eternal snow and ice.",
      images: [imgSrc, imgSrc],
    },
    {
      id: '2345',
      author: 'Eduard Redcliff',
      date: '23.10.2013',
      summary:
        "Greetings, fellow adventurers! Today, I am thrilled to share with you the incredible tale of my ascent to Mont Blanc, the majestic monarch of the European Alps. Rising above the pristine landscapes of France and Italy, Mont Blanc's allure is irresistible to mountaineers seeking a challenge and a glimpse into the realm of eternal snow and ice.",
      images: [imgSrc, imgSrc],
    },
    {
      id: '234534',
      author: 'Eduard Redcliff',
      date: '23.10.2013',
      summary:
        "Greetings, fellow adventurers! Today, I am thrilled to share with you the incredible tale of my ascent to Mont Blanc, the majestic monarch of the European Alps. Rising above the pristine landscapes of France and Italy, Mont Blanc's allure is irresistible to mountaineers seeking a challenge and a glimpse into the realm of eternal snow and ice.",
      images: [imgSrc, imgSrc],
    },
    {
      id: '234593',
      author: 'Eduard Redcliff',
      date: '23.10.2013',
      summary:
        "Greetings, fellow adventurers! Today, I am thrilled to share with you the incredible tale of my ascent to Mont Blanc, the majestic monarch of the European Alps. Rising above the pristine landscapes of France and Italy, Mont Blanc's allure is irresistible to mountaineers seeking a challenge and a glimpse into the realm of eternal snow and ice.",
      images: [imgSrc, imgSrc],
    },
  ]

  return {
    isReadMoreOpen,
    expandExperiences,
    data: {
      site,
      experiences,
    } satisfies SitePage,
  }
}

export default useSitePage
