import Button from './components/Button'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className='m-10'>
      Buuu:
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
