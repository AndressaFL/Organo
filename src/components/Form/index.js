import TextField from "../TextField";
import DropDownList from "../DropDownList";
import "./Form.css";

const Form = () => {

  const teams = [
    'Developer',
    'Front-End',
    'Mobile'
  ]

  return (
    <section className = "form">
      <form>
        <h2>Enter your information to create a employee card</h2>
        <TextField label="Name" placeholder="Enter your name" />
        <TextField label="Position" placeholder="Enter your position" />
        <TextField label="Image" placeholder="Enter the image" />
        <DropDownList label ="team" itens ={teams} />
      </form>
    </section>
  );
};
export default Form;
