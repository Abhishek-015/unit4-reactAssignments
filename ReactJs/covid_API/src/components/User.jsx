import React from 'react'

const User = ({data}) => {
    return (
        <div className='container-fluid'>
        {data.map(({center_id,district_name,fee_type,name,pincode,min_age_limit,available_capacity,block_name} )=> 
        <div className="container">
          <div> <span className="color"> Center Id </span>: {center_id}</div>
          <div> <span className="color">District Name</span> : {district_name}</div>
          <div> <span className="color">Fee</span> : {fee_type}</div>
          <div> <span className="color">Name </span>: {name}</div>
          <div> <span className="color">Min Age Limit</span> : {min_age_limit}</div>
          <div> <span className="color">Availability</span> : {available_capacity}</div>
          <div> <span className="color">Block Name</span> : {block_name}</div>
          <div> <span className="color">Pin Code </span>: {pincode}</div>
        </div>
        )}
      </div>
    )
}

export default User
