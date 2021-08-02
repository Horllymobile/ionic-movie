/* eslint-disable @typescript-eslint/naming-convention */
import { movie } from './movie';

export interface data {
  page: number;
  results: Array<movie>;
  total_pages: number;
  total_results: number;
}
