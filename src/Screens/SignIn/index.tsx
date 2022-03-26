import React from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../Components/Button';
import { Input } from './Input';
import { PasswordInput } from './PasswordInput';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Form,
    Footer,
} from './styles';

export function SignIn() {

    const theme = useTheme();

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
                    <Header>
                        <Title>Estamos{'\n'}Quase lá</Title>
                        <SubTitle>
                            Faça seu login para começar{'\n'}
                            uma experiência incrível.
                        </SubTitle>
                    </Header>

                    <Form>
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize="none"
                        />

                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Login'
                            disable={true}
                            onPress={() => { }}
                            loading={false}
                        />

                        <Button
                            title='Criar conta gratuita'
                            color={theme.colors.background_secondary}
                            light
                            disable={false}
                            onPress={() => { }}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}