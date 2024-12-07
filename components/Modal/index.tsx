import { FC, useEffect } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, Easing } from "react-native";
import { useTransition, animated, useSprings } from "@react-spring/native";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVisible } from "../../utils/slices/appSlice";
import { RootState } from "../../utils/store";
import { modalData } from "../../constants";

const Modal: FC = () => {
    const dispatch = useDispatch();
    const show = useSelector((root: RootState) => root.appSlice.modalVisible);

    const [styleds, api] = useSprings(4, index => ({
        opacity: 0,
        y: 20,
        config: { tension: 170, friction: 26 },
      }));

      useEffect(() => {
        api.start(i => ({
          opacity: 1,
          y: 0,
          duration: 500,
          delay: i * 1000,
        }));
      }, [api]);

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
    const { paragraph, subtitle, title } = modalData;

    return transitions(
        (styled, item) => item && (
            <animated.View style={[styles.container, { opacity: styled.opacity }]}>
            <View style={styles.mainWrapper}>
                <TouchableNativeFeedback onPress={handleModal}>
                    <View style={styles.opacityWrapper} />
                </TouchableNativeFeedback>

                <View style={styles.showedWrapper}>
                    <animated.Text style={[styles.subTitleStyle, { opacity: styleds[0].opacity, translateY: styleds[0].y }]}>{subtitle}</animated.Text>
                    <animated.Text style={[styles.title, { opacity: styleds[0].opacity, translateY: styleds[1].y }]}>{title}</animated.Text>
                    <animated.Text style={[styles.paragraph, { opacity: styleds[0].opacity, translateY: styleds[2].y }]}>{paragraph}</animated.Text>

                    <TouchableNativeFeedback onPress={handleModal}>
                        <View style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </View>
                    </TouchableNativeFeedback>
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
