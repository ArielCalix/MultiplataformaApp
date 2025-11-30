import { CreateSelector } from "../../../storeConfig";
import type { StoreState } from "../..";
import type { StoreCharacters } from "./_namespace";
import { NAME } from "./_namespace";

export default function Selector(store: StoreState): StoreCharacters.State {
    return store[NAME];
}

Selector.getCharacter = CreateSelector(Selector, (state) => state.character);
Selector.getAllCharacters = CreateSelector(Selector, (state) => state.characters);
Selector.getError = CreateSelector(Selector, (state) => state.error);
Selector.getInfo = CreateSelector(Selector, (state) => state.info);