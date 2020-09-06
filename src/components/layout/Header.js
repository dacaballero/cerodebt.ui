import React from 'react';

class Header extends React.Component {
  
  render() {
    return (
        <div className="nk-header nk-header-fixed nk-header-fluid is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ml-n1">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="html/index.html" className="logo-link">
                            <img className="logo-light logo-img" src="./images/logo.png" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png"alt="logo-dark" />
                        </a>
                    </div>
                    <div className="nk-header-news d-none d-xl-block">
                        <div className="nk-news-list">
                            <a className="nk-news-item" href="#">
                                <div className="nk-news-icon">
                                    <em className="icon ni ni-card-view"></em>
                                </div>
                                <div className="nk-news-text">
                                    <p>Do you know the latest update of 2019? <span> A overview of our is now available on YouTube</span></p>
                                    <em className="icon ni ni-external"></em>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown notification-dropdown">
                                <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                    <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                    <div className="dropdown-head">
                                        <span className="sub-title nk-dropdown-title">Notifications</span>
                                        <a href="#">Mark All as Read</a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="nk-notification">
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-foot center">
                                        <a href="#">View All</a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown user-dropdown">
                                <a href="#" className="dropdown-toggle mr-n1" data-toggle="dropdown">
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt"></em>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                    <div className="dropdown-inner user-card-wrap bg-lighter">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                                <span>AB</span>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">Abu Bin Ishtiyak</span>
                                                <span className="sub-text">info@softnio.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                            <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                            <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
