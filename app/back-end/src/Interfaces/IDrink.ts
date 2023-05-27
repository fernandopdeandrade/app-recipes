import IRecipes from "./IRecipes";

export default interface Idrink extends IRecipes {
    idDrink?: string;
    strDrink?: string;
    strDrinkThumb?: string;
    strAlcoholic?: string;
    strGlass?: string;
}