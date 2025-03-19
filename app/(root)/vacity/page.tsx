'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";

const AudioSessionsPage = () => {
  // State to hold ongoing sessions
  const [sessions, setSessions] = useState([
    { id: 1, title: "Tech Talk: Future of Web Development", host: "Alice", ongoing: true },
    { id: 2, title: "Design Patterns in Software", host: "Bob", ongoing: true },
  ]);
  // State for new session
  const [newSessionTitle, setNewSessionTitle] = useState("");
  const [newSessionHost, setNewSessionHost] = useState("");
  
  // Handle starting a new session
  const startNewSession = () => {
    if (newSessionTitle.trim() === "" || newSessionHost.trim() === "") return;
    const newSession = {
      id: sessions.length + 1,
      title: newSessionTitle,
      host: newSessionHost,
      ongoing: true,
    };
    setSessions([...sessions, newSession]);
    setNewSessionTitle("");
    setNewSessionHost("");
  };

  // Simulate joining a session
  const joinSession = (sessionId: number) => {
    alert(`You have joined the session with ID: ${sessionId}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Audio Sessions</h1>
      
      {/* Ongoing Sessions Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ongoing Sessions</h2>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="border p-4 rounded mb-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{session.title}</h3>
                <p>Hosted by: {session.host}</p>
              </div>
              <Button 
                className="bg-blue-500 text-white"
                onClick={() => joinSession(session.id)}
              >
                <span className="join-session-text">Join Session</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Start New Session Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Start a New Session</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Session Title"
            value={newSessionTitle}
            onChange={(e) => setNewSessionTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Host Name"
            value={newSessionHost}
            onChange={(e) => setNewSessionHost(e.target.value)}
          />
        </div>
        <Button className="bg-green-500 text-white" onClick={startNewSession}>
          Start Session
        </Button>
      </div>

      {/* Global CSS for the blinking text effect */}
      <style jsx global>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .join-session-text {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AudioSessionsPage;
