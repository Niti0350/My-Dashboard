import React from 'react';
import './sideBar.css';
import navList from '../data/navItems'; // Make sure the path is correct
import NavItem from './NavItem';

function SideBar() {
  console.log('navList:', navList);
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard Link */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Documents Dropdown */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#components-nav"
            data-bs-toggle="collapse"
            data-bs-target="#components-nav"
            aria-expanded="false"
            aria-controls="components-nav"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Forms Dropdown */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#forms-nav"
            data-bs-toggle="collapse"
            data-bs-target="#forms-nav"
            aria-expanded="false"
            aria-controls="forms-nav"
          >
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Release Form</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Tables Dropdown */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#tables-nav"
            data-bs-toggle="collapse"
            data-bs-target="#tables-nav"
            aria-expanded="false"
            aria-controls="tables-nav"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Charts Dropdown */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#charts-nav"
            data-bs-toggle="collapse"
            data-bs-target="#charts-nav"
            aria-expanded="false"
            aria-controls="charts-nav"
          >
            <i className="bi bi-bar-chart"></i>
            <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Charts.js</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>ApexCharts</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>ECharts</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Icons Dropdown */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#icons-nav"
            data-bs-toggle="collapse"
            data-bs-target="#icons-nav"
            aria-expanded="false"
            aria-controls="icons-nav"
          >
            <i className="bi bi-gem"></i>
            <span>Icons</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Remix Icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-heading">Pages</li>
        {navList.map(nav =>(
          <NavItem key={nav._id}nav={nav} />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
