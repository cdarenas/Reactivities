import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import NotFound from './NotFound';
import { ToastContainer } from 'react-toastify';
import { RootStoreContext } from '../../app/stores/rootStore';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const rootStore = useContext(RootStoreContext);

  useEffect(() => {
    rootStore.activityStore.loadActivities();
  }, [rootStore.activityStore]);

  if (rootStore.activityStore.loadingInitial) return <LoadingComponent content='Loading Hacktivities...'></LoadingComponent>

  return (
    <Fragment>
      <ToastContainer position='bottom-right'></ToastContainer>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Fragment>
          <NavBar></NavBar>
          <Container style={{ marginTop: '7em' }}>
            <Switch>
              <Route exact path='/activities' component={ActivityDashboard}></Route>
              <Route path='/activities/:id' component={ActivityDetails}></Route>
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Container>
        </Fragment>
      )} />
    </Fragment>
  );
};

export default withRouter(observer(App));
