import React from 'react'

function NameList() {
    const Person=[
        {
            id:1,
            Name:'rutuj',
            Known:'Shahare'
        },
        {
            id:2,
            Name:'rahul',
            Known:'Shahare'
        }
    ]
const nameList= Person.map(name=><h2 key={name.id}> {name.id} {name.Name} and {name.id} and he known as{name.Known}</h2>)
    return <div>{nameList}  </div>
    
}

export default NameList
