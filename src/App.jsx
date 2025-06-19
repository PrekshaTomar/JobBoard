import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import { HomeLayout, DashboardLayout, Error, Landing } from './pages';
import { Login, Register } from './components';
import { loader } from './pages/DashboardLayout';

import AddJob from './pages/AddJob';
import Stats from './pages/Stats';
import AllJobs from './pages/AllJobs';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
  },
  { path: '/landing', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/dashboard',
    element: <DashboardLayout queryClient={queryClient} />,
    loader: loader(queryClient),
    children: [
      { index: true, element: <AddJob /> },
      { path: 'stats', element: <Stats /> },
      { path: 'all-jobs', element: <AllJobs /> },
      { path: 'profile', element: <Profile /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
