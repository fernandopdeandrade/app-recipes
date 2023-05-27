import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMeal from '../Interfaces/IMeal';

class MealODM extends AbstractODM<IMeal> {
  constructor() {
    const MealsSchema = new Schema<IMeal>({
      idMeal: { type: String, required: true },
      strMeal: { type: String, required: true },
      strCategory: { type: String, required: true },
      strArea: { type: String, required: true },
      strInstructions: { type: String, required: true },
      strMealThumb: { type: String, required: true },
      strYoutube: { type: String, required: true },
      strIngredient1: { type: String },
      strIngredient2: { type: String },
      strIngredient3: { type: String },
      strIngredient4: { type: String },
      strIngredient5: { type: String },
      strIngredient6: { type: String },
      strIngredient7: { type: String },
      strIngredient8: { type: String },
      strIngredient9: { type: String },
      strIngredient10: { type: String },
      strIngredient11: { type: String },
      strIngredient12: { type: String },
      strIngredient13: { type: String },
      strIngredient14: { type: String },
      strIngredient15: { type: String },
      strIngredient16: { type: String },
      strIngredient17: { type: String },
      strIngredient18: { type: String },
      strIngredient19: { type: String },
      strIngredient20: { type: String },
      strMeasure1: { type: String },
      strMeasure2: { type: String },
      strMeasure3: { type: String },
      strMeasure4: { type: String },
      strMeasure5: { type: String },
      strMeasure6: { type: String },
      strMeasure7: { type: String },
      strMeasure8: { type: String },
      strMeasure9: { type: String },
      strMeasure10: { type: String },
      strMeasure11: { type: String },
      strMeasure12: { type: String },
      strMeasure13: { type: String },
      strMeasure14: { type: String },
      strMeasure15: { type: String },
      strMeasure16: { type: String },
      strMeasure17: { type: String },
      strMeasure18: { type: String },
      strMeasure19: { type: String },
      strMeasure20: { type: String },
    });
    super(MealsSchema, 'meals');
  }

  public async createMealModel(produto: IMeal): Promise<IMeal> {
    const result = await this.model.create(produto);
    return result;
  }

  public async findAllMealsModel(): Promise<IMeal[]> {
    const result = this.model.find({});
    return result;
  }

  public async findMealModelId(id: string): Promise<IMeal[] | null> {
    return this.model.findOne({ idMeal: id });
  }

  public async findMealModelCategory(category: string): Promise<IMeal[] | null> {
    const result = this.model.find({ strCategory: category })
    return result;
  }

  public async findMealModelName(name: string): Promise<IMeal[] | null> {
    const result = this.model.find({ strMeal: name })
    return result;
  }

  public async findMealModelPrimaryLetter(letter: string): Promise<IMeal[] | null> {
    const result = this.model.find({ strMeal: new RegExp(`^${letter}`, 'i') })
    return result;
  }

  // /^a/i

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

export default MealODM;