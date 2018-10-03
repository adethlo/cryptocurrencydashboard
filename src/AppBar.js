import React from 'react';

import styled, { css } from 'styled-components';

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

export default function() {
    return (
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
    );
}