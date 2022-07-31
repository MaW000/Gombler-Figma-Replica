import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle  from './globalStyles'

function App() {
  
  return (
    <Body className="App">
      <GlobalStyle />
      <Navbar />
    </Body>
  );
}

const Body = styled.div`
`

export default App;
