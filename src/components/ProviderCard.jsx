function ProviderCard({ provider }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{provider.name}</h2>
      <p className="text-sm">{provider.specialization}</p>
      <p className="text-sm text-gray-600">{provider.location}</p>
      <p className="text-yellow-500">Rating: {provider.rating}</p>
    </div>
  );
}

export default ProviderCard;