
import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      
    </div>
  )
}

export default App
