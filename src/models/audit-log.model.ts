import {Entity, model, property} from '@loopback/repository';

export enum Action {
  INSERT_ONE = 'INSERT_ONE',
  INSERT_MANY = 'INSERT_MANY',
  UPDATE_ONE = 'UPDATE_ONE',
  UPDATE_MANY = 'UPDATE_MANY',
  DELETE_ONE = 'DELETE_ONE',
  DELETE_MANY = 'DELETE_MANY',
}

@model({
  name: 'audit_logs',
  settings: {
    strict: false,
  },
})
export class AuditLog extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  action: Action;

  @property({
    name: 'acted_at',
    type: 'date',
    required: true,
  })
  actedAt: Date;

  @property({
    name: 'acted_on',
    type: 'string',
  })
  actedOn?: string;

  @property({
    name: 'action_key',
    type: 'string',
    required: true,
  })
  actionKey: string;

  @property({
    name: 'entity_id',
    type: 'string',
    required: true,
  })
  entityId: string;

  @property({
    type: 'string',
    required: true,
  })
  actor: string;

  @property({
    type: 'object',
  })
  before?: object;

  @property({
    type: 'object',
  })
  after?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any; //NOSONAR

  constructor(data?: Partial<AuditLog>) {
    super(data);
  }
}
