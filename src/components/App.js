import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import api from '../api/api';
import SearchBar from './SearchBar';
import TransactionCreate from './transactions/TransactionCreate';
import AccountsController from './accounts/AccountsController';
import SideBarBar from "./layout/menu/SideBarBar";
import SideBarMain from "./layout/menu/SideBarMain";
import SideBar from "./layout/menu/SideBar";
import MainLayout from "./layout/Main";
import {Transactions} from './transactions/Transactions'

class App extends React.Component {
  state = { accounts: [], categories: [] };

  onLoad = async name => {
    const response = await api.get('/accounts', {
      params: { name: name }
    });

    const cats = await api.get('/categories', {
      params: { name: name }
    });

    this.setState({ accounts: response.data.accounts, categories: cats.data.categories });
  };

  render() {
    return (
      <div className="nk-main">
        <BrowserRouter>
        <SideBar>
          <SideBarBar/>
          <SideBarMain/>
        </SideBar>
        <MainLayout>
          <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    
                      <Route path="/accounts/*" exact component={AccountsController} />
                      <Route path="/transactions/create/*" exact component={TransactionCreate} />
                      <Route path="/transactions" exact component={Transactions}/>
                    </div>
                </div>
            </div>
        </MainLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;