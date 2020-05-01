import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homestack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStack,
    }
});


export default createAppContainer(RootDrawerNavigator);