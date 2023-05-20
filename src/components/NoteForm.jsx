

/* 	
- ID (number)
- title (string)
- description (string)
- isCompleted (boolean)
- due date (JS Date)
- created at date (JS Date) 
*/

import { useEffect, useState } from "react";
import { useNoteData, useNoteDispatch } from "../contexts/NotesContext";

export default function NoteForm(props){
	
	// If this is null, no prop provided, we are creating a note
	// If id has value, we are editing a note
	const {id} = props;

	// This is to read the global notes data:
	const globalNotesData = useNoteData();
	// The dispatch is our reducer, can edit global notes data:
	const globalNotesDispatch = useNoteDispatch();

	//const [localId, setLocalId] = useState("");
	const [localTitle, setLocalTitle] = useState("");
	const [localDescription, setLocalDescription] = useState("");
	const [localIsCompleted, setLocalIsCompleted] = useState(false);
	const [localDueDate, setLocalDueDate] = useState(new Date().setDate(new Date().getDate() + 1));
	const [localCreatedAtDate, setLocalCreatedAtDate] = useState(Date.now());


	useEffect(() => {
		let tempNote = globalNotesData.find(globalSpecificNote => {
			//console.log("Some note data");

			return globalSpecificNote.id === id;
		});

		if (tempNote){
			// we found a note!!!
			setLocalTitle(tempNote.title);
			setLocalDescription(tempNote.description);
			setLocalIsCompleted(tempNote.isCompleted);
			setLocalDueDate(tempNote.dueDate);
			setLocalCreatedAtDate(tempNote.createdAtDate);
		}


	}, [globalNotesData, id]);


	const saveNoteToGlobal = () => {
		// UX note: saving should exit edit mode, but we won't do that in this app
		// We'd need to pass in the toggleEditMode stuff from the NoteParent 

		let tempNewNote = {
			id: id || globalNotesData.length + 1,
			title: localTitle,
			description: localDescription,
			isCompleted: localIsCompleted,
			dueDate: localDueDate,
			createdAtDate: localCreatedAtDate
		}

		if (id){
			globalNotesDispatch({type:"update", updatedNote: tempNewNote})
		} else {
			globalNotesDispatch({type:"create", newNote: tempNewNote})
		}
		

	}


	return(
		<div>
			<form>
			<label>Title:</label>
			<input type="text" name="title" value={localTitle} onChange={(event) => setLocalTitle(event.target.value)} />

			<label>Description:</label>
			<input type="text" name="description" value={localDescription} onChange={(event) => setLocalDescription(event.target.value)} />

			<label>Is Completed:</label>
			<input type="checkbox" name="isCompleted" value={localIsCompleted} checked={localIsCompleted} onChange={(event) => setLocalIsCompleted(!localIsCompleted)} />

			<label>Due Date:</label>
			<input type="date" name="dueDate" value={new Date(localDueDate).toISOString().split('T')[0]} 
			
			onChange={(event) => {
				console.log(event.target.value);
				setLocalDueDate(event.target.value)
			}} 
			
			/>

			{/* This will be handled by the reducer, not the human: */}
			{/* <label>Created At:</label>
			<input type="text" name="createdAtDate" value={localCreatedAtDate} onChange={setLocalCreatedAtDate} /> */}

			</form>
			<button onClick={saveNoteToGlobal}>Save Note</button>
		</div>
	);

}