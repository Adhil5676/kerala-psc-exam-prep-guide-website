export const saveExamStats = (score, totalQuestions) => {
    const stats = JSON.parse(localStorage.getItem("examStats")) || [];
    
    // Save latest attempt
    const newStat = {
      date: new Date().toLocaleString(),
      score,
      totalQuestions,
    };
  
    stats.push(newStat);
    
    // Keep only the last 10 exams
    if (stats.length > 10) {
      stats.shift();
    }
  
    localStorage.setItem("examStats", JSON.stringify(stats));
  };
  
  export const getExamStats = () => {
    return JSON.parse(localStorage.getItem("examStats")) || [];
  };
  