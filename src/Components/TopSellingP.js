import * as React from 'react';
import './TopSellingP.css';
import { Grid } from '@mui/material';


export default function TopSellingP() {
  return (
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Top Selling Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <div className='float'>
          <h6 className='col-5 '>Health Protect Plus</h6>
          <div className='col-5'>
            <div className="progress mt-1">
              <div className="progress-ba bg-danger" role="progressbar" style={{ "width": "75%", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100" }}></div>
            </div>
          </div>
          <h6 className='col-2'>455 sold</h6>
        </div>
        <div className='float'>
          <h6 className='col-5 '>Health Protect Plus</h6>
          <div className='col-5'>
            <div className="progress mt-1">
              <div className="progress-ba bg-success" role="progressbar" style={{ "width": "75%", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100" }}></div>
            </div>
          </div>
          <h6 className='col-2'>412 sold</h6>
        </div>
        <div className='float'>
          <h6 className='col-5 '>Health Protect Plus</h6>
          <div className='col-5'>
            <div className="progress mt-1">
              <div className="progress-ba bg-warning" role="progressbar" style={{ "width": "75%", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100" }}></div>
            </div>
          </div>
          <h6 className='col-2'>340 sold</h6>
        </div>
      </div>

    </div>
  )
}