import React from 'react';

function NavMessage() {
  console.log('NavMessage component rendered');
  return (
    <li className="nav-item dropdown">
      <a className="nav-Link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg=success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          you have 3 messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
          <li className="message-item">
            <a href="#">
              <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"/>
              <div>
                <h4>Maria Hudson</h4>
                <p>
                  velit asperionn et ducias solute reputations labore officia est ut...
                </p>
                <p>4 hrs, ago</p>
              </div>
            </a>
          </li>
        </li>
        <li>
          <hr className="dropdown-divider"/>
          <li className="message-item">
            <a href="#">
              <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"/>
              <div>
                <h4>Anna Nelson</h4>
                <p>
                  velit asperionn et ducias solute reputations labore officia est ut...
                </p>
                <p>6 hrs, ago</p>
              </div>
            </a>
          </li>
        </li>
        <li>
          <hr className="dropdown-divider"/>
          <li className="message-item">
            <a href="#">
              <img
              src="assets/img/messages-3.jpg"
              alt=""
              className="rounded-circle"/>
              <div>
                <h4>Anna frank</h4>
                <p>
                  velit asperionn et ducias solute reputations labore officia est ut...
                </p>
                <p>8 hrs, ago</p>
              </div>
            </a>
          </li>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
