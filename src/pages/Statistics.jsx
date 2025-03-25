import { getExamStats } from "../utils/statsCalculator";

export default function Statistics() {
  const stats = getExamStats();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Exam Statistics</h1>

      {stats.length === 0 ? (
        <p className="text-gray-300">No exam history available.</p>
      ) : (
        <table className="w-full border-collapse rounded-lg border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="border p-2">Date</th>
              <th className="border p-2">Score</th>
              <th className="border p-2">Total Questions</th>
              <th className="border p-2">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2 text-gray-200">{stat.date}</td>
                <td className="border p-2 text-gray-200">{stat.score}</td>
                <td className="border p-2 text-gray-200">{stat.totalQuestions}</td>
                <td className="border p-2 text-gray-200">
                  {((stat.score / stat.totalQuestions) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
