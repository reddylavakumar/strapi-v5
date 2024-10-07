import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBullets extends Schema.Component {
  collectionName: 'components_components_bullets';
  info: {
    displayName: 'Bullet';
    description: '';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
    Description: Attribute.RichText;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Feature title'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Bullets: Attribute.Component<'components.bullets', true>;
    ImageXL: Attribute.Media;
    ImageLG: Attribute.Media;
    ImageMD: Attribute.Media;
    ImageSM: Attribute.Media;
  };
}

export interface ComponentsHowItWorks extends Schema.Component {
  collectionName: 'components_components_how_it_works';
  info: {
    displayName: 'How It Works';
    description: '';
  };
  attributes: {
    Tab: Attribute.String & Attribute.DefaultTo<'SaaS'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Effortless Scaling with SaaS'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'This is placeholder content. Leverage the power of CodeRabbit\u2019s cloud-based solution with SaaS. Access real-time code reviews, automated suggestions, and seamless integration with your development pipeline\u2014all without the need to manage your own infrastructure. '>;
    Image: Attribute.Media;
    Bullets: Attribute.Component<'components.bullets', true>;
  };
}

export interface ComponentsLinkMenu extends Schema.Component {
  collectionName: 'components_components_link_menus';
  info: {
    displayName: 'Link Menu';
  };
  attributes: {
    Link: Attribute.Component<'components.link'>;
    hasSubmenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    Submenu: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<'Lorem ipsum'>;
    Url: Attribute.String & Attribute.DefaultTo<'/'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Image: Attribute.Media;
  };
}

