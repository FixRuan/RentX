import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../Components/Car';
import { Load } from '../../Components/Load';

import { api } from '../../services/api';
import { carDTO } from '../../dtos/carDto';



import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CardList
} from './styles';


export function Home() {

    const [cars, setCars] = useState<carDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCars() {

            try {
                const response = await api.get('/cars');
                setCars(response.data);


            } catch (error) {
                console.log(error);

            } finally {
                setLoading(false);

            }


        }


        fetchCars();
    }, []);

    const navigation = useNavigation<any>();

    function handleCarDetails() {
        navigation.navigate('CarDetails');
    }


    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>


            {
                loading === true ? <Load /> :
                    <CardList data={cars} keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => <Car onPress={handleCarDetails} data={item} />
                        }
                    />
            }



        </Container>
    );
}