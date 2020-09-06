import React from 'react';
import ExpenseCreate from './ExpenseCreate';
import IncomeCreate from './IncomeCreate';
import TransferCreate from './TransferCreate';
import { Route, Link } from 'react-router-dom';

const TransactionCreate = (props) => {
    return (
        <div className="buysell wide-xs m-auto">
            <div className="buysell-nav text-center">
                <ul className="nk-nav nav nav-tabs nav-tabs-s2">
                    <li className="nav-item">
                        <Link to="/transactions/create/expense" className="nav-link">
                            Gasto
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/transactions/create/income" className="nav-link">
                            Ingreso
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/transactions/create/transfer" className="nav-link">
                            Transferencia
                        </Link>
                    </li>
                </ul>
            </div>{/* .buysell-nav */}
            <div className="buysell-block">
                <Route path="/transactions/create/expense" component={ExpenseCreate}/>
                <Route path="/transactions/create/income" component={IncomeCreate}/>
                <Route path="/transactions/create/transfer" component={TransferCreate}/>
            </div>{/* .buysell-block */}
        </div>
    );
};

export default TransactionCreate;
