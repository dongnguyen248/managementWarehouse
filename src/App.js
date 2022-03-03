import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Inventory from './pages/Inventory/Inverntory';
import ExportHistory from './pages/HistoryExport/ExportHistory';
import ImportHistory from './pages/HistoryImport/ImportHistory';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import { Routes, Route, useRoutes } from 'react-router-dom';
import UsersList from 'pages/paginateTest/UsersList';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inventory' element={<Inventory />} />
                <Route path='/history-export' element={<ExportHistory />} />
                <Route path='/history-import' element={<ImportHistory />} />
                <Route path='/user-list' element={<UsersList />} />

                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
}
export default App;
