import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';
import Assignment from './Assignment.jsx'
import WeeklyInterval from './WeeklyInterval.jsx'
export default class Routine extends React.Component {
	render() {
		const {task, ...props} = this.props;

		return (
			<div>
				<hr className="cardSep"/>
				<div className="interval">
					<WeeklyInterval key={task.id + "interval"} task={task}/>
				</div>
				<hr className="cardSep"/>

				<div className="subRoutines">
					{task.specs.map(spec => {
						if (spec.type == "assign") {
							return this.renderAssign(spec);
						}			
					})}
				</div>

				<button onClick={() => this.newSub(task)}>+ SubRoutine</button>
			</div>
		);
	};

	newSub(task) {
		//console.log(task.specs)

		task.specs.push({type: "assign", id: Math.random()});
		
		TaskActions.update(task);
	}; 

	renderAssign(spec) {
		var task = this.props.task;

		return (
			<Assignment className="assignment" key={spec.id + "assignment"} spec={spec} task={task} />
		)
	}

}