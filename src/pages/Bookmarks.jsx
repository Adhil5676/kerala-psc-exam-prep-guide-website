import { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
export default function Bookmarks() {
  const { bookmarkedQuestions, toggleBookmark } = useContext(QuestionContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Questions</h1>
      {bookmarkedQuestions.length === 0 ? (
        <p className="text-gray-500">No bookmarked questions yet.</p>
      ) : (
        <div className="space-y-4">
          {bookmarkedQuestions.map((q) => (
            <div key={q.id} className="p-4 border rounded bg-white shadow">
              <p className="font-medium">{q.question}</p>
              <button
                onClick={() => toggleBookmark(q)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
