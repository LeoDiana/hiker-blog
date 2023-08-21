import tw from 'twin.macro'

import Avatar from './components/Avatar'
import Button from './components/Button'
import Image from './components/Image'
import Tag from './components/Tag'

function App() {
  return (
    <div className='m-10'>
      Tags:
      <br />
      <Tag>Seven Summits</Tag>
      <Tag>Europe</Tag>
      <Tag>Alps</Tag>
      <br />
      <Image
        customStyles={tw`w-80 h-80 rounded-2xl`}
        src='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'
      />
      <br />
      <Avatar
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Katy_Perry_for_Vogue_Magazine%2C_2023.png/440px-Katy_Perry_for_Vogue_Magazine%2C_2023.png'
        size='lg'
      />
      <br />
      <Avatar
        src='https://uplo121d.wikimedia.org/wikipedia/commons/thumb/2/2c/Katy_Perry_for_Vogue_Magazine%2C_2023.png/440px-Katy_Perry_for_Vogue_Magazine%2C_2023.png'
        size='lg'
      />
      <br />
      <Button size='sm'>sm primary</Button>
      <br />
      <br />
      <Button size='md'>Tap here</Button>
      <br />
      <br />
      <Button size='md' variant='secondary'>
        Tap here
      </Button>
      <br />
      <br />
      <Button size='sm' variant='secondary'>
        sm secondary
      </Button>
      <br />
      <br />
      <Button size='md' variant='tertiary'>
        md tertiary
      </Button>
      <br />
      <br />
      <Button size='sm' variant='tertiary'>
        sm tertiary
      </Button>
    </div>
  )
}

export default App
