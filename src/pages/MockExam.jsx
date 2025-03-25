import { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import { generateMockExam } from "../utils/examGenerator";

import { saveExamStats } from "../utils/statsCalculator";
export default function MockExam() {
  const { questions } = useContext(QuestionContext);

  const [examStarted, setExamStarted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  const startExam = () => {
    setExamQuestions(generateMockExam(questions));
    setExamStarted(true);
    setSubmitted(false);
    setUserAnswers({});
    setScore(0);
    setIncorrectQuestions([]);
  };

  const handleOptionSelect = (questionId, option) => {
    setUserAnswers({ ...userAnswers, [questionId]: option });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    let incorrect = [];

    examQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        correctAnswers++;
      } else {
        incorrect.push(q);
      }
    });

    setScore(correctAnswers);
    setIncorrectQuestions(incorrect);
    setSubmitted(true);

    // Save stats after submitting
    saveExamStats(correctAnswers, examQuestions.length);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Mock Exam</h1>

      {!examStarted ? (
        <div className="text-center">
          <p className="text-lg text-white">
            Test your knowledge with a timed mock exam!
          </p>
          <button
            onClick={startExam}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mt-4 text-lg"
          >
            Start Exam
          </button>
        </div>
      ) : (
        <>
          {!submitted ? (
            <div>
              {examQuestions.map((q, index) => (
                <div
                  key={q.id}
                  className="p-4 border rounded bg-gray-300 shadow mb-4"
                >
                  <p className="font-medium">
                    {index + 1}. {q.question}
                  </p>
                  <ul className="mt-2">
                    {q.options.map((option, i) => (
                      <li key={i} className="ml-4 list-disc">
                        <label>
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            checked={userAnswers[q.id] === option}
                            onChange={() => handleOptionSelect(q.id, option)}
                            className="mr-2"
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
              >
                Submit Exam
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-bold mt-4">
                Your Score: {score} / {examQuestions.length}
              </h2>

              {incorrectQuestions.length > 0 && (
                <div className="mt-6 p-4 bg-red-100 border border-red-400 rounded">
                  <h3 className="text-lg font-semibold text-red-700">
                    Review Incorrect Answers
                  </h3>
                  {incorrectQuestions.map((q, index) => (
                    <div
                      key={q.id}
                      className="mt-4 p-3 bg-white shadow rounded"
                    >
                      <p className="font-medium">
                        {index + 1}. {q.question}
                      </p>
                      <p className="text-red-600 font-semibold">
                        Your Answer: {userAnswers[q.id]}
                      </p>
                      <p className="text-green-600 font-semibold">
                        Correct Answer: {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={startExam}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4"
              >
                Retake Exam
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
