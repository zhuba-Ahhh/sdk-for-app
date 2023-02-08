import axios from 'axios';

const save = (params: {userId, fileId, shareType, name, content, icon, namespace?, type?}): Promise<{}> => {
  return new Promise((resolve, reject) => {
    axios({ 
      method: 'post', 
      url: '/paas/api/workspace/saveFile',
      data: params
    }).then(({ data }) => {
      if (data?.code === 1) {
        resolve(data?.data);
      } else {
        reject('保存失败');
      }
    });
  });
}

export default save;