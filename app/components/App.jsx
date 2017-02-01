import AltContainer from 'alt-container';
import React from 'react';
import Entry from './Entry.jsx';
import Header from './Header.jsx';
//import EntryActions from '../actions/TaskActions';
//import EntryStore from '../stores/TaskStore';
import {Col} from 'react-bootstrap';
import data from './entries/entries.jsx'
export default class App extends React.Component {
	/*constructor(props) {
		super(props);

		// Flux is pretty Cool:
		this.state = NoteStore.getState();
	}
	componentDidMount() {
		NoteStore.listen(this.storeChanged);
	}
	componentWillUnmount() {
		NoteStore.unlisten(this.storeChanged);
	}
	storeChanged = (state) => {
		// Needs property initializer, otherwise
		// strict mode defaults to 'undefined'
		this.setState(state);
	}*/
	render() {
		//const notes = this.state.notes;
		console.log(this.props.route);
		return (
			
			<div>
				<Header/>
				
				<Col mdOffset={2} md={8} key="schedule">
					<Entry data={data[this.props.route.entry]}/>
				</Col>
			</div>
		)
		
	}

}
