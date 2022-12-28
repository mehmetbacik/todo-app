import './main-item.css'

function MainItem({ setMainItem, mainItems }) {

	const onCheckboxClick = (i) => {
		setMainItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, isCompleted: !el.isCompleted }
			}
			return el;
		}));
	}
	
	const focusFunc = (i) => {
		setMainItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, isEditing: true }
			}
			return { ...el, isEditing: false };
		}));
	}
	
	const blurFunc = (i) => {
		setMainItem(prevState => prevState.map((el, index) => {
			return { ...el, isEditing: false };
		}));
	}
	
	const onChangeItems = (i, e) => {
		setMainItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, name: e.target.value }
			}
			return el;
		}));
	}
	
	const onDelete = (e) => {
		
		setMainItem(prevState => prevState.filter((el, index) => index != e.target.id));
	}

	return (
		<section className="main" >
			<ul className="todo-list">
				{mainItems.map((mainItem, i) => (
					<li key={i} className='d-flex'>
						<div className='float-start'>
							<input
								onClick={(e) => onCheckboxClick(i)}
								type="checkbox"
								checked={mainItem.isCompleted === true}
								hidden={mainItem.isVisible === false}
								className='toggle'
							/>
						</div>
						<div className='list-item'>
							<input
								onChange={(e) => onChangeItems(i, e)}
								value={mainItem.name}
								className={(mainItem.isCompleted ? 'view completed' : 'view') + ' ' + (mainItem.isEditing ? 'edit' : '')}
								hidden={mainItem.isVisible === false}
								onFocus={(e) => focusFunc(i, e)}
								onBlur={(e) => blurFunc(i, e)}
							/>
						</div>
						<div className='float-end'>
							<button
								id={i} onClick={onDelete}
								className="destroy m-0">
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default MainItem;