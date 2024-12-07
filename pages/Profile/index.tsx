import { FC } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import MyTabs from '../../common/MyTabs';

const Profile: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text>Profile Page</Text>

            <View style={{ marginTop: 20 }}>
                <Button onPress={() => navigation.navigate('Home')} title="Go to Home Page" />
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <MyTabs />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', position: "relative", width: "100%", height: "100%" },
});

export default Profile;
