# Note Taking React App


## Day Plan

### Thursday

- [x] Fix bug with context & localstorage
- [ ] Work on essential homepage features
- [ ] Fix Netlify deployment re: React Router 

### Saturday

- Work through the "Nicer to Haves"
- Work on CSS Styling


## General Plan 
- Note taking app 
	- store notes in local storage 
	- notes stored as array of objects, like the blog posts 
	- useContext for global access to notes 
	- useReducer for complex access to notes 
	- useLocalStorage for persistent access to notes 
	- useState for forms to make notes 
	- CSS styling in React 
		- useMedia hook for media queries in JSX 
		- Bootstrap or Material or Tailwind 
	- deployment to Netlify  (and then maybe GH Pages) 
	- Auth as local storage thing, maybe? 

## Data Structures / Models 

- Note data structure
	- ID (number)
	- title (string)
	- description (string)
	- isCompleted (boolean)
	- due date (JS Date)
	- created at date (JS Date)
	
## Development Plan 

- Plan:
	- routing: 
		- useParams for routes to do things with/to specific notes
		- routes to do:

Essential stuff:
			- /
				- Homepage
					1. Display a count of how many notes exist
					2. Create a note with a form on the page 
					3. List of all notes? 
		
Nicer to have:
			- /notes
				- Lists all notes from newest to oldest
			- /notes/:noteID
				- Show a note 
			- /notes/:noteID/edit
				- Show a note edit form 
			- /
				- Homepage (extra functionality)
					- List newest note 
					- List any notes due within 1 day

Nice to have:
			- /notes/sort/createddate
				- List all notes ordered by "created at date"
			- /notes/filter/overdue
				- List all notes with a "due date" in the past and with "isCompleted" set to false
			- /notes/filter/done
				- List all notes with "isCompleted" set to true
			- /notes/sort/duedate
				- List all notes ordered by "due date"
			- /notes
				- List all notes ordered by ID 
			
			- /notes/searchByWord/:word
				- List all notes that include :word in title or description 
	
	- components:
		- NoteDisplay
			- Show note data
			- Show edit button
			- Show delete button 
		- NoteForm
			- If a prop.noteID exists, show form pre-filled with note data 
			- Else, show an empty form with placeholder content 
			- Show submit/save button  
		- NoteContainer
			- Store state about display/edit mode
			- Toggle between NoteDisplay and NoteForm 
			- Contain a reference to a note via note ID 
		- NewestNoteDisplay
			- Logic to determine which note is newest and retrieve that data from global state
			- Show note data 
				- NoteContainer re-used here 
		- CountNoteDisplay
			- Logic to count how many notes exist in global state 
			- Show number
		- SortedNotesList
			- Logic to copy global state into local state and sort it
			- Properties to sort by are received as props 
			- List a bunch of NoteContainers based on the sorted data 

