import { SqlProductRepository } from "../repository/SqlProductRepository";
import { ProductRepository } from "../repository/interfaces/ProductRepository";
import { Product } from "../models/ProductModel";

class ProductService {

    private readonly _product: ProductRepository;

    constructor(){
        this._product = new SqlProductRepository();
    }

    create (item: Product){
       this._product.create(item);
    }

    update(id: string, item: Product){
        this._product.update(id, item);
    }

    delete(id: string){
        this._product.delete(id);
    }

    find(){
        this._product.find();
    }

    findOne(id: string){
        this._product.findOne(id);
    }

    getTotal(item: string){
        this._product.getTotal(item);
    }

}

export default new ProductService();