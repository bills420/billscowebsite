import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import { downloadCSV } from '../../utils/csvGenerator';

interface ContractDownloadProps {
  buttonText?: string;
  className?: string;
}

const ContractDownload: React.FC<ContractDownloadProps> = ({ 
  buttonText = "Download Contract Template",
  className = ""
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    projectName: '',
    startDate: '',
    services: ['Web Development', 'Maintenance', 'SEO'],
    totalAmount: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    downloadCSV(formData);
    setShowForm(false);
  };

  return (
    <div className={className}>
      <button
        onClick={() => setShowForm(true)}
        className="flex items-center gap-2 bg-pure-white text-deep-black px-6 py-3 rounded-lg hover:bg-off-white transition-colors"
      >
        <FileDown className="h-5 w-5" />
        {buttonText}
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-deep-black/80 flex items-center justify-center p-6 z-50">
          <div className="bg-matte-black p-8 rounded-lg w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6">Contract Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Client Name</label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={e => setFormData({...formData, clientName: e.target.value})}
                  className="w-full p-2 rounded bg-deep-black border border-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Client Email</label>
                <input
                  type="email"
                  required
                  value={formData.clientEmail}
                  onChange={e => setFormData({...formData, clientEmail: e.target.value})}
                  className="w-full p-2 rounded bg-deep-black border border-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={e => setFormData({...formData, projectName: e.target.value})}
                  className="w-full p-2 rounded bg-deep-black border border-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Start Date</label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={e => setFormData({...formData, startDate: e.target.value})}
                  className="w-full p-2 rounded bg-deep-black border border-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Total Amount</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.totalAmount}
                  onChange={e => setFormData({...formData, totalAmount: Number(e.target.value)})}
                  className="w-full p-2 rounded bg-deep-black border border-gray-700"
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-off-white hover:text-pure-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-pure-white text-deep-black rounded hover:bg-off-white"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractDownload;