import ModelService from '@/contracts/ModelService'
import { axios } from '@/plugins/axios'
import { type AxiosResponse } from 'axios'
import type { User } from '@/types/User'
import type DataResponse from '@/types/DataResponse'
import type PaginatedResponse from '@/types/PaginatedResponse'

export default class UserService extends ModelService<User> {
  // workaround to fulfill the contract
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index (page: number, filters: string, perPage: number | undefined): Promise<AxiosResponse<PaginatedResponse<User>>> {
    throw new Error('Function not defined.')
  }

  async show (id: number): Promise<AxiosResponse<DataResponse<User>>> {
    return axios.get(`user/${id}`)
  }

  async store (model: User): Promise<AxiosResponse<DataResponse<User>>> {
    return axios.post(`user`, model)
  }

  async update (id: number, model: User): Promise<AxiosResponse<DataResponse<User>>> {
    return axios.put(`user/${id}`, model)
  }

  async destroy (model: User): Promise<AxiosResponse> {
    return axios.delete(`user/${model}`, { data: model })
  }
}
