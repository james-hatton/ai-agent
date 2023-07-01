import { Portfolio } from '../types/portfolio';

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: '.NET Project 1',
    description: 'This is a description of .NET Project 1.',
    imageUrl: 'url-to-image-1',
  },
  {
    id: 2,
    title: '.NET Project 2',
    description: 'This is a description of .NET Project 2.',
    imageUrl: 'url-to-image-2',
  },
  // Add more portfolio items as needed
];

export const getPortfolio = (): Promise<Portfolio[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioData);
    }, 1000);
  });
};