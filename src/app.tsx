import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";

// Synchronous
import Home from "./routes/home";
import Header from "./components/Header";

// Asynchronous (throws a promise)
const Blog = lazy(() => import("./routes/blog"));
const Project = lazy(() => import("./routes/project"));

export const App = () => (
  <LocationProvider>
    <ErrorBoundary>
      <Header className="mt-8" />

      <Router>
        <Home path="/" />
        {/* Alternative dedicated route component for better TS support */}
        <Route path="/blog/:id" component={Blog} />
        <Route path="/project/:id" component={Project} />
        {/* `default` prop indicates a fallback route. Useful for 404 pages */}
      </Router>
    </ErrorBoundary>
  </LocationProvider>
);
