import { useRouteError } from "react-router-dom";


function ErrorPage(){

  const routeError = useRouteError();
  console.log(routeError);

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="text-center">
    <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">404</h1>
    <div className="bg-indigo-600 text-white px-2 text-sm rounded rotate-12 inline-block">
      Page Not Found
    </div>
    <p className="text-gray-500 mt-5">Sorry, Invalid Route   {routeError && routeError.error.message}</p>
 
    
    <div className="mt-6">
      <a href="/" className="px-6 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition">
        Go Home
      </a>
    </div>
  </div>
</div>

    )
}

export default ErrorPage;