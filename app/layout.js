export const metadata = {
  title: 'Hello App',
  description: 'A friendly interactive web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
