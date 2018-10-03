import React, { Component } from 'react';

import './App.css';

import styled, { css } from 'styled-components';

const AppLayout = styled.div`
  padding: 40px;
`

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButton = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03;
  `}
`

const Bar = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
  margin-bottom: 40px;
`

const Content = styled.div`
`

const checkFirstVisit = () => {
  let CryptoDashData = localStorage.getItem('cryptoDash');
  if(!CryptoDashData) {
    return {
      firstVisit: true,
      page: 'settings'
    };
  }
  return {};
}

class App extends Component {
  state = {
    page: 'dashboard',
    ...checkFirstVisit()
  }

  displayingDashboard = () => this.state.page === 'dashboard';
  displayingSettings = () => this.state.page === 'settings';
  firstVisitMessage = () => {
    if(this.state.firstVisit) {
      return <div>Welcome to CryptoDash, please select your favorite coins to begin</div>
    }
  }

  confirmFavorites = () => {
    localStorage.setItem('cryptoDash', 'test');
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
  }

  settingsContent = () => {
    return (
      <div>
        {this.firstVisitMessage()}
        <div onClick={this.confirmFavorites}>
          Confirm Favorites
        </div>
      </div>
    )
  }

  render() {
    return (
      <AppLayout>
        <Bar>
          <Logo>
            CryptoDash
          </Logo>
          <div></div>
          {!this.state.firstVisit && (
            <ControlButton 
              onClick={() => {this.setState({page: 'dashboard'})}} 
              active={this.displayingDashboard()}
            >
              Dashboard
            </ControlButton>
          )}
          <ControlButton 
            onClick={() => {this.setState({page: 'settings'})}} 
            active={this.displayingSettings()}
          >
            Settings
          </ControlButton>
        </Bar>
        <Content>
          {this.displayingSettings() && this.settingsContent()}
        </Content>
      </AppLayout>
      
    );
  }
}

export default App;
