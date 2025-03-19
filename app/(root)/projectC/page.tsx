"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner"; // Sonner for toast notifications

type CategoryKey = "Fintech" | "Cybersecurity" | "Agri-tech" | "CRM";

const categoryData: Record<CategoryKey, { subcategories: string[]; projectTitle: string }> = {
  Fintech: {
    subcategories: ["Digital Payments", "Personal Financial Management (PFM)", "Wealth Management", "Cryptocurrencies"],
    projectTitle: "Blockchain & Digital Economy",
  },
  Cybersecurity: {
    subcategories: ["Network Security", "Application Security", "Information Security", "Cloud Security"],
    projectTitle: "Cyber Defense & Ethical Hacking",
  },
  "Agri-tech": {
    subcategories: ["Supply Chain Security", "Precision Agriculture Security", "Risk Assessment", "IoT Security"],
    projectTitle: "Smart Agriculture & Food Security",
  },
  CRM: {
    subcategories: ["Threat Mitigation", "Proactive Monitoring", "Breach Notification", "Regular Security Audits"],
    projectTitle: "Customer Data Protection & Insights",
  },
};

export default function KyUStemPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("Fintech");
  const [subcategories, setSubcategories] = useState(categoryData.Fintech.subcategories);
  const [thirdCardTitle, setThirdCardTitle] = useState(categoryData.Fintech.projectTitle);

  const handleCategoryClick = (category: CategoryKey) => {
    setSelectedCategory(category);
    setSubcategories(categoryData[category].subcategories);
    setThirdCardTitle(categoryData[category].projectTitle);
  };

  const handleJoinClick = () => {
    toast.success("You are now a collaborator! 🎉", {
      description: "Welcome to the project team.",
      action: {
        label: "View",
        onClick: () => console.log("View clicked"),
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Toaster position="top-right" richColors /> {/* Global toast component */}

      {/* Section 1 - Category Selection */}
      <h1 className="text-3xl font-bold">KyU STEM</h1>
      <div className="border-l-4 border-gray-500 pl-4 flex flex-col space-y-4">
        <Card className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(categoryData).map((title) => (
              <div key={title} className="cursor-pointer" onClick={() => handleCategoryClick(title as CategoryKey)}>
                <Card className="hover:bg-gray-100 transition p-4 text-center">{title}</Card>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Section 2 - Selected Category Details */}
      <h2 className="text-2xl font-semibold">{selectedCategory}</h2>
      <div className="border-l-4 border-gray-500 pl-4 flex flex-col space-y-4">
        <Card className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subcategories.map((title, index) => (
              <Card key={index} className="cursor-pointer hover:bg-gray-100 transition p-4 text-center">
                {title}
              </Card>
            ))}
          </div>
        </Card>
      </div>

      {/* Section 3 - Related Project */}
      <h2 className="text-2xl font-semibold">{thirdCardTitle}</h2>
      <div className="border-l-4 border-gray-500 pl-4 flex flex-col space-y-4">
        <Card className="p-4">
          <h3 className="text-xl font-bold">{thirdCardTitle}</h3>
          <div className="mt-4">
            <h4 className="font-semibold">Overview</h4>
            <Textarea placeholder="Project description" className="mt-2" />
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Contributors</h4>
            <ul className="list-disc ml-4 mt-2">
              <li>Olivia Johnson</li>
              <li>Ethan Smith</li>
              <li>Isabella Brown</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Resources</h4>
            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select a resource" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="documents">Documents</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="relevant-line">Relevant Line</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Join Project</h4>
            <Button
              className="mt-2 bg-green-500 text-white hover:bg-green-600"
              onClick={handleJoinClick}
            >
              Join
            </Button>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Comments</h4>
            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select a comment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comment1">Great initiative!</SelectItem>
                <SelectItem value="comment2">Needs more data.</SelectItem>
                <SelectItem value="comment3">How can I contribute?</SelectItem>
                <SelectItem value="comment4">Is this open-source?</SelectItem>
                <SelectItem value="comment5">What are the funding sources?</SelectItem>
                <SelectItem value="comment6">Love this concept!</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>
    </div>
  );
}
