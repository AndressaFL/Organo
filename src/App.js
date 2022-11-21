import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import TextField from "./components/TextField";
import Team from "./components/Team";

function App() {

  const[employees, setEmployees] = useState([])
  const newEmployeeAdded = (employee)=> {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form employeeAdded ={employee => newEmployeeAdded(employee)}/>
      <Team name="Developer"/>
      <Team name="Front-End"/>
      <Team name="Mobile"/>
    </div>
  );
}

export default App;
