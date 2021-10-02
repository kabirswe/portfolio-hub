import  './Navbar.scss'
import React from 'react'

export interface NavbarProps{
    title: string,
    listItem1:string,
    listItem3:string,
    listItem4:string

}

export  const Navbar:React.FC<NavbarProps>=({title,listItem1,listItem3,listItem4})=> {
    return (
        <div className="Navbarsection">
            <ul>
               <li>
                   <a href="#">
                       {title}
                   </a>
               </li>
               <li>
                   <a href="#">
                       {listItem1}
                   </a>
               </li>
               <li>
                   <a href="#">
                       {listItem3}
                   </a>
               </li>
               <li>
                   <a href="#">{listItem4}</a>
               </li>
            </ul>
            
        </div>
    )
}


