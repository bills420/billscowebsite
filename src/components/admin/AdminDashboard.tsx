import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';

interface ServiceRequest {
  id: string;
  created_at: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
}

const AdminDashboard = () => {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('service_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: ServiceRequest['status']) => {
    try {
      const { error } = await supabase
        .from('service_requests')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      fetchRequests();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return <div className="text-pure-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-deep-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-pure-white">Service Requests</h1>
        
        <div className="bg-matte-black rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4 text-pure-white">Date</th>
                <th className="text-left p-4 text-pure-white">Name</th>
                <th className="text-left p-4 text-pure-white">Email</th>
                <th className="text-left p-4 text-pure-white">Service</th>
                <th className="text-left p-4 text-pure-white">Status</th>
                <th className="text-left p-4 text-pure-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-800">
                  <td className="p-4 text-off-white">
                    {new Date(request.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-off-white">{request.name}</td>
                  <td className="p-4 text-off-white">{request.email}</td>
                  <td className="p-4 text-off-white">{request.service}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      request.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      request.status === 'contacted' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select
                      value={request.status}
                      onChange={(e) => updateStatus(request.id, e.target.value as ServiceRequest['status'])}
                      className="bg-deep-black text-pure-white p-2 rounded border border-gray-700"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;