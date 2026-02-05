import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <div className="bg-bg-main">
      <Section
        eyebrow="Privacy Policy"
        title="How LaresCare handles your information."
        description="This Privacy Policy explains, at a high level, how LaresCare collects, uses, and protects information when you use our services or join our waitlist. It is written for families and seniors, not lawyers."
        className="pt-12 md:pt-16 pb-8 md:pb-10"
      />

      <Container className="pb-24">
        <div className="max-w-3xl space-y-12 rounded-[2rem] bg-white p-8 md:p-12 text-text-secondary shadow-lg shadow-brand-blue/5 border border-brand-cream/40">
          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              1. Who this policy applies to
            </h2>
            <p>
              This policy applies to visitors to the LaresCare website and
              people who join our waitlist or otherwise contact us about the
              service. It does not replace any agreement we may sign with you in
              the future if you enroll in a formal pilot or commercial program.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              2. Information we collect
            </h2>
            <p>We collect information in three main ways:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-semibold text-brand-blue">Information you provide</span> –
                for example, your name, email address, and any details you share
                when you join the waitlist or contact us.
              </li>
              <li>
                <span className="font-semibold text-brand-blue">Usage information</span> – basic
                technical details about how you interact with the website, such as
                IP address, browser type, and pages visited. This may be collected
                via logs or analytics tools.
              </li>
              <li>
                <span className="font-semibold text-brand-blue">Pilot or product data</span> –
                if you later participate in a pilot or subscribe to the service,
                we may process additional information related to activity and
                wellness signals. Before that happens, we will provide more
                detailed terms.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              3. How we use this information
            </h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and manage the waitlist.</li>
              <li>
                Understand interest in LaresCare and plan pilots, features, and
                pricing.
              </li>
              <li>Improve the website and our communications.</li>
              <li>
                Communicate with you about early access opportunities, product
                updates, and related information you may reasonably expect.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              4. How we think about health-related data
            </h2>
            <p>
              LaresCare is currently focused on consumer wellness and safety.
              Our early product concepts rely on signals from devices such as
              iPhone and Apple Watch. We design systems with the expectation that
              health-related information is sensitive and should be treated with
              care.
            </p>
            <p>
              If we ever change how we handle health-related information or enter
              into relationships that are governed by specific regulations, we
              will update our documentation and agreements to reflect that. This
              page is informational and does not constitute legal advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              5. How we share information
            </h2>
            <p>
              We do not sell your personal information. We may share limited
              information with:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-semibold text-brand-blue">Service providers</span> who help
                us operate the website, manage email, or run analytics, under
                appropriate confidentiality terms.
              </li>
              <li>
                <span className="font-semibold text-brand-blue">Legal or safety reasons</span>{" "}
                when we believe in good faith that disclosure is required by law
                or necessary to protect rights, safety, or security.
              </li>
              <li>
                <span className="font-semibold text-brand-blue">Business changes</span> if we are
                involved in a merger, acquisition, or similar transaction, where
                information may be transferred as part of that process.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              6. Data retention
            </h2>
            <p>
              We retain information for as long as it is reasonably needed for the
              purposes described above, or as required by law. If you would like
              us to stop contacting you or to delete information you previously
              provided, you can reach out using the contact form on our homepage, and we will
              review your request subject to any obligations we have to keep
              certain records.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              7. Your choices
            </h2>
            <p>
              You can opt out of non-essential communications at any time by
              following unsubscribe instructions in our emails or by contacting
              us directly. If you are part of a pilot or early access program, we
              may still need to send important service or safety-related
              communications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">
              8. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time as our product
              or legal requirements change. When we do, we will update the date at
              the bottom of this page. If changes are material, we will make a
              reasonable effort to let you know.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-headline font-bold text-brand-blue">9. Contact</h2>
            <p>
              If you have questions about this policy or how we handle
              information, you can contact us through the contact form on this
              site or by replying to any email you receive from LaresCare.
            </p>
          </section>

          <p className="pt-6 border-t border-brand-blue/10 text-sm opacity-60">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </div>
  );
}
