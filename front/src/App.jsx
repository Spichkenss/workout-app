import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home/Home'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact={true}>
					<Home />
				</Route>
				<Route path='/new-workout'>
					<NewWorkout />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
