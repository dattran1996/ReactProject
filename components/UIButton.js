import React from 'react'
import {
    TouchableOpacity,
    Text
}
    from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { color } from '../constants'

const UIButton = (props) => {

    const {onPress, title, isSelected} = props;
    return <TouchableOpacity
        onPress={props.onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 5,
            marginHorizontal: 20,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? 'white' : null

        }}>
            {isSelected == true &&
            <Icon
            size={15}
            name={'checkcircle'}
            style={{
                color: 'green',
                position: 'absolute',
                top: 15,
                left: 10
            }} />
            }
        
        <Text style={{
            color: isSelected == true ? color.primary : 'white',
            fontSize: 20

        }}>{title}</Text>

    </TouchableOpacity>
}

export default UIButton;