import React from 'react';
import { render } from '@testing-library/react';
import { TransactionTableRow } from './transactionTableRow';

export const TransactionListItem = (props) => {

    const renderCheckBox = (props) => {
        if (props.transaction.slug){
            return <div className="nk-tb-col nk-tb-col-check">
            <div className="custom-control custom-control-sm custom-checkbox notext">
                <input type="checkbox" className="custom-control-input" id={"chk_" + props.transaction.slug} />
                <label className="custom-control-label" for={"chk_" + props.transaction.slug}></label>
            </div>
        </div>
        }
        else{
            return <div className="nk-tb-col nk-tb-col-check"></div>
        }
    };

    const renderAccount = (props) => {
        if (props.hasAccount){
            return <TransactionTableRow label={props.transaction.account}></TransactionTableRow>;
        }
        else{
            return <></>;
        }
    }

    const renderCategory= (props) => {
        if (props.hasCategory){
            return <TransactionTableRow label={props.transaction.category}></TransactionTableRow>;            
        }
        else{
            return <></>;
        }
    }

    const renderBalance= (props) => {
        if (props.hasBalance){
            return <TransactionTableRow isAmount="true" label={props.transaction.balance}></TransactionTableRow>;            
        }
        else{
            return <></>;
        }
    }

    return props.transaction ? (<div className="nk-tb-item" key={props.transaction.slug}>
        {renderCheckBox(props)}
    
        <TransactionTableRow label={props.transaction.date}></TransactionTableRow>
        {renderAccount(props)}
        {renderCategory(props)}
        <TransactionTableRow label={props.transaction.description}></TransactionTableRow>
        <TransactionTableRow isAmount="true" label={props.transaction.amount}></TransactionTableRow>
        {renderBalance(props)}
        <TransactionTableRow label={props.transaction.cleared}></TransactionTableRow>
        <div className="nk-tb-col nk-tb-col-tools">
            <ul className="nk-tb-actions gx-2">
                <li className="nk-tb-action-hidden">
                    <a href="#" className="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                        <em className="icon ni ni-wallet-fill"></em>
                    </a>
                </li>
                <li className="nk-tb-action-hidden">
                    <a href="#" className="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                        <em className="icon ni ni-mail-fill"></em>
                    </a>
                </li>
                <li className="nk-tb-action-hidden">
                    <a href="#" className="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                        <em className="icon ni ni-user-cross-fill"></em>
                    </a>
                </li>
                <li>
                    <div className="drodown">
                        <a href="#" className="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye"></em><span>View Details</span></a></li>
                                <li><a href="#"><em className="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                <li className="divider"></li>
                                <li><a href="#"><em className="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                <li><a href="#"><em className="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                <li><a href="#"><em className="icon ni ni-na"></em><span>Suspend User</span></a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    ) : <></>;
};