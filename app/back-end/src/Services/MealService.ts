import MealODM from "../Models/MealsODM";
import IMeal from "../Interfaces/IDrink";

export default class MealsService {
    private mealsModel: MealODM;

    constructor() {
        this.mealsModel = new MealODM();
    }

    public async createMealService(obj: IMeal): Promise<IMeal> {
        const objProduto = this.mealsModel;
        const result = await objProduto.createMealModel(obj);
        return result;
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

    public async findAllMealsService(): Promise<IMeal[]> {
      const mealODM = this.mealsModel;
      const meals = await mealODM.findAllMealsModel();
      return meals;
    }

    public async findMealServiceId(id: string): Promise<IMeal[] | null> {
      const mealODM = this.mealsModel;
      const meal = await mealODM.findMealModelId(id);
      return meal;
    }

    public async findMealServiceCategory(category: string): Promise<IMeal[] | null> {
      const mealODM = this.mealsModel;
      const meal = await mealODM.findMealModelCategory(category);
      return meal;
    }

    public async findMealServiceName(name: string): Promise<IMeal[] | null> {
      const mealODM = this.mealsModel;
      const meal = await mealODM.findMealModelName(name);
      return meal;
    }

    public async findMealServicePrimaryLetter(letter: string): Promise<IMeal[] | null> {
      const mealODM = this.mealsModel;
      const meal = await mealODM.findMealModelPrimaryLetter(letter);
      return meal;
    }

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