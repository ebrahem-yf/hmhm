/* =========================================================
   HAMAMLES — script.js
========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Scroll progress bar ---------- */
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- Sticky header state ---------- */
  const header = document.getElementById('siteHeader');
  function updateHeader() {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---------- Mobile nav drawer ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });

  /* ---------- Scroll Reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const statNums = document.querySelectorAll('.stat-num');
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));

  /* ---------- Universal Modal System ("Projector Effect") ---------- */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  const modalData = {
  about: {
      title: 'About Hamamles',
      html: `
        <h2>About Hamamles</h2>
        <p><strong>Your Dedicated Growth Partners for the U.S. E-Commerce Market</strong></p>
        <p>Hamamles is a 100% remote digital agency built for one purpose: helping e-commerce businesses and brands win in the highly competitive United States market.</p>
        <p>We combine conversion-focused web development with hands-on Google Ads, SEO, and Google Merchant Center expertise. At Hamamles, we ensure your store isn't just built beautifully — it's built to grow, scale, and generate revenue.</p>

        <h3>The Problem We Solve</h3>
        <p>Entering the U.S. market can feel overwhelming. Competition is fierce, and technical roadblocks can instantly halt your business. One of our primary goals is resolving the deep frustration caused by Google Ads rejections and Merchant Center account suspensions.</p>
        <p>Whether you are a dropshipper or a brand selling proprietary products, a suspended account means lost momentum and dropping sales. We believe every merchant can unlock higher revenue when the U.S. market is targeted with technical precision and strict compliance.</p>
        <p>We are here to help:</p>
        <ul>
          <li><strong>Established Merchants in Crisis:</strong> We work tirelessly to reinstate suspended accounts, fix ad disapprovals, and restart stalled sales engines.</li>
          <li><strong>New &amp; Emerging Sellers:</strong> We guide merchants who are unsure how to penetrate the U.S. market or feel intimidated by the thousands of competitors already in their niche.</li>
        </ul>

        <h3>Our Vision &amp; Philosophy</h3>
        <p>Our vision is simple: to be the absolute best at what we do.</p>
        <p>In any industry you enter, there are thousands of people who got there before you. To succeed, you must strive for exceptional differentiation. We achieve this through precision — sales are built on accurate targeting, meticulous technical setup, and a flawless user experience.</p>
        <p>When you partner with Hamamles, we promise:</p>
        <ul>
          <li><strong>Unwavering Dedication:</strong> We treat your business and your ad accounts as if they were our own.</li>
          <li><strong>Total Transparency:</strong> We adhere to the highest standards of honesty and integrity in all our dealings. No hidden fees, no false promises — just data-driven results.</li>
          <li><strong>Premium Quality:</strong> From designing a visually stunning, high-converting website to executing complex SEO and paid media strategies, we never compromise on quality.</li>
        </ul>

        <h3>What We Do</h3>
        <p>Our remote-first team of senior specialists operates with zero agency overhead, allowing us to maintain a deep, singular focus on U.S. consumer behavior and search intent. We break our expertise down into two comprehensive pillars:</p>
        <ul>
          <li><strong>1. Professional Web Design &amp; Development</strong> — Whether you are an e-commerce merchant with a physical product, a restaurant, a local shop, a supermarket, or any other type of business, we design and develop highly attractive, user-friendly websites tailored to your exact needs. Our team specializes in custom-coded solutions (manual development), as well as expertly crafted WordPress and Shopify stores designed to turn visitors into buyers.</li>
          <li><strong>2. Comprehensive Digital Marketing (Google Ads &amp; SEO)</strong> — We take our clients on a complete, end-to-end journey. SEO and paid Google Ads achieve true synergy when used together, and our dedicated marketing team specializes in making these two strategies perfectly integrate. Our goal is to help you achieve up to a 65% increase in monthly sales profits.</li>
        </ul>

        <h3>Why Choose Hamamles?</h3>
        <p>We don't just build websites or run ads; we solve complex technical problems that stand between you and your financial goals. By combining a deep understanding of Google's strict policies with expert marketing strategies, we give you the confidence to navigate the U.S. market, outshine your competitors, and scale your sales with precision.</p>
        <p><strong>Ready to dominate the U.S. market? Let's build something successful together.</strong></p>
      `
    },
    'contact-info': {
      title: 'Contact Us',
      html: `
        <h2>Contact Us</h2>
        <p>Ready to talk? Reach our team directly, or use the Free Strategy Call form on this page for a full audit of your store or ad account.</p>
        <ul>
          <li>Email: <a href="mailto:hello@hamamles.com">hello@hamamles.com</a></li>
          <li>Phone: <a href="tel:+18005550199">+1 (800) 555-0199</a></li>
          <li>Availability: Monday–Friday, 9am–6pm EST</li>
        </ul>
      `
    },
 privacy: {
      title: 'Privacy Policy',
      html: `
        <h2>Privacy Policy</h2>
        <p><em>Effective Date: July 29, 2026</em></p>
        <p>At Hamamles ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal and business information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our web development and digital marketing services.</p>

        <h3>1. Information We Collect</h3>
        <p>To provide our specialized E-commerce, Google Ads, and Web Design services, we may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and billing details when you contact us or sign up for our services.</li>
          <li><strong>Business &amp; Technical Information:</strong> Website URLs, Google Ads/Merchant Center account IDs, Shopify/WordPress access credentials, and performance metrics necessary to resolve suspensions or manage campaigns.</li>
          <li><strong>Automatically Collected Data:</strong> IP addresses, browser types, and website usage data collected via cookies and analytics tools to improve our website experience.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use the information we collect solely to provide and improve our services to you, specifically to:</p>
        <ul>
          <li>Build, design, or optimize your custom, WordPress, or Shopify website</li>
          <li>Manage, audit, and troubleshoot your Google Ads and Google Merchant Center accounts</li>
          <li>Process payments and send operational communications</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>

        <h3>3. Information Sharing and Disclosure</h3>
        <p>We do not sell your personal data. We only share your information with trusted third parties under the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> Payment processors, hosting platforms, or third-party tools directly required to fulfill our services to you</li>
          <li><strong>Platform Integrations:</strong> Information securely shared with Google (e.g., submitting appeals for Merchant Center suspensions on your behalf)</li>
          <li><strong>Legal Compliance:</strong> If required by law or to protect the rights, property, or safety of Hamamles, our clients, or others</li>
        </ul>

        <h3>4. Data Security</h3>
        <p>We implement industry-standard administrative and technical security measures to protect your sensitive business credentials and personal data against unauthorized access, alteration, or destruction.</p>

        <h3>5. Your Privacy Rights</h3>
        <p>Depending on your U.S. state of residence (such as California under the CCPA), you may have the right to request access to the data we have collected about you, request its deletion, or opt out of specific data uses. To exercise these rights, please contact us.</p>

        <h3>6. Contact Us</h3>
        <p>If you have any questions regarding this Privacy Policy or how we handle your data, please contact us at <a href="mailto:hello@hamamles.com">hello@hamamles.com</a>.</p>
      `
    },

    terms: {
      title: 'Terms & Conditions',
      html: `
        <h2>Terms &amp; Conditions</h2>
        <p><em>Effective Date: July 29, 2026</em></p>

        <h3>1. Introduction and Acceptance of Terms</h3>
        <p>Welcome to Hamamles ("Company," "we," "us," or "our"). These Terms &amp; Conditions ("Terms") govern your access to and use of our website, as well as the engagement of our digital agency services, including but not limited to Web Design &amp; Development, Search Engine Optimization (SEO), Google Ads management, and Google Merchant Center compliance (collectively, the "Services").</p>
        <p>By accessing our website, communicating with our team, or paying an invoice for our Services, you ("Client," "you," or "your") acknowledge that you have read, understood, and unequivocally agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.</p>

        <h3>2. Description of Services</h3>
        <p>Hamamles is a specialized, 100% remote digital agency focusing entirely on the United States market. Our Services are categorized into two primary divisions:</p>
        <ul>
          <li><strong>Professional Web Design &amp; Development:</strong> The creation, modification, and optimization of custom-coded, WordPress, or Shopify websites tailored for e-commerce, local businesses, and corporate entities.</li>
          <li><strong>Comprehensive Digital Marketing:</strong> Strategic execution of Google Ads campaigns, SEO implementation, and technical resolution of Google Merchant Center and Google Ads account suspensions or policy violations.</li>
        </ul>

        <h3>3. Client Obligations and Security Standards</h3>
        <p>To ensure the highest level of accuracy and data security during our partnership, you agree to the following:</p>
        <ul>
          <li><strong>Accurate Information:</strong> You must provide highly accurate, up-to-date business information, product details, and legal documentation as required to build your website or verify your identity with third-party platforms like Google.</li>
          <li><strong>Secure Access and Authorization:</strong> You agree to grant Hamamles authorized, secure access (e.g., standard or admin roles) to your web hosting, content management systems (Shopify/WordPress), and digital marketing accounts (Google Ads, Google Analytics, Merchant Center).</li>
          <li><strong>Account Security:</strong> We mandate that all shared access be provided through secure, recognized delegation methods rather than sharing raw passwords, whenever possible. Hamamles employs rigorous internal security protocols to protect your proprietary data and will never share your access credentials with unauthorized third parties.</li>
          <li><strong>Legal Compliance:</strong> You guarantee that all products, services, and content you provide for your website or advertising campaigns strictly comply with U.S. local, state, and federal laws, as well as Google's Advertising Policies.</li>
        </ul>

        <h3>4. Third-Party Platforms and Guarantee Disclaimers</h3>
        <p>Our team operates with a deep, singular focus on maximizing your revenue and resolving technical roadblocks. However, because our Services heavily interact with third-party ecosystems, the following limitations apply:</p>
        <ul>
          <li><strong>No Absolute Guarantees on Third-Party Decisions:</strong> While our primary goal is to resolve deep frustrations such as Google Ads rejections and Merchant Center suspensions using our technical expertise, Google is a separate, independent entity. We do not control Google's algorithms, policy updates, or final compliance decisions. Therefore, Hamamles cannot legally guarantee the permanent reinstatement of any suspended account.</li>
          <li><strong>Performance Targets vs. Guarantees:</strong> Our objective of helping clients achieve a 65% increase in monthly sales profits is a target based on our historical data and expert methodologies. It is not a legally binding financial guarantee. Market conditions, U.S. consumer behavior, and competitor actions may affect actual results.</li>
        </ul>

        <h3>5. Fees, Billing, and Refund Policy</h3>
        <ul>
          <li><strong>Payment Terms:</strong> All fees for Services will be clearly outlined in a custom proposal, contract, or invoice. Payments must be made in full (or according to an agreed-upon milestone schedule) prior to the commencement or deployment of work.</li>
          <li><strong>Non-Refundable Services:</strong> Due to the bespoke nature of digital marketing, consulting, and coding, all payments are non-refundable once work has commenced. If an account suspension cannot be lifted by Google despite our accurate, compliant, and exhaustive efforts, Hamamles is not obligated to issue a refund for the time and labor expended.</li>
        </ul>

        <h3>6. Intellectual Property Rights</h3>
        <ul>
          <li><strong>Client Assets:</strong> You retain full ownership of all logos, text, images, and brand assets you provide to us. Upon final payment for Web Development services, you are granted full ownership and rights to the finalized website.</li>
          <li><strong>Agency Methodologies:</strong> Hamamles retains all intellectual property rights to our proprietary internal software, marketing strategies, code libraries, and workflows used to execute your project.</li>
        </ul>

        <h3>7. Confidentiality and Data Protection</h3>
        <p>Security and discretion are our top priorities. Both Hamamles and the Client agree to keep all proprietary business information, financial data, and strategic marketing plans strictly confidential. We will only use your confidential information for the express purpose of delivering the agreed-upon Services. We process all data in compliance with our Privacy Policy and relevant U.S. data protection standards.</p>

        <h3>8. Limitation of Liability</h3>
        <p>To the absolute maximum extent permitted by applicable U.S. law, Hamamles, its directors, employees, and remote specialists shall not be held liable for any indirect, incidental, special, consequential, or punitive damages. This includes, but is not limited to, loss of profits, loss of data, business interruption, or permanent bans enacted by third-party platforms (e.g., Google, Shopify), arising out of or related to the use of our Services. Our total liability in any matter related to these Terms is strictly limited to the amount you paid to Hamamles for the specific Service in dispute.</p>

        <h3>9. Indemnification</h3>
        <p>You agree to indemnify, defend, and hold harmless Hamamles against any and all legal claims, damages, losses, or expenses (including reasonable attorney's fees) arising from your breach of these Terms, your violation of U.S. laws, or your violation of third-party platform policies (such as selling counterfeit goods or prohibited items).</p>

        <h3>10. Term and Termination</h3>
        <ul>
          <li><strong>Mutual Right to Terminate:</strong> Either party may terminate the Service agreement with written notice if the other party breaches these Terms and fails to cure the breach within 14 days.</li>
          <li><strong>Agency Discretion:</strong> Hamamles reserves the right to immediately suspend or terminate Services if a Client engages in abusive behavior toward our team, requests that we engage in illegal activities, or repeatedly attempts to violate Google's core policies (e.g., attempting to bypass system restrictions maliciously).</li>
        </ul>

        <h3>11. Governing Law and Dispute Resolution</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles. Any dispute, controversy, or claim arising out of or relating to these Terms shall be settled through good-faith negotiation. If a resolution cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the state and federal courts located within the United States.</p>

        <h3>12. Amendments to the Terms</h3>
        <p>Hamamles reserves the right to modify or update these Terms &amp; Conditions at any time to reflect changes in our Services, legal requirements, or security standards. We will notify active clients of material changes. Continued use of our Services after such modifications constitutes your formal acceptance of the updated Terms.</p>

        <h3>13. Contact Information</h3>
        <p>For any legal inquiries, security concerns, or questions regarding these Terms &amp; Conditions, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:hello@hamamles.com">hello@hamamles.com</a></li>
          <li>Phone: <a href="tel:+18005550199">+1 (800) 555-0199</a></li>
        </ul>
      `
    }
  };

  function openModal(key) {
    const data = modalData[key];
    if (!data) return;
    modalContent.innerHTML = data.html;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(link.getAttribute('data-modal'));
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  /* ---------- Lead form handling ---------- */
  const leadForm = document.getElementById('leadForm');
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }
    const submitBtn = leadForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate submission — replace with real endpoint integration.
    setTimeout(() => {
      leadForm.innerHTML = `
        <div style="text-align:center; padding: 20px 0;">
          <h3 style="margin-bottom:10px;">You're All Set 🎉</h3>
          <p style="color: var(--ink-60);">Thanks for reaching out. A Hamamles strategist will email you within one business day to schedule your free call.</p>
        </div>
      `;
    }, 900);
  });

});
