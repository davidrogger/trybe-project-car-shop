export default interface IModel<T> {
  create(payload:T):Promise<T>;
  read():Promise<T[]>;
  readOne(id:string):Promise<T | null>;
  update(id:string, payload:T):Promise<T | null>;
  delete(id:string):Promise<T | null>;
}

export {
  // A interface deve ser exportada com o nome de IModel e não deve ser exportada de forma padrão.
  IModel,
};