export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Sales Layout
    </div>
  );
}
