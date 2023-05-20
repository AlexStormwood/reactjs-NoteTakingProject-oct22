import NoteDisplay from "../components/NoteDisplay";
import NoteForm from "../components/NoteForm";
import NoteParent from "../components/NoteParent";
import { useNoteData } from "../contexts/NotesContext"


export default function Homepage(props){

	const globalNotesData = useNoteData();
	// const [someData, someFunction] = useContext(SomeContext);

	return(
		<div>
			<h1>Note Taking Application</h1>

			{/* Note Count Component */}
			<h3>We have {globalNotesData.length} notes in storage!</h3>

			{/* Note Form Component */}
			<h3>Create a new note:</h3>
			<NoteForm />

			{/* List Of All Notes Component */}
			<h3>List of All Notes:</h3>
			{globalNotesData.map((note) => {
				return(
				<div key={note.id}>
					{/* <NoteDisplay id={note.id} /> */}
					<NoteParent id={note.id} />
				</div>
				);
			})}
		</div>
	)
}