import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { actions, selectors } from '../reducers/user';

import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Login from './login';

const Routes = props => {
  const { isLoggedIn } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          isLoggedIn ? <Redirect to="/component1" /> : <Redirect to="/login" />
        }
      />
      <Route exact path="/component1" component={Component1} />
      <Route exact path="/component2" component={Component2} />
      <Route exact path="/component3" component={Component3} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectors.isLoggedIn(state)
});

const mapDistpachToProps = dispatch => ({
  userActions: bindActionCreators(actions, dispatch)
});

const RoutesContainer = withRouter(
  connect(
    mapStateToProps,
    mapDistpachToProps
  )(Routes)
);

export default RoutesContainer;
