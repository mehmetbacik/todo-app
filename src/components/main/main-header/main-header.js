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
		<form onSubmit={onSubmit}>
			<input value={input} onChange={onChangeInput} className="todo-add" placeholder="Add new todo..." autoFocus ref={ref} />
		</form>
	)
}

export default MainHeader;