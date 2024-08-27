
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import YourApp from './test'
import MoreScreen from './MoreScreen';

const Stack = createStackNavigator();
 
export default function navigationHandler() {
return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Mor" component={MoreScreen} />
    <Stack.Screen name="Test" component={YourApp} />
  </Stack.Navigator>
  </NavigationContainer>
)
}