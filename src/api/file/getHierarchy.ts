import { getAxiosInstance } from '../util'

interface Params {
  fileId: number | string
}

const getHierarchy = (params: Params): Promise<{ projectId: any, hierarchy: any }> => {
  return new  Promise((resolve, reject) => {
    const { fileId } = params ?? {}
    getAxiosInstance()
    .get(`/paas/api/file/getParentModuleAndProjectInfo?id=${fileId}`).then(({ data }: any) => {
      if (data?.code === 1) {
        resolve(data?.data || {})
      } else {
        reject('查询文件失败')
      }
    })
  })
}
export default getHierarchy