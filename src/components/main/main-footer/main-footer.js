import { useState } from 'react'
import './main-footer.css'

function MainFooter({ setMainItem, mainItems }) {

	const [selected, setSelected] = useState({ id: 'all' });

	const showAll = () => {
		setMainItem(prevState => prevState.map((el) => {
			el.isVisible = true
			return el
		}));

		setSelected({ id: 'all' });
	};

	const showActive = () => {
		setMainItem(prevState => prevState.map((el) => {
			el.isCompleted ? el.isVisible = false : el.isVisible = true
			return el
		}));

		setSelected({ id: 'active' });
	};

	const showCompleted = () => {
		setMainItem(prevState => prevState.map((el) => {
			el.isCompleted ? el.isVisible = true : el.isVisible = false
			return el
		}));

		setSelected({ id: 'completed' });
	};
	
	const onClickAll = () => {
		const found = mainItems.every(el => el.isCompleted === true)
		if (found) {
			setMainItem(
				mainItems.map((el) => {
					el.isCompleted = false
					return el;
				})
			)
		}
		else {
			setMainItem(
				mainItems.map((el) => {
					el.isCompleted = true
					return el;
				})
			)
		}
	};

	const onDeleteAllCompleted = () => {
		setMainItem(prevState => prevState.filter(el => !el.isCompleted));
	};

	return (
		<footer className="footer" hidden={mainItems.length === 0}>
			<span className="todo-count">
				<strong> {mainItems.length} </strong>
				items left
			</span>

			<ul className="filters">
				<li>
					<a className={selected.id === 'all' ? 'selected' : ''} onClick={showAll} href="#/" >All</a>
				</li>
				<li>
					<a className={selected.id === 'active' ? 'selected' : ''} onClick={showActive} href="#/" >Active</a>
				</li>
				<li>
					<a className={selected.id === 'completed' ? 'selected' : ''} onClick={showCompleted} href="#/" >Completed</a>
				</li>
				<li>
					<a onClick={onClickAll} href="#/">Mark all as complete</a>
				</li>
				<li>
					<a onClick={onDeleteAllCompleted} href="#/">Clear completed</a>
				</li>
			</ul>
		</footer>
	)
};

export default MainFooter;