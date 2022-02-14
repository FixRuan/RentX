import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../Components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';
import { Button } from '../../Components/Button';


export function SchedulingComplete() {

    const { width } = useWindowDimensions();

    const navigation = useNavigation<any>();

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <LogoSvg
                width={width}
            />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária de RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton
                    title='OK'
                    onPress={() => navigation.navigate('Home')}
                />
            </Footer>
        </Container>
    );
}