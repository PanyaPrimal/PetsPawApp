// 'use client'

import React, {useEffect, useState } from 'react'
import styles from './SearchBar.module.scss'
import Button from '../ui/Button/Button'
import { useRouter } from 'next/navigation'
import { SearchSvg } from '../../../public/assets/svg';

const SearchBar = ({ ...props }) => {
	const router = useRouter()
	const name = router.name
	const [value, setValue] = useState()
	const [focus, setFocus] = useState(false)

  if (!router) {
    return null;
  }

	const searchClasses = `
    ${styles.search}
    ${focus ? styles.active : ''}
    ${props.className || ''}
  `

	const onSubmit = async (e) => {
		e.preventDefault()

		if (value) {
			await router.push(`/search/${value}`)
		}
	}

	useEffect(() => {
		if (router.pathname === '/search/[name]') {
			setValue(name)
		}
	}, [router])

	return (
		<form className={searchClasses} onSubmit={(e) => onSubmit(e)}>
			<input
				type='text'
				className={styles.search__input}
				placeholder='Search for breeds by name'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<Button 
        className='rounded-[10px]'
        color='primarySoft'
        aria-label='search'
      >
				<SearchSvg />
			</Button>
		</form>
	);
};

export default SearchBar;
