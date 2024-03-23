import { Metadata } from "next";

// meta data
export const metadata: Metadata = {
  title: "Not found Page!",
};

// ** 존재하지 않는 페이지 접근 시 랜더링 되는 컴포넌트
const NotFound = () => {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
};

export default NotFound;
