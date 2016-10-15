import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';

export default class MeTime extends React.Component {

	render() {
		const {task, ...props} = this.props;
		console.log(task.estTime);
		return (
			<div key={task.id + "mediv"}>
				<p>How long is it going to take? (Hours) </p>
				<input key="0" type="number" defaultValue={task.estTime} placeholder="Time" onChange={this.timeChangeHandler}/>
				<hr className="emptyCardSep"/>
				<p>When do you want to get it done by?</p>
				<input key="1" type="date" defaultValue={task.dueDate} onChange={this.dueDateHandler}/>
				<hr className="emptyCardSep"/>
				<p>How Important is it to you? (1-5)</p>
				<input key="2" type="number" defaultValue={task.priority} placeholder="Importance" onChange={this.priorityHandler}/>
			</div>
		);
	};

	timeChangeHandler = (e) => {
		var task = this.props.task;
		task.estTime = e.target.value;
		TaskActions.update(task);
	};

	dueDateHandler = (e) => {
		var task = this.props.task;
		task.dueDate = e.target.value;
		TaskActions.update(task);
	};

	priorityHandler = (e) => {
		var task = this.props.task;
		task.priority = e.target.value;
		TaskActions.update(task);
	};
}