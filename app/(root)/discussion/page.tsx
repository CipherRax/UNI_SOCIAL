"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

export default function DiscussionPage() {
  // Contacts List
  const contacts = [
    { name: "Group Chat", image: "/avatars/tech4.jpeg" },
    { name: "Alice", image: "/avatars/alice.jpeg" },
    { name: "Jane", image: "/avatars/girlOne.jpeg" },
    { name: "Paul", image: "/avatars/done.jpeg" },
  ];

  // Discussions List
  const discussions = [
    { topic: "AI Ethics", startTime: "10:00 AM", endTime: "12:00 PM", status: "ongoing" },
    { topic: "Machine Learning", startTime: "1:00 PM", endTime: "3:00 PM", status: "finished" },
    { topic: "Deep Learning", startTime: "4:00 PM", endTime: "6:00 PM", status: "ongoing" },
  ];

  const [selectedContact, setSelectedContact] = useState("Group Chat");
  const [newMessage, setNewMessage] = useState("");

  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hello everyone!", image: "/avatars/alice.jpeg", group: true },
    { user: "Jane", text: "Hi! Let's discuss AI.", image: "/avatars/girlOne.jpeg", group: true },
    { user: "Paul", text: "Sounds great! What's the topic?", image: "/avatars/done.jpeg", group: true },
  ]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { user: "You", text: newMessage, image: "/avatars/fine.jpeg", group: selectedContact === "Group Chat" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Artificial Intelligence</h1>
      <h2 className="text-lg text-gray-600 mt-2">Moment Generating Function</h2>
      <h3 className="text-md text-gray-500 mt-2">Time: 10:00 AM | Creator: John Homand</h3>

      {/* Navigation Tabs */}
      <Tabs defaultValue="create" className="mt-6">
        <TabsList>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="view">View</TabsTrigger>
        </TabsList>

        {/* Create Section */}
        <TabsContent value="create">
          <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">CREATE</h2>
            <label className="block mt-2 font-medium">Topic(s)</label>
            <textarea className="w-full p-2 border rounded mt-1" placeholder="What are the topics to discuss?"></textarea>

            <label className="block mt-4 font-medium">Close Time</label>
            <div className="flex gap-4 mt-2">
              {/* From Input */}
              <div>
                <p className="text-sm">From</p>
                <InputOTP maxLength={4} className="mt-1">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <span className="mx-2">:</span>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTP>
                <div className="mt-2 flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="from-time-format" value="AM" className="mr-2" />
                    AM
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="from-time-format" value="PM" className="mr-2" />
                    PM
                  </label>
                </div>
              </div>

              {/* To Input */}
              <div>
                <p className="text-sm">To</p>
                <InputOTP maxLength={4} className="mt-1">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <span className="mx-2">:</span>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTP>
                <div className="mt-2 flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="to-time-format" value="AM" className="mr-2" />
                    AM
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="to-time-format" value="PM" className="mr-2" />
                    PM
                  </label>
                </div>
              </div>
            </div>

            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Done</button>
          </div>
        </TabsContent>

        {/* View Section */}
        <TabsContent value="view">
          <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">View Discussions</h2>
            {discussions.map((discussion, index) => (
              <div key={index} className="flex items-center justify-between mt-2 p-2 border rounded-lg">
                <span>{discussion.topic}</span>
                <div className="flex items-center">
                  <span className="mr-2">{discussion.startTime} - {discussion.endTime}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    discussion.status === "ongoing" ? "bg-green-500" : "bg-yellow-500"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Chat Section */}
      <div className="mt-6 border rounded-lg shadow p-4 flex h-[500px]">
        {/* Sidebar */}
        <div className="w-1/4 border-r p-2">
          <h2 className="text-xl font-semibold">Chats</h2>
          {contacts.map((contact, index) => (
            <div key={index} onClick={() => setSelectedContact(contact.name)} className="flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-gray-200">
              <Image src={contact.image} alt={contact.name} width={40} height={40} className="rounded-full" />
              <span>{contact.name}</span>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="w-3/4 flex flex-col relative">
          <h2 className="text-xl font-semibold p-2 border-b">{selectedContact}</h2>

          <div className="flex-1 p-2 overflow-y-auto bg-gray-100 rounded">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-center gap-3 p-2 bg-white shadow rounded mb-2 max-w-xs ${msg.user === "You" ? "ml-auto text-right" : "text-left"}`}>
                <Image src={msg.image} alt={msg.user} width={30} height={30} className="rounded-full" />
                <div><span className="font-semibold">{msg.user}</span><p>{msg.text}</p></div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-2 bg-white border-t flex items-center">
            <input type="text" className="w-full p-2 border rounded" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <Button className="ml-2 bg-blue-500 text-white" onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
