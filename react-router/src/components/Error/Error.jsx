import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div
        id="error-page"
        className="container mx-auto px-4 text-center bg-gray-400 text-white p-4 text-3xl"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
