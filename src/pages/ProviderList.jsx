import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProviders } from '../utils/fetchProviders';
import ProviderCard from '../components/ProviderCard';

function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProviders().then(setProviders);
  }, []);

  const filtered = providers.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Learning Support Providers</h1>
      <input
        type="text"
        className="w-full p-2 mb-4 rounded border"
        placeholder="Search by name or specialization..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(provider => (
          <Link to={`/providers/${provider.id}`} key={provider.id}>
            <ProviderCard provider={provider} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProviderList;