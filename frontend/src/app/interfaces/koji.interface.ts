// @@editor
export interface IKojiConfigEditor {
  key: string;
  icon?: string;
  name: string;
  source: string;
  fields?: IKojiConfigEditorField[];
  [key: string]: any;
}
export interface IKojiConfigEditorField {
  key: string;
  name: string;
  description: string;
  type?: string;
  typeOptions?: object | any;
  [key: string]: any;
}

// backend (api endpoint absolute routes)
export interface IKojiConfigBackend {
  [key: string]: any;
}

// deploy (rules)
export interface IKojiConfigDeploy {
  backend: IKojiConfigDeployParams;
  frontend: IKojiConfigDeployParams;
  subdomain: string;
  [key: string]: any;
}
export interface IKojiConfigDeployParams {
  commands: string[];
  injections?: any[];
  output: string;
  [key: string]: any;
}

// develop
export interface IKojiConfigDevelop {
  backend: IKojiConfigDevelopParams;
  frontend: IKojiConfigDevelopParams;
  [key: string]: any;
}
export interface IKojiConfigDevelopParams {
  events: object;
  path: string;
  port: number | string;
  startCommand: string;
  [key: string]: any;
}

// metadata (app)
export interface IKojiConfigMetadata {
  name?: string;
  short_name?: string;
  description?: string;
  gaCode?: string;
  icon?: string;
  image?: string;
  url?: string;
  [key: string]: any;
}

// pages
export interface IKojiConfigPages {
  name: string;
  route: string;
  path: string;
  [key: string]: any;
}

// routes (api endpoint relative routes)
export interface IKojiConfigRoutes {
  isProtected: boolean;
  method: string;
  name: string;
  path: string;
  route: string;
  [key: string]: any;
}

// koji config
export interface IKojiConfig {
  ['@@editor']?: IKojiConfigEditor;
  backend?: IKojiConfigBackend[];
  deploy: IKojiConfigDeploy;
  develop: IKojiConfigDevelop;
  metadata?: IKojiConfigMetadata;
  pages?: IKojiConfigPages[];
  routes?: IKojiConfigRoutes[];
  [key: string]: any;
}
