// When visiting the root route, 
// expect the rendered content to include "Note Taking Application"
// as per the contents of Homepage.jsx 

// Render: mock browser rendering system 
// Screen: provides access to the virtual, mocked React app 
// import {render, screen} from "@testing-library/react";
import {render, screen} from "./customNotesRenderer";


// Adds Jest-compatible matcher functions focused on React apps 
import "@testing-library/jest-dom";

// Components that we want to test:
import Homepage from "../pages/Homepage";
import { ExampleTitleComponent } from "../components/ExampleTitleComponent";
import NotesProvider from "../contexts/NotesContext";

// Jest tests go here:
test("Homepage displays a title", () => {
	// Set up the "page" of content to render
	//const {container} = render(<Homepage />);
	// const {container} = render(<div>
	// 	<NotesProvider>
	// 		<Homepage />

	// 	</NotesProvider>
	// </div>);

	// Using the custom "render" function
	const {container} = render(<Homepage />);


	// Do human-like actions to the "rendered" content 
	let seenTitle = screen.getByText("Note Taking Application");

	// Jest matcher/expect statements
	// Assertion to confirm expected behaviour/results
	expect(seenTitle).toBeTruthy();

});


test("ExampleTitleComponent displays a title", () => {
	// Set up the "page" of content to render
	const {container} = render(<ExampleTitleComponent />);

	// Do human-like actions to the "rendered" content 
	let seenTitle = screen.getByText("Note Taking Application");

	// Jest matcher/expect statements
	// Assertion to confirm expected behaviour/results
	expect(seenTitle).toBeTruthy();

});