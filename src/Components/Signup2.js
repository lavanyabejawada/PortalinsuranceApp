import * as React from 'react';
import './Signup.css';

export default function SignUp2() {
    return (
        <div>
            <div className='card card-body row mr6'>
                <div className=' col-8 offset-2 ' >
                    <h5 className='formHeader'>CG Protect Form</h5>
                    <form>
                        <div className="form row" id='formLabel'>
                        <div className='form-group col-md-12'>
                                <label htmlFor="dob" className='labeform'>Annual Income</label>
                                <input type="date" className='form-control' id="dob" />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4 " className='labeform'>Government Rebate</label>
                                <input type="text" className="form-control" id="firstName"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4 " className='labeform'>Tax Rebate</label>
                                <input type="text" className="form-control" id="firstName"/>
                            </div>
                    </form>
                </div>
            </div>
        </div>

    )
}