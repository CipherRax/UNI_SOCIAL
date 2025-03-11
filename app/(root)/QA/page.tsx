'use client'

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const QAPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "How do I implement dark mode in Next.js?",
      answers: [
        {
          user: "John Doe",
          text: "You can use Tailwind's dark mode or context API.",
          image: "/avatars/johndoe.png",
        },
        {
          user: "Jane Smith",
          text: "Check out Next.js' ThemeProvider for easier state management.",
          image: "",
        },
      ],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const postQuestion = () => {
    if (newQuestion.trim() === "") return;
    setQuestions([...questions, { id: questions.length + 1, text: newQuestion, answers: [] }]);
    setNewQuestion("");
  };

  const postAnswer = (questionId: number) => {
    if (answers[questionId]?.trim() === "") return;
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: [
                ...q.answers,
                { user: "You", text: answers[questionId], image: "/avatars/default.png" },
              ],
            }
          : q
      )
    );
    setAnswers({ ...answers, [questionId]: "" });
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, questionId: number) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Questions & Answers</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Ask a question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <Button className="mt-2 bg-blue-500 text-white" onClick={postQuestion}>
          Post Question
        </Button>
      </div>
      <div>
        {questions.map((q) => (
          <div key={q.id} className="border p-4 rounded mb-4">
            <h2 className="font-semibold text-lg">{q.text}</h2>
            <div className="mt-2">
              {q.answers.map((a, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-100 p-2 rounded mt-2">
                  <Image
                    src={a.image || "/avatars/default.png"}
                    alt={a.user}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div>
                    <span className="font-semibold">{a.user}</span>
                    <p>{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Write an answer..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(e, q.id)}
              />
              <Button className="ml-2 bg-green-500 text-white" onClick={() => postAnswer(q.id)}>
                Answer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAPage;
