import Button from './components/Button'

function App() {
  return (
    <div className='m-10'>
      Buuu:
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
