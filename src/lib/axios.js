import { setError } from '../features/common/httpErrors'
import store from '../store/configureStore'
import axios from 'axios'

// リクエスト時の共通処理
//  - authorizationの付与
axios.interceptors.request.use(config => {
    if(config.url.match('/login')){return config}

    const state = store.getState()
    if(!state['common/auth'].jwt){
        console.log('is not authenticated.')
        throw new axios.Cancel('NOT_AUTHENTICATED')
    }
    config.headers.Authorization = state['common/auth'].jwt

    // リクエストボディ確認（DEBUG用）
    // if (config.body != null) console.log(config.body)

    return config
})

// レスポンス時の共通処理
//  - 200以外のステータスコードはエラー出力
axios.interceptors.response.use(
    (response) => {
        return response
    },(error) => {
        if(error.message === 'NOT_AUTHENTICATED'){ return }

        let message = ''
        if(error.response){
            message = error.message + '\n\n' + 'responseBody:\n' + JSON.stringify(error.response.data) + '\n\nstack:\n' + error.stack
        }else{
            message = error.message + '\n\nstack:\n' + error.stack
        }
        store.dispatch(setError({code:'Error', message: '通信エラーが発生しました。\n\n' + message }))
        return Promise.reject(error)
    }
)

export default axios
