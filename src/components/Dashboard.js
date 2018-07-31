import React from 'react';
import { Redirect } from 'react-router-dom';
/* eslint react/prefer-stateless-function : 0 */
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Redirect to="/topics" />
        </h1>
      </div>
    );
  }
}
