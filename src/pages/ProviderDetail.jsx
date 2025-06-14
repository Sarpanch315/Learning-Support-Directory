import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProviderById } from '../utils/fetchproviders';

function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProviderById(id)
      .then(setProvider)
      .catch(err => setError(err));
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!provider) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">{provider.name}</h2>
      <p className="mb-1">{provider.specialization}</p>
      <p className="mb-1 text-gray-600">{provider.location}</p>
      <p className="mb-2 text-yellow-500">Rating: {provider.rating}</p>
      <p className="mb-4">{provider.longDescription}</p>
      <p className="mb-1">Email: {provider.contactEmail}</p>
      <p className="mb-4">Phone: {provider.phoneNumber}</p>
      <button onClick={() => navigate(-1)} className="text-blue-500">← Back to List</button>
    </div>
  );
}

export default ProviderDetail;