import AltContainer from 'alt-container';
import React from 'react';
import TaskActions from '../../actions/TaskActions';
import Editable from '../Editable.jsx';

export default class Assignment extends React.Component {
	render() {
		const {task, ...props} = this.props;

		return (
			<div>
				<p>Days of the Week:</p>
				<label className="dayCheck">
					<input type="checkbox" name="Monday" 
						defaultChecked={task.interval["Monday"] || false}
						onChange={this.changeHandler}/>
					Monday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Tuesday"
						defaultChecked={task.interval["Tuesday"] || false}
						onChange={this.changeHandler}/>
					Tuesday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Wednesday"
						defaultChecked={task.interval["Wednesday"] || false}
						onChange={this.changeHandler}/>
					Wednesday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Thursday"
						defaultChecked={task.interval["Thursday"] || false}
						onChange={this.changeHandler}/>
					Thursday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Friday"
						defaultChecked={task.interval["Friday"] || false}
						onChange={this.changeHandler}/>
					Friday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Saturday"
						defaultChecked={task.interval["Saturday"] || false}
						onChange={this.changeHandler}/>
					Saturday
				</label>
				<label className="dayCheck">
					<input type="checkbox" name="Sunday"
						defaultChecked={task.interval["Sunday"] || false}
						onChange={this.changeHandler}/>
					Sunday
				</label>

				<p>What Times?</p>
				<input type="time" name="start" 
					onChange={this.timeHandler} 
					defaultValue={task.start}/>
				<p>to</p>
				<input type="time" name="end" 
					onChange={this.timeHandler} 
					defaultValue={task.end}/>
			</div>
		);
	};

	changeHandler = (e) => {
		var task = this.props.task;

		console.log(e.target.checked)
		task.interval[e.target.name] = e.target.checked;

		TaskActions.update(task);
	};

	timeHandler = (e) => {
		var task = this.props.task;

		task[e.target.name] = e.target.value;
		TaskActions.update(task);
	}
}