const HealthSummary = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Health Summary</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Diagnoses</h3>
            <ul className="list-disc list-inside">
              <li>Common Cold (2 days ago)</li>
              <li>Allergic Rhinitis (1 week ago)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Ongoing Symptoms</h3>
            <ul className="list-disc list-inside">
              <li>Mild headache</li>
              <li>Occasional cough</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default HealthSummary
  
  