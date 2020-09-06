import React from 'react';
import {TransactionListItem} from './TransactionListItem';
import {TransactionTableRow} from './transactionTableRow';

export const TransactionTable = (props) => {

    const renderInitialBalance = (props) => {
        if (props.initial){
            return <TransactionListItem hasBalance={props.hansBalance} hasCategory={props.hasCategory} hasAccount={props.hasAccount} transaction={props.initial}></TransactionListItem>
        }
        
        return <></>;
    }

    const renderFinalBalance = (props) => {
        if (props.final){
            return <TransactionListItem hasBalance={props.hansBalance} hasCategory={props.hasCategory} hasAccount={props.hasAccount} transaction={props.final}></TransactionListItem>
        }

        return <></>;
    }

    const renderTransactions = (props) => {
        if (props.transactions){
            console.log(props);
            return props.transactions.map((transaction) => {
                return <TransactionListItem hasBalance={props.hansBalance} hasCategory="true" hasAccount="true" transaction={transaction}></TransactionListItem>
            });
        }

        return <></>;
    }

    return (
        <div className="card card-bordered card-stretch">
            <div className="card-inner-group">
                <div className="card-inner position-relative card-tools-toggle">
                    <div className="card-title-group">
                        <div className="card-tools">
                            <div className="form-inline flex-nowrap gx-3">
                                <div className="form-wrap w-150px">
                                    <select className="form-select form-select-sm" data-search="off" data-placeholder="Bulk Action">
                                        <option value="">Bulk Action</option>
                                        <option value="email">Send Email</option>
                                        <option value="group">Change Group</option>
                                        <option value="suspend">Suspend User</option>
                                        <option value="delete">Delete User</option>
                                    </select>
                                </div>
                                <div className="btn-wrap">
                                    <span className="d-none d-md-block"><button className="btn btn-dim btn-outline-light disabled">Apply</button></span>
                                    <span className="d-md-none"><button className="btn btn-dim btn-outline-light btn-icon disabled"><em className="icon ni ni-arrow-right"></em></button></span>
                                </div>
                            </div>{/* .form-inline */}
                        </div>{/* .card-tools */}
                        <div className="card-tools mr-n1">
                            <ul className="btn-toolbar gx-1">
                                <li>
                                    <a href="#" className="btn btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search"></em></a>
                                </li>{/* li */}
                                <li className="btn-toolbar-sep"></li>{/* li */}
                                <li>
                                    <div className="toggle-wrap">
                                        <a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-menu-right"></em></a>
                                        <div className="toggle-content" data-content="cardTools">
                                            <ul className="btn-toolbar gx-1">
                                                <li className="toggle-close">
                                                    <a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-arrow-left"></em></a>
                                                </li>{/* li */}
                                                <li>
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                            <div className="dot dot-primary"></div>
                                                            <em className="icon ni ni-filter-alt"></em>
                                                        </a>
                                                        <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                                            <div className="dropdown-head">
                                                                <span className="sub-title dropdown-title">Filter Users</span>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-sm btn-icon">
                                                                        <em className="icon ni ni-more-h"></em>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="dropdown-body dropdown-body-rg">
                                                                <div className="row gx-6 gy-3">
                                                                    <div className="col-6">
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="hasBalance" />
                                                                            <label className="custom-control-label" for="hasBalance"> Have Balance</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="hasKYC" />
                                                                            <label className="custom-control-label" for="hasKYC"> KYC Verified</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label className="overline-title overline-title-alt">Role</label>
                                                                            <select className="form-select form-select-sm">
                                                                                <option value="any">Any Role</option>
                                                                                <option value="investor">Investor</option>
                                                                                <option value="seller">Seller</option>
                                                                                <option value="buyer">Buyer</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label className="overline-title overline-title-alt">Status</label>
                                                                            <select className="form-select form-select-sm">
                                                                                <option value="any">Any Status</option>
                                                                                <option value="active">Active</option>
                                                                                <option value="pending">Pending</option>
                                                                                <option value="suspend">Suspend</option>
                                                                                <option value="deleted">Deleted</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <button type="button" className="btn btn-secondary">Filter</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="dropdown-foot between">
                                                                <a className="clickable" href="#">Reset Filter</a>
                                                                <a href="#">Save Filter</a>
                                                            </div>
                                                        </div>{/* .filter-wg */}
                                                    </div>{/* .dropdown */}
                                                </li>{/* li */}
                                                <li>
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                            <em className="icon ni ni-setting"></em>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                            <ul className="link-check">
                                                                <li><span>Show</span></li>
                                                                <li className="active"><a href="#">10</a></li>
                                                                <li><a href="#">20</a></li>
                                                                <li><a href="#">50</a></li>
                                                            </ul>
                                                            <ul className="link-check">
                                                                <li><span>Order</span></li>
                                                                <li className="active"><a href="#">DESC</a></li>
                                                                <li><a href="#">ASC</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>{/* .dropdown */}
                                                </li>{/* li */}
                                            </ul>{/* .btn-toolbar */}
                                        </div>{/* .toggle-content */}
                                    </div>{/* .toggle-wrap */}
                                </li>{/* li */}
                            </ul>{/* .btn-toolbar */}
                        </div>{/* .card-tools */}
                    </div>{/* .card-title-group */}
                    <div className="card-search search-wrap" data-search="search">
                        <div className="card-body">
                            <div className="search-content">
                                <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a>
                                <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search by user or email" />
                                <button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button>
                            </div>
                        </div>
                    </div>{/* .card-search */}
                </div>{/* .card-inner */}
                <div className="card-inner p-0">
                    <div className="nk-tb-list nk-tb-ulist is-compact">
                        <div className="nk-tb-item nk-tb-head">
                            <div className="nk-tb-col nk-tb-col-check">
                                <div className="custom-control custom-control-sm custom-checkbox notext">
                                    <input type="checkbox" className="custom-control-input" id="uid" />
                                    <label className="custom-control-label" for="uid"></label>
                                </div>
                            </div>
                            <div className="nk-tb-col"><span className="sub-text">Fecha</span></div>
                            <div className="nk-tb-col tb-col-md"><span className="sub-text">Cuenta</span></div>
                            <div className="nk-tb-col tb-col-md"><span className="sub-text">Categoria</span></div>
                            <div className="nk-tb-col tb-col-sm"><span className="sub-text">Descripcion</span></div>
                            <div className="nk-tb-col tb-col-md"><span className="sub-text">Monto</span></div>
                            <div className="nk-tb-col tb-col-md"><span className="sub-text">Balance</span></div>
                            <div className="nk-tb-col"><span className="sub-text">Cleared</span></div>
                        </div>{/* .nk-tb-item */}
                        {renderInitialBalance(props)}
                        {renderTransactions(props)}
                        {renderFinalBalance(props)}
                    </div>{/* .nk-tb-list */}
                </div>{/* .card-inner */}
                <div className="card-inner">
                    <ul className="pagination justify-content-center justify-content-md-start">
                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h"></em></span></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>{/* .pagination */}
                </div>{/* .card-inner */}
            </div>{/* .card-inner-group */}
        </div>
    );
}