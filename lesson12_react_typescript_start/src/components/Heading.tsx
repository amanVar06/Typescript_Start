import { ReactElement } from "react";

type HeadingProps = { title: string }; //types of props that we pass in

// here we are little more specific writing ReactElement instead of JSX element
const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
