import React from 'react';

export default function ContactLIst(props) {
    
    const contacts = props.contact.map(person => {
        
        return (
            <table key={person.id}>
                <tbody>
                 <tr>
                 <th> Picture:  </th>
                 <th>Name: </th>
                 <th>Popularity: </th>     
                 <th>Action: </th>               
                </tr>

                <tr>
                <td><img src={person.pictureUrl} alt={person.name} width="100"></img></td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td><button onClick={person.deleteContact}> Delete</button></td>
                </tr>
                </tbody>
            </table>
        )
    });
   
    return (
    <div>
        {contacts}
    </div>
    
    )
}