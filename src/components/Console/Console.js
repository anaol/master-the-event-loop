import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pushToConsole } from '../../redux/Console/Console.actions'

import { Button } from '../Button/Button'
import { ConsoleBox, ConsoleHeader, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'

class Console extends Component {
	render() {
		return (
			<>
				<ConsoleHeader>
					<Box display="flex" justifyContent="center" alignItems="center">
						<ConsoleTitle p="10px">Console</ConsoleTitle>
					</Box>
				</ConsoleHeader>

				<ConsoleBox>
					<Box borderTop={1} borderStyle="solid" color="colorBlue" />

					<Box display="flex" justifyContent="center" m="20px 0">
						<List>
							{this.props.messages.map((message) => (
								<ListItem>{message}</ListItem>
							))}
						</List>
					</Box>

					<Box display="flex" justifyContent="center" alignItems="center">
						<Button onClick={() => this.props.pushToConsole('hello')}>Click Me</Button>
					</Box>
				</ConsoleBox>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	messages: state.consoleReducer.messages,
})

//temporary dispatch for functionality depiction
const mapDispatchToProps = (dispatch) => ({
	pushToConsole: (message) => dispatch(pushToConsole(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Console)
