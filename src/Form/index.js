import { useState, useRef } from "react";
import { StyledForm, Input, FormButton } from "./styled";

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
		<StyledForm onSubmit={onFormSubmit}>
			<Input
				value={newTaskContent}
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
				ref={inputRef}
			/>
			<FormButton>
				Dodaj zadanie
			</FormButton>
		</StyledForm>
	);
};

export default Form;
