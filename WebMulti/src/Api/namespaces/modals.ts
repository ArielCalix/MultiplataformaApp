
export declare namespace Type {
    export type ModalType = 'create' | 'edit' | 'status' | 'createSeccion' | 'editSeccion' | 'deleteSeccion';
    type ModalState = {
        isOpen: boolean;
        type: Type.ModalType | null;
        nestedModal?: 'statusSeccion';
    };
}
