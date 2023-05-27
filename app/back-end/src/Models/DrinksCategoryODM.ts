import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IDrinksMealsCategory from '../Interfaces/IDrinksMealsCategory';

class DrinksCategoryODM extends AbstractODM<IDrinksMealsCategory> {
    constructor() {
        const DrinksCategorySchema = new Schema<IDrinksMealsCategory>({
            strCategory: { type: String, required: true },
    
        });
        super(DrinksCategorySchema, 'Drinks-categorie');
    }

    public async createDrinkCategoryModel(produto: IDrinksMealsCategory): Promise<IDrinksMealsCategory> {
        const result = await this.model.create(produto);
        return result;
    }

    public async findAllDrinksCategoryModel(): Promise<IDrinksMealsCategory[]> {
        const drinks = this.model.find({});
        return drinks;
    }

    public async findDrinkCategoryModelId(id: string): Promise<IDrinksMealsCategory[] | null> {
        return this.model.findOne({ _id: id });
    }

    //   public async updateProdutoModel(id: string, produto: IProduto):
    //   Promise<IProduto | null> {
    //     return this.model.findByIdAndUpdate(
    //       { _id: id },
    //       { ...produto },
    //       { new: true },
    //     );
    //   }

    //   public async deleteProdutoModel(id: string): Promise<IProduto | null> {
    //     return this.model.findByIdAndDelete({ _id: id });
    //   }
}

export default DrinksCategoryODM;