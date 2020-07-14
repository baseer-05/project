import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { styles } from '../style'

const UserPhotoItem = ({ source }) => {
    return (
        <View style={styles.icon}>
            <Avatar.Image style={{ backgroundColor: 'red' }} size={50} source={source} />
        </View>
    );
}

export default UserPhotoItem;