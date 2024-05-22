import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found Page!",
};

// not found page component
const NotFound = () => {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
};

export default NotFound;
