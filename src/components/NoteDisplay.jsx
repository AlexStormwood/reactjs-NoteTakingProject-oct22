import { useEffect, useRef } from "react";
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props){

	const {id} = props;
	let note = useRef({});

	const globalNotesData = useNoteData();



	useEffect(() => {
		// On start, find the note in globalNotesData
		// that has an ID matching props.id
		note.current = globalNotesData.filter(globalSpecificNote => {
			return globalSpecificNote.id === id;
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	

	return(
		<div>
					{/* 	
					- ID (number)
					- title (string)
					- description (string)
					- isCompleted (boolean)
					- due date (JS Date)
					- created at date (JS Date) 
					*/}
					<h4>{note.current.title}</h4>
					<p>{note.current.description}</p>
					<p>{note.current.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
					<input type="checkbox" disabled="disabled" onChange={null} readOnly={true} value={note.current.isCompleted} />
					<h5>Due Date: {new Date(note.current.dueDate).toLocaleDateString()}</h5>
					{/* <input type="date" readOnly value={note.dueDate} /> */}
					<h5>Created At: {new Date(note.current.createdAtDate).toLocaleDateString()}</h5>
					{/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
		</div>
	)
}