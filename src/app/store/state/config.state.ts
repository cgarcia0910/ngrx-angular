import { IConfig } from 'src/app/models/config.interface';
// import { IConfig } from './models/config.interface';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: undefined
};

