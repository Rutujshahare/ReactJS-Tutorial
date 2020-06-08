import React from 'react'

function FamilyList() {
    const Name=
    [
        {
        id:1,
        Name:'rutuj',
        Family:'Shahare'
        },
        {
            id:2,
            Name:'ashu',
            Family:'shahare'
        },
        {
            id:3,
            Name:'rahul',
            Family:'jangilwar'
        },
        {
            id:4,
            Name:'Shrikanth',
            Family:'Damya'
        }
       
    ]
   const familylist= Name.map((name,index)=><h2 key={index} > {index} your name is {name.Name} and your family is {name.Family}</h2>)
    return (
        <div>
            {familylist}
        </div>
    )
}

export default FamilyList
