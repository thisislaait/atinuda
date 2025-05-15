import type { Metadata } from 'next';
import ExpectSummit from './components/ExpectSection';
import Payment from './components/Payment';

export const generateMetadata: Metadata = {
  title: 'Summit',
  description: 'Information about the upcoming summit.',
};

export default function SummitPage() {
  return (
    <main>
      <ExpectSummit />
      <Payment />
    </main>
  );
}
