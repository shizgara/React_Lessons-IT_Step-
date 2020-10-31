import React, {Fragment,Component} from "react";//Підключили React(JSX),модуль Fragment(для підключення компонентів) і Component
import ReactDOM from "react-dom";//Підключили ReactDom
import { v4 as uuidv4 } from 'uuid';//Підключили бібліотеку яка генерує випадкові ID
import "./index.css"//Підключили стилі
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";//Піключення Router,Route, Switch

//Include components
import ContactList from "./Components/ContactList/contactList";
import Header from "./Components/Header/header";
import NotFound from "./Components/NotFound/notFound";
import Detail from "./Components/Detail/detail";
import AddContact from "./Components/addContact/AddContact";
import EditContact from "./Components/EditContact/editContact";


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
detailList:"",
currentContact:"",
};
//Метод для зміни статуса користувача в контактлісті по кліку. id - id юзера по якому нажали.
onStatusChange = (id) => {
//Присвоїли змінній порядковий номер(індекс) контакту в масиві. Метод findIndex() повертає індекс першого елемента у масиві, який задовольняє надану перевірочну функцію
	const index = this.state.List.findIndex((elem) => elem.id === id);
	console.log(index)
    const tmpList = this.state.List.slice();//slice() робить копію масива List і записує його в новий масив tmpList
    switch (tmpList[index].status) {//Case-ом дивимось що в змінній tmpList[index].status і відповідно від отриманих даних встановлюємо цій змінній інше значення
      case "Active":
        tmpList[index].status = "Inactive";
        break;
      case "Inactive":
        tmpList[index].status = "Pending";
        break;
      case "Pending":
        tmpList[index].status = "Banned";
        break;
      case "Banned":
        tmpList[index].status = "Active";
    }

    this.setState({//setState - метод який міняє state
      List: tmpList,
    });
  };

  //Метод видалення елемента контакту
  onDelete=(id)=>{
	const index = this.state.List.findIndex((elem) => elem.id === id);
	const tmpList = this.state.List.slice();
	tmpList.splice(index,1)
	console.log("Deleted==>>",this.state.List[index].name);
	this.setState({
		List: tmpList,
	  });
  }

  OnDetail=(id)=>{
	const index = this.state.List.findIndex((elem) => elem.id === id);
	console.log("index_detail===",index);
	const tempDetail = this.state.List[index];
	console.log("tempDetail",tempDetail);
	this.setState({
		detailList:tempDetail
	});
	console.log("detailList",this.state.detailList);
  }

//Даним метод прийме всі дані з метода onSendData(AddContact). Але тут ми передаємо його в route AddContact
  onCreate = (name, role, avatar, status, email, gender) => {
//Створюємо зміну(обєкт) в яку записуємо всі отримані вище дані
let newDate =new Date().getFullYear() + "/" +  new Date().getMonth() + "/" + new Date().getDate();
    let newContact = {
      id: uuidv4(),
      name: name,
      role: role,
      avatar: avatar,
      created: newDate,
      status: status,
      email: email,
      gender: gender,
	};
	console.log("newContact==>>", newContact)

    const newList = [...this.state.List, newContact];//Спред оператором розгорнули state і записали його в новий масив, а також добавили новий контакт
    this.setState(() => {
      return {
        List: newList,
      };
    });
  };

  //Визначаємо по id який контакт редагуємо. Записуємо його в новий елемент state і передаємо дані на роутер EditContact
  onEdit=(id)=>{
	const index = this.state.List.findIndex((elem) => elem.id === id);
	const editContact = this.state.List[index];
	this.setState({currentContact:editContact});
  }


onEditCurrentContact=(name, role, avatar, status, email, gender, created, id)=>{
	let newContact = {
		id: id,
		name: name,
		role: role,
		avatar: avatar,
		created: created,
		status: status,
		email: email,
		gender: gender,
	  };
	  const index = this.state.List.findIndex((elem) => elem.id === id);
	 const partOne = this.state.List.slice(0,index);//Скопіювали всі елементи масива від індекса 0 до індекса "index"
	 const partTwo = this.state.List.slice(index+1);//Скопіювали всі елементи масива від індекса "index" до кінця кінця масива
	 const newList = [...partOne, newContact, ...partTwo];//в новий масив розгорнули масив partOne, потім редагований елемент, а потім масиви partTwo 
	this.setState({List: newList});
}
  

//В компонент ContactList передаємо створену змінну contact в яку перенесли дані з масива List
  render(){
	
    return(
		/* Підключення Router. Це фрагмент вищого порядку*/
		<Router>
        <Header />{/*Header поза switch бо він має бути на будь-якій сторінці */}
		{/* Switch компонент для для переключення між маршрутами(роутами)*/}
        <Switch>
			{/* Створили route-маршрут.path - вказує шлях маршруту.render - відмальовує компонент. exact - параметр для того щоб роутер шукав повне співпадіння шляху(посилання) в параметрі path*/}
          <Route
            path="/"
            exact
			render={() => <ContactList 
				onStatusChange={this.onStatusChange}
				 onDelete={this.onDelete}
				 OnDetail={this.OnDetail}
				   List={this.state.List}
				   onEdit={this.onEdit} 
				   />}
          />
		  <Route
		  path="/detail"
		  exact
		  render={()=>
		  <Detail 
		  detailList={this.state.detailList}
		  />} />
		   <Route
            path="/add-new-contact"
            exact
            render={() => <AddContact onCreate={this.onCreate} />}
          />
		  <Route
		  path="/edit"
		  exact
		  render={()=><EditContact currentContact={this.state.currentContact} onEditCurrentContact={this.onEditCurrentContact}  />}
		  />
          <Route component={NotFound} />{/*роут для сторінок в яких немає path, тобто заздалегідь прописаних роутів. В нього exact не вказується, тому що цей роут працює "як else", тобто той до якого жодного псівпадіння в шляху не знайшлось */}
        </Switch>
      </Router>
    )
  }

}

ReactDOM.render(<APP/>, document.getElementById("root"));//ReactDom відрендери(намалюй) компонент APP і помісти його в середину тега з id=root