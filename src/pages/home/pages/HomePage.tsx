import Layout from "@shared/components/layout/Layout";
import React, { useState } from "react";

const HomePage = () => {
  const [show, setShow] = useState(true);

  return (
    <Layout title="Home">
      {show ? (
        <>
          <p>show TRUE</p> <p>asjdbas;bda</p>
        </>
      ) : (
        <p>show FALSE</p>
      )}
      <button onClick={() => setShow(!show)}>show </button>
    </Layout>
  );
};

export default HomePage;
