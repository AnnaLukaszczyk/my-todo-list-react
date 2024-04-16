import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
	{
		id: 1,
		content: "zrobić obiad",
		done: false,
	},
	{
		id: 2,
		content: "zjeść śniadanie",
		done: true,
	},
];

let hideDoneTasks = false;

function App() {
	return (
		<Container>
			<Header title="Lista zadań" />
			<Section title="Dodaj nowe zadanie" body={<Form />} />
			<Section
				title="Lista zadań"
				body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
				extraHeaderContent={
					<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
				}
			/>
		</Container>
	);
}

export default App;
