import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from '../../pages/Homepage';
import Profile from '../../pages/Profile';
import NativePaper from '../../components/NativePaper';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homepage} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Nativepaper" component={NativePaper} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
