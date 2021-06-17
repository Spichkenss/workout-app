import React from 'react'
import { useHistory } from 'react-router'
import Hamburger from './Hamburger/Hamburger'

import styles from './Header.module.scss'
import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'

const Header = () => {
	const { location, goBack } = useHistory()

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button type='button' onClick={() => goBack()}>
					<img src={arrowImage} alt='back' />
				</button>
			) : (
				<button type='button'>
					<img src={userImage} alt='Auth' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
