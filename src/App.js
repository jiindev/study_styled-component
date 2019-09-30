import React, {Component, Fragment} from 'react';
import styled, {createGlobalStyle, css, ThemeProvider} from "styled-components";
import theme from './theme';


const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const Container = styled.div`
  width:100%;
  height:100vh;
  background-color:#bdc3c7;
  `;

  const Card = styled.div`
    background-color: red;
  `

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props=>props.theme.successColor};
`

class App extends Component{
  render(){
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Form/>
        </Container>
      </ThemeProvider>
    )
    
  }
}

const Form = () => (<Card><Button>hello</Button></Card>)

export default App;
