import React from 'react'

function page({params}) {
    console.log(params);
  return (
    <div>
      <h1>catch all routes</h1>

      <h2>------------------------</h2>
      <ul>
        {params.dpath.map((item)=>{
            return(
                <li>{item}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default page
