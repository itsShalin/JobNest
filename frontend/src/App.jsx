

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import MyJobs from "./pages/MyJobs";
import EditJob from "./pages/EditJob";

import MyApplications from "./pages/MyApplications";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;