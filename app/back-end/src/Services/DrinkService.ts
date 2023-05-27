import DrinkODM from '../Models/DrinksODM';
import IDrink from '../Interfaces/IDrink';

export default class DrinksService {
  private drinksModel: DrinkODM;

  constructor() {
    this.drinksModel = new DrinkODM();
  }

  public async createDrinkService(obj: IDrink): Promise<IDrink> {
    const objProduto = this.drinksModel;
    const result = await objProduto.createDrinkModel(obj);
    return result;
  }

  public async findAllDrinkService(): Promise<IDrink[]> {
    const drinkODM = this.drinksModel;
    const drinks = await drinkODM.findAllDrinksModel();
    return drinks;
  }

  public async findDrinkServiceId(id: string): Promise<IDrink[] | null> {
    const drinkODM = this.drinksModel;
    const drink = await drinkODM.findDrinkModelId(id);
    return drink;
  }

  public async findDrinkServiceCategory(category: string): Promise<IDrink[] | null> {
    const drinkODM = this.drinksModel;
    const drink = await drinkODM.findDrinkModelCategory(category);
    return drink;
  }

  public async findDrinkServiceName(name: string): Promise<IDrink[] | null> {
    const drinkODM = this.drinksModel;
    const drink = await drinkODM.findDrinkModelName(name);
    return drink;
  }

  public async findDrinkServicePrimaryLetter(letter: string): Promise<IDrink[] | null> {
    const drinkODM = this.drinksModel;
    const drink = await drinkODM.findDrinkModelPrimaryLetter(letter);
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