import TextField from "../TextField";
import DropDownList from "../DropDownList";
import Button from "../Button";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const teams = ["Developer", "Front-End", "Mobile"];

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form has sent", name, position, image, team);
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Enter your information to create a employee card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Enter your name"
          input={name}
          onChanged={(input) => setName(input)}
        />
        <TextField
          required={true}
          label="Position"
          placeholder="Enter your position"
          input={position}
          onChanged={(input) => setPosition(input)}
        />
        <TextField
          label="Image"
          placeholder="Enter the image"
          input={image}
          onChanged={(input) => setImage(input)}
        />
        <DropDownList
          required={true}
          label="team"
          itens={teams}
          input={team}
          onChanged={(input) => setTeam(input)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};
export default Form;
