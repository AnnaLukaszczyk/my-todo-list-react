import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null);

	const onFormSubmit = (event) => {
		event.preventDefault();
		const trimmedNewTaskContent = newTaskContent.trim();
		if (trimmedNewTaskContent === "") {
			setNewTaskContent("");
			return;
		}
		addNewTask(trimmedNewTaskContent);
		setNewTaskContent("");
		inputRef.current.focus();	
	};

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<input
				value={newTaskContent}
				className="form__newTask"
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
				ref={inputRef}
			/>
			<button className="form__sendTaskButton">
				Dodaj zadanie
			</button>
		</form>
	);
};

export default Form;
