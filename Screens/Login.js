import React, { useState, useEffect, useRef } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native';
import { sum2number, substract2number } from '../util/Calculation';

import {
    images,
    icons,
    color,
    fontSizes
} from '../constants'

import { UIButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Login = (props) => {
    return <View style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 35
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h1,
                fontWeight: 'bold',
                width: '50%'
            }}>Already have an Account ?</Text>
            <Image
                source={images.apple}
                tintColor={color.primary}
                style={
                    {
                        width: 170,
                        height: 170,
                        alignSelf: 'center'

                    }
                } />
        </View>
        <View style={{
            marginHorizontal: 15,
            flex: 25
        }}>
            <Text style={{
                color: color.primary,
                fontSize: fontSizes.h3
            }}>Email:</Text>
            <TextInput
                style={{
                    color: 'black'
                }}
                placeholder='example@gmail.com'
                placeholderTextColor={color.placeholder}
            />

            <Text style={{
                color: color.primary,
                fontSize: fontSizes.h3
            }}>Password:</Text>
            <TextInput
                style={{
                    color: 'black'
                }}
                secureTextEntry={true}
                placeholder='Enter your password'
                placeholderTextColor={color.placeholder}
            />
        </View>
        <View style = {{
            flex: 15
        }}>
            <TouchableOpacity
                style={{
                    backgroundColor: color.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    with: 100,
                    marginTop: 20,
                    marginBottom: 5,
                    marginHorizontal: 100,
                    borderRadius: 20,
                }}
                onPress={() => Alert.alert('Login')}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h2
                }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                alignSelf: 'center',
                padding: 5
            }}
                onPress={() => Alert.alert('register')}>
                <Text style={{
                    padding: 5,
                    fontSize: fontSizes.h3,
                    color: 'blue'
                }}>New user? Resgister now</Text>
            </TouchableOpacity>
        </View>

        <View style={{
            flex: 25
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20
            }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                <Text style={{
                    padding: 5,
                    fontSize: fontSizes.h5,
                    color: 'black',
                    alignSelf: 'center',
                    marginHorizontal: 5
                }}>Use other methods ?</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
            </View>
            <View style = {{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity >
                    <Icon name='facebook' size={35} color='#4267B2' style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name='google-plus' size={35} color='#DB4437' style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>           
            </View>

        </View>
    </View>

}

export default Login;