export interface ComponentsLinksColumn extends Schema.Component {
  collectionName: 'components_components_links_columns';
  info: {
    displayName: 'Links Column';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Column title'>;
    Links: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsLinksMenu extends Schema.Component {
  collectionName: 'components_components_links_menus';
  info: {
    displayName: 'Links Menu';
  };
  attributes: {
    Link: Attribute.Component<'components.link'>;
    hasSubmenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    Submenu: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsMetric extends Schema.Component {
  collectionName: 'components_components_metrics';
  info: {
    displayName: 'Stat';
    description: '';
  };
  attributes: {
    Number: Attribute.String & Attribute.DefaultTo<'10k'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Repositories in review'>;
  };
}

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: 'components_components_newsletters';
  info: {
    displayName: 'Newsletter';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Sign up for our newsletter'>;
    Placeholder: Attribute.String & Attribute.DefaultTo<'Your email'>;
  };
}

export interface ComponentsNotification extends Schema.Component {
  collectionName: 'components_components_notifications';
  info: {
    displayName: 'Notification';
    description: '';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
    Link: Attribute.Component<'components.link'>;
    Show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsPill extends Schema.Component {
  collectionName: 'components_components_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Link: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsPrivacyPolicyQuestions extends Schema.Component {
  collectionName: 'components_components_privacy_policy_questions';
  info: {
    displayName: 'Privacy Policy Questions';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
    Bullets: Attribute.Component<'components.bullets', true>;
  };
}

export interface ComponentsSecurity extends Schema.Component {
  collectionName: 'components_components_securities';
  info: {
    displayName: 'Security Card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    DownloadText: Attribute.String;
    DownloadFile: Attribute.Media;
  };
}

export interface ComponentsSocials extends Schema.Component {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.DefaultTo<'Marguerite Bergnaum'>;
    Avatar: Attribute.Media;
    Job: Attribute.String &
      Attribute.DefaultTo<'Marketing Director @Metadata.io '>;
    Opinion: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
  };
}

export interface ComponentsTrustCard extends Schema.Component {
  collectionName: 'components_components_trust_cards';
  info: {
    displayName: 'Trust Card';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    Title: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur.Reviews only the essential code'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
  };
}

export interface LayoutContactUsSection extends Schema.Component {
  collectionName: 'components_layout_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Still have questions?'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutCustomersSection extends Schema.Component {
  collectionName: 'components_layout_customers_sections';
  info: {
    displayName: 'Customers Section';
    description: '';
  };
  attributes: {
    Customers: Attribute.Component<'components.link', true>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Trusted by 1000+ organizations'>;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    Features: Attribute.Component<'components.feature', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutGetStarted extends Schema.Component {
  collectionName: 'components_layout_get_starteds';
  info: {
    displayName: 'Get Started Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Get started today'>;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Attribute.String &
      Attribute.DefaultTo<'No credit card needed.'>;
    Buttons: Attribute.Component<'components.link', true>;
    TextDetails: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Image: Attribute.Media;
    ImageSM: Attribute.Media;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Image: Attribute.Media;
    Buttons: Attribute.Component<'components.link', true>;
    Tag: Attribute.String & Attribute.DefaultTo<'Page name'>;
  };
}

export interface LayoutHowItWorksSection extends Schema.Component {
  collectionName: 'components_layout_how_it_works_sections';
  info: {
    displayName: 'How It Works Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Steps: Attribute.Component<'components.how-it-works', true>;
  };
}

export interface LayoutMetricsSection extends Schema.Component {
  collectionName: 'components_layout_metrics_sections';
  info: {
    displayName: 'Stats Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'The most installed AI App on GitHub & GitLab'>;
    Stats: Attribute.Component<'components.metric', true>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Loved by 1000s of developers'>;
  };
}

export interface LayoutPillsSection extends Schema.Component {
  collectionName: 'components_layout_pills_sections';
  info: {
    displayName: 'Pills Section';
    description: '';
  };
  attributes: {
    Pills: Attribute.Component<'components.pill', true>;
  };
}

export interface LayoutPrivacyPolicySection extends Schema.Component {
  collectionName: 'components_layout_privacy_policy_sections';
  info: {
    displayName: 'Privacy Policy Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Our privacy policy'>;
    Description: Attribute.RichText;
    Questions: Attribute.Component<'components.privacy-policy-questions', true>;
  };
}

export interface LayoutSecuritySection extends Schema.Component {
  collectionName: 'components_layout_security_sections';
  info: {
    displayName: 'Security Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Securities: Attribute.Component<'components.security', true>;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials Section';
    description: '';
  };
  attributes: {
    Testimonials: Attribute.Component<'components.testimonial', true>;
    Title: Attribute.String & Attribute.DefaultTo<'What they say about us'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutTrustSection extends Schema.Component {
  collectionName: 'components_layout_trust_sections';
  info: {
    displayName: 'Trust Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Your data stays confidential'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'We take security, privacy, and compliance seriously.'>;
    Cards: Attribute.Component<'components.trust-card', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    canonical: Attribute.String & Attribute.DefaultTo<'https://coderabbit.ai/'>;
    keywords: Attribute.String &
      Attribute.DefaultTo<'coderabbit, ai, code, git, gitlab, github'>;
    og_url: Attribute.String & Attribute.DefaultTo<'https://coderabbit.ai/'>;
    og_title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    og_sitename: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_locale: Attribute.String & Attribute.DefaultTo<'en_US'>;
    og_type: Attribute.String & Attribute.DefaultTo<'website'>;
    og_image: Attribute.Media;
    twitter_card: Attribute.String & Attribute.DefaultTo<'summary_large_image'>;
    twitter_title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    twitter_description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    twitter_image: Attribute.Media;
    twitter_site: Attribute.String;
    twitter_creator: Attribute.String;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.bullets': ComponentsBullets;
      'components.feature': ComponentsFeature;
      'components.how-it-works': ComponentsHowItWorks;
      'components.link-menu': ComponentsLinkMenu;
      'components.link': ComponentsLink;
      'components.links-column': ComponentsLinksColumn;
      'components.links-menu': ComponentsLinksMenu;
      'components.metric': ComponentsMetric;
      'components.newsletter': ComponentsNewsletter;
      'components.notification': ComponentsNotification;
      'components.pill': ComponentsPill;
      'components.privacy-policy-questions': ComponentsPrivacyPolicyQuestions;
      'components.security': ComponentsSecurity;
      'components.socials': ComponentsSocials;
      'components.testimonial': ComponentsTestimonial;
      'components.trust-card': ComponentsTrustCard;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.customers-section': LayoutCustomersSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.get-started': LayoutGetStarted;
      'layout.hero': LayoutHero;
      'layout.how-it-works-section': LayoutHowItWorksSection;
      'layout.metrics-section': LayoutMetricsSection;
      'layout.pills-section': LayoutPillsSection;
      'layout.privacy-policy-section': LayoutPrivacyPolicySection;
      'layout.security-section': LayoutSecuritySection;
      'layout.testimonials': LayoutTestimonials;
      'layout.trust-section': LayoutTrustSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
