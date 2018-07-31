import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Topics from '../components/Topics';
import TopicDetails from '../components/TopicDetails';
import AddQuestions from '../components/AddQuestions';
import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/topics/" component={Topics} />
            <Route path="/add" component={AddQuestions} />
            <Route path="/topics/:topicId" component={TopicDetails} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
