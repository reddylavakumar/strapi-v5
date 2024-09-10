import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBullets extends Schema.Component {
  collectionName: 'components_components_bullets';
  info: {
    displayName: 'Bullet';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Bullets: Attribute.Component<'components.bullets', true>;
    Image: Attribute.Media;
  };
}

export interface ComponentsHowItWorks extends Schema.Component {
  collectionName: 'components_components_how_it_works';
  info: {
    displayName: 'How It Works';
    description: '';
  };
  attributes: {
    Tab: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
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
    Text: Attribute.String;
    Url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Image: Attribute.Media;
    Style: Attribute.Enumeration<['link', 'button']> &
      Attribute.DefaultTo<'link'>;
  };
}

export interface ComponentsLinksColumn extends Schema.Component {
  collectionName: 'components_components_links_columns';
  info: {
    displayName: 'Links Column';
  };
  attributes: {
    Title: Attribute.String;
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
    Number: Attribute.String;
    Description: Attribute.String;
  };
}

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: 'components_components_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    Title: Attribute.String;
    Placeholder: Attribute.String;
  };
}

export interface ComponentsNotification extends Schema.Component {
  collectionName: 'components_components_notifications';
  info: {
    displayName: 'Notification';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.Component<'components.link'>;
    Show: Attribute.Boolean & Attribute.DefaultTo<false>;
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
  };
  attributes: {
    Name: Attribute.String;
    Avatar: Attribute.Media;
    Job: Attribute.String;
    Opinion: Attribute.Text;
  };
}

export interface ComponentsTrustCard extends Schema.Component {
  collectionName: 'components_components_trust_cards';
  info: {
    displayName: 'Trust Card';
  };
  attributes: {
    Icon: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface LayoutContactUsSection extends Schema.Component {
  collectionName: 'components_layout_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
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
    Title: Attribute.String;
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
    Title: Attribute.String;
    Description_1: Attribute.String;
    Description_2: Attribute.String;
    Buttons: Attribute.Component<'components.link', true>;
    TextDetails: Attribute.String;
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
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Buttons: Attribute.Component<'components.link', true>;
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
    Title: Attribute.String;
    Stats: Attribute.Component<'components.metric', true>;
    Description: Attribute.String;
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
    Title: Attribute.String;
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
    Title: Attribute.String;
    Description: Attribute.Text;
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
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
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
