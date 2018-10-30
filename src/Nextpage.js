import React from "react";
import './index.css';
import {Link} from 'react-router-dom'

class Nextpage extends React.Component
{
    // constructor(props) {
    //     super(props);
    //   }
    render() {
        return (
            
            <div className="container emp-profile">
            {/* <h1>Friends Of User</h1> */}
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                   <h1>Friends Suggestion</h1>
                                   
                                   <div class="container">
	<div className="row">
    	 <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rowdiv">
                        <div className="well profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <figure>
                                     <img src="http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png" alt="" class="img-circle" style={{width:"75px"}} id="user-img"/>
                                </figure>
                                <h5 ><strong id="user-name">   {this.props.org}</strong></h5>
                                <p  id="user-frid">FBT000000213 </p>
                                <p  id="user-email">arunkumarperumal8791@gmail.com </p>                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                <p id="strong2"><strong>Job role</strong></p>
                                <p  id="user-role">Software Engineer</p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                    <div className=" col-lg-6 left" id="last">
                                      <Link to="/next-page2">   <button class="btn btn-info btn-block" id="span"><span class="fa fa-user"></span> View </button></Link>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
 </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>User Name</p>
                           
                            <p>Address</p>
                           
                        </div>
                    </div>
                   
                </div>
                <hr></hr>
                <div>
                    <h3>Recomondation</h3>
                    <div class="container">
	<div className="row">
    	 <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rowdiv">
                        <div className="well profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <figure>
                                     <img src="http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png" alt="" class="img-circle" style={{width:"75px"}} id="user-img"/>
                                </figure>
                                <h5 ><strong id="user-name">Arun Kumar Perumal</strong></h5>
                                <p  id="user-frid">FBT000000213 </p>
                                <p  id="user-email">arunkumarperumal8791@gmail.com </p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                <p id="strong2"><strong>Job role</strong></p>
                                <p  id="user-role">Software Engineer</p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                   
                                    <div className=" col-lg-6 left" id="last">
                                          <Link to="/next-page2">  <button class="btn btn-info btn-block" id="span"><span class="fa fa-user"></span> View </button></Link>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
                </div>
            </form>           
        </div>
        );
      }
}
 export default Nextpage;
