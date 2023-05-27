import MealsCategoryODM from '../Models/MealsCategoryODM';
import IDrinksMealsCategory from '../Interfaces/IDrinksMealsCategory';

export default class MealsCategoryService {
    private mealsCategoryModel: MealsCategoryODM;

    constructor() {
        this.mealsCategoryModel = new MealsCategoryODM();
    }

    public async createMealCategoryService(obj: IDrinksMealsCategory): Promise<IDrinksMealsCategory> {
        const objMeal = this.mealsCategoryModel;
        const result = await objMeal.createMealCategoryModel(obj);
        return result;
    }

    public async findAllMealsCategoryService(): Promise<IDrinksMealsCategory[]> {
        const mealODM = this.mealsCategoryModel;
        const meals = await mealODM.findAllMealsCategoryModel();
        return meals;
    }

    public async findMealCategoryServiceId(id: string): Promise<IDrinksMealsCategory[] | null> {
        const mealODM = this.mealsCategoryModel;
        const meal = await mealODM.findMealCategoryModelId(id);
        return meal;
    }

    //   public async registerService(produto: IProduto) {
    //     const typedProduto = Produtos.createProdutosFactory(produto);
    //     // Saving example
    //     const newproduto: IProduto = {
    //       produtoNome: typedProduto.produtoNome,
    //       produtoValor: typedProduto.produtoValor,
    //       id: '633ec9fa3df977e30e993492',
    //     };
    //     await this.createProdutoService(newproduto);
    //     return this.createProdutoDomainService(newproduto);
    //   }

    //   public async updateProdutoService(produto: IProduto) {
    //     const typedProduto = Produtos.createProdutosFactory(produto);
    //     const newproduto: IProduto = {
    //       produtoNome: typedProduto.produtoNome,
    //       produtoValor: typedProduto.produtoValor,
    //       id: typedProduto.id,
    //     };
    //     await this.createProdutoService(newproduto);
    //     return this.createProdutoDomainService(newproduto);
    //   }

    //   public async deleteProdutoService(id: string) {
    //     const produtoODM = new ProdutosODM();
    //     const produtos = await produtoODM.deleteProdutodrinksModel(id);
    //     return produtos;
    //   }
}