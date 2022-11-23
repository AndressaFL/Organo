import Employee from "../Employee/Index";
import "./Team.css";

const Team = (props) => {
  return (
    //if true it will return the section
    props.employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.colorSecondary }}
      >
        <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
        <div className="employees">
          {props.employees.map((employee) => (
            <Employee
              cabecalhoColor={props.colorPrimary}
              key={employee.name}
              name={employee.name}
              position={employee.position}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Team;
