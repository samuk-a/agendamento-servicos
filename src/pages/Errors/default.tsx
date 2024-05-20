import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="my-10 font-bold text-lg flex flex-col justify-cente items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
        <a className="text-blue-500 hover:underline" href="/">Click to go Home</a>
    </div>
  );
}