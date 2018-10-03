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

class App extends Component {
  state = {
    page: 'dashboard'
  }

  displayingDashboard = () => this.state.page === 'dashboard';
  displayingSettings = () => this.state.page === 'settings';

  render() {
    return (
      <AppLayout>
        <Bar>
          <Logo>
            CryptoDash
          </Logo>
          <div></div>
          <ControlButton 
            onClick={() => {this.setState({page: 'dashboard'})}} 
            active={this.displayingDashboard()}
          >
            Dashboard
          </ControlButton>
          <ControlButton 
            onClick={() => {this.setState({page: 'settings'})}} 
            active={this.displayingSettings()}
          >
            Settings
          </ControlButton>
        </Bar>
        <Content>
          Hello I'm the {this.state.page}
        </Content>
      </AppLayout>
      
    );
  }
}

export default App;
