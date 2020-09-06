import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TransactionForm from './TransactionForm';
import api from "../../api/api";

class TransferCreate extends TransactionForm {
    state = { accounts: [], categories: [] };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.onLoad();
    }    

    onLoad = async name => {
        const accounts = await api.get('/accounts', {
          params: { name: name }
        });

        const accts = accounts.data.accounts.map((account) => {
            return {
                value: account.slug,
                label: account.name
            }
        });
    
        const categories = await api.get('/categories', {
          params: { name: name }
        });

        const cats = categories.data.categories.map((category) => {
            return {
                value: category.slug,
                label: category.name
            }
        });
    
        this.setState({ accounts: accts, categories: cats });
      };

    onSubmit = async formValues => {
        const response = await api.post("/transactions", {
            transaction: {
                amount: formValues.amount,
                description: formValues.description,
                transactionDate: formValues.date,
                toAccount: formValues.toAccount.value,
                account: formValues.fromAccount.value,
                type: "transfer",
                cleared: true
            }
        });

        console.log(response);
    }

    render() {
        return (
            <>
            <div className="buysell-title text-center">
                <h2 className="title">Registrar nuevo gasto</h2>
            </div>
            <form className="buysell-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="amount" component={this.renderAmount} label="Monto" placeholder="100.00" type="number" />
                <Field name="date" component={this.renderInput} label="Fecha" />
                <Field name="fromAccount" component={this.renderSelectInput} options={this.state.accounts} label="Cuenta De" />
                <Field name="toAccount" component={this.renderSelectInput} options={this.state.accounts} label="Cuenta A" />
                <Field name="description" component={this.renderInput} label="Descripcion" />
                <div className="buysell-field form-action">
                    <button className="btn btn-lg btn-block btn-primary" >Guardar</button>
                </div>
                
                <div className="form-note text-base text-center">Note: our transfer fee included, <a href="#">see our fees</a>.</div>
            </form>
            </>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.amount){
        errors.amount = "Debes ingresar un monto.";
    }

    if (!formValues.date){
        errors.date = "Debes ingresar una fecha.";
    }
    if (!formValues.account){
        errors.account = "Debes ingresar una cuenta.";
    }
    if (!formValues.description){
        errors.description = "Debes ingresar una descricion.";
    }

    return errors;
}

export default reduxForm({
    form: 'transferCreate',
    validate
})(TransferCreate);