import React from 'react';
import Accounts from './Accounts';
import {Account} from './Account';
import CreditCards from './CreditCards';
import Loans from './Loans';
import { Route, Link, Switch } from 'react-router-dom';

const AccountsController = (props) => {
    return (
        <>
        <Switch>
            <Route path="/accounts/cash" exact component={Accounts}/>
            <Route path="/accounts/creditcards" exact component={CreditCards}/>
            <Route path="/accounts/loans" exact component={Loans}/>
            <Route path="/accounts/:slug" component={Account} />
            </Switch>
        </>
    );
};

export default AccountsController;
