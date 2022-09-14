interface IService<T> {
  create(payload:unknown):Promise<T>;
}

export default IService;
