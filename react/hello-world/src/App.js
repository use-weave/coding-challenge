import React from 'react';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

export default () => (
  <div className="container">
    <div className="container-content">
      <h1>What's up from Weave</h1>
      <FormContainer />
      <ListContainer />
    </div>
  </div>
);
