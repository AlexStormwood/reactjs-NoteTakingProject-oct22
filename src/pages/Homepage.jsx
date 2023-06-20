import { useEffect } from "react";
import NoteDisplay from "../components/NoteDisplay";
import NoteForm from "../components/NoteForm";
import NoteParent from "../components/NoteParent";
import { useNoteData, useNoteDispatch } from "../contexts/NotesContext"
import { getNotes } from "../services/notesServices";


export default function Homepage(props){

	const globalNotesData = useNoteData();
	// The dispatch is our reducer, can edit global notes data:
	const globalNotesDispatch = useNoteDispatch();
	// const [someData, someFunction] = useContext(SomeContext);
	//useEffect will execute its function when this component starts or is updated
	useEffect(()=>{
		getNotes().then(data => globalNotesDispatch({type:"setup", data: data}))
		// fetch("http://localhost:3001/notes")
		// .then(response => response.json())
		// .then(data => globalNotesDispatch({type:"setup", data: data})
		// )
	},[])


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
				<div key={note._id}>
					{/* <NoteDisplay id={note.id} /> */}
					<NoteParent _id={note._id} />
				</div>
				);
			})}
		</div>
	)
}