import { Circulo } from "./Circulo";


function App() {
  const pintarColor = (estado) => {
    if (estado === true) {
      return <div style={{ backgroundColor: "gray" }}></div>
    } else {
      return <div style={{ backgroundColor: "gray" }}></div>
    };
  };
  return (
    <>
      <Circulo />
      <Circulo />
      <Circulo />
      <Circulo />
      <Circulo />
    </>
  );
}

export default App;
