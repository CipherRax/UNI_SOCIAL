'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'Overview & University Profile',
    links: [
      { name: 'Mission', href: '/about/mission' },
      { name: 'Vision', href: '/about/vision' },
      { name: 'Core Values', href: '/about/core-values' },
      { name: 'History & Heritage', href: '/about/history' },
      { name: 'Registration', href: '/about/registration' },
    ],
  },
  {
    title: 'Academic Information',
    links: [
      { name: 'Faculties and Departments', href: '/about/faculties' },
      { name: 'Available programs and courses', href: '/about/programs' },
      { name: 'Academic Calendar', href: '/about/calendar' },
    ],
  },
  {
    title: 'Administration & Governance',
    links: [
      { name: 'University Leadership', href: '/about/leadership' },
      { name: 'Governing Policies', href: '/about/policies' },
      { name: 'Student Services', href: '/about/services' },
    ],
  },
  {
    title: 'Admission & Enrollment',
    links: [
      { name: 'Application Process', href: '/about/application' },
      { name: 'Admission Requirements', href: '/about/requirements' },
      { name: 'Tuition and Fees', href: '/about/tuition' },
    ],
  },
  {
    title: 'Contact & Help Desk',
    links: [
      { name: 'General Inquiries', href: '/about/contact' },
      { name: 'Support Services', href: '/about/support' },
    ],
  },
];

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">About KyU</h1>

      {/* Subtitle */}
      <p className="text-gray-500">Control hub for official information</p>

      {/* Sections with Dropdowns */}
      <div className="mt-6 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              className="w-full flex justify-between items-center text-xl font-semibold py-2"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <ul
              className={`mt-2 space-y-2 transition-all duration-300 ${
                openSection === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="pl-4">
                  <Link href={link.href} className="text-blue-600 hover:text-green-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
