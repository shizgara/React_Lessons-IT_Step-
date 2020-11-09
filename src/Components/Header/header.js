import React from "react";
import { Link } from "react-router-dom";// Підключаємо бібліотеку для лінків(роутінг в реакті), тобто посилань, типу <a href=""...>
import "./header.css";

class Header extends React.Component {

  findText=(e)=>{
// alert(e.target.value);
// console.log("props header",this.props)
this.props.onSearch(e.target.value);
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {/* Link в мові jsx замість тега <a>. to - замість артибута href*/}
                <Link className="navbar-brand" to="/">
                  Brand
                </Link>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-new-contact">Add new contact</Link>
                  </li>
                </ul>
                <form className="navbar-form navbar-right">
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                      onChange={this.findText}
                    />
                  </div>
                  <button type="submit" class="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;