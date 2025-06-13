import { FileWarning } from 'lucide-react'
import React from 'react'

function PageNotFound() {
  return (
    <div className='w-full flex flex-col gap-3 justify-center items-center text-stone-600 bg-[#0f0f0f] h-[80vh]'>
      <FileWarning size={55}/>
      <h1 className='text-4xl font-semibold text-center  w-full'>Page Not Found.</h1>
    </div>
  )
}

export default PageNotFound
