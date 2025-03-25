import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import QuestionBank from "./pages/QuestionBank";
import Bookmarks from "./pages/Bookmarks";
import MockExam from "./pages/MockExam";
import Statistics from "./pages/Statistics";
import Dashboard from "./components/dashboard/Dashboard";
import { useEffect } from "react";
import { requestNotificationPermission } from "./hooks/useNotification";
import { scheduleRandomQuestionNotification } from "./utils/notificationScheduler";
import questionsData from "../public/data/questions.json";

function App() {

  useEffect(() => {
    requestNotificationPermission();

    // Check if questionsData is available before scheduling notifications
    if (Array.isArray(questionsData) && questionsData.length > 0) {
      const notificationInterval = setInterval(() => {
        scheduleRandomQuestionNotification(questionsData);
      }, 1000 * 60 * 30); // Every 30 minutes

      return () => clearInterval(notificationInterval);
    }
  }, []);


  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow container mx-auto p-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<QuestionBank />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/mock-exam" element={<MockExam />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics /> } />
    </Routes>
    </main>
    <Footer />
    </div>
  );
}

export default App;
