'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';

interface Project {
  id: string;
  title: string;
  image: string;
}

export default function KyUStem() {
  const [techProjects, setTechProjects] = useState<Project[]>([
    { id: "tech1", title: "Kyu Social", image: "/avatars/social.jpeg" },
    { id: "tech2", title: "Safaricom", image: "/avatars/safaricom.jpeg" },
    { id: "tech3", title: "Mpesa API", image: "/avatars/api.jpeg" },
    { id: "tech4", title: "Block chain API", image: "/avatars/BC.jpeg" },
  ]);

  const [commercialProjects, setCommercialProjects] = useState<Project[]>([
    { id: "commercial1", title: "CRM", image: "/avatars/crm.jpeg" },
    { id: "commercial2", title: "POS", image: "/avatars/pos.jpeg" },
    { id: "commercial3", title: "SAAS", image: "/avatars/sas.jpeg" },
    { id: "commercial4", title: "IAAS", image: "/avatars/iaas.jpeg" },
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
  };

  const handleSave = () => {
    if (editingProject) {
      setTechProjects((prev) =>
        prev.map((proj) => (proj.id === editingProject.id ? editingProject : proj))
      );
      setCommercialProjects((prev) =>
        prev.map((proj) => (proj.id === editingProject.id ? editingProject : proj))
      );
      setEditingProject(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <Card className="w-40">
          <CardContent className="p-4">
            <Image src="/avatars/kyu.jpeg" alt="STEM" width={150} height={100} className="rounded-lg" />
          </CardContent>
        </Card>

        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold">KyU STEM</h1>
          <h2 className="text-lg text-gray-600 mt-2">Discover, create, and collaborate on different projects</h2>
        </div>

        <Link href="/projects">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center">
            <span className="mr-2">Create</span>➕
          </Button>
        </Link>
      </div>

      {/* Tech Projects */}
      <h3 className="text-xl font-semibold mt-8">Tech Projects</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {techProjects.map((proj) => (
          <Link key={proj.id} href={`/projectC`} passHref>
            <Card className="cursor-pointer hover:bg-gray-100 transition relative">
              <CardContent className="p-4 text-center">
                <Image src={proj.image} alt={proj.title} width={150} height={100} className="mx-auto rounded-lg" />
                <p className="mt-2 font-semibold">{proj.title}</p>
                <Button size="sm" variant="outline" className="mt-2">✅ </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Commercial Projects */}
      <h3 className="text-xl font-semibold mt-8">Commercial Projects</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {commercialProjects.map((proj) => (
          <Link key={proj.id} href={`/projectC`} passHref>
            <Card className="cursor-pointer hover:bg-gray-100 transition relative">
              <CardContent className="p-4 text-center">
                <Image src={proj.image} alt={proj.title} width={150} height={100} className="mx-auto rounded-lg" />
                <p className="mt-2 font-semibold">{proj.title}</p>
                <Button size="sm" variant="outline" className="mt-2" >✅ </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Project</h3>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={editingProject.title}
              onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
            />
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setEditingProject(null)}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown Menu */}
      <div className="mt-6 flex justify-center">
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Browse More Fields" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yen">Function as a Service (FaaS)</SelectItem>
            <SelectItem value="shil">Database as a Service (DBaaS)</SelectItem>
            <SelectItem value="dolla">Storage as a Service (STaaS)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
