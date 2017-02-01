import AltContainer from 'alt-container';
import React from 'react';
import BundleActions from '../actions/BundleActions';

export default class bundle extends React.Component {
	render() {
		const {bundle, ...props} = this.props;

		return (
			<div {...props}>
				<div>{bundle.title}
				</div>
			</div>
		);
	}

	deletebundle = () => {
		const bundleId = this.props.bundle.id;

		bundleActions.delete(bundleId);
	};
}