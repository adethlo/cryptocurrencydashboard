import React from 'react';

import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from './Style';

import styled, { css } from 'styled-components';

const CoinGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-top: 40px;
`

const CoinTitle = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
    &:hover{
        cursor: pointer;
        ${greenBoxShadow}
    }
    ${props => props.favorite && css`
        &:hover{
            cursor: pointer;
            ${redBoxShadow}
        } 
    `}
    ${props => props.chosen && !props.favorite && css`
        pointer-events: none;
        opacity: 0.4;
    `}
`

const CoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const CoinSymbol = styled.div`
    justify-self: right;
`

const DeleteIcon = styled.div`
        justify-self: right;
        display: none;
        ${CoinTitle}:hover & {
            display: block;
            color: red;
        }
`

export default function(favorites=false){
    let coinKeys = favorites ? this.state.favorites : Object.keys(this.state.coinList).slice(0, 100);
    return (
        <CoinGrid>
            {coinKeys.map(coinKey => 
                <CoinTitle
                    chosen={this.isInFavorites(coinKey)}
                    favorite={favorites} 
                    onClick={favorites ? () => {this.removeCoinToFavorites(coinKey)} : () => {this.addCoinToFavorites(coinKey)}}
                >
                    <CoinHeaderGrid>
                        <div>{this.state.coinList[coinKey].CoinName}</div>
                        {favorites ? 
                            <DeleteIcon>X</DeleteIcon> : 
                            <CoinSymbol>{this.state.coinList[coinKey].Symbol}</CoinSymbol> 
                        }
                    </CoinHeaderGrid>
                    <div>{<img style={{height: '50px'}} src={`http://cryptocompare.com/${this.state.coinList[coinKey].ImageUrl}`} />}</div>
                </CoinTitle>
            )}
        </CoinGrid>
    )
}