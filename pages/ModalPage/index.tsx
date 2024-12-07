import { FC, memo } from "react";
import { View, Button, StyleSheet } from "react-native";
import { ModalDataType } from "../../types";
import { useDispatch } from "react-redux";
import { handleModalVisible } from "../../utils/slices/appSlice";

const ModalPage:FC = () => {
    const dispatch = useDispatch();

    const handleModal = (): void => {
        dispatch(handleModalVisible());
    }
    
    return (
        <View style={styles.container}>
            <Button title="Open Modal" onPress={handleModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(ModalPage);
