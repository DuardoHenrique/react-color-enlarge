import './App.css';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';

const alertLabel = (label) => {
  alert(`A label desse botão é '${label}'.`)
}

function App() {
  return (
    <>
      <Paragraph>
        Praticando alguns conhecimentos básicos em React, adquiridos no curso DevQuest.
      </Paragraph>
      <div className='btn'>
        <Button alertLabel={alertLabel}/>
        <Button label={'Next'} alertLabel={alertLabel}/>
      </div>
    </>
  )
}

export default App;
