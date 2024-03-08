import Toast from "components/Toast";
import { ContainerProps } from "types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="main">
      <Toast />
      {children}
    </div>
  );
};

export default Container;
