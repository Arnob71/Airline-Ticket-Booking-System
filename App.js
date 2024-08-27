import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SearchScreen from './SearchScreen';
import MoreScreen from './MoreScreen';
import HomeScreen from './HomeScreen';


const LoginSignup=()=>{
  return(
    <View style={styles.container}>
      <Text>Login/SignupScreen</Text>
      </View>
  )
}

export default function App() {
  const tab=createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tab.Navigator
      initialRouteName='Home'
      screenOptions={() => ({
        tabBarHideOnKeyboard:'true',
        tabBarIconStyle:{size:10},
        tabBarLabelStyle:{fontSize:12},
        tabBarStyle:{ height:55, paddingBottom:5, paddingTop:5},
        tabBarActiveTintColor: '#006a4e',
        tabBarInactiveTintColor: 'gray',
      headerStyle:{backgroundColor:'white'},
      headerTitleStyle:{color:'#006a4e', fontSize:32}
       })}
      >
       <tab.Screen 
       name="Home" 
       component={HomeScreen} 
       options={{
        headerTitle:'Home',
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <Ionicons name="home" color={color} size={size}/>
        }}}
          />
       <tab.Screen 
       name="Search" 
       component={SearchScreen}
       options={{
        headerShown:false,
        //headerTitle:"Search Flights",
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <Ionicons name="search" color={color} size={size}/>
           },
          }
        }
          />
          <tab.Screen 
       name="Profile" 
       component={LoginSignup} 
       options={{
        headerTitle:"My Account",
          tabBarIcon:({focused,color,size})=>{
            if(focused)
            {
              size=30;
            }
            else
              size=28
            return <MaterialIcons name="account-circle" size={size} color={color} />
       }}}/>
       <tab.Screen 
       name="More" 
       component={MoreScreen} 
       options={{
        headerShown:false,
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <FontAwesome name="bars" size={size} color={color} />
       }}}
          />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
