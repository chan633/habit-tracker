import { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface HabitFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (habit: { name: string; goal: number; frequency: 'daily' | 'weekly' }) => void;
}

export function HabitForm({ isOpen, onClose, onSubmit }: HabitFormProps) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(30);
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Add New Habit</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, goal, frequency });
            onClose();
          }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Habit name"
              className="block w-full mb-4 p-2 border rounded"
            />
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              placeholder="Goal (days)"
              className="block w-full mb-4 p-2 border rounded"
            />
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
              className="block w-full mb-4 p-2 border rounded"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Habit
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}