export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            {children}
            <div>Featured Products</div>
      </div>
    );
  }