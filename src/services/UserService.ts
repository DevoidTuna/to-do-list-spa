import { axios } from '@/plugins/axios'
import { type AxiosResponse } from 'axios'
import type { User } from '@/types/User'
import type DataResponse from '@/types/DataResponse'

type userResponse = { user: User; token: string }

export default class UserService {
  async login (
    email: string,
    password: string
  ): Promise<AxiosResponse<DataResponse<userResponse>>> {
    return axios.post('/auth/login', {
      email,
      password,
    })
  }

  async register (model: object): Promise<AxiosResponse<DataResponse<userResponse>>> {
    return axios.post(`/auth/register`, model)
  }

  async update (
    id: number,
    model: User
  ): Promise<AxiosResponse<DataResponse<User>>> {
    return axios.put(`/user/${id}`, model)
  }
}
