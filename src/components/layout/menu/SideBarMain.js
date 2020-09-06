import React from 'react';

class SideBarMain extends React.Component {
  
  render() {
    return (
        <div className="nk-sidebar-main is-light">
                <div className="nk-sidebar-inner" data-simplebar>
                    <div className="nk-menu-content menu-active" data-content="navDashboards">
                        <h5 className="title">Dashboards</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item">
                                <a href="html/index.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span>
                                    <span className="nk-menu-text">Default Dashboard</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/index-ecommerce.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-bag-fill"></em></span>
                                    <span className="nk-menu-text">Ecommerce Dashboard</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/index-sales.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-bag-fill"></em></span>
                                    <span className="nk-menu-text">Sales Dashboard</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/index-analytics.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-growth-fill"></em></span>
                                    <span className="nk-menu-text">Analytics Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nk-menu-content" data-content="navApps">
                        <h5 className="title">Apps</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item">
                                <a href="html/apps-inbox.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-inbox-fill"></em></span>
                                    <span className="nk-menu-text">Mailbox</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/apps-messages.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-chat-fill"></em></span>
                                    <span className="nk-menu-text">Messages</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/apps-file-manager.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-folder-fill"></em></span>
                                    <span className="nk-menu-text">File Manager</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/apps-chats.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-chat-circle-fill"></em></span>
                                    <span className="nk-menu-text">Chats</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nk-menu-content" data-content="navPages">
                        <h5 className="title">Pages</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span>
                                    <span className="nk-menu-text">User Manage</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/user-list-regular.html" className="nk-menu-link"><span className="nk-menu-text">User List - Regular</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/user-list-compact.html" className="nk-menu-link"><span className="nk-menu-text">User List - Compact</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/user-details-regular.html" className="nk-menu-link"><span className="nk-menu-text">User Details - Regular</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/user-profile-regular.html" className="nk-menu-link"><span className="nk-menu-text">User Profile - Regular</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-cart-fill"></em></span>
                                    <span className="nk-menu-text">Ecommerce Pages</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/products.html" className="nk-menu-link"><span className="nk-menu-text">Product List</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/orders-regular.html" className="nk-menu-link"><span className="nk-menu-text">Order List - Regular</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/orders-sales.html" className="nk-menu-link"><span className="nk-menu-text">Order List - Sales</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/invoice-list.html" className="nk-menu-link"><span className="nk-menu-text">Invoices List</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/invoice-details.html" className="nk-menu-link"><span className="nk-menu-text">Invoice Details</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/_blank.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span>
                                    <span className="nk-menu-text">Blank / Startup</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/faqs.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span>
                                    <span className="nk-menu-text">Faqs / Help</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/terms-policy.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span>
                                    <span className="nk-menu-text">Terms / Policy</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/regular-v1.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span>
                                    <span className="nk-menu-text">Regular Page - v1</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/regular-v2.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-file-fill"></em></span>
                                    <span className="nk-menu-text">Regular Page - v2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nk-menu-content" data-content="navMisc">
                        <h5 className="title">Misc Pages</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item">
                                <a href="html/pages/auths/auth-login.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login / Signin</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/auths/auth-register.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register / Signup</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/auths/auth-reset.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot Password</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/auths/auth-success.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success / Confirm</span></a>
                            </li>
                            <li className="nk-menu-item no-icon">
                                <a href="#" className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">Classic Version - v2</span></a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-login-v2.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login / Signin</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-register-v2.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register / Signup</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-reset-v2.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot Password</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-success-v2.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success / Confirm</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item no-icon">
                                <a href="#" className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">No Slider Version - v3</span></a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-login-v3.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login / Signin</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-register-v3.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register / Signup</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-reset-v3.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot Password</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/pages/auths/auth-success-v3.html" className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success / Confirm</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="nk-menu-content" data-content="navError">
                        <h5 className="title">Error Pages</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item">
                                <a href="html/pages/errors/404-classic.html" target="_blank" className="nk-menu-link"><span className="nk-menu-text">404 Classic</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/errors/504-classic.html" target="_blank" className="nk-menu-link"><span className="nk-menu-text">504 Classic</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/errors/404-s1.html" target="_blank" className="nk-menu-link"><span className="nk-menu-text">404 Modern</span></a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/pages/errors/504-s1.html" target="_blank" className="nk-menu-link"><span className="nk-menu-text">504 Modern</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="nk-menu-content" data-content="navComponents">
                        <h5 className="title">Components</h5>
                        <ul className="nk-menu">
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                    <span className="nk-menu-text">Ui Elements</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/components.html" className="nk-menu-link"><span className="nk-menu-text">Component List</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/alerts.html" className="nk-menu-link"><span className="nk-menu-text">Alerts</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/accordions.html" className="nk-menu-link"><span className="nk-menu-text">Accordions</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/badges.html" className="nk-menu-link"><span className="nk-menu-text">Badges</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/buttons.html" className="nk-menu-link"><span className="nk-menu-text">Buttons</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/buttons-group.html" className="nk-menu-link"><span className="nk-menu-text">Button Group</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/breadcrumb.html" className="nk-menu-link"><span className="nk-menu-text">Breadcrumb</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/cards.html" className="nk-menu-link"><span className="nk-menu-text">Cards</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/carousel.html" className="nk-menu-link"><span className="nk-menu-text">Carousel</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/modals.html" className="nk-menu-link"><span className="nk-menu-text">Modals</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/pagination.html" className="nk-menu-link"><span className="nk-menu-text">Pagination</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/popover.html" className="nk-menu-link"><span className="nk-menu-text">Popovers</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/progress.html" className="nk-menu-link"><span className="nk-menu-text">Progress</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/spinner.html" className="nk-menu-link"><span className="nk-menu-text">Spinner</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/tabs.html" className="nk-menu-link"><span className="nk-menu-text">Tabs</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/toast.html" className="nk-menu-link"><span className="nk-menu-text">Toasts</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/tooltip.html" className="nk-menu-link"><span className="nk-menu-text">Tooltip</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/elements/typography.html" className="nk-menu-link"><span className="nk-menu-text">Typography</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="#" className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">Utilities</span></a>
                                        <ul className="nk-menu-sub">
                                            <li className="nk-menu-item"><a href="html/components/elements/util-border.html" className="nk-menu-link"><span className="nk-menu-text">Border</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-colors.html" className="nk-menu-link"><span className="nk-menu-text">Colors</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-display.html" className="nk-menu-link"><span className="nk-menu-text">Display</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-embeded.html" className="nk-menu-link"><span className="nk-menu-text">Embeded</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-flex.html" className="nk-menu-link"><span className="nk-menu-text">Flex</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-text.html" className="nk-menu-link"><span className="nk-menu-text">Text</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-sizing.html" className="nk-menu-link"><span className="nk-menu-text">Sizing</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-spacing.html" className="nk-menu-link"><span className="nk-menu-text">Spacing</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/elements/util-others.html" className="nk-menu-link"><span className="nk-menu-text">Others</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-dot-box-fill"></em></span>
                                    <span className="nk-menu-text">Crafted Icons</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/components/misc/svg-icons.html" className="nk-menu-link">
                                            <span className="nk-menu-text">SVG Icon - Exclusive</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/misc/nioicon.html" className="nk-menu-link">
                                            <span className="nk-menu-text">Nioicon - HandCrafted</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-table-view-fill"></em></span>
                                    <span className="nk-menu-text">Tables</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/components/tables/table-basic.html" className="nk-menu-link"><span className="nk-menu-text">Basic Tables</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/tables/table-special.html" className="nk-menu-link"><span className="nk-menu-text">Special Tables</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/tables/table-datatable.html" className="nk-menu-link"><span className="nk-menu-text">DataTables</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-todo-fill"></em></span>
                                    <span className="nk-menu-text">Forms</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/components/forms/form-elements.html" className="nk-menu-link"><span className="nk-menu-text">Form Elements</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/forms/form-layouts.html" className="nk-menu-link"><span className="nk-menu-text">Form Layouts</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/forms/form-validation.html" className="nk-menu-link"><span className="nk-menu-text">Form Validation</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/forms/form-wizard.html" className="nk-menu-link"><span className="nk-menu-text">Wizard Basic</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="#" className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">Rich Editor</span></a>
                                        <ul className="nk-menu-sub">
                                            <li className="nk-menu-item"><a href="html/components/forms/form-summernote.html" className="nk-menu-link"><span className="nk-menu-text">Summernote</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/forms/form-quill.html" className="nk-menu-link"><span className="nk-menu-text">Quill</span></a></li>
                                            <li className="nk-menu-item"><a href="html/components/forms/form-tinymce.html" className="nk-menu-link"><span className="nk-menu-text">Tinymce</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-icon"><em className="icon ni ni-pie-fill"></em></span>
                                    <span className="nk-menu-text">Charts</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="html/components/charts/chartjs.html" className="nk-menu-link"><span className="nk-menu-text">Chart JS</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/components/charts/knob.html" className="nk-menu-link"><span className="nk-menu-text">Knob JS</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/components/misc/toastr.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-alert-circle-fill"></em></span>
                                    <span className="nk-menu-text">Toastr</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/components/misc/sweet-alert.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-caution-fill"></em></span>
                                    <span className="nk-menu-text">Sweet Alert</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="html/email-templates.html" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-template-fill"></em></span>
                                    <span className="nk-menu-text">Email Template</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
  }
}

export default SideBarMain;
