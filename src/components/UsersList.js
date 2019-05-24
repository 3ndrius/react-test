import React from 'react'

export default function UsersList({users}) {
  
    return (
        users.length > 0 ?
        <ul>
            {
                users.map((user, id) => {
                    return(
                        <li key={id}>{user}</li>
                    )
                })
            }
        </ul>
         :
         <p>{"User not found!"}</p>
    )
    
    
}
