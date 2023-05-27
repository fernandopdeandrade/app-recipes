import { NextFunction, Request, Response } from 'express';
import MealsService from '../Services/MealService';

class MealsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private mealService: MealsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.mealService = new MealsService();
  }

  public async createMealController() {
    const { ...n } = this.req.body;

    try {
      const meal = await this.mealService.createMealService({ ...n });
      return this.res.status(201).json(meal);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMealsController() {
    try {
      const meals = await this.mealService.findAllMealsService();
      return this.res.status(200).json(meals);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMealControllerId() {
    const { id } = this.req.params;

    try {
      const meal = await this.mealService.findMealServiceId(id);
      return this.res.status(200).json(meal);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMealControllerCategory() {
    const { category } = this.req.params;

    try {
      const meal = await this.mealService.findMealServiceCategory(category);
      return this.res.status(200).json(meal);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMealControllerName() {
    const { name } = this.req.params;

    try {
      const meal = await this.mealService.findMealServiceName(name);
      return this.res.status(200).json(meal);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMealControllerPrimaryLetter() {
    const { letter } = this.req.params;

    try {
      const meal = await this.mealService.findMealServicePrimaryLetter(letter);
      return this.res.status(200).json(meal);
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

export default MealsController;