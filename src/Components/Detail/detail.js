import React, { Component } from "react";
import detail from "./detail.css";

class Detail extends Component{

    state={
        name:this.props.detailList.name,
        role:this.props.detailList.role,
        avatar:this.props.detailList.avatar,
        created:this.props.detailList.created,
        status:this.props.detailList.status,
        email:this.props.detailList.email,
        gender:this.props.detailList.gender,
    }

    render(){
        console.log("state detail",this.state);
        const { avatar, role, name, email, created, gender, status } = this.state;

        /*Тут формується аватарка(картинка) в залежності від параметрів які в неї приходить gender(men or women) і номер картинки(avatar) */
        const URL =  `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
return(
    <div className="container">
        <div className="row">
         
        <div class="h4 text-center">Contact Information</div>
                <div class="row pv-lg">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <form class="form-horizontal ng-pristine ng-valid">
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact1">Name</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact1" type="text" placeholder="" value={name}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact2">Email</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact2" type="email" value={email}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact3">Role</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact3" type="text" value={role}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact4">Created</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact4" type="text" value={created}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact5">Gender</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact5" type="text" value={gender}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact6">Status</label>
                                <div class="col-sm-10">
                                    <textarea class="form-control" id="inputContact6" row="4">{status}</textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact7">Photo</label>
                                <div class="col-sm-10">
                                <img src={URL} alt=""/>
                                </div>
                            </div>
                           
                            
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

  
)



    }
}

export default Detail;