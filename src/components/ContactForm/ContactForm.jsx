import React, {Component} from "react";
import { FormBox, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {

state = {
    contacts: [],
    name: '',
    number: ''
}

handleChange = e => {

  const {name, value} = e.currentTarget;
  this.setState({ [name] : value});
}

handleSubmit = e => {
  e.preventDefault();
 
  this.props.onSubmit({
     name: this.state.name,
     number: this.state.number

 });
 };

render(){
    return(
      <FormBox>

    <form onSubmit={this.handleSubmit}>

    <label>Name
    <br />

     <input
     type="text"
     name="name"
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
     onChange={this.handleChange}
     value={this.state.name}
     onBlur={this.validator}
     /></label>
     <br />
    <label>Number
    <br /> 
     <input
     type="tel"
     name="number"
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
     onChange={this.handleChange}
     value={this.state.number}
     /></label>
     <br />

     <FormBtn type='submit' 
     >Add contact</FormBtn> 

    </form>
    </FormBox>
     )};
}

export default ContactForm;