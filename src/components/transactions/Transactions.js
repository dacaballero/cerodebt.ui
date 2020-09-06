import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { useParams, Link } from 'react-router-dom';
import { TransactionListItem } from '../general/TransactionListItem';
import { TransactionTable } from '../general/TransactionTable';

export const Transactions = () => {
    const [transactions, setTransactions] = useState();

    useEffect(() => {
        api.get('/transactions')
        .then(({data}) => {
            setTransactions(data.transactions);
        });        
    }, []);
    
    return transactions ? (
        <> 
            <div className="nk-block-head">
                <div className="nk-block-between-md">
                    <div className="nk-block-head-content">
                        <div className="nk-block-head-sub">
                            <div className="nk-wgwh">
                                <em className="icon-circle icon-circle-lg icon ni ni-sign-btc"></em>
                                <div className="nk-wgwh-title h5"> Transacciones </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-block">
                <TransactionTable hasAccount="true" hasCategory="true" transactions={transactions}></TransactionTable>                
            </div>{/* .nk-block */}
                        
        </> ) : (
            <div>Loading...</div>
        );
};
