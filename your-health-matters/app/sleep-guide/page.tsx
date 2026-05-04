import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'What Your Body Does While You Sleep | Your Health Matters',
  description:
    'An interactive clinical teaching by Dr. Vera Holloway. Explore all 5 sleep stages, 8 organ repair systems, and 5 sleep scenarios — from ideal sleep to sleep deprivation. Understand what actually happens when you close your eyes.',
  keywords: [
    'sleep stages', 'what happens when you sleep', 'sleep and healing',
    'sleep and hormones', 'growth hormone sleep', 'liver clock', 'glymphatic system',
    'sleep deprivation effects', 'holistic sleep guide', 'Dr Vera Holloway'
  ],
  openGraph: {
    title: 'What Your Body Does While You Sleep',
    description: 'An interactive clinical teaching — 5 sleep stages, 8 organ systems repairing, 5 real sleep scenarios.',
    type: 'article',
  },
};

// Dynamic import with SSR disabled — prevents hydration mismatch from Math.random() stars
const SleepVisual = dynamic(
  () => import('@/components/sections/SleepVisual'),
  { ssr: false, loading: () => (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #04060f 0%, #09102b 40%, #0e1840 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Georgia, serif', color: '#6b7280', fontSize: '14px'
    }}>
      Loading sleep guide...
    </div>
  )}
);

export default function SleepGuidePage() {
  return <SleepVisual />;
}
