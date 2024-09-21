type MainProps = React.HTMLAttributes<HTMLElement> & {
  children: JSX.Element | string;
};
const Main = ({ children, ...props }: MainProps) => {
  return <main {...props} className="flex-1">{children}</main>;
};

export default Main;
