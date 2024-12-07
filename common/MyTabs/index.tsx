import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, UserRoundPen, FileAxis3d } from 'lucide-react-native'; // Importing all icons together
import Homepage from '../../pages/Homepage';
import ModalPage from '../../pages/ModalPage';
import Profile from '../../pages/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
                return <House color={color} size={size} />;
            } else if (route.name === 'Profile') {
                return <UserRoundPen color={color}  size={size} />;
            } else if (route.name === 'Modal') {
                return <FileAxis3d color={color} size={size} />;
            }
            },
        })}
        >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Modal" component={ModalPage} />
        </Tab.Navigator>
  );
}

export default MyTabs;
