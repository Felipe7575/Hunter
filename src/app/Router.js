import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '../app/Layout';
import Home from '../pages/home';




const Router = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                <Route index element={<Home></Home>}/>
            </Route> 
        </Routes>
    </BrowserRouter>
    );
}

export default Router;