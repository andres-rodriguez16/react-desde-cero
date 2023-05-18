import { useContext } from "react";

export const Header = ({ children }) => {
  return (
    <div>
      <p>React shop </p>
      {children}
    </div>
  );
};
