import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IDrinksMealsCategory from '../Interfaces/IDrinksMealsCategory';

class MealsCategoryODM extends AbstractODM<IDrinksMealsCategory> {
    constructor() {
        const MealsCategorySchema = new Schema<IDrinksMealsCategory>({
            strCategory: { type: String, required: true },

        });
        super(MealsCategorySchema, 'meals-categorie');
    }

    public async createMealCategoryModel(produto: IDrinksMealsCategory): Promise<IDrinksMealsCategory> {
        const meal = await this.model.create(produto);
        return meal;
    }

    public async findAllMealsCategoryModel(): Promise<IDrinksMealsCategory[]> {
        const meals = this.model.find({});
        return meals;
    }

    public async findMealCategoryModelId(id: string): Promise<IDrinksMealsCategory[] | null> {
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

export default MealsCategoryODM;