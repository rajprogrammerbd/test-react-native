import { FC, useEffect } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, Easing, TextInput, Button } from "react-native";
import { useTransition, animated, useSprings } from "@react-spring/native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form';
import { handleModalVisible } from "../../utils/slices/appSlice";
import { RootState } from "../../utils/store";
import { modalData } from "../../constants";
import { FormDataAddUserType } from "../../types";

const Modal: FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataAddUserType>();

    const dispatch = useDispatch();
    const show = useSelector((root: RootState) => root.appSlice.modalVisible);

    const onSubmit: SubmitHandler<FormDataAddUserType> = data => {
        console.log(data);
    };

    const config = {
        duration: 210,
        easing: Easing.inOut(Easing.ease),
        tension: 170,
        friction: 26 
    };

    const transitions = useTransition(show, {
        from: { opacity: 0, config},
        enter: { opacity: 1, config},
        leave: { opacity: 0, config},
    });

    const handleModal = () => {
        dispatch(handleModalVisible());
    }

    return transitions(
        (styled, item) => item && (
            <animated.View style={[styles.container, { opacity: styled.opacity }]}>
            <View style={styles.mainWrapper}>
                <TouchableNativeFeedback onPress={handleModal}>
                    <View style={styles.opacityWrapper} />
                </TouchableNativeFeedback>

                <View style={styles.showedWrapper}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Enter your username"
                            value={value}
                        />
                        )}
                        name="username"
                        rules={{ required: 'Username is required' }}
                    />
                    {errors.username && <Text>{errors.username.message}</Text>}
                    {errors.email && <Text>{errors.email.message}</Text>}
                    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                </View>
            </View>
        </animated.View>
    ))
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        bottom: 0
    },
    mainWrapper: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    opacityWrapper: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        filter: "opacity(0.5)",
        backgroundColor: "black"
    },
    showedWrapper: {
        width: "70%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30
    },
    subTitleStyle: {
        color: "#b1b1b1",
        textTransform: "uppercase",
        fontSize: 12,
        marginBottom: 10
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 20
    },
    paragraph: {
        color: "#b1b1b1",
        fontSize: 15,
        textAlign: "left",
        fontWeight: 300,
        lineHeight: 22,
        marginBottom: 40
    },
    closeButton: {
        backgroundColor: "#1976d2",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 20,
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default Modal;
