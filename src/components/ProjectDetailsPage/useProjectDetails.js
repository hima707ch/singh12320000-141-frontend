import { useState, useEffect } from 'react';

const useProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch('/api/properties/1');
        if (!response.ok) throw new Error('Failed to fetch project details');
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  return { project, loading, error };
};

export default useProjectDetails;