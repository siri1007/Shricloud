import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 leading-7">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p>
        This Terms of Service Agreement (“Agreement”) is entered into between
        ShriCloud (also referred to as ShriCloud Network), headquartered in
        Hyderabad, Telangana, India, and you (“Customer”). This Agreement becomes
        effective upon your use of https://ShriCloud.com or upon electronic acceptance.
      </p>

      <h2 className="text-xl font-semibold mt-6">Customer Agreement</h2>
      <p>
        These Terms of Service (TOS) apply to all services provided by ShriCloud
        throughout the service period, including renewals. By signing up, you agree
        to comply with all terms. Only licensed and legal third-party software may
        be used. ShriCloud reserves the right to suspend or terminate services at
        its discretion if misuse is detected.
      </p>

      <h2 className="text-xl font-semibold mt-6">Content Policy</h2>
      <p>
        Services must be used for lawful purposes only. Any content violating laws
        or regulations is strictly prohibited.
      </p>

      <ul className="list-disc ml-6">
        <li>Ponzi schemes, crypto miners, spam tools, bots, scanners</li>
        <li>Illegal drugs, explosives, malware, phishing, piracy</li>
        <li>Adult content, gambling, illegal downloads</li>
        <li>Human trafficking, prostitution, extremist or terrorist content</li>
        <li>Child exploitation material (strictly prohibited)</li>
        <li>Streaming copyrighted content without authorization</li>
        <li>High-resolution media hosting without permission</li>
      </ul>

      <p className="mt-3">
        ShriCloud reserves the right to classify any content as prohibited if deemed
        offensive, abusive, or inappropriate.
      </p>

      <h2 className="text-xl font-semibold mt-6">Abuse of Resources</h2>
      <ul className="list-disc ml-6">
        <li>Unauthorized access attempts or hacking</li>
        <li>Port scanning or vulnerability scanning</li>
        <li>DDoS attacks</li>
        <li>Hosting exploit tools or illegal software</li>
      </ul>

      <p>
        Violations may result in immediate suspension or termination without refund.
      </p>

      <h2 className="text-xl font-semibold mt-6">Spam Policy</h2>
      <p>
        Sending unsolicited emails (spam) is strictly prohibited. Violations may lead
        to suspension, termination, and penalties.
      </p>

      <ul className="list-disc ml-6">
        <li>First violation: Warning</li>
        <li>Second violation: Termination + fees</li>
        <li>Severe cases: Immediate permanent ban</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Bandwidth Usage</h2>
      <p>
        Accounts exceeding bandwidth limits may be suspended until upgraded or usage
        is reduced.
      </p>

      <ul className="list-disc ml-6">
        <li>Starter Basic: 22540 MB</li>
        <li>Starter Plus: 49560 MB</li>
        <li>Starter Business: 75684 MB</li>
        <li>Premium Lite: 90569 MB</li>
        <li>Premium Pro: 180569 MB</li>
        <li>Premium Turbo: 270435 MB</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Account Verification</h2>
      <p>
        Failure to complete verification will result in no refunds under any
        circumstances.
      </p>

      <h2 className="text-xl font-semibold mt-6">VPS Rules</h2>
      <p>
        Customers using unmanaged VPS must configure DNS, email, and accounts
        themselves. ShriCloud support is not responsible for setup.
      </p>

      <h2 className="text-xl font-semibold mt-6">Email Limits</h2>
      <ul className="list-disc ml-6">
        <li>Shared hosting: 500 emails/hour</li>
        <li>VPS: 15,000 emails/hour</li>
        <li>Dedicated: 36,000 emails/hour</li>
      </ul>

      <p>Inbox delivery is not guaranteed.</p>

      <h2 className="text-xl font-semibold mt-6">Backup Policy</h2>
      <p>
        Customers are responsible for maintaining backups. ShriCloud does not
        guarantee backup availability.
      </p>

      <ul className="list-disc ml-6">
        <li>Database backups: Daily (7-day retention)</li>
        <li>Website backups: Weekly (1-day retention)</li>
        <li>No email/media backups included</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Unlimited Hosting</h2>
      <p>
        Applies only to shared/reseller plans. Mailbox limits:
      </p>

      <ul className="list-disc ml-6">
        <li>Max mailbox size: 5GB</li>
        <li>Domain total: 50GB</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Uptime Guarantee</h2>
      <p>
        99.99% uptime is targeted but not guaranteed due to maintenance or external
        factors such as third-party failures, natural disasters, or infrastructure
        issues.
      </p>

      <h2 className="text-xl font-semibold mt-6">Security</h2>
      <ul className="list-disc ml-6">
        <li>You are responsible for account security</li>
        <li>Do not share passwords</li>
        <li>Unauthorized access attempts are prohibited</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Billing Policy</h2>
      <ul className="list-disc ml-6">
        <li>7-day refund (first-time annual plans only)</li>
        <li>No refund for domains, VPS, SSL, licenses</li>
        <li>No refund for violations</li>
        <li>Refund processing: 7–14 working days</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Account Termination</h2>
      <ul className="list-disc ml-6">
        <li>User cancellation</li>
        <li>Non-renewal</li>
        <li>TOS violation</li>
        <li>Fraud detection</li>
        <li>Chargebacks</li>
      </ul>

      <p>
        All data will be deleted upon termination. Customers must maintain backups.
      </p>

      <h2 className="text-xl font-semibold mt-6">Indemnification</h2>
      <p>
        Customers agree to hold ShriCloud harmless from any liabilities, damages,
        or legal claims arising from service use.
      </p>

      <h2 className="text-xl font-semibold mt-6">Website Migration</h2>
      <ul className="list-disc ml-6">
        <li>Migration time: 6–24 hours</li>
        <li>Queue-based processing</li>
        <li>Valid for 14 days</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Changes to Terms</h2>
      <p>
        ShriCloud may modify these terms at any time without prior notice. Continued
        use of services implies acceptance of updated terms.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last Revised: 31st March 2023
      </p>
    </div>
  );
};

export default TermsOfService;