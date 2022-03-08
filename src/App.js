import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Inventory from './pages/Inventory/Inverntory';
import ExportHistory from './pages/HistoryExport/ExportHistory';
import ImportHistory from './pages/HistoryImport/ImportHistory';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import './App.css';
import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import UsersList from 'pages/paginateTest/UsersList';

function App() {
    const user = useSelector((state) => state.persistedReducer.user.currentUser);
    // console.log(user)
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Inventory />} />
                <Route path='/history-export' element={<ExportHistory />} />
                <Route path='/history-import' element={<ImportHistory />} />
                <Route path='/user-list' element={<UsersList />} />
                <Route
                    path='/login'
                    element={user ? <Navigate to='/' /> : <Login />}
                />
            </Routes>
        </div>
    );
}
export default App;
