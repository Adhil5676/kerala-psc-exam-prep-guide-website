import { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";

export default function QuestionBank() {
  const { questions, bookmarkedQuestions, toggleBookmark } =
    useContext(QuestionContext);
  const [search, setSearch] = useState("");
  const [showAnswers, setShowAnswers] = useState({});

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the answer visibility for the question
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-500 ">Question Bank</h1>
      <p className="text-gray-400 mb-2">
        NB-All Questions are converted into malayalam as well as converted into
        .json file using chatgpt SO if you come across any error please let me
        know through links below{" "}
        <span className="text-pink-500"> HAPPY LEARNING.</span>{" "}
      </p>
      <p className="text-green-500 mb-3">
        {filteredQuestions.length} questions available.
        <br /> more Questions Are on the Way
      </p>
      <input
        type="text"
        placeholder="Search questions..."
        className="w-full p-2 bg-slate-300 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const isBookmarked = bookmarkedQuestions.some((bq) => bq.id === q.id);
          return (
            <div key={q.id} className="p-4 border rounded bg-slate-200 shadow">
              <p className="font-medium">{q.question}</p>
              <ul className="mt-2">
                {q.options.map((option, index) => (
                  <li key={index} className="ml-4 list-disc">
                    {option}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => toggleAnswer(q.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  {showAnswers[q.id] ? "Hide Answer" : "Show Answer"}
                </button>
                <button
                  onClick={() => toggleBookmark(q)}
                  className={`px-3 py-1 rounded ${
                    isBookmarked ? "bg-red-500" : "bg-green-800"
                  } text-white`}
                >
                  {isBookmarked ? "Unbookmark" : "⭐Bookmark"}
                </button>
              </div>
              {showAnswers[q.id] && (
                <p className="mt-2 text-green-600 font-semibold">
                  Answer: {q.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
