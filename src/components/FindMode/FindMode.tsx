import React, { useEffect, useState } from 'react'

 const FindMode = () => {
//    const [osTheme,setOsTheme] = useState<boolean>()

    useEffect(()=>{
        const darkOS = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
      console.log( darkOS.toString().replace(/true/g, "dark_theme"));
      },[])
      
      return(
        <h2></h2>
      )
}
export default FindMode