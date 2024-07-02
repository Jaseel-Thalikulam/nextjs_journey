export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <div>Auth Layout</div>
            {children}
      </div>
    );
  }