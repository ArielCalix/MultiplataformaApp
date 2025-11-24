import { CombineReducers } from "../storeConfig";
import { SliceFetching } from "./slices/fetching";
import { SliceError } from "./slices/error";
import { SlicePersist } from "./slices/persist";
// import { SliceOperators } from "./slices/operators";
import { SliceOnline } from "./slices/online";
// import { SliceRouter } from "./slices/router";
import { SliceConfiguration } from "./slices/configuration";

export default CombineReducers({
    ...SliceFetching,
    ...SliceError,
    ...SlicePersist,
    // ...SliceOperators,
    ...SliceOnline,
    // ...SliceRouter,
    ...SliceConfiguration,
});