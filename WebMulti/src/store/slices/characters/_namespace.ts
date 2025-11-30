import type { Type as TypeModal } from './../../../Api/namespaces/modalError';
import type { Type as TypeCharacter } from './../../../Api/namespaces/characterType';
import { CreateActions } from "../../../storeConfig";


export const NAME = "characters";

export declare namespace Type {
    export type Characters = {
        characters: Array<TypeCharacter.CharacterType>;
        character: TypeCharacter.CharacterType | null;
        info: TypeCharacter.Info | null;
    }
}

export declare namespace StoreCharacters {
    export type State = {
        character: TypeCharacter.CharacterType | null;
        characters: Array<TypeCharacter.CharacterType>;
        info: TypeCharacter.Info | null;
        error: TypeModal.ModalError;
    };
}

export const Action = CreateActions<{
    cleanCharacter: void;
    cleanStore: void;
}>(NAME, ["cleanCharacter", "cleanStore"]);


export const INIT: StoreCharacters.State = {
    character: null,
    info: null,
    characters: [],
    error: {
        code: 0,
        message: ""
    },
};