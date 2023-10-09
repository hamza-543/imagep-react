import { post } from '../Api/base';

export const ImageApi = {
  convert: (params) => post('api/v1/convert-to-jpeg', params),
}
