import React, {Fragment,Component} from "react";//Підключили React(JSX),модуль Fragment(для підключення компонентів) і Component
import ReactDOM from "react-dom";//Підключили ReactDom
import { v4 as uuidv4 } from 'uuid';//Підключили бібліотеку яка генерую випадкові ID
import "./index.css"//Підключили стилі

//Include components
import ContactList from "./Components/ContactList/contactList"


class APP extends Component {// Створення Class компонент APP з наслідуванням React.Component

state = {
  List: [
	  {
	  id:uuidv4(),
	  name:"Mila Kunis",
	  role:"Admin",
	  avatar: "1",
	  created:"2013/08/08",
	  status:"Inactive",
	  email:"mila@kunis.com",
	  gender:"women"
  },
{
	id:uuidv4(),
	name:"George Clooney",
	role:"Member",
	avatar: "2",
	created:"2013/08/12",
	status:"Active",
	email:"marlon@brando.com",
	gender:"men"
},
{
	id:uuidv4(),
	name:"Ryan Gossling",
	role:"Registered",
	avatar: "3",
	created:"2013/03/03",
	status:"Banned",
	email:"jack@nicholson",
	gender:"men"
},
{
	id:uuidv4(),
	name:"Emma Watson",
	role:"Registered",
	avatar: "4",
	created:"2004/01/24",
	status:"Pending",
	email:"humphrey@bogart",
	gender:"women"
},
{
	id:uuidv4(),
	name:"Robert Downey Jr",
	role:"Admin",
	avatar: "5",
	created:"2013/12/31",
	status:"Active",
	email:"spencer@tracy",
	gender:"men"
},
{
	id:uuidv4(),
	name:"Mila Kunis",
	role:"Admin",
	avatar: "6",
	created:"2013/08/08",
	status:"Inactive",
	email:"mila@kunis.com",
	gender:"women"
},
{
	id:uuidv4(),
	name:"George Clooney",
	role:"Member",
	avatar: "8",
	created:"2013/08/12",
	status:"Active",
	email:"marlon@brando.com",
	gender:"men"
},
{
	id:uuidv4(),
	name:"Ryan Gossling",
	role:"Registered",
	avatar: "9",
	created:"2013/03/03",
	status:"Banned",
	email:"jack@nicholson",
	gender:"men"
},
{
	id:uuidv4(),
	name:"Emma Watson",
	role:"Registered",
	avatar: "9",
	created:"2004/01/24",
	status:"Pending",
	email:"humphrey@bogart.com",
	gender:"women"
},
{
	id:uuidv4(),
	name:"Robert Downey Jr",
	role:"Admin",
	avatar: "10",
	created:"2013/12/31",
	status:"Active",
	email:"spencer@tracy",
	gender:"men"
},
],
};

//В компонент ContactList передаємо створену змінну contact в яку перенесли дані з масива List
  render(){
	  console.log("Log ===>>>",this.state.List)
    return(
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="main-bPox clearfix">
					
		<ContactList contact={this.state.List} /> 
	
					</div>
				</div>
			</div>
		</div>
    )
  }

}

ReactDOM.render(<APP/>, document.getElementById("root"));//ReactDom відрендери(намалюй) компонент APP і помісти його в середину тега з id=root