import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/content';
import { render } from 'react-dom';
import React from 'react';
import App from './pages/App';

render(<Provider store={createStore(reducer)}>
	<App />
</Provider>, document.getElementById('app'));