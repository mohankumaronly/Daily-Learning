import React from 'react'
import Card from './components/card';
import { Calendar, CircleCheckBig, Clock4 } from 'lucide-react';

const cardInfo = [
  {
    icon: CircleCheckBig,
    heading: "Quick Capture",
    paragraph: "Instantly log new ideas and tasks with our minimalist input system.",
    color: "text-green-600"
  },
  {
    icon: Calendar,
    heading: "Deadline Tracking",
    paragraph: "Assign due dates and see what's critical across an intuitive calendar view.",
    color: "text-blue-600"
  },
  {
    icon: Clock4,
    heading: "Smart Prioritization",
    paragraph: "Use priority levels to automatically surface your most important tasks.",
    color: "text-orange-600"
  }
]


// CircleCheckBig

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center my-5">Productivity, Simplified.</h1>

        {/* responsive grid: 1 col on xs, 2 cols on sm, 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {cardInfo.map((items, index) => (
            <Card
              key={index}
              icon={items.icon}
              heading={items.heading}
              paragraph={items.paragraph}
              color={items.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App