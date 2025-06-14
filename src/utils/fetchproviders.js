import data from '../data/providers.json';

export const fetchProviders = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
  });

export const fetchProviderById = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const provider = data.find(p => p.id === Number(id));
      provider ? resolve(provider) : reject('Provider not found');
    }, 1000);
  });