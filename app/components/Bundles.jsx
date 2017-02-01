import React from 'react';
import Bundle from './Bundle.jsx';

export default ({bundles}) => {
	return (
		<div className="bundles">{bundles.map(bundle =>
			<Bundle className="bundle" key={bundle.id} bundle={bundle} />
		)}</div>
	);
}