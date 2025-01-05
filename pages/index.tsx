import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Habit {
  id: number;
  name: string;
  streak: number;
  goal: number;
  lastCheckedIn: Date;
  frequency: 'daily' | 'weekly';
  userId: string;
}

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([
    {
        id: 1, name: "Daily Meditation", streak: 5, goal: 30,
        lastCheckedIn: new Date(),
        frequency: 'daily',
        userId: ''
    },
  ]);

  const addHabit = () => {
    const newHabit = {
      id: habits.length + 1,
      name: "New Habit",
      streak: 0,
      goal: 30,
      lastCheckedIn: new Date(),
      frequency: 'daily',
      userId: ''
    } as Habit;
    setHabits([...habits, newHabit]);
  };

  const checkInHabit = async (habitId: number) => {
    // Update streak and lastCheckedIn
  };

  const editHabit = async (habitId: number, updates: Partial<Habit>) => {
    // Edit habit details
  };

  const deleteHabit = async (habitId: number) => {
    // Delete habit
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Habit Tracker</h1>
          <button 
            onClick={addHabit}
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add New Habit
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {habits.map((habit) => (
            <Card key={habit.id}>
              <CardHeader>
                <CardTitle>{habit.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current streak: {habit.streak} days</p>
                <p>Goal: {habit.goal} days</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}