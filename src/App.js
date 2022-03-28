import { Button, Card, Spinner } from "react-bootstrap";
import "./App.css";
import CardGroup from "./Components/CardGroup/CardGroup";
import CardGroup2 from "./Components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="primary mx-2">Click Me</Button>
      <Button variant="danger">Click Me</Button>

      <br />
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
