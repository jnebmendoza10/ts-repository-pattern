import { Product } from "../../models/ProductModel";
import { BaseRepository } from "./BaseRepository";


export interface ProductRepository extends BaseRepository<Product>{
    getTotal(item: string): Promise<number>;
}