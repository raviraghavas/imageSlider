import React from 'react';
import Header from './Header';
import styles from '../css/styles.css';
import Horizontal from './Horizontal';

class App extends React.Component {

	render() {
		return (
			<div className={styles.page}>
				<Header />

				{/* <Shields /> */}

				{/* <h1>DEMO</h1>

			Full source code for the examples is available on&nbsp;
			<a href="https://github.com/erichbehrens/react-animated-slider/tree/master/src/pages">GitHub</a> */}

				{/* <Gallery /> */}

				<Horizontal />

				{/* <Vertical /> */}

				{/* <Custom /> */}

				{/* <Autoplay /> */}
			</div>
		);
	}
}

export default App;