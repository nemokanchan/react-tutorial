function App() {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-3xl text-green-400">Welcome to the React App</h1>
        <p>This is a simple React application.</p>
      </div>
      <ul className="flex justify-around bg-red-100">
        <li className="bg-violet-500 border border-red-600">Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default App;
