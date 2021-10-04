import styles from './App.module.scss';
import { RadioWidget } from './components/RadioWidget/RadioWidget';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import TopHeader  from './containers/DefaultLayout/components/topHeader/TopHeader';
import Navbar from './containers/DefaultLayout/components/navbar/Navbar';
import Banner from './containers/DefaultLayout/components/banner/Banner';
import Media from './containers/DefaultLayout/components/Media/Media';

function App() {
  return (
    <div>
      {/* <RadioWidget title="" /> */}
      {/* <Button label="Submit"/> */}
      <TopHeader/>
      <Navbar/>
      <Banner/>
      <Media/>
    </div>
  );
}

export default App;