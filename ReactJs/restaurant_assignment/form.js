import { useState } from "react"

export const Form=()=>{
    // total obj in array.
    const [data, setData] = useState([])

 
    // single obj initial state
    const initialState = {
        username:"",
        address:"",
        payment_methods:"",
        votes:"",
        reviews:"",
        image:'',
        costforone:"",
        min:"",
        address1:""
    }

    const [formData,setformData]=useState(initialState);

    const handlesubmit=(e)=>{
        e.preventDefault();
        setData(prev => [...prev, formData])
    }



  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };
  console.log(data)

    const {
        username,
    address,
    payment_methods,
    votes,
    reviews,
    image,
    costforone,
    address1,
      min,} = formData;

    return <div className='container'>

<form className='mt-5'>
    <legend>Form Details</legend>
<div class="mb-2">
    <label class="form-label">User name</label>
    <input type="text" class="form-control form-control-sm" name='username' onChange={handleChange} value={username} />
  </div>
  <div class="mb-2">
    <label class="form-label">Address</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={address} name='address' />
  </div>
  <div class="mb-2">
    <label class="form-label">Address1</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={address1} name='address1' />
  </div>


  <div class="mb-2">
    <label class="form-label">Image</label>
    <input name="image" value={image} name='image' type="text" class="form-control form-control-sm" onChange={handleChange} ></input> 
  </div>
  {/* <div class="mb-2">
    <label class="form-label">Payment methods</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={payment_methods} name='payment_methods' />
  </div> */}
  Payment Method:{""}
  <div class="mb-2">
  <select name="payment_methods" class="form-control form-control-sm" id="" onChange={handleChange} value={payment_methods}>
      <option value="UPI">UPI</option>
      <option value="Card">Card</option>
      <option value="Cash">Cash</option>
  </select>
  </div>


  <div class="mb-2">
    <label class="form-label">Reviews</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={reviews} name='reviews' />
  </div>
  <div class="mb-2">
    <label class="form-label">Votes</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={votes} name='votes' />
  </div>
  <div class="mb-2">
    <label class="form-label">Cost For One</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={costforone} name='costforone' />
  </div>
  <div class="mb-2">
    <label class="form-label">Min Amount</label>
    <input type="text" class="form-control form-control-sm" onChange={handleChange} value={min} name='min' />
  </div>

  <button type="button" class="btn btn-outline-primary btn-sm" onClick={handlesubmit}>Submit</button>
</form>



<table class="table table-striped ">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Username</th>
      <th scope="col">Address</th>
      <th scope="col">Payment Methods</th>
      <th scope="col">Votes</th>
      <th scope="col">Reviews</th>
      <th scope="col">Cost for one</th>
      <th scope="col">Min Amount</th>
    </tr>
  </thead>
  <tbody>

  {data.map(({username,
    address,
    payment_methods,
    votes,
    reviews,
    image,
    address1,
    costforone,
      min})=> {
    return (
        <tr>
            <td>
                <img src={image} alt="" height='32px' width='32px' />
            </td>
            <td>{username}</td>
            <td>{address}
            <tr>pin -{address1}</tr>
            </td>
           
            <td>{payment_methods}</td>
            <td>{votes}</td>
            <td>{reviews}</td>
            <td>{costforone}</td>
            <td>{min}</td>
        </tr>
    )
    })} 
   

  </tbody>
</table>    
</div>
  
}