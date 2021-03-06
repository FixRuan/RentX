import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { carDTO } from '../../dtos/carDto';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

import Gasoline from '../../assets/gasoline.svg';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
} from './styles';



interface Props extends TouchableOpacityProps {
    data: carDTO;
}



export function Car({ data, ...rest }: Props) {

    const MotorIcon = getAcessoryIcon(data.fuel_type);

    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.period}</Period>
                        <Price>{`R$ ${data.price}`}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon
                        // width={20}
                        // height={20}
                        />
                    </Type>
                </About>
            </Details>


            <CarImage
                source={{ uri: data.thumbnail }}
                resizeMode='contain'
            />

        </Container>
    );
}