import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createIncrementAction,createDecrementAction,createDecrementybAction} from "../redux/actions/count"
 class counter extends Component {
    state = {
        // count: 0
    }
    increment = () => {
        // 获取对应ref的valu
        const { value } = this.sel
        this.props.uiincrement(value*1)
        // store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        // 获取对应ref的value
        const { value } = this.sel
        this.props.uidecrement(value*1)

        // store.dispatch(createDecrementAction(value*1))
    }
    incrementifodd = () => {
        // 获取对应ref的value
        const { value } = this.sel
        const count=this.props.conut
        if (count % 2 !== 0) {
            this.props.uiincrement(value*1)

        }

    }
    incrementyb = () => {
            // 获取对应ref的value
            const { value } = this.sel
        this.props.uiincrementifodd(value*1,500)

            // store.dispatch(createDecrementybAction(value*1,500))
            
    }
    render() {
        return (
            <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                <h2>
                    所得到的结果是{this.props.conut}

                </h2>
                <h4>人数一共为{this.props.person}</h4>
                <select name="" id="" ref={c => this.sel = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>相加</button> &nbsp;
                <button onClick={this.decrement}>相减</button> &nbsp;
                <button onClick={this.incrementifodd}>结果为奇数时相加</button> &nbsp;
                <button onClick={this.incrementyb}>异步相加</button> &nbsp;
            </div>
        )
    }
}

export default connect(
    state=>({conut:state.count,
             person:state.person.length  
    }),
    { uiincrement:createIncrementAction,
      uidecrement:createDecrementAction,
      uiincrementifodd:createDecrementybAction,
    }
)(counter)
