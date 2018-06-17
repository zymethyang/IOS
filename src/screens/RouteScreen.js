import { StackNavigator } from 'react-navigation';
import MenuScreen from './MenuScreen';
import CreateBookScreen from './CreateBookScreen';

const RouteScreen = StackNavigator({
    MenuScreen: { screen: MenuScreen },
    CreateBookScreen: { screen: CreateBookScreen }
})

export default RouteScreen;