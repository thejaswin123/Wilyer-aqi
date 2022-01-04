import React from 'react'
import Cards from './Components/cards';

function Layout({children}) {
    
    return (
        <div>
        <Cards/>
        {/* <div className='container mx-auto p-4 lg:px-20'>{children}</div> */}
        </div>
    );
}

export default Layout;