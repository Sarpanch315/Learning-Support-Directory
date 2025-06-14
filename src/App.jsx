import { Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderDetail from './pages/ProviderDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<ProviderList />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
      </Routes>
    </div>
  );
}

export default App;