export default function jsreducer(preState, action) {
    // preState代表上一个返回值
    // action包含type和传过来的值data
    const { type, data } = action
    switch (type) {
        //如果传过来的type匹配上了就执行
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return 0
    }
}