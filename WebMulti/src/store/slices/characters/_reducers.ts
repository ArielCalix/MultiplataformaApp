import { CreateReducer } from "../../../storeConfig";
import { INIT, Action } from "./_namespace";
import Fetcher from "./_fetchers";

export default CreateReducer(INIT, ({ addCase }) => {

    addCase(Action.cleanStore, (state) => ({
        ...state,
        ...INIT,
    }));
    addCase(Action.cleanCharacter, (state) => ({
        ...state,
        accionPlantilla: INIT.character,
    }));
    addCase(Fetcher.getAllCharacters.fulfilled, (state, action) => ({
        ...state,
        characters: action.payload.characters,
        info: action.payload.info,
        error: action.payload.error,
    }));
    addCase(Fetcher.getCharacter.fulfilled, (state, action) => ({
        ...state,
        character: action.payload.character,
        error: action.payload.error,
    }));

});