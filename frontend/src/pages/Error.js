import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found!";
    message = "Sorry, the page you are looking for cannot be found.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
