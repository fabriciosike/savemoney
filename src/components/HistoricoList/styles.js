import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 5px;
    padding: 10px;
    background-color: rgba(0,0,0,0.02);

`;

export const Tipo = styled.View`
    flex-direction: row;

`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#C62c36' : '#049301'};
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;


`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;

`;

export const ValorText = styled.Text`
    color: #222;
    font-size: 22px;
    font-weight: bold;

`;


