import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
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
    og_image: Attribute.Media<'images'>;
    twitter_card: Attribute.String & Attribute.DefaultTo<'summary_large_image'>;
    twitter_title: Attribute.String &
      Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    twitter_description: Attribute.Text &
      Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    twitter_image: Attribute.Media<'images'>;
    twitter_site: Attribute.String;
    twitter_creator: Attribute.String;
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

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsTrustCard extends Schema.Component {
  collectionName: 'components_components_trust_cards';
  info: {
    displayName: 'Trust Card';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur.Reviews only the essential code'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
    Button: Attribute.Component<'components.link'>;
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
    Avatar: Attribute.Media<'images'>;
    Job: Attribute.String &
      Attribute.DefaultTo<'Marketing Director @Metadata.io '>;
    Opinion: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    EmbedCode: Attribute.Text;
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

export interface ComponentsSecurity extends Schema.Component {
  collectionName: 'components_components_securities';
  info: {
    displayName: 'Security Card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    Button: Attribute.Component<'components.link'>;
    ImageDark: Attribute.Media<'images'>;
  };
}

export interface ComponentsPromoCard extends Schema.Component {
  collectionName: 'components_components_promo_card';
  info: {
    displayName: 'promo-card';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
    Description1: Attribute.Text &
      Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    Description2: Attribute.Text & Attribute.DefaultTo<'Free 14-day trial'>;
    Button: Attribute.Component<'components.link'> & Attribute.Required;
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

export interface ComponentsPlan extends Schema.Component {
  collectionName: 'components_components_plans';
  info: {
    displayName: 'Plan';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Price: Attribute.String;
    Detail: Attribute.String;
    Button: Attribute.Component<'components.link'>;
    IncludesTitle: Attribute.String;
    Bullets: Attribute.Component<'components.bullets', true>;
    Recommended: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    Image: Attribute.Media<'images'>;
    Link: Attribute.Component<'components.link'>;
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

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: 'components_components_newsletters';
  info: {
    displayName: 'Select Option';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    Value: Attribute.String & Attribute.DefaultTo<'Value'>;
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

export interface ComponentsMember extends Schema.Component {
  collectionName: 'components_components_members';
  info: {
    displayName: 'Member';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Name: Attribute.String;
    Position: Attribute.String;
  };
}

export interface ComponentsLogoTextPair extends Schema.Component {
  collectionName: 'components_components_logo_text_pairs';
  info: {
    displayName: 'Logo Text Pair';
    description: 'A component for displaying a logo with its associated text';
  };
  attributes: {
    Logo: Attribute.Media<'images'> & Attribute.Required;
    Text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'IDE Name'>;
    LogoHref: Attribute.String & Attribute.DefaultTo<'/'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    Image: Attribute.Media<'images'>;
    Hyperlink: Attribute.Component<'components.hyperlink'>;
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

export interface ComponentsLinkCard extends Schema.Component {
  collectionName: 'components_components_link_card_s';
  info: {
    displayName: 'Link Card ';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsLeadInputBanner extends Schema.Component {
  collectionName: 'components_components_lead_input_banner';
  info: {
    displayName: 'Lead Capture Button Banner';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Build better code, faster.'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
    Newsletter: Attribute.Component<'components.input-text-field'>;
  };
}

export interface ComponentsLeadButtonBanner extends Schema.Component {
  collectionName: 'components_components_lead_button_banner';
  info: {
    displayName: 'Lead Capture email Banner';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Build better code, faster.'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsInputTextField extends Schema.Component {
  collectionName: 'components_components_input_text_fields';
  info: {
    displayName: 'Input Text Field';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Placeholder: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    isTextarea: Attribute.Boolean & Attribute.DefaultTo<false>;
    isEmail: Attribute.Boolean & Attribute.DefaultTo<false>;
    isWebsite: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsInputSelectField extends Schema.Component {
  collectionName: 'components_components_input_select_fields';
  info: {
    displayName: 'Input Select Field';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    Placeholder: Attribute.String & Attribute.DefaultTo<'Placeholder'>;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    Options: Attribute.Component<'components.newsletter', true>;
  };
}

export interface ComponentsInputCheckboxField extends Schema.Component {
  collectionName: 'components_components_input_checkbox_fields';
  info: {
    displayName: 'Input Checkbox Field';
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<'Label'>;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsImpactSlider extends Schema.Component {
  collectionName: 'components_components_impact_sliders';
  info: {
    displayName: 'Impact Slider';
    description: '';
  };
  attributes: {
    Company: Attribute.Media<'images'>;
    Opinion: Attribute.Text;
    Name: Attribute.String;
    Avatar: Attribute.Media<'images'>;
    Job: Attribute.String;
    Button: Attribute.Component<'components.link'>;
    CompanyDark: Attribute.Media<'images'>;
  };
}

export interface ComponentsHyperlink extends Schema.Component {
  collectionName: 'components_components_hyperlink';
  info: {
    displayName: 'Hyperlink';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<'Lorem ipsum'>;
    HyperlinkText: Attribute.String & Attribute.DefaultTo<'Hyperlink text'>;
    HyperlinkUrl: Attribute.String &
      Attribute.DefaultTo<'https://www.coderabbit.ai'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    Image: Attribute.Media<'images'>;
    Bullets: Attribute.Component<'components.bullets', true>;
    Cta: Attribute.Component<'components.link'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ComponentsHoppyQuote extends Schema.Component {
  collectionName: 'components_components_hoppy_quote';
  info: {
    displayName: 'Quotes';
    icon: '';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String & Attribute.DefaultTo<'Refactoring.'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'No one will understand this code, not even Future Me.'>;
    Image: Attribute.Media<'images'>;
  };
}

export interface ComponentsHoppyHero extends Schema.Component {
  collectionName: 'components_components_hoppy_hero';
  info: {
    displayName: 'Hero Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Image: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
  };
}

export interface ComponentsHoppyCreative extends Schema.Component {
  collectionName: 'components_components_hoppy_creative';
  info: {
    displayName: 'Hoppy Creative';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
    CreativeImage: Attribute.Media<'images'>;
    UserImage: Attribute.Media<'images'>;
  };
}

export interface ComponentsHoppyComic extends Schema.Component {
  collectionName: 'components_components_hoppy_comic';
  info: {
    displayName: 'Hoppy Comic';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Hoppy Comic'>;
    brief: Attribute.Text &
      Attribute.DefaultTo<'A fun and engaging comic strip featuring Hoppy, the AI sidekick.'>;
    slug: Attribute.String & Attribute.DefaultTo<'/'>;
    coverImage: Attribute.Media<'images'>;
    Pdf: Attribute.Media<'files'>;
    publishedAt: Attribute.Date;
  };
}

export interface ComponentsHoppyBanner extends Schema.Component {
  collectionName: 'components_components_hoppy_banner';
  info: {
    displayName: 'Hoppy Banner';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    Button: Attribute.Component<'components.link'>;
    email: Attribute.Component<'components.banner-text-fields'>;
    Image: Attribute.Media<'images'>;
    ImagePositionLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsHeroCard extends Schema.Component {
  collectionName: 'components_components_hero_cards';
  info: {
    displayName: 'Hero Card';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Reviews only the essential code'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsFormSideSection extends Schema.Component {
  collectionName: 'components_components_form_side_sections';
  info: {
    displayName: 'Form Side Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ListTitle: Attribute.String;
    Bullets: Attribute.Component<'components.bullets', true>;
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
    ImageXL: Attribute.Media<'images'>;
    ImageLG: Attribute.Media<'images'>;
    ImageMD: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsFeatureCard extends Schema.Component {
  collectionName: 'components_components_features-card';
  info: {
    displayName: 'Feature-card';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Title: Attribute.String & Attribute.DefaultTo<'Feature title'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsFaqItem extends Schema.Component {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'Faq Item';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
    Category: Attribute.String &
      Attribute.DefaultTo<'Popular, Product, Security'>;
  };
}

export interface ComponentsCustomFeature extends Schema.Component {
  collectionName: 'components_components_custom_features';
  info: {
    displayName: 'Custom Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Feature title'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Bullets: Attribute.Component<'components.bullets', true>;
    ImageXL: Attribute.Media<'images'>;
    ImageLG: Attribute.Media<'images'>;
    ImageMD: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
    CardType: Attribute.Enumeration<['medium', 'small', 'big']> &
      Attribute.DefaultTo<'big'>;
  };
}

export interface ComponentsContentWithImage extends Schema.Component {
  collectionName: 'components_components_content_with_images';
  info: {
    displayName: 'Content with Image';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    Button: Attribute.Component<'components.link'>;
    ImageDark: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsContactSuccess extends Schema.Component {
  collectionName: 'components_components_contact_successes';
  info: {
    displayName: 'Contact Success';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Title: Attribute.String & Attribute.DefaultTo<'Hooray! '>;
    Description: Attribute.RichText &
      Attribute.DefaultTo<'Your message has been sent. We\u2019ll get back to you shortly.'>;
    Button: Attribute.Component<'components.link'>;
    SocialsTitle: Attribute.String &
      Attribute.DefaultTo<'In the meantime, follow along:'>;
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsCollapsible extends Schema.Component {
  collectionName: 'components_components_collapsibles';
  info: {
    displayName: 'Collapsible';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Feature title'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    ImageXL: Attribute.Media<'images'>;
    ImageLG: Attribute.Media<'images'>;
    ImageMD: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
  };
}

export interface ComponentsCaseStudy extends Schema.Component {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    CustomerLight: Attribute.Media<'images'> & Attribute.Required;
    CustomerDark: Attribute.Media<'images'> & Attribute.Required;
    CoverLight: Attribute.Media<'images'> & Attribute.Required;
    CoverDark: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Button: Attribute.Component<'components.link'> & Attribute.Required;
  };
}

export interface ComponentsCapsule extends Schema.Component {
  collectionName: 'components_components_capsule';
  info: {
    displayName: 'Capsule';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<'Lorem ipsum'>;
    Url: Attribute.String & Attribute.DefaultTo<'/'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

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

export interface ComponentsBlogSlider extends Schema.Component {
  collectionName: 'components_components_blog_sliders';
  info: {
    displayName: 'Blog Slider';
  };
  attributes: {
    Title: Attribute.String;
    Category: Attribute.String;
  };
}

export interface ComponentsBlogBanner extends Schema.Component {
  collectionName: 'components_components_blog_banner';
  info: {
    displayName: 'Blog Banner';
    description: '';
  };
  attributes: {
    widgetNameFromHashnode: Attribute.String & Attribute.DefaultTo<''>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    Button: Attribute.Component<'components.link'>;
    email: Attribute.Component<'components.banner-text-fields'>;
    Image: Attribute.Media<'images'>;
    ImagePositionLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsBannerTextFields extends Schema.Component {
  collectionName: 'components_components_banner_input_text_fields';
  info: {
    displayName: 'Input Text Field';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Placeholder: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    isTextarea: Attribute.Boolean & Attribute.DefaultTo<false>;
    isEmail: Attribute.Boolean & Attribute.DefaultTo<false>;
    isWebsite: Attribute.Boolean & Attribute.DefaultTo<false>;
    SuccessMessage: Attribute.Text &
      Attribute.DefaultTo<'Thank you for signing up!'>;
  };
}

export interface ComponentsAssetCard extends Schema.Component {
  collectionName: 'components_components_asset_card';
  info: {
    displayName: 'asset-card';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Title: Attribute.String & Attribute.DefaultTo<'Logo'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    SvgIcon: Attribute.Media<'images'>;
    PngIcon: Attribute.Media<'images'>;
    isDarkMode: Attribute.Boolean & Attribute.DefaultTo<false>;
    isIcon: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsAnnouncment extends Schema.Component {
  collectionName: 'components_components_announcment';
  info: {
    displayName: 'Announcment';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<'Logo'>;
    isClosable: Attribute.Boolean & Attribute.DefaultTo<true>;
    Button: Attribute.Component<'components.link'> & Attribute.Required;
  };
}

export interface LayoutWhitepaperFormSection extends Schema.Component {
  collectionName: 'components_layout_whitepaper_form_sections';
  info: {
    displayName: 'Whitepaper Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutVsFeatureSection extends Schema.Component {
  collectionName: 'components_layout_vs_extension_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Benefits: Attribute.Component<'components.security', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutVsCodeHeroSection extends Schema.Component {
  collectionName: 'components_layout_vs_code_heroes';
  info: {
    displayName: 'Hero Section';
    icon: '';
    description: '';
  };
  attributes: {
    Capsule: Attribute.Component<'components.capsule'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Image: Attribute.Media<'images'>;
    VideoOrGif: Attribute.Media<'images' | 'videos'>;
    VideoOrGifDark: Attribute.Media<'images' | 'videos'>;
    Buttons: Attribute.Component<'components.link', true>;
    LeftContentText: Attribute.String &
      Attribute.DefaultTo<'14-day free trial '>;
    MiddleContentText: Attribute.String & Attribute.DefaultTo<' | Works with'>;
    RightContentText: Attribute.Component<'components.logo-text-pair', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    CenterImage_Icon: Attribute.Media<'images'>;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Attribute.String &
      Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
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

export interface LayoutStartupFormSection extends Schema.Component {
  collectionName: 'components_layout_startup_form_sections';
  info: {
    displayName: 'Startup Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Complete this form, If your organization qualifies for our Startup program, we'll activate your account.">;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyWebsite: Attribute.Component<'components.input-text-field'>;
    GitOrgName: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    Email: Attribute.Component<'components.input-text-field'>;
    TrialCheckbox: Attribute.Component<'components.input-checkbox-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutSocFormSection extends Schema.Component {
  collectionName: 'components_layout_soc_form_sections';
  info: {
    displayName: 'SOC Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to request access:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutSimpleHero extends Schema.Component {
  collectionName: 'components_layout_simple_heroes';
  info: {
    displayName: 'Simple Hero Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Buttons: Attribute.Component<'components.link', true>;
    CarouselWithTooltips: Attribute.Component<'components.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    CarouselWithTooltipsDark: Attribute.Component<'components.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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

export interface LayoutPlansSection extends Schema.Component {
  collectionName: 'components_layout_plans_sections';
  info: {
    displayName: 'Plans Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<''>;
    Plans: Attribute.Component<'components.plan', true>;
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

export interface LayoutPartnershipFormSection extends Schema.Component {
  collectionName: 'components_layout_partnership_form_sections';
  info: {
    displayName: 'Partnership Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutNewsletterBlogSection extends Schema.Component {
  collectionName: 'components_layout_newsletter_blog_sections';
  info: {
    displayName: 'Blog Newsletter Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Sign up for our Newsletter'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Don\u2019t miss out on our latest articles'>;
    Newsletter: Attribute.Component<'components.input-text-field'>;
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

export interface LayoutMembersSection extends Schema.Component {
  collectionName: 'components_layout_members_sections';
  info: {
    displayName: 'Members Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Members: Attribute.Component<'components.member', true>;
  };
}

export interface LayoutMarkdownCardSection extends Schema.Component {
  collectionName: 'components_layout_markdown_card_sections';
  info: {
    displayName: 'Markdown Card Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Body: Attribute.RichText;
  };
}

export interface LayoutLeadCaptureLayout extends Schema.Component {
  collectionName: 'components_layout_lead_capture_layout_sections';
  info: {
    displayName: 'Lead Capture Section';
  };
  attributes: {
    Button: Attribute.Component<'components.lead-button-banner'>;
    Email: Attribute.Component<'components.lead-input-banner'>;
  };
}

export interface LayoutJoinUsSection extends Schema.Component {
  collectionName: 'components_layout_join_us_sections';
  info: {
    displayName: 'Join Us Section';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHsEmbededCalendar extends Schema.Component {
  collectionName: 'components_layout_hs_embeded_calendars';
  info: {
    displayName: 'HsEmbededCalendar';
    icon: 'calendar';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    SourceUrl: Attribute.String;
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

export interface LayoutHoppyMood extends Schema.Component {
  collectionName: 'components_layout_hoppy_mood';
  info: {
    displayName: 'Hoppy Quotes';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Button: Attribute.Component<'components.link'>;
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHoppyFanCreatives extends Schema.Component {
  collectionName: 'components_layout_hoppy_fan_creatives';
  info: {
    displayName: 'Fan Creatives Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Socials: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHoppyComicSection extends Schema.Component {
  collectionName: 'components_layout_hoppy_comic_section';
  info: {
    displayName: 'Comic Section';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Image: Attribute.Media<'images'>;
    Button: Attribute.Component<'components.link'>;
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
    Capsule: Attribute.Component<'components.capsule'>;
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Image: Attribute.Media<'images'>;
    VideoOrGif: Attribute.Media<'images' | 'videos'>;
    Buttons: Attribute.Component<'components.link', true>;
    Tag: Attribute.String & Attribute.DefaultTo<'Page name'>;
    LottieLG: Attribute.JSON;
    Bullets: Attribute.Component<'components.bullets', true>;
    LottieSM: Attribute.JSON;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Attribute.String &
      Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    ListTitle: Attribute.String & Attribute.DefaultTo<'Why choose CodeRabbit?'>;
    BackedBy: Attribute.String & Attribute.DefaultTo<'We\u2019re backed by'>;
    BackedByImages: Attribute.Media<'images', true>;
    BackedByImagesDark: Attribute.Media<'images', true>;
  };
}

export interface LayoutHeroCardsSection extends Schema.Component {
  collectionName: 'components_layout_hero_cards_sections';
  info: {
    displayName: 'Hero Cards Section';
  };
  attributes: {
    Cards: Attribute.Component<'components.hero-card', true>;
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
    Buttons: Attribute.Component<'components.link', true>;
    TextDetails: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Image: Attribute.Media<'images'>;
    ImageDark: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
    Description_2: Attribute.String;
  };
}

export interface LayoutGdprFormSection extends Schema.Component {
  collectionName: 'components_layout_gdpr_form_sections';
  info: {
    displayName: 'GDPR Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to request access:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<''>;
    Description: Attribute.String & Attribute.DefaultTo<''>;
    Features: Attribute.Component<'components.feature', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFeatureGridSection extends Schema.Component {
  collectionName: 'components_layout_features_grid_sections';
  info: {
    displayName: 'Features Grid Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<''>;
    Features: Attribute.Component<'components.feature-card', true>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: 'components_layout_faq';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Frequently asked questions'>;
    Description: Attribute.String;
    Faqs: Attribute.Component<'components.faq-item', true>;
    SplitIntoTwoHalves: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutFaqSection extends Schema.Component {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Frequently asked questions'>;
    Button: Attribute.Component<'components.link'>;
    Faqs: Attribute.Component<'components.faq-item', true>;
  };
}

export interface LayoutEventCard extends Schema.Component {
  collectionName: 'components_layout_event_cards';
  info: {
    displayName: 'Event Card';
    icon: 'check';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutEnterprisePlatformSection extends Schema.Component {
  collectionName: 'components_layout_enterprise_platform_sections';
  info: {
    displayName: 'Enterprise Platform Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Send your reports to any Platform'>;
    Image: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
    ImageDark: Attribute.Media<'images'>;
    ImageSMDark: Attribute.Media<'images'>;
  };
}

export interface LayoutEnterpriseImpactSection extends Schema.Component {
  collectionName: 'components_layout_enterprise_impact_sections';
  info: {
    displayName: 'Enterprise Impact Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Proven Enterprise Impact'>;
    Slider: Attribute.Component<'components.impact-slider', true>;
  };
}

export interface LayoutEnterpriseHeroWithVideo extends Schema.Component {
  collectionName: 'components_layout_enterprise_hero_with_videos';
  info: {
    displayName: 'Enterprise Hero With Video';
    icon: '';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Buttons: Attribute.Component<'components.link', true>;
    Tag: Attribute.String & Attribute.DefaultTo<'Page name'>;
    Description_1: Attribute.String & Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Attribute.String &
      Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Attribute.String &
      Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    YTVideoUrl: Attribute.String;
  };
}

export interface LayoutCustomersSection extends Schema.Component {
  collectionName: 'components_layout_customers_sections';
  info: {
    displayName: 'Customers Section';
    description: '';
  };
  attributes: {
    Customers: Attribute.Component<'components.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Title: Attribute.String &
      Attribute.DefaultTo<'Trusted by 1000+ organizations'>;
    Grayscale: Attribute.Boolean & Attribute.DefaultTo<true>;
    CustomersDark: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutCustomFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_custom_features_sections';
  info: {
    displayName: 'Custom Features Section';
    icon: 'dashboard';
  };
  attributes: {
    CustomLayout: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Features: Attribute.Component<'components.custom-feature', true>;
    Button: Attribute.Component<'components.link'>;
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

export interface LayoutContactSupportFormSection extends Schema.Component {
  collectionName: 'components_layout_contact_support_form_sections';
  info: {
    displayName: 'Support Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please complete this form so we can assist you more effectively:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    HowCanWeHelp: Attribute.Component<'components.input-text-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutContactFormSection extends Schema.Component {
  collectionName: 'components_layout_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    FirstName: Attribute.Component<'components.input-text-field'>;
    LastName: Attribute.Component<'components.input-text-field'>;
    CompanyName: Attribute.Component<'components.input-text-field'>;
    WorkEmail: Attribute.Component<'components.input-text-field'>;
    JobTitle: Attribute.Component<'components.input-text-field'>;
    NumberOfDevelopers: Attribute.Component<'components.input-select-field'>;
    HowCanWeHelp: Attribute.Component<'components.input-text-field'>;
    Button: Attribute.Component<'components.link'>;
  };
}

export interface LayoutCollapsibleBoxesSection extends Schema.Component {
  collectionName: 'components_layout_collapsible_boxes_sections';
  info: {
    displayName: 'Collapsible Boxes Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<''>;
    Features: Attribute.Component<'components.collapsible', true>;
  };
}

export interface LayoutCaseStudySection extends Schema.Component {
  collectionName: 'components_layout_case_study_sections';
  info: {
    displayName: 'Case Study Section';
  };
  attributes: {
    Cases: Attribute.Component<'components.case-study', true> &
      Attribute.Required;
    Button: Attribute.Component<'components.link'> & Attribute.Required;
  };
}

export interface LayoutBrandGuidelineHeroSection extends Schema.Component {
  collectionName: 'components_brand-guideline_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'CodeRabbit Brand Assets'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Feel free to use the CodeRabbit logos provided below just keep them as-is to help us stay consistent. '>;
    Image: Attribute.Media<'images'>;
  };
}

export interface LayoutBrandGuidelineAssetSection extends Schema.Component {
  collectionName: 'components_asset_sections';
  info: {
    displayName: 'Asset Section';
    description: '';
  };
  attributes: {
    AssetCard: Attribute.Component<'components.asset-card', true>;
  };
}

export interface LayoutBlogSliderSection extends Schema.Component {
  collectionName: 'components_layout_blog_slider_sections';
  info: {
    displayName: 'Blog Slider Section';
    description: '';
  };
  attributes: {
    Slider: Attribute.Component<'components.blog-slider', true>;
  };
}

export interface LayoutBlogHeroSection extends Schema.Component {
  collectionName: 'components_layout_blog_hero_sections';
  info: {
    displayName: 'Blog Hero Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'CodeRabbit Blog'>;
    Description: Attribute.String &
      Attribute.DefaultTo<'Dig into insights about our products, use cases, and POVs.'>;
    SearchPlaceholder: Attribute.String &
      Attribute.DefaultTo<'Search articles'>;
  };
}

export interface LayoutBlogBanners extends Schema.Component {
  collectionName: 'components_layout_blog_banners';
  info: {
    displayName: 'Blog Banners';
    description: '';
  };
  attributes: {
    Banner: Attribute.Component<'components.blog-banner', true>;
  };
}

export interface LayoutArchitecture extends Schema.Component {
  collectionName: 'components_layout_architecture';
  info: {
    displayName: 'Architecture Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Get started today'>;
    Image: Attribute.Media<'images'>;
    ImageSM: Attribute.Media<'images'>;
    ImageDark: Attribute.Media<'images'>;
    ImageDarkSM: Attribute.Media<'images'>;
  };
}

export interface LayoutAlternatedContent extends Schema.Component {
  collectionName: 'components_layout_alternated_contents';
  info: {
    displayName: 'Alternated Content';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    ContentWithImages: Attribute.Component<
      'components.content-with-image',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.trust-card': ComponentsTrustCard;
      'components.testimonial': ComponentsTestimonial;
      'components.socials': ComponentsSocials;
      'components.security': ComponentsSecurity;
      'components.promo-card': ComponentsPromoCard;
      'components.privacy-policy-questions': ComponentsPrivacyPolicyQuestions;
      'components.plan': ComponentsPlan;
      'components.pill': ComponentsPill;
      'components.notification': ComponentsNotification;
      'components.newsletter': ComponentsNewsletter;
      'components.metric': ComponentsMetric;
      'components.member': ComponentsMember;
      'components.logo-text-pair': ComponentsLogoTextPair;
      'components.links-column': ComponentsLinksColumn;
      'components.link': ComponentsLink;
      'components.link-menu': ComponentsLinkMenu;
      'components.link-card': ComponentsLinkCard;
      'components.lead-input-banner': ComponentsLeadInputBanner;
      'components.lead-button-banner': ComponentsLeadButtonBanner;
      'components.input-text-field': ComponentsInputTextField;
      'components.input-select-field': ComponentsInputSelectField;
      'components.input-checkbox-field': ComponentsInputCheckboxField;
      'components.impact-slider': ComponentsImpactSlider;
      'components.hyperlink': ComponentsHyperlink;
      'components.how-it-works': ComponentsHowItWorks;
      'components.hoppy-quote': ComponentsHoppyQuote;
      'components.hoppy-hero': ComponentsHoppyHero;
      'components.hoppy-creative': ComponentsHoppyCreative;
      'components.hoppy-comic': ComponentsHoppyComic;
      'components.hoppy-banner': ComponentsHoppyBanner;
      'components.hero-card': ComponentsHeroCard;
      'components.form-side-section': ComponentsFormSideSection;
      'components.feature': ComponentsFeature;
      'components.feature-card': ComponentsFeatureCard;
      'components.faq-item': ComponentsFaqItem;
      'components.custom-feature': ComponentsCustomFeature;
      'components.content-with-image': ComponentsContentWithImage;
      'components.contact-success': ComponentsContactSuccess;
      'components.collapsible': ComponentsCollapsible;
      'components.case-study': ComponentsCaseStudy;
      'components.capsule': ComponentsCapsule;
      'components.bullets': ComponentsBullets;
      'components.blog-slider': ComponentsBlogSlider;
      'components.blog-banner': ComponentsBlogBanner;
      'components.banner-text-fields': ComponentsBannerTextFields;
      'components.asset-card': ComponentsAssetCard;
      'components.announcment': ComponentsAnnouncment;
      'layout.whitepaper-form-section': LayoutWhitepaperFormSection;
      'layout.vs-feature-section': LayoutVsFeatureSection;
      'layout.vs-code-hero-section': LayoutVsCodeHeroSection;
      'layout.trust-section': LayoutTrustSection;
      'layout.testimonials': LayoutTestimonials;
      'layout.startup-form-section': LayoutStartupFormSection;
      'layout.soc-form-section': LayoutSocFormSection;
      'layout.simple-hero': LayoutSimpleHero;
      'layout.security-section': LayoutSecuritySection;
      'layout.privacy-policy-section': LayoutPrivacyPolicySection;
      'layout.plans-section': LayoutPlansSection;
      'layout.pills-section': LayoutPillsSection;
      'layout.partnership-form-section': LayoutPartnershipFormSection;
      'layout.newsletter-blog-section': LayoutNewsletterBlogSection;
      'layout.metrics-section': LayoutMetricsSection;
      'layout.members-section': LayoutMembersSection;
      'layout.markdown-card-section': LayoutMarkdownCardSection;
      'layout.lead-capture-layout': LayoutLeadCaptureLayout;
      'layout.join-us-section': LayoutJoinUsSection;
      'layout.hs-embeded-calendar': LayoutHsEmbededCalendar;
      'layout.how-it-works-section': LayoutHowItWorksSection;
      'layout.hoppy-mood': LayoutHoppyMood;
      'layout.hoppy-fan-creatives': LayoutHoppyFanCreatives;
      'layout.hoppy-comic-section': LayoutHoppyComicSection;
      'layout.hero': LayoutHero;
      'layout.hero-cards-section': LayoutHeroCardsSection;
      'layout.get-started': LayoutGetStarted;
      'layout.gdpr-form-section': LayoutGdprFormSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.feature-grid-section': LayoutFeatureGridSection;
      'layout.faq': LayoutFaq;
      'layout.faq-section': LayoutFaqSection;
      'layout.event-card': LayoutEventCard;
      'layout.enterprise-platform-section': LayoutEnterprisePlatformSection;
      'layout.enterprise-impact-section': LayoutEnterpriseImpactSection;
      'layout.enterprise-hero-with-video': LayoutEnterpriseHeroWithVideo;
      'layout.customers-section': LayoutCustomersSection;
      'layout.custom-features-section': LayoutCustomFeaturesSection;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.contact-support-form-section': LayoutContactSupportFormSection;
      'layout.contact-form-section': LayoutContactFormSection;
      'layout.collapsible-boxes-section': LayoutCollapsibleBoxesSection;
      'layout.case-study-section': LayoutCaseStudySection;
      'layout.brand-guideline-hero-section': LayoutBrandGuidelineHeroSection;
      'layout.brand-guideline-asset-section': LayoutBrandGuidelineAssetSection;
      'layout.blog-slider-section': LayoutBlogSliderSection;
      'layout.blog-hero-section': LayoutBlogHeroSection;
      'layout.blog-banners': LayoutBlogBanners;
      'layout.architecture': LayoutArchitecture;
      'layout.alternated-content': LayoutAlternatedContent;
    }
  }
}
