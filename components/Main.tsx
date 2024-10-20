type MainProps = React.HTMLAttributes<HTMLElement> & {
  children: JSX.Element | string;
};
const Main = ({ children, ...props }: MainProps) => {
  return <main {...props} className="flex flex-1 flex-col p-4 sm:p-8">{children}</main>;
};

export default Main;
