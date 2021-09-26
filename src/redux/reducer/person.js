const firper = [{ id: '001', name: "tom", age: "18" }]
export default function (preState = firper, action) {
    const { type, data } = action
    switch (type) {
        case 'addperson':
            return [data, ...preState]
        default:
            return preState
    }
}