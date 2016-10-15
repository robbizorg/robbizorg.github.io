import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';

export default class SubEvent extends React.Component {
	render() {
		const {spec, task, ...props} = this.props;

		return (
			<div className="Event">
				<p>Title:</p>
				<input type='text' name="title" defaultValue={spec.title} onChange={this.changeHandler}/>
				<p>Date and Time:</p>
				<p>Date:</p>
				<input type='date' name="date" defaultValue={spec.date} onChange={this.changeHandler}/>
				<p>Time:</p>
				<div className="inputContainer">
					<input className="inputStart" defaultValue={spec.start} name="start" type="time" placeholder="Start" onChange={this.changeHandler}/>to
					<input className="inputEnd" defaultValue={spec.end} name="end" type="time" placeholder="End" onChange={this.changeHandler}/>
				</div>
				<hr className="cardSep"/>
			</div>
		);
	};

	changeHandler = (e) => {
		var task = this.props.task;
		var specificSpec = this.props.spec;

		task.specs = task.specs.map(spec => {
			console.log(spec);
			if (spec.id == specificSpec.id) {
				spec[e.target.name] = e.target.value;	
				return spec;
			}

			return spec;
		});

		TaskActions.update(task);
	};
}