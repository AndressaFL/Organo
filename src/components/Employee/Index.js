import "./Employee.css";

//using props , same as (props)
const Employee = ({ name, image, position, cabecalhoColor }) => {
  return (
    <div className="employee">
       <div className="cabecalho"
            style={{ backgroundColor: cabecalhoColor }}>
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
