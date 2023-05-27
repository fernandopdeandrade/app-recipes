import DrinksCategoryODM from '../Models/DrinksCategoryODM';
import IDrinksMealsCategory from '../Interfaces/IDrinksMealsCategory';

export default class DrinksCategoryService {
    private drinksCategoryModel: DrinksCategoryODM;

    constructor() {
        this.drinksCategoryModel = new DrinksCategoryODM();
    }

    public async createDrinkCategoryService(obj: IDrinksMealsCategory): Promise<IDrinksMealsCategory> {
        const objDrink = this.drinksCategoryModel;
        const result = await objDrink.createDrinkCategoryModel(obj);
        return result;
    }

    public async findAllDrinkCategoryService(): Promise<IDrinksMealsCategory[]> {
        const drinkODM = this.drinksCategoryModel;
        const drinks = await drinkODM.findAllDrinksCategoryModel();
        return drinks;
    }

    public async findDrinkCategoryServiceId(id: string): Promise<IDrinksMealsCategory[] | null> {
        const drinkODM = this.drinksCategoryModel;
        const drink = await drinkODM.findDrinkCategoryModelId(id);
        return drink;
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