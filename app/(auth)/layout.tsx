export default function AuthLayout({
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