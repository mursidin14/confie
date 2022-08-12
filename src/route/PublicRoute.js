import {
  Route,
} from 'react-router-dom';

function PublicRoute({ children }) {
  return (
    <Route
      render={
        children
      }
    />
  );
}

export default PublicRoute;