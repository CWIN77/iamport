import styled from 'styled-components' 
import Payment from '../components/payment'

function Home() {
  return (
    <Container>
      <Payment/>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

export default Home