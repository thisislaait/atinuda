import type { Metadata } from 'next';

export const generateMetadata: Metadata = {
  title: 'Summit',
  description: 'Information about the upcoming summit.',
};

export default function SummitPage() {
  return (
    <div>
      <h1>Summit Page</h1>
      <p>Content for the summit page will go here.</p>
    </div>
  );
}
