import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Button } from '../../Components/Button';

import { ConfirmButton } from '../../Components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';


interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}


export function Confirmation() {

    const route = useRoute();
    const { title, message, nextScreenRoute } = route.params as Params;
    const navigation = useNavigation<any>();

    const { width } = useWindowDimensions();


    function handleConfirm() {
        navigation.navigate(nextScreenRoute)
    }

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
                <Title>{title}</Title>

                <Message>
                    {message}
                </Message>
            </Content>

            <Footer>
                <ConfirmButton
                    title='OK'
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    );
}