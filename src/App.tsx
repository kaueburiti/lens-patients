import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { Layout } from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { PatientList } from "./patient/list/PatientList";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimateSharedLayout type="crossfade">
        <Layout>
          <PatientList />
        </Layout>
      </AnimateSharedLayout>
    </QueryClientProvider>
  );
};

export default App;
