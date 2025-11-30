import type { Type as TypeError } from '../../../Api/namespaces/modalError';
import type { TypeUtilities } from "../../../utilities/TypeUtilities";
import type { Type as TypeCharacter } from '../../../Api/namespaces/characterType';
import { CreateFetchers } from "../../../storeConfig";
import { NAME } from "./_namespace";
import { getData, saveData, updateData } from "../../../utilities/Utilities";
import { isError } from "../../../Api/utilsError";

export default CreateFetchers(NAME, {
    async getAllCharacters(params: TypeUtilities) {
        const response = await getData(params);
        console.log(response);
        if (isError<TypeError.ModalError>(response?.error)) {
            return {
                characters: response?.data["results"] as unknown as Array<TypeCharacter.CharacterType>,
                error: response?.error as TypeError.ModalError,
            };
        }
        return {
            characters: response?.data["results"] as unknown as Array<TypeCharacter.CharacterType>,
            info: response?.data["info"] as unknown as TypeCharacter.Info,
            error: response?.error as TypeError.ModalError,
        };
    },
    async getCharacter(params: TypeUtilities) {
        const response = await getData(params);
        if (isError<TypeError.ModalError>(response?.error)) {
            return {
                character: response?.data["results"] as unknown as TypeCharacter.CharacterType,
                error: response?.error as TypeError.ModalError,
            };
        }
        return {
            character: response?.data["results"] as unknown as TypeCharacter.CharacterType,
            error: response?.error as TypeError.ModalError,
        };
    },
});