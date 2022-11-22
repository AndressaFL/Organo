import Employee from "../Employee/Index";
import "./Team.css";

const Team = (props) => {
  return (
    //if true it will return the section
    props.employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.colorSecondary }}>
        <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
        <div className="employees">
          <div className="cabecalho"
            style={{ backgroundColor: props.colorPrimary }}>
            {props.employees.map((employee) => (
              <Employee
                name={employee.name}
                position={employee.position}
                image={employee.image}/>
            ))}
          </div>
        </div>
      </section>
    )
  );
};
export default Team;
