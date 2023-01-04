import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'

export const UseMemo = () => {
	console.log('useMemo rendering')

	let [a, setA] = useState<number>(2)
	let [b, setB] = useState<number>(2)

	let resultA = useMemo(() => {
		let result = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 1000000000) fake++
			result *= i
		}
		return result
	}, [a])
	let resultB = 1

	for (let i = 1; i < b; i++) {
		resultB *= i
	}

	return (
		<div>
			<input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
			<input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />

			<div>ResultA = {resultA}</div>
			<div>ResultB = {resultB}</div>

			<HelpToUseMemo />
			<LikeUseCallback />
		</div>
	)
}

//! ------------------------ Ract.memo ----------------------------

const NewMessagesCounterMemo = (props: { count: number }) => {
	console.log('NewMessagesCounter')

	return (
		<>
			<div>{props.count}</div>
		</>
	)
}
const NewMessagesCounter = React.memo(NewMessagesCounterMemo)

const UsersSecret = (props: { users: string[] }) => {
	console.log('UsersSecret')

	return (
		<div>
			{props.users.map((u, i) => (
				<div key={i}>{u}</div>
			))}
		</div>
	)
}
const Users = React.memo(UsersSecret)

export const HelpToUseMemo = () => {
	console.log('HelpToUseMemo')

	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState<string[]>(['Alex', 'Dima', 'Nik', 'Anya'])

	const addUser = () => {
		const newUsers = [...users, 'Sveta' + new Date().getTime()]
		setUsers(newUsers)
	}

	//Метод filter создает новый массив, и что бы компонента Users не перерисовывалась
	//так как в нее приходит новый массив при каждом обновлении счетчика, мы засовываем филтрацию в useMemo
	const fiteredUsers = useMemo(() => {
		return users.filter((u) => u.toLowerCase().indexOf('a'))
	}, [users])

	return (
		<>
			<button
				onClick={() => {
					setCounter(counter + 1)
				}}
			>
				+
			</button>
			<button onClick={addUser}>Add user</button>
			<NewMessagesCounter count={counter} />
			<Users users={fiteredUsers} />
		</>
	)
}

//! ----------------------------------------------------------------------------

export const LikeUseCallback = () => {
	console.log('LikeUseCallback')

	const [counter, setCounter] = useState(0)
	const [books, setBooks] = useState<string[]>(['React', 'JS', 'css', 'html'])

	const addBook = () => {
		const newBooks = [...books, 'Angular' + new Date().getTime()]
		setBooks(newBooks)
	}
	const MemoizedAddBook = useMemo(() => addBook, [books]) // Это
	const CallbackedAddBook = useCallback(() => {
		// И это, одно и тоже)
		const newBooks = [...books, 'Angular' + new Date().getTime()]
		setBooks(newBooks)
	}, [books])

	//Метод filter создает новый массив, и что бы компонента Users не перерисовывалась
	//так как в нее приходит новый массив при каждом обновлении счетчика, мы засовываем филтрацию в useMemo
	const fiteredBooks = useMemo(() => {
		//debugger
		return books //.filter((book) => book.toLowerCase().indexOf('a'))
	}, [books])

	return (
		<>
			<button
				onClick={() => {
					setCounter(counter + 1)
				}}
			>
				+
			</button>
			{/*<button onClick={addBook}>Add book</button>*/}
			<NewMessagesCounter count={counter} />
			<Books books={fiteredBooks} addBook={CallbackedAddBook} />
		</>
	)
}

const BooksSecret = (props: { books: string[]; addBook: () => void }) => {
	console.log('BooksSecret')

	return (
		<div>
			<button onClick={props.addBook}>Add book</button>

			{props.books.map((b, i) => (
				<div key={i}>{b}</div>
			))}
		</div>
	)
}
const Books = React.memo(BooksSecret)
