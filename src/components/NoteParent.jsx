import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteDisplay from "./NoteDisplay";


export default function NoteParent(props){

	const [editMode, setEditMode] = useState(false);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	}


	return(
		<div>
			{editMode ? <NoteForm id={props.id} /> : <NoteDisplay id={props.id} />}
			<button onClick={toggleEditMode}>Toggle Edit Mode</button>
		</div>
	)
}