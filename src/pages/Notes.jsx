import { useState, useEffect } from "react";

export default function Notes() {
  const [pdfData, setPdfData] = useState({ notes: [], questionPapers: [] });

  useEffect(() => {
    fetch("/pdfData.json")
      .then((response) => response.json())
      .then((data) => setPdfData(data))
      .catch((error) => console.error("Error loading PDFs:", error));
  }, []);

  return (
    <div className="min-h-screen bg-transparent p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">PSC Notes & Question Papers</h1>

      {/* Notes Section */}
      <section>
        <h2 className="text-2xl text-blue-600 font-semibold mb-4">📚 PSC Notes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {pdfData.notes.map((note) => (
            <PDFCard key={note.id} title={note.title} file={note.file} />
          ))}
        </div>
      </section>

      {/* Question Papers Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">📄 Question Papers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {pdfData.questionPapers.map((paper) => (
            <PDFCard key={paper.id} title={paper.title} file={paper.file} />
          ))}
        </div>
      </section>
    </div>
  );
}

// PDF Card Component
function PDFCard({ title, file }) {
  return (
    <div className="relative bg-gray-300 p-4 shadow-md rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 duration-700">
      <p className="font-semibold">{title}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
        <a href={file} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Open</a>
        <a href={file} download className="bg-green-500 text-white px-4 py-2 rounded">Download</a>
      </div>
    </div>
  );
}
