import { NextFunction, Request, Response } from 'express';
import DrinksService from '../Services/DrinkService';

class DrinksController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private drinksService: DrinksService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.drinksService = new DrinksService();
  }

  public async createDrinkController() {
    const { ...n } = this.req.body;

    try {
      const drink = await this.drinksService.createDrinkService({ ...n });
      return this.res.status(201).json(drink);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllDrinkController() {
    try {
      const drinks = await this.drinksService.findAllDrinkService();
      return this.res.status(200).json(drinks);
    } catch (error) {
      this.next(error);
    }
  }

  public async findDrinkControllerId() {
    const { id } = this.req.params;

    try {
      const drinks = await this.drinksService.findDrinkServiceId(id);
      return this.res.status(200).json(drinks);
    } catch (error) {
      this.next(error);
    }
  }

  public async findDrinkControllerCategory() {
    const { category } = this.req.params;

    try {
      const drinks = await this.drinksService.findDrinkServiceCategory(category);
      return this.res.status(200).json(drinks);
    } catch (error) {
      this.next(error);
    }
  }

  public async findDrinkControllerName() {
    const { name } = this.req.params;

    try {
      const drink = await this.drinksService.findDrinkServiceName(name);
      return this.res.status(200).json(drink);
    } catch (error) {
      this.next(error);
    }
  }

  public async findDrinkControllerPrimaryLetter() {
    const { letter } = this.req.params;

    try {
      const drink = await this.drinksService.findDrinkServicePrimaryLetter(letter);
      return this.res.status(200).json(drink);
    } catch (error) {
      this.next(error);
    }
  }

  //   public async updateProdutoController() {
  //     const { id } = this.req.params;
  //     const { produtoNome, produtoValor } = this.req.body;

  //     try {
  //       const produto = await this.produtosService.updateProdutoService(
  //         id,
  //         produtoNome,
  //         produtoValor,
  //       );
  //       return this.res.status(200).json(produto);
  //     } catch (error) {
  //       this.next(error);
  //     }
  //   }

  //   public async deleteProdutoController() {
  //     const { id } = this.req.params;

  //     try {
  //       const produto = await this.produtosService.deleteProdutoService(id);
  //       return this.res.status(200).json(produto);
  //     } catch (error) {
  //       this.next(error);
  //     }
  //   }
}

export default DrinksController;