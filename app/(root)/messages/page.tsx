"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Smile } from "lucide-react";
import { useRouter } from "next/navigation";

// Define a User type
type User = { id: number; name: string; status: string; avatar: string };

const users: User[] = [
  { id: 1, name: "Alice", status: "Online", avatar: "/avatars/alice.jpeg" },
  { id: 2, name: "Bob", status: "Busy", avatar: "/avatars/bob.jpg" },
  { id: 3, name: "Charlie", status: "Away", avatar: "/avatars/charlie.jpg" },
];

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const sendMessage = () => {
    if (input.trim() && selectedUser) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left Sidebar - Users List */}
      <div className="border-r p-4">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        {users.map((user) => (
          <Card
            key={user.id}
            className="p-2 cursor-pointer mb-2 flex items-center gap-3"
            onClick={() => setSelectedUser(user)}
          >
            <Avatar className="cursor-pointer" onClick={() => router.push(`/profile/${user.id}`)}>
              <Image
                src={user.avatar}
                alt={user.name}
                width={40}
                height={40}
                priority
                className="rounded-full"
              />
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.status}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Chat Window */}
      <div className="col-span-2 flex flex-col h-full">
        {selectedUser ? (
          <>
            <div className="p-4 border-b flex items-center gap-3">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => router.push(`/profile/${selectedUser.id}`)}
              >
                <Avatar>
                  <Image
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    width={40}
                    height={40}
                    priority
                    className="rounded-full"
                  />
                </Avatar>
                <h2 className="font-bold text-lg">{selectedUser.name}</h2>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-md max-w-xs ${
                    msg.sender === "You" ? "bg-blue-500 text-white self-end" : "bg-gray-200"
                  }`}
                >
                  <p className="text-sm font-bold">{msg.sender}</p>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex gap-2 items-center">
              <button className="p-2">
                <Smile size={24} />
              </button>
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">Select a user to chat with</p>
        )}
      </div>
    </div>
  );
}
