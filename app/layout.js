import '../app/globals.css';

export const metadata = {
  title: 'Velmora',
  description: 'Velmora site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}