import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <Container className="max-w-3xl space-y-8 md:space-y-10">
      <Section
        eyebrow="Terms of Use"
        title="The basics of using the Lares Health website."
        description="These Terms describe, in plain language, how you may use this website and what you can reasonably expect from us at this early stage of the product. They do not replace any specific written agreement we may sign with you in the future."
      />

      <div className="space-y-6 text-sm text-slate-600">
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            1. Acceptance of these Terms
          </h2>
          <p>
            By accessing or using this website, you agree to these Terms. If you
            do not agree, please do not use the site. If we update these Terms,
            your continued use of the site after the update means you accept the
            revised version.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            2. What this site is (and is not)
          </h2>
          <p>
            This website is for general information about Lares Health, early
            access opportunities, and related content. It does not provide
            medical advice, diagnosis, treatment, or emergency services. If you
            have a medical concern, you should contact a licensed clinician or
            emergency services directly.
          </p>
          <p>
            Any descriptions of potential product features are forward-looking
            and may change. Joining a waitlist does not create a patient,
            customer, or contractual relationship on its own.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            3. Your responsibilities
          </h2>
          <p>When using this site, you agree that you will not:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Violate any applicable laws or regulations.</li>
            <li>
              Attempt to interfere with the security or operation of the site.
            </li>
            <li>
              Use the site to transmit spam, malicious code, or harmful content.
            </li>
            <li>
              Misrepresent your identity or your authority to act on behalf of
              someone else.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            4. Intellectual property
          </h2>
          <p>
            The content on this site, including text, visuals, and branding, is
            owned by Lares Health or used with permission. You may view and
            reference the content for your personal or internal business
            purposes, but you may not copy, modify, or distribute it for other
            uses without our prior written consent.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            5. Third-party services and links
          </h2>
          <p>
            This site may link to third-party websites or services. We are not
            responsible for the content, security, or privacy practices of those
            third parties. Any use of third-party sites is at your own
            discretion and subject to their terms and policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            6. Disclaimers
          </h2>
          <p>
            This site is provided on an “as is” and “as available” basis. To the
            extent permitted by law, we disclaim all warranties, express or
            implied, including warranties of accuracy, fitness for a particular
            purpose, and non-infringement. We do not guarantee that the site
            will be uninterrupted or error-free.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            7. Limitation of liability
          </h2>
          <p>
            To the extent allowed by law, Lares Health and its officers,
            directors, and employees will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss
            of profits or data arising out of or related to your use of this
            site.
          </p>
          <p>
            Some jurisdictions do not allow all of these limitations, so some of
            the above may not apply to you. In those cases, our liability will
            be limited to the maximum extent permitted by law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            8. Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. When we do, we will
            change the date at the bottom of this page. If changes are material,
            we will make a reasonable effort to draw your attention to them.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            9. Governing law
          </h2>
          <p>
            These Terms are intended as a simple explanation of expectations for
            using this site. Any formal agreement we enter into with you may
            specify governing law, venues, and dispute resolution terms that
            supersede what is written here.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">10. Contact</h2>
          <p>
            If you have questions about these Terms, you can contact us via the
            Contact page or by replying to any email you receive from Lares
            Health.
          </p>
        </section>

        <p className="text-[0.75rem] text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  );
}
