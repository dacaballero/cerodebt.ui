import React from 'react';
import Select from 'react-select'

class TransactionForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `form-group ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                <div className="form-control-wrap">
                    <input {...input} autoComplete="off" className="form-control" />
                    {this.renderError(meta)}
                </div>
            </div>
        );
    };

    renderDatePicker = ({ input, label, meta }) => {
        const className = `form-group ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                        <em className="icon ni ni-calendar"></em>
                    </div>
                    <input {...input} autoComplete="off" className="form-control date-picker" data-date-format="yyyy-mm-dd" />
                </div>
                {this.renderError(meta)}
            </div>
        );
    };

    renderAmount = ({ input, label, meta, placeholder }) => {
        const className = `buysell-field form-group ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="form-label">{label}</label>
                <div className="form-control-group">
                    <input {...input} autoComplete="off" className="form-control form-control-lg form-control-number" placeholder={placeholder} type="number" />
                    {this.renderError(meta)}
                </div>
            </div>
        );
    };

    renderSelectInput = ({input, options, label}) => (
        <div className="buysell-field form-group">
            <div className="form-label-group">
                <label className="form-label">{label}</label>
            </div>
            <div className="form-control-wrap">
                <Select 
                    {...input}
                    options={options}
                    onChange={value => input.onChange(value)}
                    onBlur={() => input.onBlur(input.value)}
                    data-ui="lg"
                />
            </div>
        </div>
        
    )
}

export default TransactionForm;