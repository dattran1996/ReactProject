import React, { useState, useEffect, useRef } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { sum2number, substract2number } from '../util/Calculation';

import {
    images,
    icons,
    color
} from '../constants'

import { UIButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {fontSizes} from '../constants';


const WelcomeScreen = (props) => {

    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        }
    ])
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>

        <ImageBackground source={
            images.background
        }
            resizeMode='cover'
            style={{
                flex: 100
            }}>
            <View style={{
                flex: 20,

            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image source={
                        icons.fire
                    }
                        style={{
                            width: 30,
                            height: 30,
                            marginStart: 5,
                            marginEnd: 10
                        }}
                    />

                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}>BEESYSTEM.CO</Text>
                    <View style={{ flex: 1 }}>

                    </View>
                    <Icon name={'question-circle'}
                    size = {20}
                    style={{
                        marginRight: 15,
                        color: 'white'
                    }}
                        
                    />
                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontSize: fontSizes.h3
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h2
                }}>BEESYSTEM.CO !</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontSize: fontSizes.h3
                }}>Please select your account type</Text>
            </View>

            <View style={{
                flex: 40,
            }}>
                {accountTypes.map(accountType => 
                
                <UIButton onPress={() => {
                    setAccountTypes(accountTypes.map(eachAcountType => {
                        return {
                            ...eachAcountType,
                            isSelected : eachAcountType.name == accountType.name
                        }
                    }));
                }}
                    title={accountType.name}
                    isSelected={accountType.isSelected}
                />)
                }

            </View>

            <View style={{
                flex: 20
            }} >
                <UIButton title = {'Login'.toUpperCase()} />
                <View style = {{
                    flex: 0.8
                }}> 

                </View>
                <View>
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h3,
                    alignSelf : 'center',
                }}>Want to register new Account ?</Text>
                <TouchableOpacity 
                onPress = {() => {
                    Alert.alert('press register')
                }}>
                <Text style={{
                    color: color.primary,
                    fontSize: fontSizes.h3,
                    alignSelf : 'center',
                    textDecorationLine: 'underline'
                }}>Register</Text>
                </TouchableOpacity>
                </View>
                

            </View>
        </ImageBackground>
    </View>
}
export default WelcomeScreen;