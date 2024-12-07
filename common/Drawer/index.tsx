import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from '../../pages/Homepage';
import ModalPage from '../../pages/ModalPage';
import Profile from '../../pages/Profile';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homepage} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Modal" component={ModalPage} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
