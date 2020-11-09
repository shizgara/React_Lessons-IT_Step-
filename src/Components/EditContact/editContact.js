import React from "react";
import { Redirect } from "react-router-dom";//Підключили бібліотеку для виконання redirect
import editContact from "./editContact.css"


class EditContact extends React.Component {
  //Створили стейт куди будуть записуватись дані юзера який редагується
  state = {
      id:this.props.currentContact.id,
    name: this.props.currentContact.name,
    role: this.props.currentContact.role,
    avatar: this.props.currentContact.avatar,
    created: this.props.currentContact.created,
    status: this.props.currentContact.status,
    email: this.props.currentContact.email,
    gender: this.props.currentContact.gender,
    isRedirect: false,//Стоврили маркер для редіректа
    isDisable:true,//Маркер для активації кнопки Редагувати
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

  //Метод для відправки даних відредагованого юзера в батьківський state
  onSendData = (event) => {
    event.preventDefault();//Відмовляємося від стандатної поведінки елемента, тобто form нікуди не буде намагатися відправити дані при натискані на кнопку
    const { name, role, avatar, status, email, gender, id, created } = this.state;//Провели деструктеризацію
    this.props.onEditCurrentContact(name, role, avatar, status, email, gender, created, id);//З props відловили метод onEditCurrentContact і передали в нього всі дані
    this.setState({//Після того як дані збереглися змінюємо значення ключа isRedirect в state
      isRedirect: true,
    });
  };

  render() {

    const { avatar, role, name, email, created, gender,status } = this.state;

/*Тут формується аватарка(картинка) в залежності від параметрів які в неї приходить gender(men or women) і номер картинки(avatar) */
const URL =  `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

//Перевірка ключа isRedirect. Якщо він true виконується редірект(перенаплавлення) на головну сторінку, тобто "/"
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <form onSubmit={this.onSendData}>{/*На подію onSubmit(клікання по кнопці в кінці форми) ми викликаємо метод onSendData */}
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    value={name}
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
                    value={role}
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
                    value={avatar}
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
                    value={status}
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
                    value={email}
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
                    value={gender}
                    onChange={this.getGender}//Повісили метод getGender на подію onChange
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <button type="submit" className="btn btn-default">
                    Edit contact
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5" className="div_avatar" >
          <img src={URL} alt="" className="avatar"/>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;