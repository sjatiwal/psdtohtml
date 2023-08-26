import "./App.css";
import Template1 from "./view/template1";
import Template2 from "./view/template2";
import Template3 from "./view/template3";

function App() {
  return (
    <div className="bg-no-repeat bg-cover bg-background-Image w-[100%] min-h-screen">
      <div className="flex flex-row w-full">
        <Template1 />
        <Template2 />
        <Template3 />
      </div>
    </div>
  );
}

export default App;
