import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts';

interface EntradaProps{
    tema?: string
}

export const Entrada = styled.input`
    height: 54px;
    width: 91.5%;
    border-radius: 8px;
    font-family: ${fonts.family};
    font-weight: ${fonts.regular};
    font-size: 12px;
    border: solid 1px ${cores.gray_300};
    background-color: ${(props: EntradaProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
    color: ${(props: EntradaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    padding-left: 26px;
`;