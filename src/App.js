import React from 'react';
import Header from "./Header";
import GameList from './ GameList';
import './App.css';
import { Container } from 'react-bootstrap';
 
function App() {

 return (
   <Container className="App">
     <Header/>
     <GameList/>
   </Container>
 );
}
export default App;
