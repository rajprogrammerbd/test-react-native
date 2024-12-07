import { memo } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import { modalData } from "../../constants";

function Homepage() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <View style={{ marginTop: 20 }}>
            <Button onPress={() => navigation.navigate('Profile')} title="Go to Profile Page" />
        </View>

        <View style={{ marginTop: 20 }}>
            <Button onPress={() => navigation.navigate('Modal', { ...modalData })} title="Go to Modal Page" />
        </View>
      </View>
    );
}

export default memo(Homepage);