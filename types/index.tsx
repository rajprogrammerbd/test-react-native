export type ModalDataType = {
    subtitle: string;
    title: string;
    paragraph: string;
}

export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Nativepaper: undefined;
};

export interface RootTypeAppState {
    modalVisible: boolean;
}

export type IData = {
    id: number;
    username: string;
    email: string;
}

export interface FormDataAddUserType {
    username: string;
    email: string;
}