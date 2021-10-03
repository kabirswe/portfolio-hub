import React, {useState} from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import TopHeader from './components/topHeader/TopHeader';
import './static/DefaultLayout.scss';

export const DefaultLayout = (props) => {
	const [fixNavbar, setFixNavbar] = useState(false);
	const fixNavbarScroll = () =>{
	   if(window.scrollY >= 400) {
		 setFixNavbar(true);
	   }
	   else{
		 setFixNavbar(false);
	   }
	};
	window.addEventListener('scroll', fixNavbarScroll);
  return (
	<>
		<div className={fixNavbar ? 'default-layout mt-100' : 'default-layout'}>
			<TopHeader />
			{/* <Navbar fixNavbar={fixNavbar} /> */}
			<div className="main-container">
				{props.children}
			</div>
			<Footer />
		</div>
	</>
  );
};