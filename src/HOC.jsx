import React from 'react'
import {Route} from 'react-router-dom';
import Layout from './Layout';

function HOC({component: Component, ...rest}) {
    return (
        <>
         <Route {...rest} component={(props)=>(
             <Layout>
                 <Component {...props}/>
             </Layout>
         )}/>   
        </>
    );
}

export default HOC;