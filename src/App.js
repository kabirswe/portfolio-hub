import styles from './App.module.scss';
import { RadioWidget } from './components/RadioWidget/RadioWidget';
import TopHeader from './containers/DefaultLayout/components/topHeader/TopHeader';

import Footer from './containers/DefaultLayout/components/Footer/Footer';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import TopHeader  from './containers/DefaultLayout/components/topHeader/TopHeader';
import Navbar from './containers/DefaultLayout/components/navbar/Navbar';
import Banner from './containers/DefaultLayout/components/banner/Banner';
import Media from './containers/DefaultLayout/components/Media/Media';

function App() {
  return (
    <div className={styles.App}>
       <Footer/>
      <TopHeader/>
      <Navbar/>
      <Banner/>
      <Media/>
    </div>
  );
}

export default App;