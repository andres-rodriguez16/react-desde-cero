import { useContext } from "react";

export const Header = ({ children }: any) => {
  return (
    <div>
      <p>React shop </p>
      {children}
    </div>
  );
};
