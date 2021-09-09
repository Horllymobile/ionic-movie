/* eslint-disable @typescript-eslint/naming-convention */
import { Movie } from './movie';

export interface data {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
