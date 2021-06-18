import React from 'react'
import { useHistory } from 'react-router'
import Hamburger from './Hamburger/Hamburger'

import styles from './Header.module.scss'
import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'

const Header = () => {
	const history = useHistory()
	const { location, goBack } = history

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button type='button' onClick={() => goBack()}>
					<img src={arrowImage} alt='back' />
				</button>
			) : (
				<button type='button' onClick={() => history.push('/auth')}>
					<img src={userImage} alt='Auth' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
