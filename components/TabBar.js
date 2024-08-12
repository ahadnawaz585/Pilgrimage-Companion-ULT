import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedScreen from '../screens/SavedScreen';
import colors from '../Utils/colors';
import { Entypo,Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigator (){
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home'
          component={HomeScreen}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: colors.primary, 
            },
            headerTitleStyle: {
              
              color: '#fff', 
            },
            tabBarLabel: 'Home',
            tabBarIcon:(props)=><Entypo name='home' size={props.size} color={props.color}/>
          }}
        />
        <Tab.Screen name='Saved'
          component={SavedScreen}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: colors.primary, 
            },
            headerTitleStyle: {
              
              color: '#fff', 
            },
            tabBarLabel: 'Customer',
            tabBarIcon: (props) => <Entypo name="star" size={props.size} color={props.color} />,
          }}
          
        />
        <Tab.Screen name='Settings'
          component={SettingsScreen}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: colors.primary, 
            },
            headerTitleStyle: {
              
              color: '#fff', 
            },
            tabBarLabel: 'Setting',
            tabBarIcon:(props)=><Ionicons name='settings' size={props.size} color={props.color}/>
          }}
        />
      </Tab.Navigator>
    )
  }