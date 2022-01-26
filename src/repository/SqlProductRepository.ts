import { Product } from "../models/ProductModel";
import { ProductModel } from "../models/ProductModel";
import { BaseRepository } from "./interfaces/BaseRepository";
import { ProductRepository } from "./interfaces/ProductRepository";
import { SqlBaseRepository } from "./SqlBaseRepository";


export class SqlProductRepository extends SqlBaseRepository<Product> implements ProductRepository{
   
    constructor(){
       super(ProductModel);
    }
    
    async getTotal(item: string): Promise<number> {
        const product = await ProductModel.count({where: {name : item}})
        return product;
    }

}