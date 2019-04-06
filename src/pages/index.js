import React from 'react';
import { render } from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import Header from './Header';
import styles from './styles.css';
import Horizontal from './examples/Horizontal';

function App() {
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

render(<App />, document.getElementById('app'));
