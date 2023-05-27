import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  private schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
}

export default AbstractODM;