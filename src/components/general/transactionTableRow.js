import React from 'react';

export const TransactionTableRow = (props) => {

    const formatLabel = (props) => {
        if (props.isAmount){
            return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: "USD",
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }).format(props.label);
        }

        return props.label;
    }

    const getAlignment = (props) => {
        return props.isAmount ? "nk-tb-col text-right" : "nk-tb-col";
    }

    return <div className={getAlignment(props)}>
        <span>{formatLabel(props)}</span>
    </div>
}