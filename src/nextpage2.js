import React from "react";
import {Link} from 'react-router-dom';
 const nexPage2 = () => {
      return (
            <div>
                <h1 style={{color:"white"}}>Next Page 2</h1>
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
                                <h5 ><strong id="user-name">Arun Kumar Perumal</strong></h5>
                                <p  id="user-frid">FBT000000213 </p>
                                <p  id="user-email">arunkumarperumal8791@gmail.com </p>
                                {/* <p id="strong"><strong>A/C status: </strong><span class="tags" id="user-status">Active</span></p> */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                <p id="strong2"><strong>Job role</strong></p>
                                <p  id="user-role">Software Engineer</p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                    {/* <div className="col-lg-6 left" id="strong5">
                                        <h4><p id="strong3"><strong id="user-globe-rank">245 </strong></p></h4>           
                                        <p><small className="label label-success">Global Ranking</small></p>
                                         <!--<button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> Follow </button>--> 
                                    </div> */}
                                    <div className=" col-lg-6 left" id="last">
                                        {/* <h4><p id="strong4"><strong id="user-college-rank">245 </strong></p></h4>                   
                                        <p> <small className="label label-warning">College Ranking</small></p>*/}
                                         <Link to="/next-page2">   <button class="btn btn-info btn-block" id="span"><span class="fa fa-user"></span> View </button></Link>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
                                    {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}
                            {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    {/* <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                    <div className='col-md-2' >
                                   <button>Add</button></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>User Name</p>
                            {/* <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a> */}
                            <p>Address</p>
                            {/* <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/> */}
                        </div>
                    </div>
                   
                </div>
            </form>           
        </div>
            </div>
        ); 
    
 }

 export default nexPage2;
