interface IService<T> {
  create(payload:unknown):Promise<T>;
  read():Promise<T[]>;
  readOne(id:string):Promise<T>;
}

export default IService;
