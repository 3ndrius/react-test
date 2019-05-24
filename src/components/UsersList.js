import React from 'react'

export default function UsersList({users}) {
    return (
        <ul>
            {
                users.map((user, id) => {
                    return(
                        <li key={id}>{user}</li>
                    )
                })
            }
        </ul>
    )
}
