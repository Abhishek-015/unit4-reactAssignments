import React from 'react'

const User = ({data}) => {
    return (
        <div className='container-fluid'>
        {data.map(({avatar_url , id, login, html_url} )=> 
         <div class="card mb-3 col-6" >
         <div class="row g-0">
           <div class="col-md-4">
             <img src={avatar_url} class="img-fluid rounded-start" alt="..." height='128px' width='128px' />
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">{login}</h5>
               <a href={html_url} className='btn btn-outline-success'>View Profile</a>
             </div>
           </div>
         </div>
       </div>
        )}
      </div>
    )
}

export default User
