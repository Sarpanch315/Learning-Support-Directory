import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderDetail from './pages/ProviderDetail';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<ProviderList />} />
    <Route path="/providers/:id" element={<ProviderDetail />} />
  </Routes>
</BrowserRouter>