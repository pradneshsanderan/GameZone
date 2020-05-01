import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import review from '../screens/review';

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:'GameZone',
            //headerStyle:{ backgroundColor : '#333'}
        }
    },
    review: {
        screen:review,
        navigationOptions:{
            title:'Review Details',
            //headerStyle:{ backgroundColor : '#fff'}
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{ backgroundColor : '#fff', height:80} 
    }
});


export default createAppContainer(HomeStack);