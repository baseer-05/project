import React from 'react';
import { View, Text } from 'react-native';
import UserPhoto from '../component/userphoto/UserPhoto';
import { DATA } from '../data/_DummyData';

const MainScreen = () => {
    return (
        <View >
            <View style={{ height: '100%', backgroundColor: 'blue', width: '100%' }}>
                <UserPhoto {...DATA} />
            </View>

        </View>
    );
}

export default MainScreen;