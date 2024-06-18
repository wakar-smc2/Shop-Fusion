import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-body-tertiary">
      <footer className="page-footer font-small blue pt-4" >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase">Shop Fussion</h5>
              
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-5 mb-md-0 mb-3">
              <ul className="list-unstyled ">
                <li>
                  <Link className="text-decoration-none  text-black" to='/'>Home</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-black" to='products'>Products</Link>
                </li>
               
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
