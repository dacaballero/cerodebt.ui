import React from 'react';

const AccountList = (props) => {
    function mapAccounts(parent, accounts){
        return accounts.filter((account) => {
            return account.parent && account.parent.slug === parent.slug;
        }).map((account) => {
            return <div key={account.slug}>{account.name} { mapAccounts(account, accounts) } </div>
        });
    };

    const accounts = props.accounts.filter((account) => {
        return !account.parent;
    }).map((account) => {
            return <div key={account.slug}><span>{account.name}</span>{mapAccounts(account, props.accounts)}</div>
    });
    
    return <div>{accounts}</div>;
};

export default AccountList;