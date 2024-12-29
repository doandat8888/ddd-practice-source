/* eslint-disable prettier/prettier */
export interface Mapper<DomainEntity, DataModel> {
  toDomain(dataModel: DataModel): DomainEntity;
  toDataModel(domainEntity: DomainEntity): DataModel;
}
