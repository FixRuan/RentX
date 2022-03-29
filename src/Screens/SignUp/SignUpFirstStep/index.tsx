import React from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../Components/BackButton';
import { Bullet } from '../../../Components/Bullet';
import { Input } from '../../SignIn/Input';
import { Button } from '../../../Components/Button';


import {
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle,
} from './styles';


export function SignUpFirstStep() {

    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleBack() {
        navigation.goBack();
    }

    function handleNextStep() {
        navigation.navigate('SignUpSecondStep');
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Steps>
                            <Bullet active />
                            <Bullet />
                        </Steps>
                    </Header>

                    <Title>Crie sua{'\n'}Conta</Title>

                    <SubTitle>
                        Faça seu cadastro de{'\n'}
                        Forma rápida e fácil.
                    </SubTitle>

                    <Form>
                        <FormTitle>1. Dados</FormTitle>

                        <Input
                            iconName='user'
                            placeholder='Nome'
                        />

                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                        />

                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            keyboardType='numeric'
                        />
                    </Form>

                    <Button title='Próximo' onPress={handleNextStep} />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}