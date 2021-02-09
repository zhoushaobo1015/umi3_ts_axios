import axios from 'axios';
export default {
    namespace: 'guidanceStatus',
    state: {
        loading: true,
        DownloadPDf: true,
        comment: true,
        control: true,
        diagnose: true,
        hotpost: true,
        hottopic: true,
        letter: true,
        pagecomparison: true,
        pagelist: true,
        pagerank: true,
        postCommon: true,
        posthistory: true,
        postlist: true,
        postmanage: true,
        postreview: true,
        promotion: true,
        queue: true,
        realtimemonitor: true,
        schedule: true,
        topic: true,
    },

    reducers: {
        updata(state, { payload }) {
            return { ...state, [payload]: true };
        },
        set(state, { payload }) {
            return { ...state, ...payload };
        },
    },
    effects: {
        * getGuidanceFromCloud(payload, { put, call, select }) {

            let data = yield call(requestGuidanceStatus);

            yield put({ type: 'set', payload: data });
        },
    },
};
async function requestGuidanceStatus() {
    let guidanceStatus = {};
    return axios.post('/users/guidance/status', {})
        .then(res => {
            if (res && res.status_code === 200) {
                guidanceStatus = res.finished_info;
            }
            return guidanceStatus;
        }).catch((err) => {
            return guidanceStatus;
        });
}