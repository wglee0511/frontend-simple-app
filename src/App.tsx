import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import Toast from './components/Toast';
import CatViewer from './pages/main/CatViewer';
import WorkingHours from './pages/main/WorkingHours';
import './App.css';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { getIsVisibleToast, getToastMessage } from './stores/toast/selector';
import { resetToast } from './stores/toast/slice';
import { COLORS, getColorWithOpacity } from './themes/colors';

function App() {
  const dispatch = useAppDispatch();
  const isVisibleToast = useAppSelector(getIsVisibleToast);
  const toastMessage = useAppSelector(getToastMessage);

  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <nav
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1,
              backgroundColor: getColorWithOpacity(COLORS.black, 0.1),
            }}
          >
            <ul>
              <li>
                <Link to="/cat-viewer">CatViewer</Link>
              </li>
              <li>
                <Link to="/working-hour">WorkingHours</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/cat-viewer">
              <CatViewer />
            </Route>
            <Route path="/working-hour">
              <WorkingHours />
            </Route>
          </Switch>
          {isVisibleToast && (
            <Toast message={toastMessage} onCloseToast={() => dispatch(resetToast())} />
          )}
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
