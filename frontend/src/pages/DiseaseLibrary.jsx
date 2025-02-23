import React, { useState } from 'react';

const DiseaseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // This is a mock database of diseases. In a real application, this would come from an API.
  const diseases = [
    { name: 'Common Cold', symptoms: ['Runny nose', 'Sore throat', 'Cough'], firstAid: 'Rest and stay hydrated' },
    { name: 'Influenza', symptoms: ['Fever', 'Body aches', 'Fatigue'], firstAid: 'Rest, fluids, and consult a doctor if severe' },
    { name: 'Migraine', symptoms: ['Severe headache', 'Nausea', 'Light sensitivity'], firstAid: 'Rest in a dark, quiet room and consider over-the-counter pain relievers' },
  ];

  const filteredDiseases = diseases.filter(disease => 
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Disease Library</h1>
      <input
        type="text"
        placeholder="Search diseases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="space-y-6">
        {filteredDiseases.map((disease, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">{disease.name}</h2>
            <h3 className="text-lg font-semibold mb-2">Symptoms:</h3>
            <ul className="list-disc list-inside mb-4">
              {disease.symptoms.map((symptom, i) => (
                <li key={i}>{symptom}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">First Aid:</h3>
            <p>{disease.firstAid}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseLibrary;
