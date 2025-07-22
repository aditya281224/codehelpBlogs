import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,totalPages,PageChange}=useContext(AppContext);

  
  return (
    <div className='flex flex-row'>
      <div>
        { page>1?
          <button onClick={()=>PageChange(page-1)}>prev</button>:null
        }
      </div>
      <div>
        {
          page<totalPages?<button onClick={()=>PageChange(page+1)}>Next</button>:null
        }

        <p>
          Page No - {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
