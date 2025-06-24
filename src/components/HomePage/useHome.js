import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/search');
        const data = await response.json();
        
        if (response.ok) {
          setProperties(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleContact = async (contactData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error('Failed to send message');
    }
  };

  return {
    properties,
    loading,
    error,
    handleContact,
  };
};

export default useHome;