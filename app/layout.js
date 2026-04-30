import './globals.css';

export const metadata = {
  title: 'Professional Home Improvement & Remodeling Services',
  description: 'High-quality home improvement services including bathroom upgrades, kitchen updates, tile work, and finish carpentry. View our work and request a fast quote today.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
