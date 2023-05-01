import './Home.module.scss';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import styles from './Home.module.scss';
import Dashboard from '../components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <div className={styles['layout']}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
