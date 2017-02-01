import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';
import SubEvent from './SubEvent.jsx';

export default class Event extends React.Component {
	render() {
		const {task, ...props} = this.props;

		return (
			<div>
				{task.specs.map(spec => {
					console.log(spec);
					if (spec.type == "eve") {
						return this.renderEve(spec);
					}			
				})}

				<br className="emptyCardSep"/>
				<button onClick={() => this.newEve(task)}>New Event</button>
				<hr className="emptyCardSep"/>
			</div>
		);
	};

	newEve = (task) => {
		task.specs.push({type: "eve", id: Math.random()});

		TaskActions.update(task);
	};

	renderEve = (spec) => {
		return (
			<SubEvent key={spec.id + "SubEvent"} spec={spec} task={this.props.task} className="Event"/>			
		)
	};
}