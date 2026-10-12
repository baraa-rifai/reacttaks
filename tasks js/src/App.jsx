import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import StudentCard from "./components/StudentCard";
import "./Pages/style.css";

function App() {
  return (
    <>
      <Header />
      
      <main className="main-section">
        <h1 className="page-title">Student Profiles</h1>

        <div className="cards-container">
          <StudentCard 
            name="Ahmad" 
            age={22} 
            major="Software Engineering" 
            graduated={true} 
          />

          <StudentCard 
            name="Mohammed" 
            age={20} 
            graduated={false} 
          />

          <StudentCard 
            name="Ali" 
            age={24} 
            major="Cyber Security" 
            graduated={true} 
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;