import * as React from 'react';
import './Signup.css';
import { CardMedia, Grid } from '@mui/material';


export default function SignUp() {
    return (
        <div>
            <div className='card card-body row mr6'>
                <div className=' col-8 offset-2 ' >
                    <h5 className='formHeader'>CG Protect Form</h5>
                    <form>
                        <div className="form row" id='formLabel'>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4 " className='labeform'>First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4" className='labeform'>Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4" className='labeform'>Phone Number</label>
                                <input type="password" className="form-control" id="phoneNumber" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4" className='labeform'>Email Address</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="dob" className='labeform'>Date of birth</label>
                                <input type="date" className='form-control' id="dob" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputText4" className='labeform'>Pincode</label>
                                <input type="text" className="form-control" id="pincode" placeholder="pincode" />
                            </div>

                        </div>
                        <div className='form row'>
                            <label htmlFor="inputText4" className='labeform'>Gender</label>
                            &nbsp; &nbsp;
                            <div class="form-check col-3">
                                <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check col-3 ">
                                <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check col-3 ">
                                <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Transgender
                                </label>
                            </div>
                            <div className='form row'>
                            <label htmlFor="inputText4" className='labeform'>Do You Smoke?</label>
                            &nbsp; &nbsp;
                            <div class="form-check col-6 ">
                                <button className="btn button1" type="submit">Yes</button>
                                <button className="btn button2" type="submit">No</button>
                            </div>
                            </div>
                            <div className='form row'>
                            <label htmlFor="inputText4" className='labeform'>Do You Consume Alcohol?</label>
                            &nbsp; &nbsp;
                            <div class="form-check col-6 ">
                                <button className="btn button1" type="submit">Yes</button>
                                <button className="btn button2" type="submit">No</button>
                            </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                                <label htmlFor="inputAddress" className='labeform'>Address</label>&nbsp;<br></br>
                                <textarea id="txtid" className="txtname" rows="4" ></textarea>
                            </div>
                            <div>

                            
                            <div className='rows'>
                                <div className='rows'>
                                <Grid>
                                    <card >
                                        <CardMedia >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" color='#1e2f4a' viewBox="0 0 24 24"><path fill="primary" d="M6 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/></svg>
                                        </CardMedia>
                                    </card>
                                </Grid>
                                </div>
                                &nbsp;
                                <div className='rows'>
                                <Grid>
                                    <card>
                                        <CardMedia >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" color='#1e2f4a' viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7h3a2 2 0 0 1 2 2v5.5H9.5V22h-4v-7.5H4V9a2 2 0 0 1 2-2m10.5-5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M15 22v-6h-3l2.59-7.59C14.84 7.59 15.6 7 16.5 7c.9 0 1.66.59 1.91 1.41L21 16h-3v6h-3Z"/></svg>
                                        </CardMedia>
                                    </card>
                                </Grid>
                                </div>&nbsp;
                                
                                <div className='rows'>
                                <Grid>
                                    <card>
                                        <CardMedia >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" color='#1e2f4a' viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l2.59-7.59C10.34 7.59 11.1 7 12 7c.9 0 1.66.59 1.91 1.41L16.5 16h-3v6h-3Z"/></svg>
                                        </CardMedia>
                                    </card>
                                </Grid>
                                </div> &nbsp;
                                
                                <div className='rows'>
                                <Grid>
                                    <card>
                                        <CardMedia >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" color='#1e2f4a' viewBox="0 0 24 24"><circle cx="12" cy="6" r="2" fill="currentColor"/><path fill="currentColor" d="M14 9h-4a1 1 0 0 0-.8.4l-3 4l1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6l1.6-1.2l-3-4A1 1 0 0 0 14 9z"/></svg>
                                        </CardMedia>
                                    </card>
                                </Grid>
                                </div>&nbsp;
                                <div className='rows'>
                                <Grid>
                                    <card >
                                        <CardMedia >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" color='#1e2f4a' viewBox="0 0 24 24"><path fill="primary" d="M6 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/></svg>
                                        </CardMedia>
                                    </card>
                                </Grid>
                                </div>
                            </div>
                            </div>

                            
                    </form>
                </div>
            </div>
        </div>

    )
}