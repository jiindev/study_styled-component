import React, {Component, Fragment} from 'react';
import styled from "styled-components";

class App extends Component{
  render(){
    return (
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
      </Container>
    )
    
  }
}

const Container = styled.div`
  width:100%;
  height:100vh;
  background-color:#bdc3c7;
  `
const Button = styled.button`
  border-radius:50px;
  padding: 5px;
  min-width: 120px;
  color:white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor:pointer;
  &:active,
  &focus{
    outline: none;
  }
  background-color:${props=>props.danger ? '#e74c3c' : '#2ecc71'}
  `

export default App;
