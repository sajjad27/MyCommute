export interface ModalConfigModel {
    type: ModalType;
    title: string;
    message: string;
}

export enum ModalType {
    Success,
    Failer
}