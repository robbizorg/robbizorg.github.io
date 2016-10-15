import React from 'react';
import Entry from './Entry.jsx';

export default ({entries}) => {
	return (
		<div className="entries">{entries.map(entry =>
			<Entry className="task" key={entry.id} entry={entry} />
		)}</div>
	);
}