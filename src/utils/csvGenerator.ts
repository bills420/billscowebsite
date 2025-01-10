import { COMPANY_INFO } from './constants';

interface ContractData {
  clientName: string;
  clientEmail: string;
  projectName: string;
  startDate: string;
  services: string[];
  totalAmount: number;
}

export const generateServiceCSV = (data: ContractData): string => {
  const headers = [
    'Service Agreement Details',
    'Bills Co. Service Contract',
    '',
    `Date: ${new Date().toLocaleDateString()}`,
    '',
    'Company Information',
    `Provider: ${COMPANY_INFO.name}`,
    `Email: ${COMPANY_INFO.email}`,
    `Phone: ${COMPANY_INFO.phone}`,
    `Address: ${COMPANY_INFO.address}`,
    '',
    'Client Information',
    `Client Name: ${data.clientName}`,
    `Client Email: ${data.clientEmail}`,
    '',
    'Project Details',
    `Project Name: ${data.projectName}`,
    `Start Date: ${data.startDate}`,
    '',
    'Services Included',
    ...data.services.map(service => `• ${service}`),
    '',
    'Financial Details',
    `Total Amount: $${data.totalAmount.toFixed(2)}`,
    '',
    'Terms & Conditions',
    '1. Payment Terms: 50% upfront, 50% upon completion',
    '2. Project Timeline: As specified in detailed proposal',
    '3. Revisions: Two rounds of revisions included',
    '4. Additional Services: Quoted separately',
    '',
    'For full terms and conditions, visit:',
    `${COMPANY_INFO.website}/terms-of-service`
  ].join('\n');

  return headers;
};

export const downloadCSV = (data: ContractData, type: string = 'service') => {
  const csvContent = generateServiceCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${type}_contract_${data.projectName.replace(/\s+/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};