import Head from "next/head";
import { Accordion } from "@chakra-ui/react";
import EndpointItem from "../components/items/EndpointItem";
import Layout from "../layouts/Layout";

const Home = () => {
  const endpoints = [
    {
      title: "iPhones with Fingerprint",
      url: "/api/apple/iphone/fingerprint",
    },
    {
      title: "iPads with Fingerprint",
      url: "/api/apple/ipad/fingerprint",
    },
    {
      title: "iPads with Heaphone Jack",
      url: "/api/apple/ipad/headphone",
    },
    {
      title: "iPads (Cellular)",
      url: "/api/apple/ipad/cellular",
    },
    {
      title: "Samsung phones with Headphone Jack",
      url: "/api/samsung/headphone",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Device Scraper</title>
      </Head>
      <Accordion allowMultiple>
        {endpoints.map((endpoint, i) => {
          return (
            <EndpointItem key={i} title={endpoint.title} url={endpoint.url} />
          );
        })}
      </Accordion>
    </Layout>
  );
};

export default Home;
