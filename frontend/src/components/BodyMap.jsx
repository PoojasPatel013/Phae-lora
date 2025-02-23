const BodyMap = ({ onSymptomSelect }) => {
    // This is a placeholder. In a real application, you'd use a more sophisticated
    // 3D body map library or SVG-based solution.
    const bodyParts = ["Head", "Chest", "Abdomen", "Left Arm", "Right Arm", "Left Leg", "Right Leg"]
  
    return (
      <div className="grid grid-cols-2 gap-2">
        {bodyParts.map((part) => (
          <button
            key={part}
            onClick={() => onSymptomSelect(part)}
            className="p-2 bg-gray-200 rounded hover:bg-blue-200 transition duration-300"
          >
            {part}
          </button>
        ))}
      </div>
    )
  }
  
  export default BodyMap
  
  