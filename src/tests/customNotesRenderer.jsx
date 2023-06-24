// Custom renderer that provides Notes global context data
// to any child components
// Useful for tests that involve components that rely on Notes context 

import React from 'react';
import {render} from '@testing-library/react';

import NotesProvider from '../contexts/NotesContext';

function RenderWithNotesProvider(props){
	return(
		<NotesProvider>
			{props.children}
		</NotesProvider>
	)
}

const customNotesRenderer = (ui, options) => render(ui, {wrapper: RenderWithNotesProvider, ...options});

// We can import customNotesRenderer instead of @testing-library/react 
// whenever we want to use this custom renderer 
export * from "@testing-library/react";

export {customNotesRenderer as render};