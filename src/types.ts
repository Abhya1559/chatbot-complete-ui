export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Organization {
  name: string;
  website: string;
  description: string;
}

export interface WebPage {
  url: string;
  status: 'detected' | 'scraped' | 'pending';
  chunks: string[];
}