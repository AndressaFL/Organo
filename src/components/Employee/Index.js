import "./Employee.css";

//using props , same as (props)
const Employee = ({ name, image, position }) => {
  return (
    <div className="employee">
      <div className="cabecalho">
        <img src={image} alt="" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};
export default Employee;
