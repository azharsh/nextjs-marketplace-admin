"use client"
import TopNavigation from "./components/topnav";


// components/JobMarketplace.tsx
import React, { useState } from 'react';

// Sample job data
const jobData = [
  { id: 1, title: 'Software Engineer', category: 'Technology' },
  { id: 2, title: 'Marketing Specialist', category: 'Marketing' },
  { id: 3, title: 'Graphic Designer', category: 'Design' },
  // Add more job data as needed
];

const JobMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(jobData.map((job) => job.category)));

  return (
    <div>
      <TopNavigation />
      <div className="container mx-auto p-4">


        <h1 className="text-2xl font-bold mb-4">Job Marketplace</h1>

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="border p-2 w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border p-2"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">{job.title}</h2>
              <p className="text-gray-600">{job.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMarketplace;
