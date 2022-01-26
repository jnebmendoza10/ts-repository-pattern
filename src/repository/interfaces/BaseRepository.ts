import { Write } from "./common/Write";
import { Read } from "./common/Read";




export interface BaseRepository<T> extends Read<T>, Write<T>{}
    