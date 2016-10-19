import { PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';

export default class Link extends React.Component {	
	render() {
		const { className, children } = this.props;
		return (
			<li><RouterLink to={this.props.to}>{children}</RouterLink></li>
		);
	}
}