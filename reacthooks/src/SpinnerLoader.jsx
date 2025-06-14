import React, { useEffect, useState } from 'react'

function SpinnerLoader() {
    // const [text, setText] = useState('')
    // const [showImg, setShowImg] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setText('Wait for 3 secondes to be loaded, did you see the spinner')
    //     }, 3000)
    // }, [])
  return (
    <>
        <div className='flex justify-center items-center h-[85vh] w-full bg-[#0f0f0f]' >
            <img src="/images/Rolling2.gif" />
        </div>
    </>
  )
}

export default SpinnerLoader
