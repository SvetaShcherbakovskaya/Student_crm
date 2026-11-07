import Header from "./components/Header.jsx";
import StudentList from "./components/StudentList.jsx";
import Footer from "./components/Footer.jsx";
import { students } from "./data/students.js";

import "./App.css";

function App() {
  return (
      <>
        <Header />

        <main>
          <StudentList students={students} />
        </main>

        <Footer />
      </>
  );
}

export default App;