
import { Model, ModelStatic} from "sequelize";
import { BaseRepository } from "./interfaces/BaseRepository";


export class SqlBaseRepository<T extends Model> implements BaseRepository<T>{

    private _model : ModelStatic<T>;
    
    constructor(model: ModelStatic<T>){
     this._model = model;
    }

    async create(item: T): Promise<void> {
        this._model.create(item);
    }
    async update(_id: string, item: T): Promise<void> {
        this._model.update(item, {where: {id : _id}}); 
    }
    async delete(_id: string): Promise<void> {
        this._model.destroy({where: {id: _id}})
    }
    async find(): Promise<T[]> {
        return this._model.findAll();
    }
    async findOne(_id: string): Promise<T> {
        return this._model.findOne({where:{id: _id}});
    }

}