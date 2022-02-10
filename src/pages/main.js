import { Navigate, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import Profile from './profile';
import CSWTable from './table';

function Main() {
    return (
        <main className="csw-app">
            <Header />
            <Routes>
            <Route exact path='/' element={<Navigate to='profile' />} />
                <Route path='/profile' element={<Profile />} ></Route>
                <Route path='/table' element={<CSWTable />} ></Route>
                <Route path='/json' element={<Profile />} ></Route>

            </Routes>
        </main>
    );
}

export default Main;
