import type { Schema, Struct } from '@strapi/strapi';

export interface CasestudyCaseConclusionCard extends Struct.ComponentSchema {
  collectionName: 'components_components_case_conclusion_card';
  info: {
    description: '';
    displayName: 'Case Conclusion Card';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
  };
}

export interface CasestudyCaseHome extends Struct.ComponentSchema {
  collectionName: 'components_components_case_homes';
  info: {
    description: 'Home section for case studies';
    displayName: 'Case Home';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    CaseDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>;
    CaseTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor '>;
    ClientLogo: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ClientLogoDark: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ClientName: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Lorem ipsum'>;
    Image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ImageSM: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface CasestudyConclusion extends Struct.ComponentSchema {
  collectionName: 'components_components_case_conculision';
  info: {
    description: '';
    displayName: 'Conclusion';
    pluralName: 'case-conclusions';
    singularName: 'case-conclusion';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Conclusion: Schema.Attribute.Component<
      'casestudy.case-conclusion-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Here\u2019s how teams can close the gap:'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Section 1 '>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ways to Work Together'>;
  };
}

export interface CasestudySection1 extends Struct.ComponentSchema {
  collectionName: 'components_components_case_section1';
  info: {
    description: '';
    displayName: 'Section 1';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Here\u2019s how teams can close the gap:'>;
    Image: Schema.Attribute.Media<'images'>;
    NameAndPosition: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Section 1 '>;
    Testimonial: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ways to Work Together'>;
  };
}

export interface CasestudySection2 extends Struct.ComponentSchema {
  collectionName: 'components_components_case_section2';
  info: {
    description: '';
    displayName: 'Section 2';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Paragraph: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Section 2 '>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
  };
}

export interface CasestudySection3 extends Struct.ComponentSchema {
  collectionName: 'components_components_case_section3';
  info: {
    description: '';
    displayName: 'Section 3';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Image: Schema.Attribute.Media<'images'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Section 3'>;
    SubHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ways to Work Together'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ways to Work Together'>;
  };
}

export interface CasestudySection4 extends Struct.ComponentSchema {
  collectionName: 'components_components_case_section4';
  info: {
    description: '';
    displayName: 'Section 4';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
  };
}

export interface CasestudyStats extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies_stats';
  info: {
    description: '';
    displayName: 'Stats';
    pluralName: 'case-studies-stats';
    singularName: 'case-study-stat';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Brief: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Stats: Schema.Attribute.Component<'components.metric', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface CasestudyTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_components_case_testimonial';
  info: {
    description: '';
    displayName: 'Testimonial Card';
  };
  attributes: {
    testimonial: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
  };
}

export interface ComponentsAnnouncment extends Struct.ComponentSchema {
  collectionName: 'components_components_announcment';
  info: {
    description: '';
    displayName: 'Announcment';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false> &
      Schema.Attribute.Required;
    isClosable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsAssetCard extends Struct.ComponentSchema {
  collectionName: 'components_components_asset_card';
  info: {
    description: '';
    displayName: 'asset-card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Image: Schema.Attribute.Media<'images'>;
    isDarkMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    PngIcon: Schema.Attribute.Media<'images'>;
    SvgIcon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsBannerTextFields extends Struct.ComponentSchema {
  collectionName: 'components_components_banner_input_text_fields';
  info: {
    description: '';
    displayName: 'Input Text Field';
  };
  attributes: {
    isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isTextarea: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isWebsite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
    SuccessMessage: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Thank you for signing up!'>;
  };
}

export interface ComponentsBlogBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_blog_banner';
  info: {
    description: '';
    displayName: 'Blog Banner';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    email: Schema.Attribute.Component<'components.banner-text-fields', false>;
    Image: Schema.Attribute.Media<'images'>;
    ImagePositionLeft: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
    widgetNameFromHashnode: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ComponentsBlogSlider extends Struct.ComponentSchema {
  collectionName: 'components_components_blog_sliders';
  info: {
    displayName: 'Blog Slider';
  };
  attributes: {
    Category: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsBullets extends Struct.ComponentSchema {
  collectionName: 'components_components_bullets';
  info: {
    description: '';
    displayName: 'Bullet';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
  };
}

export interface ComponentsCapsule extends Struct.ComponentSchema {
  collectionName: 'components_components_capsule';
  info: {
    description: '';
    displayName: 'Capsule';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
    Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface ComponentsCaseCategory extends Struct.ComponentSchema {
  collectionName: 'components_components_casestudy_categories';
  info: {
    description: '';
    displayName: 'Category';
  };
  attributes: {
    categoryName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Category Name'>;
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'description'>;
  };
}

export interface ComponentsCaseContactCard extends Struct.ComponentSchema {
  collectionName: 'components_components_casestudy_contact_card';
  info: {
    description: '';
    displayName: 'Contact Card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    email: Schema.Attribute.Component<'components.banner-text-fields', false>;
    Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
    name: Schema.Attribute.Component<'components.banner-text-fields', false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
  };
}

export interface ComponentsCaseInternalHero extends Struct.ComponentSchema {
  collectionName: 'components_components_case_internal_hero';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    CaseDescription: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>;
    CaseTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor '>;
    ClientLogo: Schema.Attribute.Media<'images'>;
    ClientLogoDark: Schema.Attribute.Media<'images'>;
    ClientName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lorem ipsum'>;
    ImageLG: Schema.Attribute.Media<'images'>;
    ImageMD: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    ImageXL: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsCaseOverview extends Struct.ComponentSchema {
  collectionName: 'components_components_case_overview';
  info: {
    description: '';
    displayName: 'Case Overview';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Some challenge that company has been facing for a very long time and it has been bothering.'>;
    Heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Challenge'>;
  };
}

export interface ComponentsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false> &
      Schema.Attribute.Required;
    CoverDark: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    CoverLight: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    CustomerDark: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    CustomerLight: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCaseStudyFeatured extends Struct.ComponentSchema {
  collectionName: 'components_components_featured_case_study';
  info: {
    description: '';
    displayName: 'Featured Section';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Featured '>;
  };
}

export interface ComponentsCaseSummaryCard extends Struct.ComponentSchema {
  collectionName: 'components_components_case_internal_summary_card';
  info: {
    displayName: 'Case Summary Card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Location: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'San Fransisco, United States'>;
    Logo: Schema.Attribute.Media<'images'>;
    LogoDark: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
    Pointers: Schema.Attribute.Component<'components.case-overview', true>;
    WebAddress: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.example.com'>;
  };
}

export interface ComponentsCollapsible extends Struct.ComponentSchema {
  collectionName: 'components_components_collapsibles';
  info: {
    description: '';
    displayName: 'Collapsible';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    ImageLG: Schema.Attribute.Media<'images'>;
    ImageMD: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    ImageXL: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feature title'>;
  };
}

export interface ComponentsColorPalette extends Struct.ComponentSchema {
  collectionName: 'components_color-palette';
  info: {
    description: '';
    displayName: 'Color Palette Section';
  };
  attributes: {
    AssetCard: Schema.Attribute.Component<
      'components.color-palette-card',
      true
    >;
    Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsColorPaletteCard extends Struct.ComponentSchema {
  collectionName: 'components_color-palette-card';
  info: {
    description: '';
    displayName: 'asset-card';
  };
  attributes: {
    Cmyk: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    Color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    ColorName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    Hex: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    Image: Schema.Attribute.Media<'images'>;
    isDarkMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Rgb: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsContactSuccess extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_successes';
  info: {
    displayName: 'Contact Success';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Your message has been sent. We\u2019ll get back to you shortly.'>;
    Image: Schema.Attribute.Media<'images'>;
    Socials: Schema.Attribute.Component<'components.link', true>;
    SocialsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'In the meantime, follow along:'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Hooray! '>;
  };
}

export interface ComponentsContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_components_content_with_images';
  info: {
    description: '';
    displayName: 'Content with Image';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    ImageDark: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsCustomFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_custom_features';
  info: {
    description: '';
    displayName: 'Custom Feature';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    CardType: Schema.Attribute.Enumeration<['medium', 'small', 'big']> &
      Schema.Attribute.DefaultTo<'big'>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    ImageLG: Schema.Attribute.Media<'images'>;
    ImageMD: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    ImageXL: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feature title'>;
  };
}

export interface ComponentsDescriptionItem extends Struct.ComponentSchema {
  collectionName: 'components_components_description_items';
  info: {
    displayName: 'Description Item';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface ComponentsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_items';
  info: {
    description: '';
    displayName: 'Faq Item';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    Category: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Popular, Product, Security'>;
    Question: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    ImageLG: Schema.Attribute.Media<'images'>;
    ImageMD: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    ImageXL: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feature title'>;
  };
}

export interface ComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_components_features-card';
  info: {
    description: '';
    displayName: 'Feature-card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feature title'>;
  };
}

export interface ComponentsFilterCategory extends Struct.ComponentSchema {
  collectionName: 'components_components_filter_categories';
  info: {
    description: '';
    displayName: 'Filter Category';
  };
  attributes: {
    categoryName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Filter Categories'>;
    Description: Schema.Attribute.Component<
      'components.description-item',
      true
    >;
  };
}

export interface ComponentsFilterSection extends Struct.ComponentSchema {
  collectionName: 'components_components_filter_section';
  info: {
    description: '';
    displayName: 'Filter section';
  };
  attributes: {
    categories: Schema.Attribute.Component<'components.filter-category', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    SearchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search articles'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
  };
}

export interface ComponentsFormSideSection extends Struct.ComponentSchema {
  collectionName: 'components_components_form_side_sections';
  info: {
    description: '';
    displayName: 'Form Side Section';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Description: Schema.Attribute.Text;
    ListTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsHeroCard extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_cards';
  info: {
    description: '';
    displayName: 'Hero Card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reviews only the essential code'>;
  };
}

export interface ComponentsHoppyBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_hoppy_banner';
  info: {
    description: '';
    displayName: 'Hoppy Banner';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    email: Schema.Attribute.Component<'components.banner-text-fields', false>;
    Image: Schema.Attribute.Media<'images'>;
    ImagePositionLeft: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
  };
}

export interface ComponentsHoppyComic extends Struct.ComponentSchema {
  collectionName: 'components_components_hoppy_comic';
  info: {
    description: '';
    displayName: 'Hoppy Comic';
    icon: '';
  };
  attributes: {
    brief: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A fun and engaging comic strip featuring Hoppy, the AI sidekick.'>;
    coverImage: Schema.Attribute.Media<'images'>;
    Pdf: Schema.Attribute.Media<'files'>;
    publishedAt: Schema.Attribute.Date;
    slug: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Hoppy Comic'>;
  };
}

export interface ComponentsHoppyCreative extends Struct.ComponentSchema {
  collectionName: 'components_components_hoppy_creative';
  info: {
    description: '';
    displayName: 'Hoppy Creative';
    icon: '';
  };
  attributes: {
    CreativeImage: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
    UserImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsHoppyHero extends Struct.ComponentSchema {
  collectionName: 'components_components_hoppy_hero';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: '';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Image: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
  };
}

export interface ComponentsHoppyQuote extends Struct.ComponentSchema {
  collectionName: 'components_components_hoppy_quote';
  info: {
    description: '';
    displayName: 'Quotes';
    icon: '';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'No one will understand this code, not even Future Me.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Refactoring.'>;
  };
}

export interface ComponentsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_components_how_it_works';
  info: {
    description: '';
    displayName: 'How It Works';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Cta: Schema.Attribute.Component<'components.link', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'This is placeholder content. Leverage the power of CodeRabbit\u2019s cloud-based solution with SaaS. Access real-time code reviews, automated suggestions, and seamless integration with your development pipeline\u2014all without the need to manage your own infrastructure. '>;
    Image: Schema.Attribute.Media<'images'>;
    Tab: Schema.Attribute.String & Schema.Attribute.DefaultTo<'SaaS'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Effortless Scaling with SaaS'>;
  };
}

export interface ComponentsHyperlink extends Struct.ComponentSchema {
  collectionName: 'components_components_hyperlink';
  info: {
    description: '';
    displayName: 'Hyperlink';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    HyperlinkText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Hyperlink text'>;
    HyperlinkUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.coderabbit.ai'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
  };
}

export interface ComponentsImpactSlider extends Struct.ComponentSchema {
  collectionName: 'components_components_impact_sliders';
  info: {
    description: '';
    displayName: 'Impact Slider';
  };
  attributes: {
    Avatar: Schema.Attribute.Media<'images'>;
    Button: Schema.Attribute.Component<'components.link', false>;
    Company: Schema.Attribute.Media<'images'>;
    CompanyDark: Schema.Attribute.Media<'images'>;
    Job: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Opinion: Schema.Attribute.Text;
  };
}

export interface ComponentsInfoGraphics extends Struct.ComponentSchema {
  collectionName: 'components_components_info_graphics';
  info: {
    description: '';
    displayName: 'Info Graphics';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Repositories in review'>;
    Icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsInputCheckboxField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_checkbox_fields';
  info: {
    displayName: 'Input Checkbox Field';
  };
  attributes: {
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
  };
}

export interface ComponentsInputSelectField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_select_fields';
  info: {
    description: '';
    displayName: 'Input Select Field';
  };
  attributes: {
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
    Options: Schema.Attribute.Component<'components.newsletter', true>;
    Placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Placeholder'>;
  };
}

export interface ComponentsInputTextField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_text_fields';
  info: {
    description: '';
    displayName: 'Input Text Field';
  };
  attributes: {
    isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isTextarea: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isWebsite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
  };
}

export interface ComponentsLeadButtonBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_lead_button_banner';
  info: {
    displayName: 'Lead Capture email Banner';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Build better code, faster.'>;
  };
}

export interface ComponentsLeadInputBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_lead_input_banner';
  info: {
    displayName: 'Lead Capture Button Banner';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
    Newsletter: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Build better code, faster.'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
    Image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
    Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface ComponentsLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_components_link_card_s';
  info: {
    description: '';
    displayName: 'Link Card ';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsLinkMenu extends Struct.ComponentSchema {
  collectionName: 'components_components_link_menus';
  info: {
    displayName: 'Link Menu';
  };
  attributes: {
    hasSubmenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Link: Schema.Attribute.Component<'components.link', false>;
    Submenu: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsLinksColumn extends Struct.ComponentSchema {
  collectionName: 'components_components_links_columns';
  info: {
    description: '';
    displayName: 'Links Column';
  };
  attributes: {
    Links: Schema.Attribute.Component<'components.link', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Column title'>;
  };
}

export interface ComponentsLogoAssetCard extends Struct.ComponentSchema {
  collectionName: 'components_components_logo_asset_card';
  info: {
    description: '';
    displayName: 'Logo Asset Card';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem '>;
    Image: Schema.Attribute.Media<'images'>;
    Image1: Schema.Attribute.Media<'images'>;
    Image2: Schema.Attribute.Media<'images'>;
    Image3: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsLogoGuideline extends Struct.ComponentSchema {
  collectionName: 'components_components_logo_guideline';
  info: {
    description: '';
    displayName: 'logo_guideline';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem '>;
    LogoLayoutCard: Schema.Attribute.Component<
      'components.logo-asset-card',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
  };
}

export interface ComponentsLogoTextPair extends Struct.ComponentSchema {
  collectionName: 'components_components_logo_text_pairs';
  info: {
    description: 'A component for displaying a logo with its associated text';
    displayName: 'Logo Text Pair';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    LogoHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    Text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'IDE Name'>;
  };
}

export interface ComponentsMember extends Struct.ComponentSchema {
  collectionName: 'components_components_members';
  info: {
    displayName: 'Member';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String;
    Position: Schema.Attribute.String;
  };
}

export interface ComponentsMetric extends Struct.ComponentSchema {
  collectionName: 'components_components_metrics';
  info: {
    description: '';
    displayName: 'Stat';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Repositories in review'>;
    Number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'10k'>;
  };
}

export interface ComponentsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_components_newsletters';
  info: {
    description: '';
    displayName: 'Select Option';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
    Value: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Value'>;
  };
}

export interface ComponentsNotification extends Struct.ComponentSchema {
  collectionName: 'components_components_notifications';
  info: {
    description: '';
    displayName: 'Notification';
  };
  attributes: {
    Link: Schema.Attribute.Component<'components.link', false>;
    Show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
  };
}

export interface ComponentsPill extends Struct.ComponentSchema {
  collectionName: 'components_components_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'components.link', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsPlan extends Struct.ComponentSchema {
  collectionName: 'components_components_plans';
  info: {
    displayName: 'Plan';
  };
  attributes: {
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String;
    Detail: Schema.Attribute.String;
    IncludesTitle: Schema.Attribute.String;
    Price: Schema.Attribute.String;
    Recommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsPrivacyPolicyQuestions
  extends Struct.ComponentSchema {
  collectionName: 'components_components_privacy_policy_questions';
  info: {
    displayName: 'Privacy Policy Questions';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Question: Schema.Attribute.String;
  };
}

export interface ComponentsPromoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_promo_card';
  info: {
    description: '';
    displayName: 'promo-card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false> &
      Schema.Attribute.Required;
    Description1: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
    Description2: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Free 14-day trial'>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
  };
}

export interface ComponentsSecurity extends Struct.ComponentSchema {
  collectionName: 'components_components_securities';
  info: {
    description: '';
    displayName: 'Security Card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    ImageDark: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsSocials extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    Socials: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    Avatar: Schema.Attribute.Media<'images'>;
    EmbedCode: Schema.Attribute.Text;
    Job: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Marketing Director @Metadata.io '>;
    Name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Marguerite Bergnaum'>;
    Opinion: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
  };
}

export interface ComponentsTrustCard extends Struct.ComponentSchema {
  collectionName: 'components_components_trust_cards';
  info: {
    description: '';
    displayName: 'Trust Card';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur.Reviews only the essential code'>;
  };
}

export interface EventCard extends Struct.ComponentSchema {
  collectionName: 'components_components_event_card';
  info: {
    description: 'Explore Event card section for events';
    displayName: 'Explore Event Card';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
  };
}

export interface EventDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_event_details';
  info: {
    description: 'Details section for events';
    displayName: 'Details';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<''>;
    Description2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<''>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
    Venue: Schema.Attribute.Component<'event.venue', false>;
  };
}

export interface EventEventTime extends Struct.ComponentSchema {
  collectionName: 'components_event_time_event_time';
  info: {
    description: 'Event date and time with AM/PM and timezone options';
    displayName: 'Event Date & Time';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Date: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Period: Schema.Attribute.Enumeration<['AM', 'PM']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'AM'>;
    Time: Schema.Attribute.Time & Schema.Attribute.Required;
    Timezone: Schema.Attribute.Enumeration<
      [
        'PST',
        'PDT',
        'MST',
        'MDT',
        'CST',
        'CDT',
        'EST',
        'EDT',
        'IST',
        'UTC',
        'GMT',
        'CET',
        'CEST',
        'JST',
        'AEST',
        'AEDT',
        'Other',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'EST'>;
  };
}

export interface EventExternalEvent extends Struct.ComponentSchema {
  collectionName: 'components_components_event_external_event';
  info: {
    description: 'External event section for events';
    displayName: 'External Event';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Details: Schema.Attribute.Component<'event.details', false>;
    EventExploreCard: Schema.Attribute.Component<'event.card', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Home: Schema.Attribute.Component<'event.external-home', false>;
  };
}

export interface EventExternalHome extends Struct.ComponentSchema {
  collectionName: 'components_components_event_external_home';
  info: {
    description: 'Home section for events';
    displayName: 'Home';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. '>;
    EventTime: Schema.Attribute.Component<'event.event-time', false>;
    Image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Booth #544/ Javits Convention Center \u2014 New York City, NY'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
  };
}

export interface EventFeaturing extends Struct.ComponentSchema {
  collectionName: 'components_components_event_featuring';
  info: {
    description: 'Featuring section for events';
    displayName: 'Featuring';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Speakers: Schema.Attribute.Component<'event.speaker', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
  };
}

export interface EventInternalEvent extends Struct.ComponentSchema {
  collectionName: 'components_components_event_internal_event';
  info: {
    description: 'Internal event section for events';
    displayName: 'Internal Event';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Details: Schema.Attribute.Component<'event.learn', false>;
    EventExploreCard: Schema.Attribute.Component<'event.card', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Home: Schema.Attribute.Component<'event.internal-home', false>;
  };
}

export interface EventInternalHome extends Struct.ComponentSchema {
  collectionName: 'components_components_event_internal_home';
  info: {
    description: 'Home section for events';
    displayName: 'Home';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. '>;
    EventTime: Schema.Attribute.Component<'event.event-time', false>;
    Image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    RegisterForm: Schema.Attribute.Component<'event.register-form', false>;
    Success: Schema.Attribute.Component<'components.contact-success', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
  };
}

export interface EventLearn extends Struct.ComponentSchema {
  collectionName: 'components_components_event_learn';
  info: {
    description: 'Learn section for events';
    displayName: 'Learn';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    FeaturingTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
    Pointers: Schema.Attribute.Component<'components.bullets', true>;
    Speakers: Schema.Attribute.Component<'event.speaker', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
  };
}

export interface EventRegisterForm extends Struct.ComponentSchema {
  collectionName: 'components_components_event_register_form';
  info: {
    description: 'Register form for events';
    displayName: 'Register Form';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Company: Schema.Attribute.Component<'components.banner-text-fields', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Join industry experts and transform your development workflow.'>;
    Email: Schema.Attribute.Component<'components.banner-text-fields', false>;
    FirstName: Schema.Attribute.Component<
      'components.banner-text-fields',
      false
    >;
    Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
    JobTitle: Schema.Attribute.Component<
      'components.banner-text-fields',
      false
    >;
    LastName: Schema.Attribute.Component<
      'components.banner-text-fields',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Secure your spot'>;
  };
}

export interface EventSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_components_event_speaker';
  info: {
    description: 'Speaker section for events';
    displayName: 'Speaker';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'John Doe'>;
    Role: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Software Engineer'>;
  };
}

export interface EventVenue extends Struct.ComponentSchema {
  collectionName: 'components_components_event_venue';
  info: {
    description: 'Venue section for events';
    displayName: 'Venue';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Address: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'429 11th Ave'>;
    AddressTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'429 11th Ave'>;
    City: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'New York City NY 10001'>;
    coordinates: Schema.Attribute.Text;
    googleMapsUrl: Schema.Attribute.Text;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
    VenueName: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Javits Convention Center'>;
    VenueTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Javits Convention Center'>;
    Website: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'https://javitscenter.com'>;
  };
}

export interface LayoutAlternatedContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_alternated_contents';
  info: {
    description: '';
    displayName: 'Alternated Content';
  };
  attributes: {
    ContentWithImages: Schema.Attribute.Component<
      'components.content-with-image',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutArchitecture extends Struct.ComponentSchema {
  collectionName: 'components_layout_architecture';
  info: {
    description: '';
    displayName: 'Architecture Section';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    ImageDark: Schema.Attribute.Media<'images'>;
    ImageDarkSM: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get started today'>;
  };
}

export interface LayoutBlogBanners extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_banners';
  info: {
    description: '';
    displayName: 'Blog Banners';
  };
  attributes: {
    Banner: Schema.Attribute.Component<'components.blog-banner', true>;
  };
}

export interface LayoutBlogHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_hero_sections';
  info: {
    description: '';
    displayName: 'Blog Hero Section';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Dig into insights about our products, use cases, and POVs.'>;
    SearchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search articles'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CodeRabbit Blog'>;
  };
}

export interface LayoutBlogSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_slider_sections';
  info: {
    description: '';
    displayName: 'Blog Slider Section';
  };
  attributes: {
    Slider: Schema.Attribute.Component<'components.blog-slider', true>;
  };
}

export interface LayoutBrandGuidelineAssetSection
  extends Struct.ComponentSchema {
  collectionName: 'components_asset_sections';
  info: {
    description: '';
    displayName: 'Asset Section';
  };
  attributes: {
    AssetCard: Schema.Attribute.Component<'components.asset-card', true>;
  };
}

export interface LayoutBrandGuidelineHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_brand-guideline_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feel free to use the CodeRabbit logos provided below just keep them as-is to help us stay consistent. '>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CodeRabbit Brand Assets'>;
  };
}

export interface LayoutCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_case_study_sections';
  info: {
    displayName: 'Case Study Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false> &
      Schema.Attribute.Required;
    Cases: Schema.Attribute.Component<'components.case-study', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutCollapsibleBoxesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_collapsible_boxes_sections';
  info: {
    description: '';
    displayName: 'Collapsible Boxes Section';
  };
  attributes: {
    Features: Schema.Attribute.Component<'components.collapsible', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
  };
}

export interface LayoutContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_form_sections';
  info: {
    description: '';
    displayName: 'Contact Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    HowCanWeHelp: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    NumberOfDevelopers: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface LayoutContactSupportFormSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_support_form_sections';
  info: {
    description: '';
    displayName: 'Support Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    HowCanWeHelp: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please complete this form so we can assist you more effectively:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface LayoutContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_us_sections';
  info: {
    description: '';
    displayName: 'Contact Us Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Still have questions?'>;
  };
}

export interface LayoutCustomFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_custom_features_sections';
  info: {
    displayName: 'Custom Features Section';
    icon: 'dashboard';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CustomLayout: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Features: Schema.Attribute.Component<'components.custom-feature', true>;
  };
}

export interface LayoutCustomersSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_customers_sections';
  info: {
    description: '';
    displayName: 'Customers Section';
  };
  attributes: {
    Customers: Schema.Attribute.Component<'components.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    CustomersDark: Schema.Attribute.Component<'components.link', true>;
    Grayscale: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by 1000+ organizations'>;
  };
}

export interface LayoutEnterpriseHeroWithVideo extends Struct.ComponentSchema {
  collectionName: 'components_layout_enterprise_hero_with_videos';
  info: {
    description: '';
    displayName: 'Enterprise Hero With Video';
    icon: '';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'components.link', true>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Description_1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Page name'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    YTVideoUrl: Schema.Attribute.String;
  };
}

export interface LayoutEnterpriseImpactSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_enterprise_impact_sections';
  info: {
    description: '';
    displayName: 'Enterprise Impact Section';
  };
  attributes: {
    Slider: Schema.Attribute.Component<'components.impact-slider', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Proven Enterprise Impact'>;
  };
}

export interface LayoutEnterprisePlatformSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_enterprise_platform_sections';
  info: {
    description: '';
    displayName: 'Enterprise Platform Section';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    ImageDark: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    ImageSMDark: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Send your reports to any Platform'>;
  };
}

export interface LayoutEventCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_event_cards';
  info: {
    displayName: 'Event Card';
    icon: 'check';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Faqs: Schema.Attribute.Component<'components.faq-item', true>;
    SplitIntoTwoHalves: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently asked questions'>;
  };
}

export interface LayoutFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Faqs: Schema.Attribute.Component<'components.faq-item', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently asked questions'>;
  };
}

export interface LayoutFeatureGridSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_grid_sections';
  info: {
    description: '';
    displayName: 'Features Grid Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Features: Schema.Attribute.Component<'components.feature-card', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    Features: Schema.Attribute.Component<'components.feature', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
  };
}

export interface LayoutGdprFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_gdpr_form_sections';
  info: {
    description: '';
    displayName: 'GDPR Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    NumberOfDevelopers: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please fill out this form to request access:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface LayoutGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_layout_get_starteds';
  info: {
    description: '';
    displayName: 'Get Started Section';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'components.link', true>;
    Description_1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    ImageDark: Schema.Attribute.Media<'images'>;
    ImageSM: Schema.Attribute.Media<'images'>;
    TextDetails: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get started today'>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: '';
  };
  attributes: {
    BackedBy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'We\u2019re backed by'>;
    BackedByImages: Schema.Attribute.Media<'images', true>;
    BackedByImagesDark: Schema.Attribute.Media<'images', true>;
    Bullets: Schema.Attribute.Component<'components.bullets', true>;
    Buttons: Schema.Attribute.Component<'components.link', true>;
    Capsule: Schema.Attribute.Component<'components.capsule', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Description_1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Image: Schema.Attribute.Media<'images'>;
    ListTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why choose CodeRabbit?'>;
    LottieLG: Schema.Attribute.JSON;
    LottieSM: Schema.Attribute.JSON;
    Tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Page name'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    VideoOrGif: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface LayoutHeroCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_cards_sections';
  info: {
    displayName: 'Hero Cards Section';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'components.hero-card', true>;
  };
}

export interface LayoutHoppyComicSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hoppy_comic_section';
  info: {
    description: '';
    displayName: 'Comic Section';
    icon: '';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
  };
}

export interface LayoutHoppyFanCreatives extends Struct.ComponentSchema {
  collectionName: 'components_layout_hoppy_fan_creatives';
  info: {
    description: '';
    displayName: 'Fan Creatives Section';
    icon: '';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
    Socials: Schema.Attribute.Component<'components.link', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
  };
}

export interface LayoutHoppyMood extends Struct.ComponentSchema {
  collectionName: 'components_layout_hoppy_mood';
  info: {
    description: '';
    displayName: 'Hoppy Quotes';
    icon: '';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Socials: Schema.Attribute.Component<'components.link', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
  };
}

export interface LayoutHowItWorksSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_how_it_works_sections';
  info: {
    description: '';
    displayName: 'How It Works Section';
  };
  attributes: {
    Steps: Schema.Attribute.Component<'components.how-it-works', true>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutHsEmbededCalendar extends Struct.ComponentSchema {
  collectionName: 'components_layout_hs_embeded_calendars';
  info: {
    displayName: 'HsEmbededCalendar';
    icon: 'calendar';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    SourceUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutJoinUsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_join_us_sections';
  info: {
    displayName: 'Join Us Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutLeadCaptureLayout extends Struct.ComponentSchema {
  collectionName: 'components_layout_lead_capture_layout_sections';
  info: {
    displayName: 'Lead Capture Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.lead-button-banner', false>;
    Email: Schema.Attribute.Component<'components.lead-input-banner', false>;
  };
}

export interface LayoutMarkdownCardSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_markdown_card_sections';
  info: {
    description: '';
    displayName: 'Markdown Card Section';
    icon: 'layout';
  };
  attributes: {
    Body: Schema.Attribute.RichText;
  };
}

export interface LayoutMembersSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_members_sections';
  info: {
    description: '';
    displayName: 'Members Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Members: Schema.Attribute.Component<'components.member', true>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutMetricsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_metrics_sections';
  info: {
    description: '';
    displayName: 'Stats Section';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Loved by 1000s of developers'>;
    Stats: Schema.Attribute.Component<'components.metric', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The most installed AI App on GitHub & GitLab'>;
  };
}

export interface LayoutNewsletterBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_blog_sections';
  info: {
    description: '';
    displayName: 'Blog Newsletter Section';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Don\u2019t miss out on our latest articles'>;
    Newsletter: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sign up for our Newsletter'>;
  };
}

export interface LayoutPartnershipFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_partnership_form_sections';
  info: {
    description: '';
    displayName: 'Partnership Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    NumberOfDevelopers: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface LayoutPillsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_pills_sections';
  info: {
    description: '';
    displayName: 'Pills Section';
  };
  attributes: {
    Pills: Schema.Attribute.Component<'components.pill', true>;
  };
}

export interface LayoutPlansSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_plans_sections';
  info: {
    displayName: 'Plans Section';
  };
  attributes: {
    Plans: Schema.Attribute.Component<'components.plan', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
  };
}

export interface LayoutPrivacyPolicySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_privacy_policy_sections';
  info: {
    displayName: 'Privacy Policy Section';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Questions: Schema.Attribute.Component<
      'components.privacy-policy-questions',
      true
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our privacy policy'>;
  };
}

export interface LayoutSecuritySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_security_sections';
  info: {
    description: '';
    displayName: 'Security Section';
  };
  attributes: {
    Securities: Schema.Attribute.Component<'components.security', true>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutSimpleHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_simple_heroes';
  info: {
    description: '';
    displayName: 'Simple Hero Section';
    icon: '';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'components.link', true>;
    CarouselWithTooltips: Schema.Attribute.Component<'components.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    CarouselWithTooltipsDark: Schema.Attribute.Component<
      'components.link',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
  };
}

export interface LayoutSocFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_soc_form_sections';
  info: {
    description: '';
    displayName: 'SOC Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    NumberOfDevelopers: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please fill out this form to request access:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface LayoutStartupFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_startup_form_sections';
  info: {
    description: '';
    displayName: 'Startup Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyWebsite: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    Email: Schema.Attribute.Component<'components.input-text-field', false>;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    FundingDetails: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    GitOrgName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Complete this form, If your organization qualifies for our Startup program, we'll activate your account.">;
    TrialCheckbox: Schema.Attribute.Component<
      'components.input-checkbox-field',
      false
    >;
  };
}

export interface LayoutTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Testimonials: Schema.Attribute.Component<'components.testimonial', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What they say about us'>;
  };
}

export interface LayoutTrustSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_trust_sections';
  info: {
    description: '';
    displayName: 'Trust Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    Cards: Schema.Attribute.Component<'components.trust-card', true>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'We take security, privacy, and compliance seriously.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your data stays confidential'>;
  };
}

export interface LayoutVsCodeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_vs_code_heroes';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: '';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'components.link', true>;
    Capsule: Schema.Attribute.Component<'components.capsule', false>;
    CenterImage_Icon: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
    Description_1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'14-day free trial '>;
    Description_2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'No credit card needed.'>;
    Description_3: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
    Image: Schema.Attribute.Media<'images'>;
    LeftContentText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'14-day free trial '>;
    MiddleContentText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<' | Works with'>;
    RightContentText: Schema.Attribute.Component<
      'components.logo-text-pair',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
    VideoOrGif: Schema.Attribute.Media<'images' | 'videos'>;
    VideoOrGifDark: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface LayoutVsFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_vs_extension_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'components.security', true>;
    Button: Schema.Attribute.Component<'components.link', false>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutWhitepaperFormSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_whitepaper_form_sections';
  info: {
    description: '';
    displayName: 'Whitepaper Form Section';
  };
  attributes: {
    Button: Schema.Attribute.Component<'components.link', false>;
    CompanyName: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    NumberOfDevelopers: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
    WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonical: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://coderabbit.ai/'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    keywords: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'coderabbit, ai, code, git, gitlab, github'>;
    og_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    og_image: Schema.Attribute.Media<'images'>;
    og_locale: Schema.Attribute.String & Schema.Attribute.DefaultTo<'en_US'>;
    og_sitename: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    og_type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'website'>;
    og_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://coderabbit.ai/'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
    twitter_card: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitter_creator: Schema.Attribute.String;
    twitter_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
    twitter_image: Schema.Attribute.Media<'images'>;
    twitter_site: Schema.Attribute.String;
    twitter_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'casestudy.case-conclusion-card': CasestudyCaseConclusionCard;
      'casestudy.case-home': CasestudyCaseHome;
      'casestudy.conclusion': CasestudyConclusion;
      'casestudy.section-1': CasestudySection1;
      'casestudy.section-2': CasestudySection2;
      'casestudy.section-3': CasestudySection3;
      'casestudy.section-4': CasestudySection4;
      'casestudy.stats': CasestudyStats;
      'casestudy.testimonial': CasestudyTestimonial;
      'components.announcment': ComponentsAnnouncment;
      'components.asset-card': ComponentsAssetCard;
      'components.banner-text-fields': ComponentsBannerTextFields;
      'components.blog-banner': ComponentsBlogBanner;
      'components.blog-slider': ComponentsBlogSlider;
      'components.bullets': ComponentsBullets;
      'components.capsule': ComponentsCapsule;
      'components.case-category': ComponentsCaseCategory;
      'components.case-contact-card': ComponentsCaseContactCard;
      'components.case-internal-hero': ComponentsCaseInternalHero;
      'components.case-overview': ComponentsCaseOverview;
      'components.case-study': ComponentsCaseStudy;
      'components.case-study-featured': ComponentsCaseStudyFeatured;
      'components.case-summary-card': ComponentsCaseSummaryCard;
      'components.collapsible': ComponentsCollapsible;
      'components.color-palette': ComponentsColorPalette;
      'components.color-palette-card': ComponentsColorPaletteCard;
      'components.contact-success': ComponentsContactSuccess;
      'components.content-with-image': ComponentsContentWithImage;
      'components.custom-feature': ComponentsCustomFeature;
      'components.description-item': ComponentsDescriptionItem;
      'components.faq-item': ComponentsFaqItem;
      'components.feature': ComponentsFeature;
      'components.feature-card': ComponentsFeatureCard;
      'components.filter-category': ComponentsFilterCategory;
      'components.filter-section': ComponentsFilterSection;
      'components.form-side-section': ComponentsFormSideSection;
      'components.hero-card': ComponentsHeroCard;
      'components.hoppy-banner': ComponentsHoppyBanner;
      'components.hoppy-comic': ComponentsHoppyComic;
      'components.hoppy-creative': ComponentsHoppyCreative;
      'components.hoppy-hero': ComponentsHoppyHero;
      'components.hoppy-quote': ComponentsHoppyQuote;
      'components.how-it-works': ComponentsHowItWorks;
      'components.hyperlink': ComponentsHyperlink;
      'components.impact-slider': ComponentsImpactSlider;
      'components.info-graphics': ComponentsInfoGraphics;
      'components.input-checkbox-field': ComponentsInputCheckboxField;
      'components.input-select-field': ComponentsInputSelectField;
      'components.input-text-field': ComponentsInputTextField;
      'components.lead-button-banner': ComponentsLeadButtonBanner;
      'components.lead-input-banner': ComponentsLeadInputBanner;
      'components.link': ComponentsLink;
      'components.link-card': ComponentsLinkCard;
      'components.link-menu': ComponentsLinkMenu;
      'components.links-column': ComponentsLinksColumn;
      'components.logo-asset-card': ComponentsLogoAssetCard;
      'components.logo-guideline': ComponentsLogoGuideline;
      'components.logo-text-pair': ComponentsLogoTextPair;
      'components.member': ComponentsMember;
      'components.metric': ComponentsMetric;
      'components.newsletter': ComponentsNewsletter;
      'components.notification': ComponentsNotification;
      'components.pill': ComponentsPill;
      'components.plan': ComponentsPlan;
      'components.privacy-policy-questions': ComponentsPrivacyPolicyQuestions;
      'components.promo-card': ComponentsPromoCard;
      'components.security': ComponentsSecurity;
      'components.socials': ComponentsSocials;
      'components.testimonial': ComponentsTestimonial;
      'components.trust-card': ComponentsTrustCard;
      'event.card': EventCard;
      'event.details': EventDetails;
      'event.event-time': EventEventTime;
      'event.external-event': EventExternalEvent;
      'event.external-home': EventExternalHome;
      'event.featuring': EventFeaturing;
      'event.internal-event': EventInternalEvent;
      'event.internal-home': EventInternalHome;
      'event.learn': EventLearn;
      'event.register-form': EventRegisterForm;
      'event.speaker': EventSpeaker;
      'event.venue': EventVenue;
      'layout.alternated-content': LayoutAlternatedContent;
      'layout.architecture': LayoutArchitecture;
      'layout.blog-banners': LayoutBlogBanners;
      'layout.blog-hero-section': LayoutBlogHeroSection;
      'layout.blog-slider-section': LayoutBlogSliderSection;
      'layout.brand-guideline-asset-section': LayoutBrandGuidelineAssetSection;
      'layout.brand-guideline-hero-section': LayoutBrandGuidelineHeroSection;
      'layout.case-study-section': LayoutCaseStudySection;
      'layout.collapsible-boxes-section': LayoutCollapsibleBoxesSection;
      'layout.contact-form-section': LayoutContactFormSection;
      'layout.contact-support-form-section': LayoutContactSupportFormSection;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.custom-features-section': LayoutCustomFeaturesSection;
      'layout.customers-section': LayoutCustomersSection;
      'layout.enterprise-hero-with-video': LayoutEnterpriseHeroWithVideo;
      'layout.enterprise-impact-section': LayoutEnterpriseImpactSection;
      'layout.enterprise-platform-section': LayoutEnterprisePlatformSection;
      'layout.event-card': LayoutEventCard;
      'layout.faq': LayoutFaq;
      'layout.faq-section': LayoutFaqSection;
      'layout.feature-grid-section': LayoutFeatureGridSection;
      'layout.features-section': LayoutFeaturesSection;
      'layout.gdpr-form-section': LayoutGdprFormSection;
      'layout.get-started': LayoutGetStarted;
      'layout.hero': LayoutHero;
      'layout.hero-cards-section': LayoutHeroCardsSection;
      'layout.hoppy-comic-section': LayoutHoppyComicSection;
      'layout.hoppy-fan-creatives': LayoutHoppyFanCreatives;
      'layout.hoppy-mood': LayoutHoppyMood;
      'layout.how-it-works-section': LayoutHowItWorksSection;
      'layout.hs-embeded-calendar': LayoutHsEmbededCalendar;
      'layout.join-us-section': LayoutJoinUsSection;
      'layout.lead-capture-layout': LayoutLeadCaptureLayout;
      'layout.markdown-card-section': LayoutMarkdownCardSection;
      'layout.members-section': LayoutMembersSection;
      'layout.metrics-section': LayoutMetricsSection;
      'layout.newsletter-blog-section': LayoutNewsletterBlogSection;
      'layout.partnership-form-section': LayoutPartnershipFormSection;
      'layout.pills-section': LayoutPillsSection;
      'layout.plans-section': LayoutPlansSection;
      'layout.privacy-policy-section': LayoutPrivacyPolicySection;
      'layout.security-section': LayoutSecuritySection;
      'layout.simple-hero': LayoutSimpleHero;
      'layout.soc-form-section': LayoutSocFormSection;
      'layout.startup-form-section': LayoutStartupFormSection;
      'layout.testimonials': LayoutTestimonials;
      'layout.trust-section': LayoutTrustSection;
      'layout.vs-code-hero-section': LayoutVsCodeHeroSection;
      'layout.vs-feature-section': LayoutVsFeatureSection;
      'layout.whitepaper-form-section': LayoutWhitepaperFormSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
