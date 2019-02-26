import React from 'react';

export default function mfr_header() {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/#">目录</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="/#">Sign out</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

