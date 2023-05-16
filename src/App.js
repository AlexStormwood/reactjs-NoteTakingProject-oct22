import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
		<Route path="/" element={<h1>TODO</h1>} />
		<Route path="/notes" element={<h1>TODO</h1>} />
		<Route path="/notes/:noteID" element={<h1>TODO</h1>} />
		<Route path="/notes/:noteID/edit" element={<h1>TODO</h1>} />
		<Route path="/notes/searchByWord/:word" element={<h1>TODO</h1>} />
		<Route path="/notes/sort/duedate" element={<h1>TODO</h1>} />
		<Route path="/notes/sort/createddate" element={<h1>TODO</h1>} />
		<Route path="/notes/filter/overdue" element={<h1>TODO</h1>} />
		<Route path="/notes/filter/done" element={<h1>TODO</h1>} />

	  </Routes>
    </div>
  );
}

export default App;
