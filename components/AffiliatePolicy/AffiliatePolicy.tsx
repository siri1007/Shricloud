import React from "react";
import styles from "./AffiliatePolicy.module.scss";
import Link from "next/link";



const AffiliatePolicy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Affiliate Program Policies</h1>

        <p>
          These Terms and Conditions (“T&C”, “Terms” or “Agreement”) form the
          agreement between <strong>ShriCloud</strong> and each of its Affiliates.
          Your involvement in the Affiliate Program constitutes full acceptance
          of these Terms. The T&C incorporate our{" "}
          <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Signing Up for the Program</h2>
        <p>
          The Affiliate Program allows Affiliates to promote ShriCloud’s services
          using approved materials and earn commissions. Any improper activity
          harming ShriCloud will be considered a violation.
        </p>

        <h2>Procedure</h2>
        <p>
          Admission requires submitting an application via the Affiliate Signup
          Form. All applications are manually reviewed. ShriCloud reserves the
          right to reject or terminate accounts violating policies.
        </p>

        <p>
          During participation, confidential information may be shared. You agree
          not to disclose or misuse it without written consent.
        </p>

        <h2>Restrictions</h2>
        <ul>
          <li>No illegal or spam advertising methods</li>
          <li>No adult, pornographic, or illegal content</li>
          <li>No trademark misuse or misleading branding</li>
          <li>No cookie stuffing, cloaking, or forced redirects</li>
        </ul>

        <h2>Affiliate Responsibilities</h2>
        <ul>
          <li>Provide accurate and updated information</li>
          <li>Maintain your website and its content</li>
          <li>Ensure no copyright violations</li>
        </ul>

        <h2>Affiliate Advertising</h2>
        <p>
          Approved promotional materials (logos, banners, links) may be used
          strictly for promoting ShriCloud services. Unauthorized use is
          prohibited.
        </p>

        <h2>Commissions and Payouts</h2>
        <ul>
          <li>Commissions are paid after 45 days validation period</li>
          <li>Minimum payout threshold is $100</li>
          <li>Payments are processed via PayPal</li>
          <li>Fraudulent activity leads to suspension</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          ShriCloud is not liable for indirect or consequential damages,
          including loss of profits. Terms may be updated anytime.
        </p>

        <p className={styles.lastUpdate}>
          Last Revision: 31st March 2023
        </p>
      </div>
    </div>
  );
};

export default AffiliatePolicy;