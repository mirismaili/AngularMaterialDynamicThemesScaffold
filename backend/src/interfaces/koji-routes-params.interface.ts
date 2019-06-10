type kojiRoutesParamsType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IkojiRoutesParams {
  name: string;
  path: string;
  route: string;
  method: kojiRoutesParamsType;
  isProtected: boolean
}
