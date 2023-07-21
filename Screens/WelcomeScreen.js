import React from 'react';
import {Alert, Image, ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import { sum2number,substract2number } from '../util/Calculation';

import { images,icons } from '../constants'
const WelcomeScreen = (props) =>{
    return <View style = {{
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
                <View style = {{
                    flexDirection : 'row',
                    height : 50,
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
                    <Image source={
                        icons.question
                    }
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
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
                    fontSize : 13
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>BEESYSTEM.CO !</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontSize: 13
                }}>Please select your account type</Text>
            </View>

            <View style={{
                flex: 40,
                backgroundColor: 'purple'
            }}>
                <TouchableOpacity style = {{
                    borderColor: 'white',
                    borderWidth: 1,
                    height: 45,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginVertical : 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                    
                }}>
                    <Text style = {{
                        color: '#ED6263',
                        fontSize : 15
                        
                    }}>Infuencer</Text>

                </TouchableOpacity>

            </View>

            <View style={{
                flex: 20,
                backgroundColor: 'yellow'
            }} />
        </ImageBackground>
    </View>
}
export default WelcomeScreen;