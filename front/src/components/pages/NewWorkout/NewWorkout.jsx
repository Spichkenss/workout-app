import React from 'react'
import ReactSelect from 'react-select'
import { Link } from 'react-router-dom'
import Layout from '../../common/Layout'

import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'

import styles from './NewWorkout.module.scss'

const NewWorkout = () => {
	const [name, setName] = React.useState('')
	const [exercises, setExercises] = React.useState([])

	const handleSubmit = () => {
		console.log('submit')
	}

	return (
		<>
			<Layout bgImage={bgImage} heading='Create new workout' />
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Enter name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={[
							{ value: 'erfgerrf', label: 'Push-ups' },
							{ value: 'refger', label: 'Pull-ups' },
						]}
						value={exercises}
						onChange={setExercises}
						isMulti={true}
					/>
					<Button text='Create' callback={() => {}} />
				</form>
			</div>
		</>
	)
}

export default NewWorkout
