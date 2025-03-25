import { createContext, useEffect, useState } from "react";

export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );
  //this is to load aquestions from json file
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/questions.json`
        );
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error loading questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  //this is load bookmark from local storage

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedQuestions(savedBookmarks);
  }, []);

  // Function to toggle bookmarks
  const toggleBookmark = (question) => {
    setBookmarkedQuestions((prev) => {
      const isBookmarked = prev.some((q) => q.id === question.id);
      const updatedBookmarks = isBookmarked
        ? prev.filter((q) => q.id !== question.id) // Remove from bookmarks
        : [...prev, question]; // Add to bookmarks

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <QuestionContext.Provider
      value={{ questions, bookmarkedQuestions, toggleBookmark }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
