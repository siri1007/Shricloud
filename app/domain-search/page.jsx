"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const DomainSearchPage = () => {

  const searchParams = useSearchParams();

  const domainName =
    searchParams.get("domain");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDomains = async () => {

      try {

        const res = await fetch(
          "/api/check-domain",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              domain: domainName,
            }),
          }
        );

        const data = await res.json();

        console.log(data);

        // FIX
        setResults(
          Array.isArray(data) ? data : []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    if (domainName) {
      fetchDomains();
    }

  }, [domainName]);

  return (

    <div className="container py-5">

      <h1>
        Results for: {domainName}
      </h1>

      {loading && (
        <p>Searching domains...</p>
      )}

      {!loading && results.length === 0 && (
        <p>No domains found</p>
      )}

      {!loading &&
        results.map((item, index) => (

          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >

            <h3>{item.domain}</h3>

            {item.available ? (

              <p style={{ color: "green" }}>
                Available
              </p>

            ) : (

              <p style={{ color: "red" }}>
                Taken
              </p>

            )}

            <p>
              ₹{item.price} INR / year
            </p>

          </div>

        ))}

    </div>
  );
};

export default DomainSearchPage;