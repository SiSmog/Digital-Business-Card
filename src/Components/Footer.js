import React from 'react'
import linkedin from "../Icons/linkedin.png"
import github from "../Icons/github.png"
import facebook from "../Icons/facebook.png"

const Footer = () => {
  return (
    <div className="footer">
        <a href='https://www.linkedin.com/in/majdi-rekik/' target='_blank' rel="noreferrer" className='iconl'><img src={linkedin} className='icon' alt='' /></a>
        <a href='https://github.com/SiSmog' target='_blank' rel="noreferrer" className='iconl'><img src={github}className='icon' alt=''/></a>
        <a href='https://www.facebook.com/majdi.rekik.5' target='_blank' rel="noreferrer" className='iconl'><img src={facebook}className='icon' alt=''/></a>
    </div>
  )
}
export default Footer