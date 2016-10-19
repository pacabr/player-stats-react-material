import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { AppContainer } from 'react-hot-loader'

const root = document.getElementById('app');

const renderApp = (routes) => (
  	<div>
		<AppContainer>
			<Router history={browserHistory} routes={routes} />
		</AppContainer>
	</div>
)

render(renderApp(routes), root);

if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./routes')
    render(renderApp(routes), root)
  })
}

