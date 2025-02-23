const LifestyleAssessment = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Lifestyle Assessment</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sleep Analysis</h3>
            <p>Average sleep duration: 7.5 hours</p>
            <p>Sleep quality: Good</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Activity Tracking</h3>
            <p>Daily steps: 8,500</p>
            <p>Active minutes: 45</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
            <ul className="list-disc list-inside">
              <li>Increase water intake</li>
              <li>Try to get 8 hours of sleep</li>
              <li>Add 15 minutes of moderate exercise to your daily routine</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default LifestyleAssessment
  
  