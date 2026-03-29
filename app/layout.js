import './globals.css';

export const metadata = {
  title: 'Your Handyman Company',
  description: 'Reliable handyman services with quality workmanship, photo gallery, reviews, and fast quote requests.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
