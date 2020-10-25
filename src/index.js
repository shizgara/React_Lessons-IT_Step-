import React, {Fragment,Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

//
import Foorter from "./Footer/footer";
import Header from "./Header/header";
import UserList from "./UserList/userList";

class APP extends Component{
  render(){
  return(
<Fragment>
  <div className="app"><h2>This is the app</h2>

<Header/>
<UserList/>
<Foorter/>

</div>
</Fragment>

)
}
}

ReactDOM.render(<APP/>,document.getElementById("root"));