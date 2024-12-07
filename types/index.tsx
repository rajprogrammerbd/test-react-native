export type ModalDataType = {
    subtitle: string;
    title: string;
    paragraph: string;
}

export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Modal: undefined;
};

export interface RootTypeAppState {
    modalVisible: boolean;
}