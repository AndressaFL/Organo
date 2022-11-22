import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import TextField from "./components/TextField";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Developer",
      colorPrimary: "#57C278",
      colorSecondary: "#D9F7E9",
    },
    {
      name: "Front-End",
      colorPrimary: "#82CFFA",
      colorSecondary: "#E8F8FF",
    },
    {
      name: "Mobile",
      colorPrimary: "#DB6EBF",
      colorSecondary: "#FAE9F5",
    },
    {
      name: "Data Science",
      colorPrimary: "#FFBA05",
      colorSecondary: "#FFF5D9",
    },
    {
      name: "Devops",
      colorPrimary: "#FF8A29",
      colorSecondary: "#FFEEDF",
    },
    {
      name: "Managment",
      colorPrimary: "#E06B69",
      colorSecondary: "#FDE7E8",
    },
  ];

  const [employees, setEmployees] = useState([]);
  const newEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        employeeAdded={(employee) => newEmployeeAdded(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          colorPrimary={team.colorPrimary}
          colorSecondary={team.colorSecondary}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
