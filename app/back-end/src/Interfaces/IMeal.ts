import IRecipes from "./IRecipes";

export default interface IMeal extends IRecipes {
    idMeal?: string;
    strMeal?: string;
    strMealThumb?: string;
}