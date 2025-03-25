export function scheduleRandomQuestionNotification(questions) {
    if (!("Notification" in window) || Notification.permission !== "granted") {
      console.warn("Notifications not allowed or unsupported.");
      return;
    }
  
    if (!Array.isArray(questions) || questions.length === 0) {
      console.error("No questions available for notifications.");
      return;
    }
  
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  
    new Notification("Kerala PSC Daily Question", {
      body: randomQuestion.question || "No question available.",
      icon: "/icon.png",
    });
  }
  
  