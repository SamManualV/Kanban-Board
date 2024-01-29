import "./App.css";

function App() {
  const title = "Hello World";
  const id = "ID-4";
  const points = 3;

  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">
      <div className="text-base font-semibold py-2">{title}</div>
      <div className="flex justify-between py-2 text-gray-700">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
}

export default App;
