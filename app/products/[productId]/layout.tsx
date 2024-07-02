export default function ProductLayout({
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