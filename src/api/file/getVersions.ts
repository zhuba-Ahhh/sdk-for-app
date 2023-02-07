import axios from 'axios';

interface Params {
  fileId: number | string
  pageIndex?: number
  pageSize?: number
}

const getVersions = (params: Params): Promise<any[]> => {
  return new  Promise((resolve, reject) => {
    const { fileId, pageIndex = 1, pageSize = 100 } = params ?? {}
    axios({ 
      method: 'get', 
      url: '/paas/api/workspace/publish/versions',
      params: {
        fileId,
        pageIndex,
        pageSize
      }
    }).then(({ data }) => {
      if (data?.data) {
        resolve(data?.data || [])
      } else {
        reject('查询文件失败')
      }
    })
  })
}
export default getVersions