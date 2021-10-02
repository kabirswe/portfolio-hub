import styles from './App.module.scss';
import { RadioWidget } from './components/RadioWidget/RadioWidget';
import { Button } from './stories/Button';
import { Header } from './stories/Header';

function App() {
  return (
    <div className={styles.App}>
      {/* <RadioWidget title="" /> */}
      {/* <Button label="Submit"/> */}
      <Header/>
    </div>
  );
}

export default App;
