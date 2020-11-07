import React from "react";
import { Redirect } from "react-router-dom";//Підключили бібліотеку для виконання redirect
import "./AddContact.css";

class AddContact extends React.Component {
  //Створили пустий стейт куди буде записуватись новий юзер
  state = {
    name: "",
    role: "",
    avatar: "",
    created: "",
    status: "",
    email: "",
    gender: "",
    isRedirect: false,//Стоврили маркер для редіректа
    isDisable:true,
  };
// Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі name, state
  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  // Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі role, state
  getRole = (event) => {
    this.setState({
      role: event.target.value,
    });
  };
  // Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі avatar, state
  getAvatar = (event) => {
    this.setState({
      avatar: event.target.value,
    });
  };
  // Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі status, state
  getStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  // Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі email, state
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  // Даний метод приймає подію(те що введено в input де вказаний даний метод) і зберігає введене значення в ключі gender, state
  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  //Метод для відправки даних створеного юзера в батьківський state
  onSendData = (event) => {
    event.preventDefault();//Відмовляємося від стандатної поведінки елемента, тобто form нікуди не буде намагатися відправити дані при натискані на кнопку
    const { name, role, avatar, status, email, gender } = this.state;//Провели деструктеризацію
    this.props.onCreate(name, role, avatar, status, email, gender);//З props відловили метод onCreate і передали в нього всі дані
    this.setState({//Після того як дані збереглися змінюємо значення ключа isRedirect в state
      isRedirect: true,
    });
  };

  render() {
console.log("AddContact state==>",this.state);

//Перевірка чи заповненні всі поля в формі. Якщо так Активовує кнопку для відправки даних форми
if(this.state.name.length>0 && this.state.role.length>0 && this.state.avatar.length>0 && this.state.status.length>0 && this.state.email.length>0 && this.state.gender.length>0){
this.state.isDisable = false;
}
//Перевірка ключа isRedirect. Якщо він true виконується редірект(перенаплавлення) на головну сторінку, тобто "/"
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.onSendData}>{/*На подію onSubmit(клікання по кнопці в кінці форми) ми викликаємо метод onSendData */}
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.getName}//Повісили метод getName на подію onChange
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    onChange={this.getRole}//Повісили метод getRole на подію onChange
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    className="form-control"
                    placeholder="Avatar"
                    onChange={this.getAvatar}//Повісили метод getAvatar на подію onChange
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Status"
                    onChange={this.getStatus}//Повісили метод getStatus на подію onChange
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.getEmail}//Повісили метод getEmail на подію onChange
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gender"
                    onChange={this.getGender}//Повісили метод getGender на подію onChange
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <button disabled={this.state.isDisable} type="submit" className="btn btn-default">
                    Add contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;