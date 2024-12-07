import { FC, memo, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import FileSystemModule from "../../common/FileSystem";
import { useDispatch } from "react-redux";
import { handleModalVisible } from "../../utils/slices/appSlice";

FileSystemModule.initiate();

const NativePaper:FC = () => {
    const dispatch = useDispatch();
    
    const handleModal = (): void => {
        dispatch(handleModalVisible());    
    }

    return (
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <TouchableWithoutFeedback onPress={handleModal}>
                <View style={styles.btnHandle}>
                    <Text style={styles.btnHandleText}>Add User</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    btnHandle: {
        backgroundColor: "blue",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    btnHandleText: {
        color: "white",
    }
});

export default memo(NativePaper);
