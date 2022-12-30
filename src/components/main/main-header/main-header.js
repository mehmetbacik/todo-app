import { useState, useRef } from 'react'
import './main-header.css'

function MainHeader({ setMainItem, mainItems }) {
    
	const ref = useRef(null);

	const initialInputValue = ""
	const [input, setInput] = useState(initialInputValue);

	const onChangeInput = (e) => {
		setInput( e.target.value );
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (input === "") return false;

		const value = {name:input, isCompleted: false, isVisible: true, isEditing: false}

		setMainItem([...mainItems, value]);
		setInput(initialInputValue);
	}

	return (
		<header className='header'>
			<form onSubmit={onSubmit}>
				<input
					value={input}
					onChange={onChangeInput}
					className="new-todo"
					placeholder="Add new todo..."
					autoFocus
					ref={ref}
				/>
			</form>
		</header>
	)
}

export default MainHeader;