import React from 'react';
import Navigation from '../../molecules/Navigation/Navigation';

import styled from 'styled-components';

// import { Link } from 'react-router';

import * as c from '../../index.js';

export default class Homepage extends React.Component {
	navLinkItems = [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Players' },
		{ href: '#', label: 'Stats' },
		{ href: '#', label: 'Scores' },
		{ href: '#', label: 'News' },
		{ href: '#', label: 'Media' }
	];

	render() {
		const { children } = this.props;
		return (
			<div>				
				<Navigation 
				classNames={{
					div: 'nav-wrapper',
					link: '',
					ul: 'left hide-on-med-and-down'
				}} 
				navLinkItems={this.navLinkItems}
				linkTo='#'
				>
				{this.props.children}
				</Navigation>
			</div>
		);

	}
}

// <c.LayoutTemplate nav={<c.PrimaryNavigation />} />