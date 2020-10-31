import React from "react";
import contactItem from "./contactItem.css";
import {Link} from "react-router-dom";

//В клас based компонент також приходять props
class ContactItem extends React.Component{

state={
    name:this.props.name,
    role:this.props.role,
    avatar:this.props.avatar,
    created:this.props.created,
    status:this.props.status,
    email:this.props.email,
    gender:this.props.gender,
}

render(){
  
    const { avatar, role, name, email, created, gender } = this.state;
    const { status } = this.props;// Сюди status прийшов тільки в props-ах, тому робимо деструктеризацію саме з props а не зі state

    const { onStatusChange } = this.props;// Відловлюємо функцію з props
    const {onDelete} = this.props;
    const {OnDetail} = this.props;

/*Тут формується аватарка(картинка) в залежності від параметрів які в неї приходить gender(men or women) і номер картинки(avatar) */
const URL =  `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

/*Кольорове оформлення поля Status в залежності від статусу(active,inactive,banned etc).Цю річ робимо замінюючи стилі */
let statusStyle = "label label-default";
if(status ==="Active"){
    statusStyle = "label label-success";
}else if(status === "Inactive"){
    statusStyle = "label label-default";
}else if(status === "Banned"){
    statusStyle = "label label-danger";
}else if(status === "Pending"){
    statusStyle = "label label-warning";
}

    return(
                           
                              <tr>
                                  <td>
                                      <img src={URL} alt=""/>
                                      <a href="#" className="user-link">{name}</a>
                                      <span className="user-subhead">{role}</span>
                                  </td>
                                  <td>
                                  {created}
                                  </td>
                                  <td className="text-center">
                                      {/*Повісили подію onClick на кнопку(span) статус. При натисканні клікі буде спрацьовувати метод onStatusChange */}
                                      <span className={statusStyle} onClick={onStatusChange}>{status}</span>
                                  </td>
                                  <td>
                                      <a href="#">{email}</a>
                                  </td>
                                  <td>
                                      <Link to="/detail" className="table-link" onClick={OnDetail}>
                                          <span className="fa-stack">
                                              <i className="fa fa-square fa-stack-2x"></i>
                                              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                          </span>
                                      </Link>
                                      <Link to="/edit" className="table-link" onClick={this.props.onEdit}>
                                          <span className="fa-stack">
                                              <i className="fa fa-square fa-stack-2x"></i>
                                              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                          </span>
                                      </Link>
                                      <a href="#" className="table-link danger">
                                          <span className="fa-stack">
                                              <i className="fa fa-square fa-stack-2x"></i>
                                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={onDelete}></i>
                                          </span>
                                      </a>
                                  </td>
                              </tr>
      );
}
}

export default ContactItem;