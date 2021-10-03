import styles from './App.module.scss';
import { RadioWidget } from './components/RadioWidget/RadioWidget';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import TopHeader  from './containers/DefaultLayout/components/topHeader/TopHeader';
import Navbar from './containers/DefaultLayout/components/navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      {/* <RadioWidget title="" /> */}
      {/* <Button label="Submit"/> */}
      <TopHeader/>
      <Navbar/>
    </div>
  );
}

export default App;