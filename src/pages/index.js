import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";

import styles from "./index.module.css";

// GitHub API URL (Replace OWNER and REPO)
const CONTRIBUTORS_URL = "https://api.github.com/repos/AnimatedSwine37/persona-modding-docs/contributors";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Take a look at the tutorials available!
          </Link>
        </div>
      </div>
    </header>
  );
}

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch(CONTRIBUTORS_URL)
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error("Error fetching contributors:", error));
  }, []);

  return (
    <div className={styles.contributorsSection}>
      <h2>Contributors</h2>
      <div className={styles.contributorsList}>
        {contributors.length > 0 ? (
          contributors.map((contributor) => (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contributor}
            >
              <img src={contributor.avatar_url} width="50" height="50" alt={contributor.login} />
              <p>{contributor.login}</p>
            </a>
          ))
        ) : (
          <p>Loading contributors...</p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Persona Modding Docs" description="The Persona Modding Docs">
      <HomepageHeader />
      <main>
        <Contributors />
      </main>
    </Layout>
  );
}