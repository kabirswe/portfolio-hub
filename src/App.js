import styles from './App.module.scss';
import { RadioWidget } from './components/RadioWidget/RadioWidget';
import TopHeader from './containers/DefaultLayout/components/topHeader/TopHeader';

import Footer from './containers/DefaultLayout/components/Footer/Footer';
import { Button } from './stories/Button';
import { Header } from './stories/Header';

function App() {
  return (
    <div className={styles.App}>
       <Footer/>
    </div>
  );
}

export default App;
