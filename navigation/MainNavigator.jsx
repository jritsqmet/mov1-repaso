import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import JuegosScreen from '../screens/JuegosScreen';
import ContactosScreen from '../screens/ContactosScreen';

//////// STACK
const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            {/*ESTO ES UN COMENTARIO */}
            <Stack.Screen name='home' component={HomeScreen} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Tab" component={ MyTab}/>
        </Stack.Navigator>
    )
}

///// BOTTOM
const Tab= createBottomTabNavigator()

function MyTab(){
    return(
        <Tab.Navigator >
            <Tab.Screen name="Juegos" component={ JuegosScreen}/>
            <Tab.Screen name="Contactos" component={ ContactosScreen }/>
        </Tab.Navigator>
    )
}


/////////////////
export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}