import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';

export default class Assignment extends React.Component {
	render() {
		const {spec, task, ...props} = this.props;

		return (
			<div className="assignment">
				<p>Assignment</p>
				<input type="text" placeholder="Name" name="title" 
					defaultValue={spec.title}
					onChange={this.changeHandler}/>
				<p>Due Date:</p>
				<input type="date" name="dueDate"
					defaultValue={spec.dueDate}
					onChange={this.changeHandler}/>
				<p> Estimated Time (Hours): </p>
				<input type="text" placeholder="Estimated Time "
					name="estTime"
					onChange={this.changeHandler}/>
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