interface IService<T> {
  create(payload:unknown):Promise<T>;
  read():Promise<T[]>;
  readOne(id:string):Promise<T>;
  update(id:string, payload:unknown):Promise<T>;
  delete(id:string):Promise<void>;
}

export default IService;
