import { NextFunction, Request, Response } from 'express';
import DrinksCategoryService from '../Services/DrinksCategoryService';

class DrinksCategoryController {
    private req: Request;
    private res: Response;
    private next: NextFunction;
    private drinksCategoryService: DrinksCategoryService;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.drinksCategoryService = new DrinksCategoryService();
    }

    public async createDrinkCategoryController() {
        const { ...n } = this.req.body;

        try {
            const drink = await this.drinksCategoryService.createDrinkCategoryService({ ...n });
            return this.res.status(201).json(drink);
        } catch (error) {
            this.next(error);
        }
    }

    public async findAllDrinkCategoryController() {
        try {
            const drinks = await this.drinksCategoryService.findAllDrinkCategoryService();
            return this.res.status(200).json(drinks);
        } catch (error) {
            this.next(error);
        }
    }

    public async findDrinkCategoryControllerId() {
        const { id } = this.req.params;

        try {
            const drinks = await this.drinksCategoryService.findDrinkCategoryServiceId(id);
            return this.res.status(200).json(drinks);
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

export default DrinksCategoryController;