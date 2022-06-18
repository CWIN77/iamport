import styled from 'styled-components' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

export default App
