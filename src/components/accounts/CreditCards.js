import React from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom';

class CreditCards extends React.Component {
    state = { accounts: [] };

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.onLoad();
    }    

    onLoad = async name => {
        const accounts = await api.get('/accounts', {
          params: { name: name, type: 'creditcard' }
        });

        const accts = accounts.data.accounts.map((account) => {
            return account;
        });
    
        this.setState({ accounts: accts });
    }

    mapAccounts(parent, accounts){
        return accounts.filter((account) => {
            return account.parent && account.parent.slug === parent.slug;
        }).map((account) => {
            return <div key={account.slug}>{account.name} 
                    { this.mapAccounts(account, accounts) } 
                </div>
        });
    }

    render(){
        return (

            <div className="nk-block">
                <div className="nk-block-head-sm">
                    <div className="nk-block-head-content">
                        <h5 className="nk-block-title title">Tarjetas de Credito</h5>
                    </div>
                </div>
                <div className="row g-gs">
                    {
                            this.state.accounts.filter((account) => {
                                return !account.parent;
                            }).map((account) => {
                                return <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                                    <div className="card card-bordered" key={account.slug}>
                                <div className="nk-wgw">
                                    <div className="nk-wgw-inner">
                                        <Link to={'/accounts/' + account.slug} className="nk-wgw-name">
                                            <div className="nk-wgw-icon is-default">
                                                <em className="icon ni ni-sign-kobo"></em>
                                            </div>
                                            <h5 className="nk-wgw-title title">{account.name}</h5>
                                        </Link>
                                        <div className="nk-wgw-balance">
                                            <div className="amount">40.509505<span className="currency currency-nio">NIO</span></div>
                                            <div className="amount-sm">{account.initialBalance.toLocaleString(undefined, {maximumFractionDigits:2})}<span className="currency currency-usd">USD</span></div>
                                        </div>
                                    </div>
                                    <div className="nk-wgw-actions">
                                        <ul>
                                            <li><a href="#"><em className="icon ni ni-arrow-up-right"></em> <span>Send</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-arrow-down-left"></em><span>Receive</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-arrow-to-right"></em><span>Withdraw</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="nk-wgw-more dropdown">
                                        <a href="#" className="btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                        <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                            <ul className="link-list-plain sm">
                                                <li><a href="#">Details</a></li>
                                                <li><a href="#">Edit</a></li>
                                                <li><a href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            })
                    }
                    <div className="col-md-6 col-lg-4">
                        <div className="card card-bordered dashed h-100">
                            <div className="nk-wgw-add">
                                <div className="nk-wgw-inner">
                                    <a href="#">
                                        <div className="add-icon">
                                            <em className="icon ni ni-plus"></em>
                                        </div>
                                        <h6 className="title">Nueva Cuenta</h6>
                                    </a>
                                    <span className="sub-text">You can add your more wallet in your account to manage separetly.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* .row */}
            </div>        
        )
    }
};

export default CreditCards;

