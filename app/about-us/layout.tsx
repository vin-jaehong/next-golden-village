export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; About Us Layout
    </div>
  );
}
