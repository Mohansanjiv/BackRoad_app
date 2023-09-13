import React from 'react'

const SocialLinks = ({id,href,icon,itemClass}) => {
  return (
    <div>
        <li key={id}>
               <a href={href} target='_blank' rel="noreferrer" className={itemClass}>
               <i className={icon}></i></a>
            </li>
    </div>
  )
}

export default SocialLinks
