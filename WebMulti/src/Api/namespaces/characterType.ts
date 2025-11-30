export declare namespace Type {
    export type CharacterResponse = {
        info: Type.Info;
        results: Array<Type.CharacterType>;
    };
    export type CharacterType = {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Type.ObjectUrl;
        location: Type.ObjectUrl;
        image: string;
        episode: Array<string>;
        url: string;
        created: string;
    };
    export type ObjectUrl = {
        name: string;
        url: string;
    };
    export type Info = {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
}