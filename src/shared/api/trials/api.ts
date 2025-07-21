import { Trial } from './types';
import { mockTrials } from './mock';

export const getTrials = async (): Promise<Trial[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  // For now, return mock data
  // Later, replace with real API call
  return Promise.resolve(mockTrials);
};

export const getTrialById = async (id: string): Promise<Trial | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  const trial = mockTrials.find(t => t.id === id);
  return Promise.resolve(trial || null);
};

export const getTrialsByLevel = async (level: string): Promise<Trial[]> => {
  await new Promise(resolve => setTimeout(resolve, 100));

  if (!level) return getTrials();

  const filteredTrials = mockTrials.filter(
    trial => trial.level.toLowerCase() === level.toLowerCase()
  );
  return Promise.resolve(filteredTrials);
};
