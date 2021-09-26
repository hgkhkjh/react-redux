import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addp} from "../redux/actions/person"
import {nanoid} from 'nanoid'
 class person extends Component {
    submit=()=>{
        
        const pname=this.name.value
        const page=this.age.value
        if(page===""){
          alert("请输入年龄")
          return
        }else if(pname===""){
            alert("请输入姓名")
            return
        }
        else{
           const perobj={id:nanoid(),name:pname,age:page}
        this.props.addperson(perobj)
        this.name.value=''
        this.age.value=''
        console.log(this.props.persons); 
        }
        
        
    }

    render() {
        return (
            <div style={{ marginTop: "3%", marginLeft: "35%" }}>
                <h4>上面的和为{this.props.count}</h4>
                <input type="text" placeholder="请输入姓名" ref={c=>this.name=c} />
                <input type="number" placeholder="请输入年龄" ref={c=>this.age=c} />
                <button onClick={this.submit}>提交</button>
                <br />
                <ul>
                    {
                        this.props.persons.map((a)=>{
                            return <li key={a.id}> 姓名:{a.name}--年龄:{a.age} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default connect (
    state=>({persons:state.person,
             count:state.count 
     }),
    { addperson:addp}
)(person)
