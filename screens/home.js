import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';
import {MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewform';
import Review from './review';

export default function Home({navigation}){
    const [modalOpen , setModalOpen] = useState(false);
    
    const [reviews,setReviews] = useState([
        {title:'Zelda', rating : 5, body :'The Legend of Zelda is an action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka.', key: '1'},
        {title:'Pokemon', rating : 4, body :'Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company as part of the Pokémon media franchise.', key: '2'},
        {title:'Final Fantasy', rating : 3, body :'Final Fantasy is a Japanese science fantasy media franchise created by Hironobu Sakaguchi, and developed and owned by Square Enix.', key: '3'},
    ]);

    const addReview =(review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) =>{
            return [review , ...currentReviews]
        });
        setModalOpen(false);
    }



    return(
        <View style = {globalStyles.container}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalcontent}>
                    <MaterialIcons 
                        name='close'
                        style={{...styles.modaltoggle, ...styles.modalClose}}
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
                   <ReviewForm  addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>

            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modaltoggle}
                onPress={() => setModalOpen(true)}
            />
            


            <FlatList 
            data={reviews}
            renderItem={({item}) =>(
               <TouchableOpacity onPress={() => navigation.navigate('review' , item)}>
                   <Card>
                    <Text style={globalStyles.text}>
                        {item.title}
                    </Text>
                   </Card>
               </TouchableOpacity> 
            )}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    modaltoggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,
    },
    modalcontent:{
        flex:1,
    }
})
