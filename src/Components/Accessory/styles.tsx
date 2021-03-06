import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   min-width: 26%;
   flex: 1;

   margin-right: 8px;
   margin-bottom: 8px;
   align-items: center;
   justify-content: center;

   background-color: ${({theme}) => theme.colors.background_primary};
   padding: 16px;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(13)}px;

`;