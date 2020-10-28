import React from "react";// Підключили JSX
import ContactItem from "./ContactItem/contactItem"

//props - один з механізмів React, який приймає властивості. В цей компонет дані приходять в якості props-а
/*Тут ми отримуємо відразу масив List за допомогою деструктеризації(отрмали масив в фігурних дужках {})  
У фігурних дужках ми віловлюємо ті дані які передали в цей компонент з батьківського компонента index*/
const ContactList =({List, onStatusChange,onDelete})=>{
/*Завдяки методу map() ми з масива contact передали дані в item зробивши цю змінну обєктом, тобто наче циклом перебрали масив 
і сворили обєкти. Передавши дані contact в новостворені кючі item*/
const item = List.map(item=>{
    return(<ContactItem 
        key={item.id}
        name={item.name}
        role={item.role}
        avatar={item.avatar}
        created={item.created}
        status={item.status}
        email={item.email}
        gender={item.gender}
        onStatusChange={()=>onStatusChange(item.id)}//Отримали метод onStatusChange і передали його далі анонімною функцією,а в середині функції передаємо item.id. Це для того щоб визначати id того юзера по якому ми клікнули
        onDelete={()=>onDelete(item.id)}

        />)
    
})

    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>User</span>
                      </th>
                      <th>
                        <span>Created</span>
                      </th>
                      <th className="text-center">
                        <span>Status</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.length !== 0 ? item : <h2>Contact list is empty.</h2>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactList;

