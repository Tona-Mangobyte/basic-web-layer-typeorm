
export interface QueryInterface<Entity, QueryEntity> {
    paginate(options: QueryEntity, req?: any, qOptions?: any): Promise<any>;
    searchPaginate(query: QueryEntity, req?: any): Promise<any>;
    countRecord(options?: QueryEntity, req?: any): Promise<number>;
    findRecord(options?: QueryEntity, req?: any): Promise<any>;
    findRecordAndCount(options?: QueryEntity, req?: any): Promise<any>;
    querySql(options?: QueryEntity, req?: any): Promise<any>;
}
