import React from 'react';
import './App.css';
import { Button, Col, Row, Typography } from 'antd';

import PhoneComponent from './PhoneComponent'

import createBrowserHistory from 'history/createBrowserHistory';

import MultipleSelect from './MultipleSelect';
import DateComponent from './DateComponent';
import Home from './Home'
import { Router, Route, Switch } from 'react-router-dom';
const { Title } = Typography;
const App = () => {
  const history = createBrowserHistory();
  return (
    <Col   style={{textAlign:'center'}}>

      <Router history={history} ><Switch>
        <Route path="/" component={Home} exact />
        <Route path="/phone" component={PhoneComponent} />
        <Route path="/multipleselect" component={MultipleSelect} />
        <Route path="/date" exact component={DateComponent} />
        <Route >404</Route>
      </Switch></Router>
    </Col>
  );
}

export default App;
