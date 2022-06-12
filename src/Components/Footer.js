import React from 'react'
import linkedin from "../Icons/linkedin.png"
import github from "../Icons/github.png"
import facebook from "../Icons/facebook.png"

const Footer = () => {
  return (
    <div className="footer">
        <a href='https://www.linkedin.com/in/majdi-rekik/' target='_blank' className='iconl'><img src={linkedin} className='icon' /></a>
        <a href='https://github.com/SiSmog' target='_blank' className='iconl'><img src={github}className='icon'/></a>
        <a href='https://www.facebook.com/majdi.rekik.5' target='_blank' className='iconl'><img src={facebook}className='icon'/></a>
    </div>
  )
}
export default Footer