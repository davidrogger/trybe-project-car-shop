interface IService<T> {
  create(payload:unknown):Promise<T>;
  read():Promise<T[]>;
}

export default IService;
