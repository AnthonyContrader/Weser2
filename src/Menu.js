import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/Tutor.png" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Patrizia Genova</p>
          <a href="#"><i className="fa fa-circle text-green" /> Online</a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">DASHBOARD</li>
        <li className="active treeview menu-open">
          <a href="#">
            <i className="fa fa-user" /> <span>Account</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="index.html"><i className="fa fa-file" />Information</a></li>
          </ul>
        </li>
        <li className="active treeview menu-open">
          <a href="#">
            <i className="fa fa-edit" /> <span>Management</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="index.html"><i className="fa fa-phone" /> Emergency Numbers</a></li>
            <li className="active"><a href="index2.html"><i className="fa fa-credit-card" /> Payments</a></li>
            <li className="active"><a href="index3.html"><i className="fa fa-plus-square" /> Cures</a></li>
          </ul>
        </li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-green" /> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-white" /> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-red" /> <span>Information</span></a></li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
