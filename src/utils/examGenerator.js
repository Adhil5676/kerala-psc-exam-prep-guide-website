export function generateMockExam(questions, numQuestions = 10) {
    // Shuffle questions and pick the first `numQuestions`
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
  }