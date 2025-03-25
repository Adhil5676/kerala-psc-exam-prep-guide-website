import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

export default function QuestionCard({ question }) {
  const { toggleBookmark, bookmarks } = useContext(QuestionContext);

  if (!question) {
    return <p className="text-red-500">Error: No question data</p>;
  }

  return (
    <div className="p-4 border rounded bg-white shadow">
      <p className="font-medium">{question.question}</p>
      <ul className="mt-2">
        {question.options.map((option, index) => (
          <li key={index} className="ml-4 list-disc">
            {option}{" "}
          </li>
        ))}
      </ul>
      <button
        className={`mt-2 p-2 border rounded ${
          bookmarks.includes(question.id) ? "bg-yellow-400" : "bg-gray-200"
        }`}
        onClick={() => toggleBookmark(question.id)}
      >
        {bookmarks.includes(question.id) ? "★ Bookmarked" : "☆ Bookmark"}
      </button>
    </div>
  );
}
