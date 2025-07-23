import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,totalPages,PageChange}=useContext(AppContext);

  
  return (
    <div className='flex items-center gap-5 justify-center static'>
      
        { page>1?
          <button className='border border-red-600 ' onClick={()=>PageChange(page-1)}>prev</button>:null
        }
      
      
        {
          page<totalPages?<button className='border border-red-600' onClick={()=>PageChange(page+1)}>Next</button>:null
        }

        <p>
          Page No - {page} of {totalPages}
        </p>
      
    </div>
  )
}

export default Pagination
