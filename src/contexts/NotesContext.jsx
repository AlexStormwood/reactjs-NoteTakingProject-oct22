import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";


const initialNotesData = [
	{
		id: 1,
		title: "Welcome to the Note Taker!",
		description: "Make your notes here!",
		isCompleted: false, 
		dueDate: new Date().setDate(new Date().getDate() + 1), // Current time but one day in the future 
		createdAtDate: Date.now() 
	}
]

/**
 * Runs automatically when a dispatch function is called.
 * instructions.type determines _how_ we edit the state
 * The reducer must return something, otherwise state is set to null.
 * Whatever is returned, is the new state.
 * @returns New state, edited based on instructions provided.
 */
const notesReducer = (previousState, instructions) => {
	let stateEditable = [...previousState];

	switch (instructions.type){
		case "create":
			console.log("TODO: Create note and add to state");
			// returns SomeNewState; 
			break;
		case "update":
			console.log("TODO: Update specific note and overwrite it in state");
			break;
		case "delete":
			console.log("TODO: Delete note from state");
			break;
		case "sortByDueDate":
			console.log("Sorted state data by due date");
			break; 
		case "sortByCreatedAtDate":
			console.log("Sorted by created at date");
			break; 
		case "sortById":
			console.log("Sort by ID, this is the default order");
			break; 
		default: 
			console.log("Invalid instruction type provided, it was: " + instructions.type);
			return previousState;
	}
}

// This is how we make our reducer state and reducer dispatch global
export const NoteDataContext = createContext(null);
export const NoteDispatchContext = createContext(null);

// Custom hooks, that just provide direct access to one part of the reducer
// eg. read-only data:
export function useNoteData(){
	return useContext(NoteDataContext);
}
// function to modify the data:
export function useNoteDispatch(){
	return useContext(NoteDispatchContext);
}

/**
 * NotesProvider wraps around the component tree. 
 * Any child component has access to this note data via useNoteData and useNoteDispatch.
 * @param {*} props props.children should be a JSX element. This NotesProvider wraps around that element.
 */
export default function NotesProvider(props){
	// 	  [readOnlyData, functionToModifyData] = useReducer(functionToModifyData, initialDefaultData)
	const [notesData, notesDispatch] = useReducer(notesReducer, initialNotesData);

	// [readOnlyLocalStorageData, functionToUpdateLocalStorage] = useLocalStorage(keyInLocalStorage, defaultDataIfKeyIsNotFound)
	const [persistentData, setPersistentData] = useLocalStorage('notes', initialNotesData);

	useEffect(() => {
		// On app start, overwrite notesData with persistentData 
		// notesDispatch()
	}, []);

	// Dev: confirm that our local storage is updating
	useEffect(() => {
		console.log("Local Storage: " + persistentData);
	}, [persistentData]);

	// Autosave any changes to notes from reducer state into localstorage
	useEffect(() => {
		setPersistentData(notesData);
	}, [notesData]);

	return (
		<NoteDataContext.Provider value={notesData}>
			<NoteDispatchContext.Provider value={notesDispatch}>
				{props.children}
			</NoteDispatchContext.Provider>
		</NoteDataContext.Provider>
	)

}

