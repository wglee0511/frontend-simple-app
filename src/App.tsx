import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CatViewer from './pages/main/CatViewer';
import WorkingHours from './pages/main/WorkingHours';
import './App.css';
import { COLORS, getColorWithOpacity } from './themes/colors';

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
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
      </div>
    </Router>
  );
}

export default App;
