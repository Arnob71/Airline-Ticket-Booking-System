import { TouchableOpacity,ScrollView,StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { FontAwesome5 } from '@expo/vector-icons';
import YourApp from './test';
import SearchScreen from './SearchScreen';

const IconSize=63;
const IconColor="#006a4e"

  const MainScreen=({navigation})=>{
    return(
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.column}>
          <View>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Search')}}
          >
          <View style={styles.options}>
          <Entypo name="newsletter" size={IconSize} color={IconColor} />
              <Text>News & Alerts</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text>Flight Schedules</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
          <FontAwesome5 name="car" size={IconSize} color={IconColor} />
              <Text>Car Rentals</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text>Privacy Policy</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text style={{}}>Terms & Conditions</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text>Flight Status</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
          <MaterialIcons name="hotel" size={IconSize} color={IconColor} />
              <Text>Book Hotel</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
          <Ionicons name="settings" size={IconSize} color={IconColor} />
              <Text>Settings</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text>Contact Us</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.options}>
              <Text>About Us</Text>
          </View>
          </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
  </View>
    )
  }
 
  const stack=createNativeStackNavigator();

  export default function MoreScreen() {
  return (
    <stack.Navigator>
         <stack.Screen name="Home" component={MainScreen} 
         options={{headerShown:false}}/>
         <stack.Screen name="Test" component={YourApp} />
         <stack.Screen name="Search" component={SearchScreen} />
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
  },
  column:{
    marginTop:75,
    marginBottom:50,
    flexDirection:'row',
    justifyContent:'center',
  },
  options:{
    height:110,
    width:130,
    borderRadius:20,
    backgroundColor:'white',
    justifyContent:'flex-end',
    alignItems:'center',
    margin:10,
    padding:10
  },
});