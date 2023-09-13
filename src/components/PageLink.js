import React from 'react'

const PageLink = ({id,href,text,itemClass}) => {
  return (
    <div>
          <li key={id}>
                <a href={href} className={itemClass}>
                    {text}
               </a>
              </li>
    </div>
  )
}

export default PageLink
