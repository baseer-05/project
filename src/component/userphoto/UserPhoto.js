import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

import { styles } from '../style';
import UserChart from '../chart/UserChart';
import UserPhotoItem from './UserPhotoItem';

const UserPhoto = ({ profile, userGallary }) => {
    const DATA = userGallary;
    return (
        <View>
            <View style={styles.usericon}>
                <Avatar.Image size={70} source={profile.user} />
            </View>
            <View style={styles.text} >
                <Text> {profile.name} </Text>
            </View>

            {/* student attandence chart */}
            <View style={styles.container}>
                <UserChart />
            </View>
            <View style={styles.container} >
                <ScrollView style={styles.groupIcon}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <UserPhotoItem source={item.user} />}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

export default UserPhoto;