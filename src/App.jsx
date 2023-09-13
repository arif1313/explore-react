
import './App.css'
import Counter from './count'
import Friends from './friends'

function App() {
  function handleClick_1(){
    alert('one button clicked')
  }
  function handleClick_2(num){
    alert(num+5)
  }
  const handelClick_3 = () => {
    alert('three button clicked')

  }
  
 
  

  return (
    <>
      
      <h1>react core concept 2</h1>
     <Friends></Friends>
   
    </>
  )
}

export default App
