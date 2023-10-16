import Footer from "./Footer";
import Header from "./Header";
import classes from "./Style.module.scss";

const RootLayout = ({ children }: { children: any }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
