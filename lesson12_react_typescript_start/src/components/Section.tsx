import { ReactNode } from "react";

// old way
// here implicit defination of children
// const Section: React.FC<{title: string}> = ({children, title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   )
// }

type SectionProps = {
  title?: string;
  children: ReactNode; // it is different from props
};

// explicit defination of children here
// now title is optional we can add a default value for this title
// it is different from Section.defaultProps Deprecated
const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
