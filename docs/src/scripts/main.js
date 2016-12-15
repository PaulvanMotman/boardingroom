console.log('Main js loaded')

// Import required modules
import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/styles.scss'


// Creating the container class
class Container extends React.Component {
	constructor(props) {
		super(props)
		// This doesnt get auto-binded in ES6, therefore:


		// This state is the main state of the app, and data can be sent to child components by storing it in props
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<p>hoiiiiiii</p>
			</div>
		)
	}
} 


ReactDOM.render(<Container />, document.getElementById('container'))
