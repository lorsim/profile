import React from 'react';
import Wrapper from './Wrapper';
import {Redirect} from 'react-router-dom';

const Users = () =>(
    <Wrapper>
       <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file"></span>

                  <Redirect to ='/profile'/>;
                </a>
              </li>
            </ul>
          </div>
       </nav>
    </Wrapper>
)

export default Users;