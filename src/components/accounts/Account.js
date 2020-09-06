import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { useParams, Link } from 'react-router-dom';
import { TransactionListItem } from '../general/TransactionListItem';
import { TransactionTable } from '../general/TransactionTable';

export const Account = () => {
    const [account, setAccount] = useState();
    const [transactions, setTransactions] = useState();
    const { slug } = useParams(); 

    useEffect(() => {
        api.get('/accounts/' + slug)
        .then(({data}) => {
            setAccount(data.account);

            api.get('/transactions/accounts/' + slug)
            .then(({data}) => {
                setTransactions(data);
            });
        });        
    }, []);
    
    return account ? (
        <> 
            <div className="nk-block-head">
                <div className="nk-block-between-md">
                    <div className="nk-block-head-content">
                        <div className="nk-block-head-sub">
                            <Link to="/accounts/cash" className="back-to">
                                <em className="icon ni ni-arrow-left"></em><span>Mis Cuentas</span>
                            </Link>
                            <div className="nk-wgwh">
                                <em className="icon-circle icon-circle-lg icon ni ni-sign-btc"></em>
                                <div className="nk-wgwh-title h5"> {account.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-block">
                <div className="nk-block-between-md g-4">
                    <div className="nk-block-content">
                        <div className="nk-wg1">
                            <div className="nk-wg1-group g-2">
                                <div className="nk-wg1-item mr-xl-4">
                                    <div className="nk-wg1-title text-soft">Available Balance</div>
                                    <div className="nk-wg1-amount">
                                        <div className="amount">{transactions?.final.amount}<small className="currency currency-usd"> USD</small></div>
                                        <div className="amount-sm">Balance in <span>2.010550 <span className="currency currency-usd">BTC</span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-block-content">
                        <ul className="nk-block-tools gx-3">
                            <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dim btn-outline-light"><em className="icon ni ni-arrow-up-right"></em></a><span className="btn-extext">Send</span></li>
                            <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dim btn-outline-light"><em className="icon ni ni-arrow-down-left"></em></a><span className="btn-extext">Recive</span></li>
                            <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dark"><em className="icon ni ni-plus"></em></a><span className="btn-extext">Add Fund</span></li>
                            <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-primary"><em className="icon ni ni-arrow-to-right"></em></a><span className="btn-extext">Withdraw</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nk-block nk-block-lg">
                <div className="row g-gs">
                    <div className="col-md-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="nk-wg5">
                                    <div className="nk-wg5-title">
                                        <h6 className="title overline-title">Total Send</h6>
                                    </div>
                                    <div className="nk-wg5-text">
                                        <div className="nk-wg5-amount">
                                            <div className="amount"> 20.001500 <span className="currency currency-btc">BTC</span>
                                            </div>
                                            <div className="amount-sm"> 972,360.72 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-wg5-foot">
                                        <span className="text-soft">Last Send at <span className="text-base">19 Nov, 2019</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="nk-wg5">
                                    <div className="nk-wg5-title">
                                        <h6 className="title overline-title">Total Receive</h6>
                                    </div>
                                    <div className="nk-wg5-text">
                                        <div className="nk-wg5-amount">
                                            <div className="amount"> 20.001500 <span className="currency currency-btc">BTC</span>
                                            </div>
                                            <div className="amount-sm"> 972,360.72 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-wg5-foot">
                                        <span className="text-soft">Last Receive at <span className="text-base">24 Nov, 2019</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="nk-wg5">
                                    <div className="nk-wg5-title">
                                        <h6 className="title overline-title">Total Withdraw</h6>
                                    </div>
                                    <div className="nk-wg5-text">
                                        <div className="nk-wg5-amount">
                                            <div className="amount"> 20.001500 <span className="currency currency-btc">BTC</span>
                                            </div>
                                            <div className="amount-sm"> 972,360.72 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-wg5-foot">
                                        <span className="text-soft">Last Withdraw at <span className="text-base">27 Nov, 2019</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>n 
            </div>
            <div className="nk-block">
                <TransactionTable hasBalance="true" hasAccount="false" hasCategory="true" initial={transactions?.initial} final={transactions?.final} transactions={transactions?.transactions}></TransactionTable>
            </div>{/* .nk-block */}
                        
        </> ) : (
            <div>Loading...</div>
        );
};
