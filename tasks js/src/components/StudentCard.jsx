export default function StudentCard({ 
  name, 
  age, 
  major = "Computer Science", 
  graduated 
}) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h2>{name}</h2>
        <span className={`badge ${graduated ? "graduated" : "student"}`}>
          {graduated ? "Graduated" : "Student"}
        </span>
      </div>
      <div className="card-body">
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Major:</strong> {major}</p>
      </div>
    </div>
  );
}