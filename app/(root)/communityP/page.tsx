"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Clock, Heart, MessageCircle, Bell, FileText, Users, Plus } from "lucide-react";

export default function CommunityPage() {
  const [selectedCommunity, setSelectedCommunity] = useState("Wildlife");
  const [selectedClub, setSelectedClub] = useState("KYU Wildlife Club");
  const [postss, setPostss] = useState([
    { user: "Alice", image: "/avatars/post11.jpeg", caption: "Amazing time at the Wildlife Park! 🌿🦓", likes: 45, comments: 12 },
    { user: "Bob", image: "/avatars/post2.jpeg", caption: "Public speaking is an art! 🗣️🔥 #Debate", likes: 30, comments: 8 },
  ]);

  const addPost = () => {
    const newPost = {
      user: "New User",
      image: "/avatars/newpost.jpg",
      caption: "New exciting post! 🌟",
      likes: 0,
      comments: 0,
    };
    setPostss([newPost, ...postss]);
  };

  const communities = [
    { title: "Wildlife", club: "KYU Wildlife Club" },
    { title: "Debate", club: "KYU Debate Club" },
    { title: "Red Cross", club: "KYU Red Cross Club" },
    { title: "Societies", club: "KYU Societies Club" }
  ];

  const events = [
    { title: "Wildlife Conservation Seminar", date: "March 25, 2025", time: "10:00 AM" },
    { title: "Debate Championship", date: "April 5, 2025", time: "2:00 PM" },
    { title: "First Aid Training", date: "April 10, 2025", time: "9:00 AM" },
  ];

  const posts = [
    { user: "Alice", image: "/avatars/post11.jpeg", caption: "Amazing time at the Wildlife Park! 🌿🦓", likes: 45, comments: 12 },
    { user: "Bob", image: "/avatars/post2.jpeg", caption: "Public speaking is an art! 🗣️🔥 #Debate", likes: 30, comments: 8 },
  ];

  const updates = [
    { title: "New Wildlife Club Meeting!", date: "March 20, 2025", details: "Join us for our monthly meeting at 4:00 PM." },
    { title: "Debate Club Tryouts!", date: "March 22, 2025", details: "Tryouts will be held in Hall B at 2:00 PM." },
  ];

  const resources = [
    { title: "Wildlife Conservation Guide", type: "PDF", link: "/resources/wildlife-guide.pdf" },
    { title: "Public Speaking Masterclass", type: "Video", link: "/resources/public-speaking.mp4" },
  ];

  const members = [
    { name: "Alice", image: "/avatars/alice.jpg" },
    { name: "Bob", image: "/avatars/bob.jpg" },
    { name: "Charlie", image: "/avatars/charlie.jpg" },
  ];
  const [isJoined, setIsJoined] = useState(false);


  return (
    <div className="max-w-5xl mx-auto p-6 relative">
      {/* Community Section */}
      <h3 className="text-xl font-semibold border-b pb-2">Community</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {communities.map((item, index) => (
          <div key={index} onClick={() => { setSelectedCommunity(item.title); setSelectedClub(item.club); }} className="cursor-pointer">
            <Card className="hover:bg-gray-100 transition relative">
              <CardContent className="p-4 text-center">
                <p className="font-semibold">{item.title}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Dynamic Section */}
      <h3 className="text-xl font-semibold border-b pb-2 mt-6">{selectedCommunity}</h3>
      <Card className="relative mt-4">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{selectedClub}</p>
            <Button
      className={`mt-2 text-white ${isJoined ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
      onClick={() => setIsJoined(!isJoined)}
    >
      {isJoined ? "Leave" : "Join"}
    </Button>
          </div>

          {/* Navigation Menu */}
          <Tabs defaultValue="events" className="mt-4">
            <TabsList className="flex space-x-4 border-b pb-2">
              {[
                { id: "events", label: "Events" },
                { id: "posts", label: "Posts" },
                { id: "updates", label: "Updates" },
                { id: "resources", label: "Resources" },
                { id: "members", label: "Members" }
              ].map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Events TabContent */}
            <TabsContent value="events" className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-gray-500"><Calendar className="inline w-4 h-4" /> {event.date} | <Clock className="inline w-4 h-4" /> {event.time}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

           {/* Posts TabContent */}
        <TabsContent value="posts" className="mt-4">
          <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Card key={index} className="p-4">
                <Image src={post.image} alt="Post" width={500} height={300} className="rounded-md" />
                <p className="mt-2 font-medium">{post.user}</p>
                <p className="text-sm text-gray-600">{post.caption}</p>
                <div className="flex space-x-4 mt-2">
                  <Heart className="w-5 h-5 text-red-500 cursor-pointer" /> {post.likes}
                  <MessageCircle className="w-5 h-5 text-blue-500 cursor-pointer" /> {post.comments}
                </div>
              </Card>
            ))}
          </div>
          {/* Floating Button Inside Posts TabContent */}
          <div className="flex justify-center mt-4">
            <Button
              className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
              onClick={addPost}
            >
              <Plus className="w-6 h-6" />
            </Button>
          </div>
        </TabsContent>
            {/* Updates TabContent */}
            <TabsContent value="updates" className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Latest Updates</h3>
              {updates.map((update, index) => (
                <Card key={index} className="p-4">
                  <p className="font-medium">{update.title}</p>
                  <p className="text-sm text-gray-500"><Bell className="inline w-4 h-4" /> {update.date}</p>
                  <p className="text-sm">{update.details}</p>
                </Card>
              ))}
            </TabsContent>

            {/* Resources TabContent */}
            <TabsContent value="resources" className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Learning Resources</h3>
              {resources.map((resource, index) => (
                <Card key={index} className="p-4 flex justify-between items-center">
                  <p className="font-medium">{resource.title}</p>
                  <a href={resource.link} className="text-blue-500" download>{resource.type}</a>
                </Card>
              ))}
            </TabsContent>

            {/* Members TabContent */}
            <TabsContent value="members" className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Club Members</h3>
              {members.map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-2">
                  <Image src={member.image} alt={member.name} width={40} height={40} className="rounded-full" />
                  <p>{member.name}</p>
                </div>
              ))}
            </TabsContent>

          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
