import { useEffect, useRef, useState } from "react";
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props){

	const {id} = props;
	const [localNote, setLocalNote] = useState({});

	const globalNotesData = useNoteData();



	useEffect(() => {
		// On start, find the note in globalNotesData
		// that has an ID matching props.id
		
		// Block syntax
		setLocalNote(globalNotesData.find(globalSpecificNote => {
			//console.log("Some note data");

			return globalSpecificNote.id === id;
		}));
		
		// Alternative, one-liner syntax:
		// setLocalNote(globalNotesData.find(globalSpecificNote => globalSpecificNote.id === id));


	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [globalNotesData, id])

	

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
					<h4>{localNote.title}</h4>
					<p>{localNote.description}</p>
					<p>{localNote.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
					<input type="checkbox" disabled="disabled" onChange={null} readOnly={true} value={localNote.isCompleted} />
					<h5>Due Date: {new Date(localNote.dueDate).toLocaleDateString()}</h5>
					{/* <input type="date" readOnly value={note.dueDate} /> */}
					<h5>Created At: {new Date(localNote.createdAtDate).toLocaleDateString()}</h5>
					{/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
		</div>
	)
}