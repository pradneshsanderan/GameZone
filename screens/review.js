import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {globalStyles, images } from '../styles/global'
import Card from '../shared/card';

export default function Review({navigation}){
    const rating = navigation.getParam('rating');

    return(
        <View style = {globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating : </Text>
                    <Image source={images.ratings[rating]} /> 
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({

})


