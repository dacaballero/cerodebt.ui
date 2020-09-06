import React from 'react';
import Select from 'react-select'

class CeroDebtForm extends React.Component {
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

    renderSelectInput = ({input, options}) => (
        <Select 
             {...input}
             options={options}
             onChange={value => input.onChange(value)}
             onBlur={() => input.onBlur(input.value)}
        />
    )
}

export default CeroDebtForm;