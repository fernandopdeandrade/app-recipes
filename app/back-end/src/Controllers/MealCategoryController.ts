import { NextFunction, Request, Response } from 'express';
import MealsCategoryService from '../Services/MealsCategoryService';

class MealsCategoryController {
    private req: Request;
    private res: Response;
    private next: NextFunction;
    private mealsCategoryService: MealsCategoryService;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.mealsCategoryService = new MealsCategoryService();
    }

    public async createMealCategoryController() {
        const { ...n } = this.req.body;

        try {
            const Meals = await this.mealsCategoryService.createMealCategoryService({ ...n });
            return this.res.status(201).json(Meals);
        } catch (error) {
            this.next(error);
        }
    }

    public async findAllMealsCategoryController() {
        try {
            const Meals = await this.mealsCategoryService.findAllMealsCategoryService();
            return this.res.status(200).json(Meals);
        } catch (error) {
            this.next(error);
        }
    }

    public async findMealCategoryControllerId() {
        const { id } = this.req.params;

        try {
            const Meals = await this.mealsCategoryService.findMealCategoryServiceId(id);
            return this.res.status(200).json(Meals);
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

export default MealsCategoryController;