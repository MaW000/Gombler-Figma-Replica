import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle  from './globalStyles'
import Header from "./containers/header/Header";

function App() {
  
  return (
    <Body className="App">
      <GlobalStyle />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </Body>
  );
}

const Body = styled.div`
`

export default App;
