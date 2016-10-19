import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

// import AutocompleteSearch from '../AutocompleteSearch/AutocompleteSearch.js';

// const actions = [
	// { label: 'Alarm', raised: true, icon: 'access_alarm' },
	// { label: 'Location', raised: true, accent: true, icon: 'room' }
// ];

const renderLinkList = (array) => {
	return array.map = (item) => {
		return <li><Link href={`${item.href}`} label={`${item.label}`} /></li>
	}
}

class Navigation extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div>
			<nav>
				<div className={this.props.classNames.div}>
					<Link to={this.props.linkTo} className={this.props.classNames.link}>Logo</Link>
					<ul className={this.props.classNames.ul}>
						{renderLinkList(this.props.navLinkItems)}
					</ul>
				</div>
			</nav>
		</div>
		)
	}
}


export default Navigation;

/* <Link to={this.props.linkTo} className={this.props.className}>Logo</Link>
<ul id={this.props.id} className={this.props.className}>
	{this.renderLinkList(this.props.navLinkItems)}
</ul> */

