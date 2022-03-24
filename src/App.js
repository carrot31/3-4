import React from 'react';
import './App.css';
import Main from './Main';
import Detail from './Detail';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';


function App() {


  return (
    <div class Name="App">
      <Container>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path="/detail/:id" component={Detail} exact/> 
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 400px;
  width: 80vw;
  height: 80vh;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 40px auto 20px auto;
  padding: 20px 0px;
  box-shadow: 0px 0px 10px 0px #ddd;
  background: white
`;

export default App;

