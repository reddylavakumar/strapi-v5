// import type { Schema, Struct } from '@strapi/strapi';

// export interface CasestudyCaseConclusionCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_conclusion_card';
//   info: {
//     description: '';
//     displayName: 'Case Conclusion Card';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
//   };
// }

// export interface CasestudyCaseHome extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_homes';
//   info: {
//     description: 'Home section for case studies';
//     displayName: 'Case Home';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     CaseDescription: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>;
//     CaseTitle: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor '>;
//     ClientLogo: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     ClientLogoDark: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     ClientName: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//     Image: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     ImageSM: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//   };
// }

// export interface CasestudyConclusion extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_conculision';
//   info: {
//     description: '';
//     displayName: 'Conclusion';
//     pluralName: 'case-conclusions';
//     singularName: 'case-conclusion';
//   };
//   options: {
//     draftAndPublish: false;
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Conclusion: Schema.Attribute.Component<
//       'casestudy.case-conclusion-card',
//       true
//     > &
//       Schema.Attribute.SetMinMax<
//         {
//           max: 3;
//         },
//         number
//       >;
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Here\u2019s how teams can close the gap:'>;
//     SectionName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Section 1 '>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Ways to Work Together'>;
//   };
// }

// export interface CasestudySection1 extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_section1';
//   info: {
//     description: '';
//     displayName: 'Section 1';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Here\u2019s how teams can close the gap:'>;
//     Image: Schema.Attribute.Media<'images'>;
//     NameAndPosition: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
//     SectionName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Section 1 '>;
//     Testimonial: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Ways to Work Together'>;
//   };
// }

// export interface CasestudySection2 extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_section2';
//   info: {
//     description: '';
//     displayName: 'Section 2';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Paragraph: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     SectionName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Section 2 '>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Before CodeRabbit '>;
//   };
// }

// export interface CasestudySection3 extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_section3';
//   info: {
//     description: '';
//     displayName: 'Section 3';
//   };
//   attributes: {
//     Description: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     SectionName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Section 3'>;
//     SubHeading: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Ways to Work Together'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Ways to Work Together'>;
//   };
// }

// export interface CasestudySection4 extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_section4';
//   info: {
//     description: '';
//     displayName: 'Section 4';
//   };
//   attributes: {
//     Description: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//   };
// }

// export interface CasestudyStats extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_studies_stats';
//   info: {
//     description: '';
//     displayName: 'Stats';
//     pluralName: 'case-studies-stats';
//     singularName: 'case-study-stat';
//   };
//   options: {
//     draftAndPublish: false;
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Brief: Schema.Attribute.RichText &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Stats: Schema.Attribute.Component<'components.metric', true> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//   };
// }

// export interface CasestudyTestimonial extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_testimonial';
//   info: {
//     description: '';
//     displayName: 'Testimonial Card';
//   };
//   attributes: {
//     testimonial: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//   };
// }

// export interface ComponentsAnnouncment extends Struct.ComponentSchema {
//   collectionName: 'components_components_announcment';
//   info: {
//     description: '';
//     displayName: 'Announcment';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false> &
//       Schema.Attribute.Required;
//     isClosable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsAssetCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_asset_card';
//   info: {
//     description: '';
//     displayName: 'asset-card';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     isDarkMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     isIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     PngIcon: Schema.Attribute.Media<'images'>;
//     SvgIcon: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsBannerTextFields extends Struct.ComponentSchema {
//   collectionName: 'components_components_banner_input_text_fields';
//   info: {
//     description: '';
//     displayName: 'Input Text Field';
//   };
//   attributes: {
//     isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     isTextarea: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     isWebsite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Label: Schema.Attribute.String;
//     Placeholder: Schema.Attribute.String;
//     SuccessMessage: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Thank you for signing up!'>;
//   };
// }

// export interface ComponentsBlogBanner extends Struct.ComponentSchema {
//   collectionName: 'components_components_blog_banner';
//   info: {
//     description: '';
//     displayName: 'Blog Banner';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
//     email: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     Image: Schema.Attribute.Media<'images'>;
//     ImagePositionLeft: Schema.Attribute.Boolean &
//       Schema.Attribute.DefaultTo<true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
//     widgetNameFromHashnode: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<''>;
//   };
// }

// export interface ComponentsBlogSlider extends Struct.ComponentSchema {
//   collectionName: 'components_components_blog_sliders';
//   info: {
//     displayName: 'Blog Slider';
//   };
//   attributes: {
//     Category: Schema.Attribute.String;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsBullets extends Struct.ComponentSchema {
//   collectionName: 'components_components_bullets';
//   info: {
//     description: '';
//     displayName: 'Bullet';
//   };
//   attributes: {
//     Description: Schema.Attribute.RichText;
//     Text: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
//   };
// }

// export interface ComponentsCapsule extends Struct.ComponentSchema {
//   collectionName: 'components_components_capsule';
//   info: {
//     description: '';
//     displayName: 'Capsule';
//   };
//   attributes: {
//     isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//     Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
//   };
// }

// export interface ComponentsCaseCategory extends Struct.ComponentSchema {
//   collectionName: 'components_components_casestudy_categories';
//   info: {
//     description: '';
//     displayName: 'Category';
//   };
//   attributes: {
//     categoryName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Category Name'>;
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'description'>;
//   };
// }

// export interface ComponentsCaseContactCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_casestudy_contact_card';
//   info: {
//     description: '';
//     displayName: 'Contact Card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
//     email: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
//     name: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
//   };
// }

// export interface ComponentsCaseInternalHero extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_internal_hero';
//   info: {
//     displayName: 'Hero Section';
//   };
//   attributes: {
//     CaseDescription: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>;
//     CaseTitle: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor '>;
//     ClientLogo: Schema.Attribute.Media<'images'>;
//     ClientLogoDark: Schema.Attribute.Media<'images'>;
//     ClientName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//     ImageLG: Schema.Attribute.Media<'images'>;
//     ImageMD: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     ImageXL: Schema.Attribute.Media<'images'>;
//   };
// }

// export interface ComponentsCaseOverview extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_overview';
//   info: {
//     description: '';
//     displayName: 'Case Overview';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Some challenge that company has been facing for a very long time and it has been bothering.'>;
//     Heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Challenge'>;
//   };
// }

// export interface ComponentsCaseStudy extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_studies';
//   info: {
//     displayName: 'Case Study';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false> &
//       Schema.Attribute.Required;
//     CoverDark: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
//     CoverLight: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
//     CustomerDark: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
//     CustomerLight: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
//     Title: Schema.Attribute.String & Schema.Attribute.Required;
//   };
// }

// export interface ComponentsCaseStudyFeatured extends Struct.ComponentSchema {
//   collectionName: 'components_components_featured_case_study';
//   info: {
//     description: '';
//     displayName: 'Featured Section';
//   };
//   attributes: {
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Featured '>;
//   };
// }

// export interface ComponentsCaseSummaryCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_case_internal_summary_card';
//   info: {
//     displayName: 'Case Summary Card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Location: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'San Fransisco, United States'>;
//     Logo: Schema.Attribute.Media<'images'>;
//     LogoDark: Schema.Attribute.Media<'images'>;
//     Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//     Pointers: Schema.Attribute.Component<'components.case-overview', true>;
//     WebAddress: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'https://www.example.com'>;
//   };
// }

// export interface ComponentsCollapsible extends Struct.ComponentSchema {
//   collectionName: 'components_components_collapsibles';
//   info: {
//     description: '';
//     displayName: 'Collapsible';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     ImageLG: Schema.Attribute.Media<'images'>;
//     ImageMD: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     ImageXL: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Feature title'>;
//   };
// }

// export interface ComponentsColorPalette extends Struct.ComponentSchema {
//   collectionName: 'components_color-palette';
//   info: {
//     description: '';
//     displayName: 'Color Palette Section';
//   };
//   attributes: {
//     AssetCard: Schema.Attribute.Component<
//       'components.color-palette-card',
//       true
//     >;
//     Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem.'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsColorPaletteCard extends Struct.ComponentSchema {
//   collectionName: 'components_color-palette-card';
//   info: {
//     description: '';
//     displayName: 'asset-card';
//   };
//   attributes: {
//     Cmyk: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//     Color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//     ColorName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//     Hex: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//     Image: Schema.Attribute.Media<'images'>;
//     isDarkMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Rgb: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsContactSuccess extends Struct.ComponentSchema {
//   collectionName: 'components_components_contact_successes';
//   info: {
//     displayName: 'Contact Success';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.RichText &
//       Schema.Attribute.DefaultTo<'Your message has been sent. We\u2019ll get back to you shortly.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     Socials: Schema.Attribute.Component<'components.link', true>;
//     SocialsTitle: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'In the meantime, follow along:'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Hooray! '>;
//   };
// }

// export interface ComponentsContentWithImage extends Struct.ComponentSchema {
//   collectionName: 'components_components_content_with_images';
//   info: {
//     description: '';
//     displayName: 'Content with Image';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text;
//     Image: Schema.Attribute.Media<'images'>;
//     ImageDark: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsCustomFeature extends Struct.ComponentSchema {
//   collectionName: 'components_components_custom_features';
//   info: {
//     description: '';
//     displayName: 'Custom Feature';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     CardType: Schema.Attribute.Enumeration<['medium', 'small', 'big']> &
//       Schema.Attribute.DefaultTo<'big'>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     ImageLG: Schema.Attribute.Media<'images'>;
//     ImageMD: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     ImageXL: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Feature title'>;
//   };
// }

// export interface ComponentsDescriptionItem extends Struct.ComponentSchema {
//   collectionName: 'components_components_description_items';
//   info: {
//     displayName: 'Description Item';
//     icon: 'bulletList';
//   };
//   attributes: {
//     item: Schema.Attribute.String;
//   };
// }

// export interface ComponentsFaqItem extends Struct.ComponentSchema {
//   collectionName: 'components_components_faq_items';
//   info: {
//     description: '';
//     displayName: 'Faq Item';
//   };
//   attributes: {
//     Answer: Schema.Attribute.RichText;
//     Category: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Popular, Product, Security'>;
//     Question: Schema.Attribute.String;
//   };
// }

// export interface ComponentsFeature extends Struct.ComponentSchema {
//   collectionName: 'components_components_features';
//   info: {
//     description: '';
//     displayName: 'Feature';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     ImageLG: Schema.Attribute.Media<'images'>;
//     ImageMD: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     ImageXL: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Feature title'>;
//   };
// }

// export interface ComponentsFeatureCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_features-card';
//   info: {
//     description: '';
//     displayName: 'Feature-card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Feature title'>;
//   };
// }

// export interface ComponentsFilterCategory extends Struct.ComponentSchema {
//   collectionName: 'components_components_filter_categories';
//   info: {
//     description: '';
//     displayName: 'Filter Category';
//   };
//   attributes: {
//     categoryName: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Filter Categories'>;
//     Description: Schema.Attribute.Component<
//       'components.description-item',
//       true
//     >;
//   };
// }

// export interface ComponentsFilterSection extends Struct.ComponentSchema {
//   collectionName: 'components_components_filter_section';
//   info: {
//     description: '';
//     displayName: 'Filter section';
//   };
//   attributes: {
//     categories: Schema.Attribute.Component<'components.filter-category', true> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
//     SearchPlaceholder: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Search articles'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
//   };
// }

// export interface ComponentsFormSideSection extends Struct.ComponentSchema {
//   collectionName: 'components_components_form_side_sections';
//   info: {
//     description: '';
//     displayName: 'Form Side Section';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Description: Schema.Attribute.Text;
//     ListTitle: Schema.Attribute.String;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsHeroCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_hero_cards';
//   info: {
//     description: '';
//     displayName: 'Hero Card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
//     Icon: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Reviews only the essential code'>;
//   };
// }

// export interface ComponentsHoppyBanner extends Struct.ComponentSchema {
//   collectionName: 'components_components_hoppy_banner';
//   info: {
//     description: '';
//     displayName: 'Hoppy Banner';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
//     email: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     Image: Schema.Attribute.Media<'images'>;
//     ImagePositionLeft: Schema.Attribute.Boolean &
//       Schema.Attribute.DefaultTo<true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
//   };
// }

// export interface ComponentsHoppyComic extends Struct.ComponentSchema {
//   collectionName: 'components_components_hoppy_comic';
//   info: {
//     description: '';
//     displayName: 'Hoppy Comic';
//     icon: '';
//   };
//   attributes: {
//     brief: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'A fun and engaging comic strip featuring Hoppy, the AI sidekick.'>;
//     coverImage: Schema.Attribute.Media<'images'>;
//     Pdf: Schema.Attribute.Media<'files'>;
//     publishedAt: Schema.Attribute.Date;
//     slug: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
//     title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Hoppy Comic'>;
//   };
// }

// export interface ComponentsHoppyCreative extends Struct.ComponentSchema {
//   collectionName: 'components_components_hoppy_creative';
//   info: {
//     description: '';
//     displayName: 'Hoppy Creative';
//     icon: '';
//   };
//   attributes: {
//     CreativeImage: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
//     UserImage: Schema.Attribute.Media<'images'>;
//   };
// }

// export interface ComponentsHoppyHero extends Struct.ComponentSchema {
//   collectionName: 'components_components_hoppy_hero';
//   info: {
//     description: '';
//     displayName: 'Hero Section';
//     icon: '';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
//   };
// }

// export interface ComponentsHoppyQuote extends Struct.ComponentSchema {
//   collectionName: 'components_components_hoppy_quote';
//   info: {
//     description: '';
//     displayName: 'Quotes';
//     icon: '';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'No one will understand this code, not even Future Me.'>;
//     Icon: Schema.Attribute.Media<'images'>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Refactoring.'>;
//   };
// }

// export interface ComponentsHowItWorks extends Struct.ComponentSchema {
//   collectionName: 'components_components_how_it_works';
//   info: {
//     description: '';
//     displayName: 'How It Works';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Cta: Schema.Attribute.Component<'components.link', false> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'This is placeholder content. Leverage the power of CodeRabbit\u2019s cloud-based solution with SaaS. Access real-time code reviews, automated suggestions, and seamless integration with your development pipeline\u2014all without the need to manage your own infrastructure. '>;
//     Image: Schema.Attribute.Media<'images'>;
//     Tab: Schema.Attribute.String & Schema.Attribute.DefaultTo<'SaaS'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Effortless Scaling with SaaS'>;
//   };
// }

// export interface ComponentsHyperlink extends Struct.ComponentSchema {
//   collectionName: 'components_components_hyperlink';
//   info: {
//     description: '';
//     displayName: 'Hyperlink';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     HyperlinkText: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Hyperlink text'>;
//     HyperlinkUrl: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'https://www.coderabbit.ai'>;
//     isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//   };
// }

// export interface ComponentsImpactSlider extends Struct.ComponentSchema {
//   collectionName: 'components_components_impact_sliders';
//   info: {
//     description: '';
//     displayName: 'Impact Slider';
//   };
//   attributes: {
//     Avatar: Schema.Attribute.Media<'images'>;
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Company: Schema.Attribute.Media<'images'>;
//     CompanyDark: Schema.Attribute.Media<'images'>;
//     Job: Schema.Attribute.String;
//     Name: Schema.Attribute.String;
//     Opinion: Schema.Attribute.Text;
//   };
// }

// export interface ComponentsInfoGraphics extends Struct.ComponentSchema {
//   collectionName: 'components_components_info_graphics';
//   info: {
//     description: '';
//     displayName: 'Info Graphics';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Repositories in review'>;
//     Icon: Schema.Attribute.Media<'images'>;
//   };
// }

// export interface ComponentsInputCheckboxField extends Struct.ComponentSchema {
//   collectionName: 'components_components_input_checkbox_fields';
//   info: {
//     displayName: 'Input Checkbox Field';
//   };
//   attributes: {
//     isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
//   };
// }

// export interface ComponentsInputSelectField extends Struct.ComponentSchema {
//   collectionName: 'components_components_input_select_fields';
//   info: {
//     description: '';
//     displayName: 'Input Select Field';
//   };
//   attributes: {
//     isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
//     Options: Schema.Attribute.Component<'components.newsletter', true>;
//     Placeholder: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Placeholder'>;
//   };
// }

// export interface ComponentsInputTextField extends Struct.ComponentSchema {
//   collectionName: 'components_components_input_text_fields';
//   info: {
//     description: '';
//     displayName: 'Input Text Field';
//   };
//   attributes: {
//     isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     isTextarea: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     isWebsite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Label: Schema.Attribute.String;
//     Placeholder: Schema.Attribute.String;
//   };
// }

// export interface ComponentsLeadButtonBanner extends Struct.ComponentSchema {
//   collectionName: 'components_components_lead_button_banner';
//   info: {
//     displayName: 'Lead Capture email Banner';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Build better code, faster.'>;
//   };
// }

// export interface ComponentsLeadInputBanner extends Struct.ComponentSchema {
//   collectionName: 'components_components_lead_input_banner';
//   info: {
//     displayName: 'Lead Capture Button Banner';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Join thousands of developers using Code Rabbit to accelerate their workflow.'>;
//     Newsletter: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Build better code, faster.'>;
//   };
// }

// export interface ComponentsLink extends Struct.ComponentSchema {
//   collectionName: 'components_components_links';
//   info: {
//     description: '';
//     displayName: 'Link';
//   };
//   attributes: {
//     Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
//     Image: Schema.Attribute.Media<'images'>;
//     isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lorem ipsum'>;
//     Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
//   };
// }

// export interface ComponentsLinkCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_link_card_s';
//   info: {
//     description: '';
//     displayName: 'Link Card ';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String;
//     Icon: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsLinkMenu extends Struct.ComponentSchema {
//   collectionName: 'components_components_link_menus';
//   info: {
//     displayName: 'Link Menu';
//   };
//   attributes: {
//     hasSubmenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Link: Schema.Attribute.Component<'components.link', false>;
//     Submenu: Schema.Attribute.Component<'components.link', true>;
//   };
// }

// export interface ComponentsLinksColumn extends Struct.ComponentSchema {
//   collectionName: 'components_components_links_columns';
//   info: {
//     description: '';
//     displayName: 'Links Column';
//   };
//   attributes: {
//     Links: Schema.Attribute.Component<'components.link', true>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Column title'>;
//   };
// }

// export interface ComponentsLogoAssetCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_logo_asset_card';
//   info: {
//     description: '';
//     displayName: 'Logo Asset Card';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem '>;
//     Image: Schema.Attribute.Media<'images'>;
//     Image1: Schema.Attribute.Media<'images'>;
//     Image2: Schema.Attribute.Media<'images'>;
//     Image3: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsLogoGuideline extends Struct.ComponentSchema {
//   collectionName: 'components_components_logo_guideline';
//   info: {
//     description: '';
//     displayName: 'logo_guideline';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'Lorem '>;
//     LogoLayoutCard: Schema.Attribute.Component<
//       'components.logo-asset-card',
//       true
//     >;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
//   };
// }

// export interface ComponentsLogoTextPair extends Struct.ComponentSchema {
//   collectionName: 'components_components_logo_text_pairs';
//   info: {
//     description: 'A component for displaying a logo with its associated text';
//     displayName: 'Logo Text Pair';
//   };
//   attributes: {
//     isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
//     LogoHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
//     Text: Schema.Attribute.String &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<'IDE Name'>;
//   };
// }

// export interface ComponentsMember extends Struct.ComponentSchema {
//   collectionName: 'components_components_members';
//   info: {
//     displayName: 'Member';
//   };
//   attributes: {
//     Image: Schema.Attribute.Media<'images'>;
//     Name: Schema.Attribute.String;
//     Position: Schema.Attribute.String;
//   };
// }

// export interface ComponentsMetric extends Struct.ComponentSchema {
//   collectionName: 'components_components_metrics';
//   info: {
//     description: '';
//     displayName: 'Stat';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Repositories in review'>;
//     Number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'10k'>;
//   };
// }

// export interface ComponentsNewsletter extends Struct.ComponentSchema {
//   collectionName: 'components_components_newsletters';
//   info: {
//     description: '';
//     displayName: 'Select Option';
//   };
//   attributes: {
//     Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
//     Value: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Value'>;
//   };
// }

// export interface ComponentsNotification extends Struct.ComponentSchema {
//   collectionName: 'components_components_notifications';
//   info: {
//     description: '';
//     displayName: 'Notification';
//   };
//   attributes: {
//     Link: Schema.Attribute.Component<'components.link', false>;
//     Show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Text: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.'>;
//   };
// }

// export interface ComponentsPill extends Struct.ComponentSchema {
//   collectionName: 'components_components_pills';
//   info: {
//     displayName: 'Pill';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text;
//     Image: Schema.Attribute.Media<'images'>;
//     Link: Schema.Attribute.Component<'components.link', false>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsPlan extends Struct.ComponentSchema {
//   collectionName: 'components_components_plans';
//   info: {
//     displayName: 'Plan';
//   };
//   attributes: {
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String;
//     Detail: Schema.Attribute.String;
//     IncludesTitle: Schema.Attribute.String;
//     Price: Schema.Attribute.String;
//     Recommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsPrivacyPolicyQuestions
//   extends Struct.ComponentSchema {
//   collectionName: 'components_components_privacy_policy_questions';
//   info: {
//     displayName: 'Privacy Policy Questions';
//   };
//   attributes: {
//     Answer: Schema.Attribute.RichText;
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Question: Schema.Attribute.String;
//   };
// }

// export interface ComponentsPromoCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_promo_card';
//   info: {
//     description: '';
//     displayName: 'promo-card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false> &
//       Schema.Attribute.Required;
//     Description1: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Most installed AI app on GitHub and GitLab'>;
//     Description2: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Free 14-day trial'>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut code review time & bugs by 50%'>;
//   };
// }

// export interface ComponentsSecurity extends Struct.ComponentSchema {
//   collectionName: 'components_components_securities';
//   info: {
//     description: '';
//     displayName: 'Security Card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text;
//     Image: Schema.Attribute.Media<'images'>;
//     ImageDark: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface ComponentsSocials extends Struct.ComponentSchema {
//   collectionName: 'components_components_socials';
//   info: {
//     displayName: 'Socials';
//   };
//   attributes: {
//     Socials: Schema.Attribute.Component<'components.link', true>;
//   };
// }

// export interface ComponentsTestimonial extends Struct.ComponentSchema {
//   collectionName: 'components_components_testimonials';
//   info: {
//     description: '';
//     displayName: 'Testimonial';
//   };
//   attributes: {
//     Avatar: Schema.Attribute.Media<'images'>;
//     EmbedCode: Schema.Attribute.Text;
//     Job: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Marketing Director @Metadata.io '>;
//     Name: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Marguerite Bergnaum'>;
//     Opinion: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.'>;
//   };
// }

// export interface ComponentsTrustCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_trust_cards';
//   info: {
//     description: '';
//     displayName: 'Trust Card';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.'>;
//     Icon: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur.Reviews only the essential code'>;
//   };
// }

// export interface EventCard extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_card';
//   info: {
//     description: 'Explore Event card section for events';
//     displayName: 'Explore Event Card';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//   };
// }

// export interface EventDetails extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_details';
//   info: {
//     description: 'Details section for events';
//     displayName: 'Details';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Description1: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<''>;
//     Description2: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<''>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//     Venue: Schema.Attribute.Component<'event.venue', false>;
//   };
// }

// export interface EventEventTime extends Struct.ComponentSchema {
//   collectionName: 'components_event_time_event_time';
//   info: {
//     description: 'Event date and time with AM/PM and timezone options';
//     displayName: 'Event Date & Time';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Date: Schema.Attribute.Date &
//       Schema.Attribute.Required &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Period: Schema.Attribute.Enumeration<['AM', 'PM']> &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<'AM'>;
//     Time: Schema.Attribute.Time & Schema.Attribute.Required;
//     Timezone: Schema.Attribute.Enumeration<
//       [
//         'PST',
//         'PDT',
//         'MST',
//         'MDT',
//         'CST',
//         'CDT',
//         'EST',
//         'EDT',
//         'IST',
//         'UTC',
//         'GMT',
//         'CET',
//         'CEST',
//         'JST',
//         'AEST',
//         'AEDT',
//         'Other',
//       ]
//     > &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<'EST'>;
//   };
// }

// export interface EventExternalEvent extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_external_event';
//   info: {
//     description: 'External event section for events';
//     displayName: 'External Event';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Details: Schema.Attribute.Component<'event.details', false>;
//     EventExploreCard: Schema.Attribute.Component<'event.card', false> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Home: Schema.Attribute.Component<'event.external-home', false>;
//   };
// }

// export interface EventExternalHome extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_external_home';
//   info: {
//     description: 'Home section for events';
//     displayName: 'Home';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. '>;
//     EventTime: Schema.Attribute.Component<'event.event-time', false>;
//     Image: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Location: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Booth #544/ Javits Convention Center \u2014 New York City, NY'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//   };
// }

// export interface EventFeaturing extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_featuring';
//   info: {
//     description: 'Featuring section for events';
//     displayName: 'Featuring';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Speakers: Schema.Attribute.Component<'event.speaker', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//   };
// }

// export interface EventInternalEvent extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_internal_event';
//   info: {
//     description: 'Internal event section for events';
//     displayName: 'Internal Event';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Details: Schema.Attribute.Component<'event.learn', false>;
//     EventExploreCard: Schema.Attribute.Component<'event.card', false> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Home: Schema.Attribute.Component<'event.internal-home', false>;
//   };
// }

// export interface EventInternalHome extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_internal_home';
//   info: {
//     description: 'Home section for events';
//     displayName: 'Home';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. '>;
//     EventTime: Schema.Attribute.Component<'event.event-time', false>;
//     Image: Schema.Attribute.Media<'images'> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     RegisterForm: Schema.Attribute.Component<'event.register-form', false>;
//     Success: Schema.Attribute.Component<'components.contact-success', false> &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//   };
// }

// export interface EventLearn extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_learn';
//   info: {
//     description: 'Learn section for events';
//     displayName: 'Learn';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     FeaturingTitle: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//     Pointers: Schema.Attribute.Component<'components.bullets', true>;
//     Speakers: Schema.Attribute.Component<'event.speaker', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//   };
// }

// export interface EventRegisterForm extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_register_form';
//   info: {
//     description: 'Register form for events';
//     displayName: 'Register Form';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Company: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Join industry experts and transform your development workflow.'>;
//     Email: Schema.Attribute.Component<'components.banner-text-fields', false>;
//     FirstName: Schema.Attribute.Component<
//       'components.banner-text-fields',
//       false
//     >;
//     Hyperlink: Schema.Attribute.Component<'components.hyperlink', false>;
//     JobTitle: Schema.Attribute.Component<
//       'components.banner-text-fields',
//       false
//     >;
//     LastName: Schema.Attribute.Component<
//       'components.banner-text-fields',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Secure your spot'>;
//   };
// }

// export interface EventSpeaker extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_speaker';
//   info: {
//     description: 'Speaker section for events';
//     displayName: 'Speaker';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Image: Schema.Attribute.Media<'images'>;
//     Name: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'John Doe'>;
//     Role: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Software Engineer'>;
//   };
// }

// export interface EventVenue extends Struct.ComponentSchema {
//   collectionName: 'components_components_event_venue';
//   info: {
//     description: 'Venue section for events';
//     displayName: 'Venue';
//   };
//   pluginOptions: {
//     i18n: {
//       localized: true;
//     };
//   };
//   attributes: {
//     Address: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'429 11th Ave'>;
//     AddressTitle: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'429 11th Ave'>;
//     City: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'New York City NY 10001'>;
//     coordinates: Schema.Attribute.Text;
//     googleMapsUrl: Schema.Attribute.Text;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'CodeRabbit at AI Summit'>;
//     VenueName: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Javits Convention Center'>;
//     VenueTitle: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'Javits Convention Center'>;
//     Website: Schema.Attribute.String &
//       Schema.Attribute.SetPluginOptions<{
//         i18n: {
//           localized: true;
//         };
//       }> &
//       Schema.Attribute.DefaultTo<'https://javitscenter.com'>;
//   };
// }

// export interface LayoutAlternatedContent extends Struct.ComponentSchema {
//   collectionName: 'components_layout_alternated_contents';
//   info: {
//     description: '';
//     displayName: 'Alternated Content';
//   };
//   attributes: {
//     ContentWithImages: Schema.Attribute.Component<
//       'components.content-with-image',
//       true
//     >;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutArchitecture extends Struct.ComponentSchema {
//   collectionName: 'components_layout_architecture';
//   info: {
//     description: '';
//     displayName: 'Architecture Section';
//   };
//   attributes: {
//     Image: Schema.Attribute.Media<'images'>;
//     ImageDark: Schema.Attribute.Media<'images'>;
//     ImageDarkSM: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Get started today'>;
//   };
// }

// export interface LayoutBlogBanners extends Struct.ComponentSchema {
//   collectionName: 'components_layout_blog_banners';
//   info: {
//     description: '';
//     displayName: 'Blog Banners';
//   };
//   attributes: {
//     Banner: Schema.Attribute.Component<'components.blog-banner', true>;
//   };
// }

// export interface LayoutBlogHeroSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_blog_hero_sections';
//   info: {
//     description: '';
//     displayName: 'Blog Hero Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Dig into insights about our products, use cases, and POVs.'>;
//     SearchPlaceholder: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Search articles'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'CodeRabbit Blog'>;
//   };
// }

// export interface LayoutBlogSliderSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_blog_slider_sections';
//   info: {
//     description: '';
//     displayName: 'Blog Slider Section';
//   };
//   attributes: {
//     Slider: Schema.Attribute.Component<'components.blog-slider', true>;
//   };
// }

// export interface LayoutBrandGuidelineAssetSection
//   extends Struct.ComponentSchema {
//   collectionName: 'components_asset_sections';
//   info: {
//     description: '';
//     displayName: 'Asset Section';
//   };
//   attributes: {
//     AssetCard: Schema.Attribute.Component<'components.asset-card', true>;
//   };
// }

// export interface LayoutBrandGuidelineHeroSection
//   extends Struct.ComponentSchema {
//   collectionName: 'components_brand-guideline_hero_sections';
//   info: {
//     description: '';
//     displayName: 'Hero Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Feel free to use the CodeRabbit logos provided below just keep them as-is to help us stay consistent. '>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'CodeRabbit Brand Assets'>;
//   };
// }

// export interface LayoutCaseStudySection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_case_study_sections';
//   info: {
//     displayName: 'Case Study Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false> &
//       Schema.Attribute.Required;
//     Cases: Schema.Attribute.Component<'components.case-study', true> &
//       Schema.Attribute.Required;
//   };
// }

// export interface LayoutCollapsibleBoxesSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_collapsible_boxes_sections';
//   info: {
//     description: '';
//     displayName: 'Collapsible Boxes Section';
//   };
//   attributes: {
//     Features: Schema.Attribute.Component<'components.collapsible', true>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
//   };
// }

// export interface LayoutContactFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_contact_form_sections';
//   info: {
//     description: '';
//     displayName: 'Contact Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     HowCanWeHelp: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     NumberOfDevelopers: Schema.Attribute.Component<
//       'components.input-select-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface LayoutContactSupportFormSection
//   extends Struct.ComponentSchema {
//   collectionName: 'components_layout_contact_support_form_sections';
//   info: {
//     description: '';
//     displayName: 'Support Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     HowCanWeHelp: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please complete this form so we can assist you more effectively:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface LayoutContactUsSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_contact_us_sections';
//   info: {
//     description: '';
//     displayName: 'Contact Us Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Still have questions?'>;
//   };
// }

// export interface LayoutCustomFeaturesSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_custom_features_sections';
//   info: {
//     displayName: 'Custom Features Section';
//     icon: 'dashboard';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CustomLayout: Schema.Attribute.Boolean &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<false>;
//     Features: Schema.Attribute.Component<'components.custom-feature', true>;
//   };
// }

// export interface LayoutCustomersSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_customers_sections';
//   info: {
//     description: '';
//     displayName: 'Customers Section';
//   };
//   attributes: {
//     Customers: Schema.Attribute.Component<'components.link', true> &
//       Schema.Attribute.Required &
//       Schema.Attribute.SetMinMax<
//         {
//           min: 1;
//         },
//         number
//       >;
//     CustomersDark: Schema.Attribute.Component<'components.link', true>;
//     Grayscale: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Trusted by 1000+ organizations'>;
//   };
// }

// export interface LayoutEnterpriseHeroWithVideo extends Struct.ComponentSchema {
//   collectionName: 'components_layout_enterprise_hero_with_videos';
//   info: {
//     description: '';
//     displayName: 'Enterprise Hero With Video';
//     icon: '';
//   };
//   attributes: {
//     Buttons: Schema.Attribute.Component<'components.link', true>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
//     Description_1: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'14-day free trial '>;
//     Description_2: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'No credit card needed.'>;
//     Description_3: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
//     Tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Page name'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
//     YTVideoUrl: Schema.Attribute.String;
//   };
// }

// export interface LayoutEnterpriseImpactSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_enterprise_impact_sections';
//   info: {
//     description: '';
//     displayName: 'Enterprise Impact Section';
//   };
//   attributes: {
//     Slider: Schema.Attribute.Component<'components.impact-slider', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Proven Enterprise Impact'>;
//   };
// }

// export interface LayoutEnterprisePlatformSection
//   extends Struct.ComponentSchema {
//   collectionName: 'components_layout_enterprise_platform_sections';
//   info: {
//     description: '';
//     displayName: 'Enterprise Platform Section';
//   };
//   attributes: {
//     Image: Schema.Attribute.Media<'images'>;
//     ImageDark: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     ImageSMDark: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Send your reports to any Platform'>;
//   };
// }

// export interface LayoutEventCard extends Struct.ComponentSchema {
//   collectionName: 'components_layout_event_cards';
//   info: {
//     displayName: 'Event Card';
//     icon: 'check';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text;
//     Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutFaq extends Struct.ComponentSchema {
//   collectionName: 'components_layout_faq';
//   info: {
//     displayName: 'FAQ Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.String;
//     Faqs: Schema.Attribute.Component<'components.faq-item', true>;
//     SplitIntoTwoHalves: Schema.Attribute.Boolean &
//       Schema.Attribute.DefaultTo<false>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Frequently asked questions'>;
//   };
// }

// export interface LayoutFaqSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_faq_sections';
//   info: {
//     displayName: 'FAQ Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Faqs: Schema.Attribute.Component<'components.faq-item', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Frequently asked questions'>;
//   };
// }

// export interface LayoutFeatureGridSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_features_grid_sections';
//   info: {
//     description: '';
//     displayName: 'Features Grid Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Features: Schema.Attribute.Component<'components.feature-card', true>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
//   };
// }

// export interface LayoutFeaturesSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_features_sections';
//   info: {
//     description: '';
//     displayName: 'Features Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
//     Features: Schema.Attribute.Component<'components.feature', true>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
//   };
// }

// export interface LayoutGdprFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_gdpr_form_sections';
//   info: {
//     description: '';
//     displayName: 'GDPR Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     NumberOfDevelopers: Schema.Attribute.Component<
//       'components.input-select-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please fill out this form to request access:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface LayoutGetStarted extends Struct.ComponentSchema {
//   collectionName: 'components_layout_get_starteds';
//   info: {
//     description: '';
//     displayName: 'Get Started Section';
//   };
//   attributes: {
//     Buttons: Schema.Attribute.Component<'components.link', true>;
//     Description_1: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'14-day free trial '>;
//     Description_2: Schema.Attribute.String;
//     Image: Schema.Attribute.Media<'images'>;
//     ImageDark: Schema.Attribute.Media<'images'>;
//     ImageSM: Schema.Attribute.Media<'images'>;
//     TextDetails: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Get started today'>;
//   };
// }

// export interface LayoutHero extends Struct.ComponentSchema {
//   collectionName: 'components_layout_heroes';
//   info: {
//     description: '';
//     displayName: 'Hero Section';
//     icon: '';
//   };
//   attributes: {
//     BackedBy: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'We\u2019re backed by'>;
//     BackedByImages: Schema.Attribute.Media<'images', true>;
//     BackedByImagesDark: Schema.Attribute.Media<'images', true>;
//     Bullets: Schema.Attribute.Component<'components.bullets', true>;
//     Buttons: Schema.Attribute.Component<'components.link', true>;
//     Capsule: Schema.Attribute.Component<'components.capsule', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
//     Description_1: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'14-day free trial '>;
//     Description_2: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'No credit card needed.'>;
//     Description_3: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     ListTitle: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Why choose CodeRabbit?'>;
//     LottieLG: Schema.Attribute.JSON;
//     LottieSM: Schema.Attribute.JSON;
//     Tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Page name'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
//     VideoOrGif: Schema.Attribute.Media<'images' | 'videos'>;
//   };
// }

// export interface LayoutHeroCardsSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_hero_cards_sections';
//   info: {
//     displayName: 'Hero Cards Section';
//   };
//   attributes: {
//     Cards: Schema.Attribute.Component<'components.hero-card', true>;
//   };
// }

// export interface LayoutHoppyComicSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_hoppy_comic_section';
//   info: {
//     description: '';
//     displayName: 'Comic Section';
//     icon: '';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
//   };
// }

// export interface LayoutHoppyFanCreatives extends Struct.ComponentSchema {
//   collectionName: 'components_layout_hoppy_fan_creatives';
//   info: {
//     description: '';
//     displayName: 'Fan Creatives Section';
//     icon: '';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Fast, smart, and always by your side \u2014 helping you level up your coding skills.'>;
//     Socials: Schema.Attribute.Component<'components.link', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Meet Hoppy, Your Dev Sidekick'>;
//   };
// }

// export interface LayoutHoppyMood extends Struct.ComponentSchema {
//   collectionName: 'components_layout_hoppy_mood';
//   info: {
//     description: '';
//     displayName: 'Hoppy Quotes';
//     icon: '';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
//     Socials: Schema.Attribute.Component<'components.link', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
//   };
// }

// export interface LayoutHowItWorksSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_how_it_works_sections';
//   info: {
//     description: '';
//     displayName: 'How It Works Section';
//   };
//   attributes: {
//     Steps: Schema.Attribute.Component<'components.how-it-works', true>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutHsEmbededCalendar extends Struct.ComponentSchema {
//   collectionName: 'components_layout_hs_embeded_calendars';
//   info: {
//     displayName: 'HsEmbededCalendar';
//     icon: 'calendar';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text;
//     SourceUrl: Schema.Attribute.String;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutJoinUsSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_join_us_sections';
//   info: {
//     displayName: 'Join Us Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Description: Schema.Attribute.String;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutLeadCaptureLayout extends Struct.ComponentSchema {
//   collectionName: 'components_layout_lead_capture_layout_sections';
//   info: {
//     displayName: 'Lead Capture Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.lead-button-banner', false>;
//     Email: Schema.Attribute.Component<'components.lead-input-banner', false>;
//   };
// }

// export interface LayoutMarkdownCardSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_markdown_card_sections';
//   info: {
//     description: '';
//     displayName: 'Markdown Card Section';
//     icon: 'layout';
//   };
//   attributes: {
//     Body: Schema.Attribute.RichText;
//   };
// }

// export interface LayoutMembersSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_members_sections';
//   info: {
//     description: '';
//     displayName: 'Members Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.Text;
//     Image: Schema.Attribute.Media<'images'>;
//     Members: Schema.Attribute.Component<'components.member', true>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutMetricsSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_metrics_sections';
//   info: {
//     description: '';
//     displayName: 'Stats Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Loved by 1000s of developers'>;
//     Stats: Schema.Attribute.Component<'components.metric', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'The most installed AI App on GitHub & GitLab'>;
//   };
// }

// export interface LayoutNewsletterBlogSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_newsletter_blog_sections';
//   info: {
//     description: '';
//     displayName: 'Blog Newsletter Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Don\u2019t miss out on our latest articles'>;
//     Newsletter: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Sign up for our Newsletter'>;
//   };
// }

// export interface LayoutPartnershipFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_partnership_form_sections';
//   info: {
//     description: '';
//     displayName: 'Partnership Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     NumberOfDevelopers: Schema.Attribute.Component<
//       'components.input-select-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface LayoutPillsSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_pills_sections';
//   info: {
//     description: '';
//     displayName: 'Pills Section';
//   };
//   attributes: {
//     Pills: Schema.Attribute.Component<'components.pill', true>;
//   };
// }

// export interface LayoutPlansSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_plans_sections';
//   info: {
//     displayName: 'Plans Section';
//   };
//   attributes: {
//     Plans: Schema.Attribute.Component<'components.plan', true>;
//     Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
//   };
// }

// export interface LayoutPrivacyPolicySection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_privacy_policy_sections';
//   info: {
//     displayName: 'Privacy Policy Section';
//   };
//   attributes: {
//     Description: Schema.Attribute.RichText;
//     Questions: Schema.Attribute.Component<
//       'components.privacy-policy-questions',
//       true
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Our privacy policy'>;
//   };
// }

// export interface LayoutSecuritySection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_security_sections';
//   info: {
//     description: '';
//     displayName: 'Security Section';
//   };
//   attributes: {
//     Securities: Schema.Attribute.Component<'components.security', true>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutSimpleHero extends Struct.ComponentSchema {
//   collectionName: 'components_layout_simple_heroes';
//   info: {
//     description: '';
//     displayName: 'Simple Hero Section';
//     icon: '';
//   };
//   attributes: {
//     Buttons: Schema.Attribute.Component<'components.link', true>;
//     CarouselWithTooltips: Schema.Attribute.Component<'components.link', true> &
//       Schema.Attribute.Required &
//       Schema.Attribute.SetMinMax<
//         {
//           min: 1;
//         },
//         number
//       >;
//     CarouselWithTooltipsDark: Schema.Attribute.Component<
//       'components.link',
//       true
//     > &
//       Schema.Attribute.Required &
//       Schema.Attribute.SetMinMax<
//         {
//           min: 1;
//         },
//         number
//       >;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.Required &
//       Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
//   };
// }

// export interface LayoutSocFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_soc_form_sections';
//   info: {
//     description: '';
//     displayName: 'SOC Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     NumberOfDevelopers: Schema.Attribute.Component<
//       'components.input-select-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please fill out this form to request access:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface LayoutStartupFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_startup_form_sections';
//   info: {
//     description: '';
//     displayName: 'Startup Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyWebsite: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     Email: Schema.Attribute.Component<'components.input-text-field', false>;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     FundingDetails: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     GitOrgName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<"Complete this form, If your organization qualifies for our Startup program, we'll activate your account.">;
//     TrialCheckbox: Schema.Attribute.Component<
//       'components.input-checkbox-field',
//       false
//     >;
//   };
// }

// export interface LayoutTestimonials extends Struct.ComponentSchema {
//   collectionName: 'components_layout_testimonials';
//   info: {
//     description: '';
//     displayName: 'Testimonials Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Testimonials: Schema.Attribute.Component<'components.testimonial', true>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'What they say about us'>;
//   };
// }

// export interface LayoutTrustSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_trust_sections';
//   info: {
//     description: '';
//     displayName: 'Trust Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Cards: Schema.Attribute.Component<'components.trust-card', true>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'We take security, privacy, and compliance seriously.'>;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Your data stays confidential'>;
//   };
// }

// export interface LayoutVsCodeHeroSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_vs_code_heroes';
//   info: {
//     description: '';
//     displayName: 'Hero Section';
//     icon: '';
//   };
//   attributes: {
//     Buttons: Schema.Attribute.Component<'components.link', true>;
//     Capsule: Schema.Attribute.Component<'components.capsule', false>;
//     CenterImage_Icon: Schema.Attribute.Media<'images'>;
//     Description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'Supercharge your entire team with AI-driven contextual feedback. Supports all languages.'>;
//     Description_1: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'14-day free trial '>;
//     Description_2: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'No credit card needed.'>;
//     Description_3: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'2-click signup with GitHub/GitLab.'>;
//     Image: Schema.Attribute.Media<'images'>;
//     LeftContentText: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'14-day free trial '>;
//     MiddleContentText: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<' | Works with'>;
//     RightContentText: Schema.Attribute.Component<
//       'components.logo-text-pair',
//       true
//     > &
//       Schema.Attribute.SetMinMax<
//         {
//           max: 3;
//           min: 1;
//         },
//         number
//       >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Cut Code Review Time & Bugs in Half'>;
//     VideoOrGif: Schema.Attribute.Media<'images' | 'videos'>;
//     VideoOrGifDark: Schema.Attribute.Media<'images' | 'videos'>;
//   };
// }

// export interface LayoutVsFeatureSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_vs_extension_features_sections';
//   info: {
//     description: '';
//     displayName: 'Features Section';
//   };
//   attributes: {
//     Benefits: Schema.Attribute.Component<'components.security', true>;
//     Button: Schema.Attribute.Component<'components.link', false>;
//     Title: Schema.Attribute.String;
//   };
// }

// export interface LayoutWhitepaperFormSection extends Struct.ComponentSchema {
//   collectionName: 'components_layout_whitepaper_form_sections';
//   info: {
//     description: '';
//     displayName: 'Whitepaper Form Section';
//   };
//   attributes: {
//     Button: Schema.Attribute.Component<'components.link', false>;
//     CompanyName: Schema.Attribute.Component<
//       'components.input-text-field',
//       false
//     >;
//     FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
//     JobTitle: Schema.Attribute.Component<'components.input-text-field', false>;
//     LastName: Schema.Attribute.Component<'components.input-text-field', false>;
//     NumberOfDevelopers: Schema.Attribute.Component<
//       'components.input-select-field',
//       false
//     >;
//     Title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'Please fill out this form to schedule a demo:'>;
//     WorkEmail: Schema.Attribute.Component<'components.input-text-field', false>;
//   };
// }

// export interface SharedMedia extends Struct.ComponentSchema {
//   collectionName: 'components_shared_media';
//   info: {
//     displayName: 'Media';
//     icon: 'file-video';
//   };
//   attributes: {
//     file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
//   };
// }

// export interface SharedQuote extends Struct.ComponentSchema {
//   collectionName: 'components_shared_quotes';
//   info: {
//     displayName: 'Quote';
//     icon: 'indent';
//   };
//   attributes: {
//     body: Schema.Attribute.Text;
//     title: Schema.Attribute.String;
//   };
// }

// export interface SharedRichText extends Struct.ComponentSchema {
//   collectionName: 'components_shared_rich_texts';
//   info: {
//     description: '';
//     displayName: 'Rich text';
//     icon: 'align-justify';
//   };
//   attributes: {
//     body: Schema.Attribute.RichText;
//   };
// }

// export interface SharedSeo extends Struct.ComponentSchema {
//   collectionName: 'components_seo_seos';
//   info: {
//     description: '';
//     displayName: 'seo';
//     icon: 'search';
//   };
//   attributes: {
//     canonical: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'https://coderabbit.ai/'>;
//     description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
//     keywords: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'coderabbit, ai, code, git, gitlab, github'>;
//     og_description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
//     og_image: Schema.Attribute.Media<'images'>;
//     og_locale: Schema.Attribute.String & Schema.Attribute.DefaultTo<'en_US'>;
//     og_sitename: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
//     og_title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
//     og_type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'website'>;
//     og_url: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'https://coderabbit.ai/'>;
//     title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
//     twitter_card: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'summary_large_image'>;
//     twitter_creator: Schema.Attribute.String;
//     twitter_description: Schema.Attribute.Text &
//       Schema.Attribute.DefaultTo<'AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.'>;
//     twitter_image: Schema.Attribute.Media<'images'>;
//     twitter_site: Schema.Attribute.String;
//     twitter_title: Schema.Attribute.String &
//       Schema.Attribute.DefaultTo<'AI Code Reviews | CodeRabbit | Try for Free'>;
//   };
// }

// export interface SharedSlider extends Struct.ComponentSchema {
//   collectionName: 'components_shared_sliders';
//   info: {
//     description: '';
//     displayName: 'Slider';
//     icon: 'address-book';
//   };
//   attributes: {
//     files: Schema.Attribute.Media<'images', true>;
//   };
// }

// declare module '@strapi/strapi' {
//   export module Public {
//     export interface ComponentSchemas {
//       'casestudy.case-conclusion-card': CasestudyCaseConclusionCard;
//       'casestudy.case-home': CasestudyCaseHome;
//       'casestudy.conclusion': CasestudyConclusion;
//       'casestudy.section-1': CasestudySection1;
//       'casestudy.section-2': CasestudySection2;
//       'casestudy.section-3': CasestudySection3;
//       'casestudy.section-4': CasestudySection4;
//       'casestudy.stats': CasestudyStats;
//       'casestudy.testimonial': CasestudyTestimonial;
//       'components.announcment': ComponentsAnnouncment;
//       'components.asset-card': ComponentsAssetCard;
//       'components.banner-text-fields': ComponentsBannerTextFields;
//       'components.blog-banner': ComponentsBlogBanner;
//       'components.blog-slider': ComponentsBlogSlider;
//       'components.bullets': ComponentsBullets;
//       'components.capsule': ComponentsCapsule;
//       'components.case-category': ComponentsCaseCategory;
//       'components.case-contact-card': ComponentsCaseContactCard;
//       'components.case-internal-hero': ComponentsCaseInternalHero;
//       'components.case-overview': ComponentsCaseOverview;
//       'components.case-study': ComponentsCaseStudy;
//       'components.case-study-featured': ComponentsCaseStudyFeatured;
//       'components.case-summary-card': ComponentsCaseSummaryCard;
//       'components.collapsible': ComponentsCollapsible;
//       'components.color-palette': ComponentsColorPalette;
//       'components.color-palette-card': ComponentsColorPaletteCard;
//       'components.contact-success': ComponentsContactSuccess;
//       'components.content-with-image': ComponentsContentWithImage;
//       'components.custom-feature': ComponentsCustomFeature;
//       'components.description-item': ComponentsDescriptionItem;
//       'components.faq-item': ComponentsFaqItem;
//       'components.feature': ComponentsFeature;
//       'components.feature-card': ComponentsFeatureCard;
//       'components.filter-category': ComponentsFilterCategory;
//       'components.filter-section': ComponentsFilterSection;
//       'components.form-side-section': ComponentsFormSideSection;
//       'components.hero-card': ComponentsHeroCard;
//       'components.hoppy-banner': ComponentsHoppyBanner;
//       'components.hoppy-comic': ComponentsHoppyComic;
//       'components.hoppy-creative': ComponentsHoppyCreative;
//       'components.hoppy-hero': ComponentsHoppyHero;
//       'components.hoppy-quote': ComponentsHoppyQuote;
//       'components.how-it-works': ComponentsHowItWorks;
//       'components.hyperlink': ComponentsHyperlink;
//       'components.impact-slider': ComponentsImpactSlider;
//       'components.info-graphics': ComponentsInfoGraphics;
//       'components.input-checkbox-field': ComponentsInputCheckboxField;
//       'components.input-select-field': ComponentsInputSelectField;
//       'components.input-text-field': ComponentsInputTextField;
//       'components.lead-button-banner': ComponentsLeadButtonBanner;
//       'components.lead-input-banner': ComponentsLeadInputBanner;
//       'components.link': ComponentsLink;
//       'components.link-card': ComponentsLinkCard;
//       'components.link-menu': ComponentsLinkMenu;
//       'components.links-column': ComponentsLinksColumn;
//       'components.logo-asset-card': ComponentsLogoAssetCard;
//       'components.logo-guideline': ComponentsLogoGuideline;
//       'components.logo-text-pair': ComponentsLogoTextPair;
//       'components.member': ComponentsMember;
//       'components.metric': ComponentsMetric;
//       'components.newsletter': ComponentsNewsletter;
//       'components.notification': ComponentsNotification;
//       'components.pill': ComponentsPill;
//       'components.plan': ComponentsPlan;
//       'components.privacy-policy-questions': ComponentsPrivacyPolicyQuestions;
//       'components.promo-card': ComponentsPromoCard;
//       'components.security': ComponentsSecurity;
//       'components.socials': ComponentsSocials;
//       'components.testimonial': ComponentsTestimonial;
//       'components.trust-card': ComponentsTrustCard;
//       'event.card': EventCard;
//       'event.details': EventDetails;
//       'event.event-time': EventEventTime;
//       'event.external-event': EventExternalEvent;
//       'event.external-home': EventExternalHome;
//       'event.featuring': EventFeaturing;
//       'event.internal-event': EventInternalEvent;
//       'event.internal-home': EventInternalHome;
//       'event.learn': EventLearn;
//       'event.register-form': EventRegisterForm;
//       'event.speaker': EventSpeaker;
//       'event.venue': EventVenue;
//       'layout.alternated-content': LayoutAlternatedContent;
//       'layout.architecture': LayoutArchitecture;
//       'layout.blog-banners': LayoutBlogBanners;
//       'layout.blog-hero-section': LayoutBlogHeroSection;
//       'layout.blog-slider-section': LayoutBlogSliderSection;
//       'layout.brand-guideline-asset-section': LayoutBrandGuidelineAssetSection;
//       'layout.brand-guideline-hero-section': LayoutBrandGuidelineHeroSection;
//       'layout.case-study-section': LayoutCaseStudySection;
//       'layout.collapsible-boxes-section': LayoutCollapsibleBoxesSection;
//       'layout.contact-form-section': LayoutContactFormSection;
//       'layout.contact-support-form-section': LayoutContactSupportFormSection;
//       'layout.contact-us-section': LayoutContactUsSection;
//       'layout.custom-features-section': LayoutCustomFeaturesSection;
//       'layout.customers-section': LayoutCustomersSection;
//       'layout.enterprise-hero-with-video': LayoutEnterpriseHeroWithVideo;
//       'layout.enterprise-impact-section': LayoutEnterpriseImpactSection;
//       'layout.enterprise-platform-section': LayoutEnterprisePlatformSection;
//       'layout.event-card': LayoutEventCard;
//       'layout.faq': LayoutFaq;
//       'layout.faq-section': LayoutFaqSection;
//       'layout.feature-grid-section': LayoutFeatureGridSection;
//       'layout.features-section': LayoutFeaturesSection;
//       'layout.gdpr-form-section': LayoutGdprFormSection;
//       'layout.get-started': LayoutGetStarted;
//       'layout.hero': LayoutHero;
//       'layout.hero-cards-section': LayoutHeroCardsSection;
//       'layout.hoppy-comic-section': LayoutHoppyComicSection;
//       'layout.hoppy-fan-creatives': LayoutHoppyFanCreatives;
//       'layout.hoppy-mood': LayoutHoppyMood;
//       'layout.how-it-works-section': LayoutHowItWorksSection;
//       'layout.hs-embeded-calendar': LayoutHsEmbededCalendar;
//       'layout.join-us-section': LayoutJoinUsSection;
//       'layout.lead-capture-layout': LayoutLeadCaptureLayout;
//       'layout.markdown-card-section': LayoutMarkdownCardSection;
//       'layout.members-section': LayoutMembersSection;
//       'layout.metrics-section': LayoutMetricsSection;
//       'layout.newsletter-blog-section': LayoutNewsletterBlogSection;
//       'layout.partnership-form-section': LayoutPartnershipFormSection;
//       'layout.pills-section': LayoutPillsSection;
//       'layout.plans-section': LayoutPlansSection;
//       'layout.privacy-policy-section': LayoutPrivacyPolicySection;
//       'layout.security-section': LayoutSecuritySection;
//       'layout.simple-hero': LayoutSimpleHero;
//       'layout.soc-form-section': LayoutSocFormSection;
//       'layout.startup-form-section': LayoutStartupFormSection;
//       'layout.testimonials': LayoutTestimonials;
//       'layout.trust-section': LayoutTrustSection;
//       'layout.vs-code-hero-section': LayoutVsCodeHeroSection;
//       'layout.vs-feature-section': LayoutVsFeatureSection;
//       'layout.whitepaper-form-section': LayoutWhitepaperFormSection;
//       'shared.media': SharedMedia;
//       'shared.quote': SharedQuote;
//       'shared.rich-text': SharedRichText;
//       'shared.seo': SharedSeo;
//       'shared.slider': SharedSlider;
//     }
//   }
// }

import type { Schema, Attribute } from "@strapi/strapi";

export interface SharedSlider extends Schema.Component {
  collectionName: "components_shared_sliders";
  info: {
    displayName: "Slider";
    icon: "address-book";
    description: "";
  };
  attributes: {
    files: Attribute.Media<"images", true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_seo_seos";
  info: {
    displayName: "seo";
    icon: "search";
    description: "";
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<"AI Code Reviews | CodeRabbit | Try for Free">;
    description: Attribute.Text &
      Attribute.DefaultTo<"AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.">;
    canonical: Attribute.String & Attribute.DefaultTo<"https://coderabbit.ai/">;
    keywords: Attribute.String &
      Attribute.DefaultTo<"coderabbit, ai, code, git, gitlab, github">;
    og_url: Attribute.String & Attribute.DefaultTo<"https://coderabbit.ai/">;
    og_title: Attribute.String &
      Attribute.DefaultTo<"AI Code Reviews | CodeRabbit | Try for Free">;
    og_description: Attribute.Text &
      Attribute.DefaultTo<"AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.">;
    og_sitename: Attribute.String &
      Attribute.DefaultTo<"AI Code Reviews | CodeRabbit | Try for Free">;
    og_locale: Attribute.String & Attribute.DefaultTo<"en_US">;
    og_type: Attribute.String & Attribute.DefaultTo<"website">;
    og_image: Attribute.Media<"images">;
    twitter_card: Attribute.String & Attribute.DefaultTo<"summary_large_image">;
    twitter_title: Attribute.String &
      Attribute.DefaultTo<"AI Code Reviews | CodeRabbit | Try for Free">;
    twitter_description: Attribute.Text &
      Attribute.DefaultTo<"AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.">;
    twitter_image: Attribute.Media<"images">;
    twitter_site: Attribute.String;
    twitter_creator: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: "components_shared_rich_texts";
  info: {
    displayName: "Rich text";
    icon: "align-justify";
    description: "";
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface LayoutWhitepaperFormSection extends Schema.Component {
  collectionName: "components_layout_whitepaper_form_sections";
  info: {
    displayName: "Whitepaper Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please fill out this form to schedule a demo:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    NumberOfDevelopers: Attribute.Component<"components.input-select-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutVsFeatureSection extends Schema.Component {
  collectionName: "components_layout_vs_extension_features_sections";
  info: {
    displayName: "Features Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Benefits: Attribute.Component<"components.security", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutVsCodeHeroSection extends Schema.Component {
  collectionName: "components_layout_vs_code_heroes";
  info: {
    displayName: "Hero Section";
    icon: "";
    description: "";
  };
  attributes: {
    Capsule: Attribute.Component<"components.capsule">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut Code Review Time & Bugs in Half">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Supercharge your entire team with AI-driven contextual feedback. Supports all languages.">;
    Image: Attribute.Media<"images">;
    VideoOrGif: Attribute.Media<"images" | "videos">;
    VideoOrGifDark: Attribute.Media<"images" | "videos">;
    Buttons: Attribute.Component<"components.link", true>;
    LeftContentText: Attribute.String &
      Attribute.DefaultTo<"14-day free trial ">;
    MiddleContentText: Attribute.String & Attribute.DefaultTo<" | Works with">;
    RightContentText: Attribute.Component<"components.logo-text-pair", true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    CenterImage_Icon: Attribute.Media<"images">;
    Description_1: Attribute.String & Attribute.DefaultTo<"14-day free trial ">;
    Description_2: Attribute.String &
      Attribute.DefaultTo<"No credit card needed.">;
    Description_3: Attribute.String &
      Attribute.DefaultTo<"2-click signup with GitHub/GitLab.">;
  };
}

export interface LayoutTrustSection extends Schema.Component {
  collectionName: "components_layout_trust_sections";
  info: {
    displayName: "Trust Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Your data stays confidential">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"We take security, privacy, and compliance seriously.">;
    Cards: Attribute.Component<"components.trust-card", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: "components_layout_testimonials";
  info: {
    displayName: "Testimonials Section";
    description: "";
  };
  attributes: {
    Testimonials: Attribute.Component<"components.testimonial", true>;
    Title: Attribute.String & Attribute.DefaultTo<"What they say about us">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutStartupFormSection extends Schema.Component {
  collectionName: "components_layout_startup_form_sections";
  info: {
    displayName: "Startup Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Complete this form, If your organization qualifies for our Startup program, we'll activate your account.">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyWebsite: Attribute.Component<"components.input-text-field">;
    FundingDetails: Attribute.Component<"components.input-text-field">;
    GitOrgName: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    Email: Attribute.Component<"components.input-text-field">;
    TrialCheckbox: Attribute.Component<"components.input-checkbox-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutSocFormSection extends Schema.Component {
  collectionName: "components_layout_soc_form_sections";
  info: {
    displayName: "SOC Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please fill out this form to request access:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    NumberOfDevelopers: Attribute.Component<"components.input-select-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutSimpleHero extends Schema.Component {
  collectionName: "components_layout_simple_heroes";
  info: {
    displayName: "Simple Hero Section";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"Cut Code Review Time & Bugs in Half">;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"Supercharge your entire team with AI-driven contextual feedback. Supports all languages.">;
    Buttons: Attribute.Component<"components.link", true>;
    CarouselWithTooltips: Attribute.Component<"components.link", true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    CarouselWithTooltipsDark: Attribute.Component<"components.link", true> &
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
  collectionName: "components_layout_security_sections";
  info: {
    displayName: "Security Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Securities: Attribute.Component<"components.security", true>;
  };
}

export interface LayoutPrivacyPolicySection extends Schema.Component {
  collectionName: "components_layout_privacy_policy_sections";
  info: {
    displayName: "Privacy Policy Section";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Our privacy policy">;
    Description: Attribute.RichText;
    Questions: Attribute.Component<"components.privacy-policy-questions", true>;
  };
}

export interface LayoutPlansSection extends Schema.Component {
  collectionName: "components_layout_plans_sections";
  info: {
    displayName: "Plans Section";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"">;
    Plans: Attribute.Component<"components.plan", true>;
  };
}

export interface LayoutPillsSection extends Schema.Component {
  collectionName: "components_layout_pills_sections";
  info: {
    displayName: "Pills Section";
    description: "";
  };
  attributes: {
    Pills: Attribute.Component<"components.pill", true>;
  };
}

export interface LayoutPartnershipFormSection extends Schema.Component {
  collectionName: "components_layout_partnership_form_sections";
  info: {
    displayName: "Partnership Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please fill out this form to schedule a demo:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    NumberOfDevelopers: Attribute.Component<"components.input-select-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutNewsletterBlogSection extends Schema.Component {
  collectionName: "components_layout_newsletter_blog_sections";
  info: {
    displayName: "Blog Newsletter Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Sign up for our Newsletter">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Don\u2019t miss out on our latest articles">;
    Newsletter: Attribute.Component<"components.input-text-field">;
  };
}

export interface LayoutMetricsSection extends Schema.Component {
  collectionName: "components_layout_metrics_sections";
  info: {
    displayName: "Stats Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"The most installed AI App on GitHub & GitLab">;
    Stats: Attribute.Component<"components.metric", true>;
    Description: Attribute.String &
      Attribute.DefaultTo<"Loved by 1000s of developers">;
  };
}

export interface LayoutMembersSection extends Schema.Component {
  collectionName: "components_layout_members_sections";
  info: {
    displayName: "Members Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<"images">;
    Members: Attribute.Component<"components.member", true>;
  };
}

export interface LayoutMarkdownCardSection extends Schema.Component {
  collectionName: "components_layout_markdown_card_sections";
  info: {
    displayName: "Markdown Card Section";
    icon: "layout";
    description: "";
  };
  attributes: {
    Body: Attribute.RichText;
  };
}

export interface LayoutLeadCaptureLayout extends Schema.Component {
  collectionName: "components_layout_lead_capture_layout_sections";
  info: {
    displayName: "Lead Capture Section";
  };
  attributes: {
    Button: Attribute.Component<"components.lead-button-banner">;
    Email: Attribute.Component<"components.lead-input-banner">;
  };
}

export interface LayoutJoinUsSection extends Schema.Component {
  collectionName: "components_layout_join_us_sections";
  info: {
    displayName: "Join Us Section";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutHsEmbededCalendar extends Schema.Component {
  collectionName: "components_layout_hs_embeded_calendars";
  info: {
    displayName: "HsEmbededCalendar";
    icon: "calendar";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    SourceUrl: Attribute.String;
  };
}

export interface LayoutHowItWorksSection extends Schema.Component {
  collectionName: "components_layout_how_it_works_sections";
  info: {
    displayName: "How It Works Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Steps: Attribute.Component<"components.how-it-works", true>;
  };
}

export interface LayoutHoppyMood extends Schema.Component {
  collectionName: "components_layout_hoppy_mood";
  info: {
    displayName: "Hoppy Quotes";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut Code Review Time & Bugs in Half">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Supercharge your entire team with AI-driven contextual feedback. Supports all languages.">;
    Button: Attribute.Component<"components.link">;
    Socials: Attribute.Component<"components.link", true>;
  };
}

export interface LayoutHoppyFanCreatives extends Schema.Component {
  collectionName: "components_layout_hoppy_fan_creatives";
  info: {
    displayName: "Fan Creatives Section";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Meet Hoppy, Your Dev Sidekick">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Fast, smart, and always by your side \u2014 helping you level up your coding skills.">;
    Socials: Attribute.Component<"components.link", true>;
  };
}

export interface LayoutHoppyComicSection extends Schema.Component {
  collectionName: "components_layout_hoppy_comic_section";
  info: {
    displayName: "Comic Section";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Meet Hoppy, Your Dev Sidekick">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Fast, smart, and always by your side \u2014 helping you level up your coding skills.">;
    Image: Attribute.Media<"images">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: "components_layout_heroes";
  info: {
    displayName: "Hero Section";
    icon: "";
    description: "";
  };
  attributes: {
    Capsule: Attribute.Component<"components.capsule">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut Code Review Time & Bugs in Half">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Supercharge your entire team with AI-driven contextual feedback. Supports all languages.">;
    Image: Attribute.Media<"images">;
    VideoOrGif: Attribute.Media<"images" | "videos">;
    Buttons: Attribute.Component<"components.link", true>;
    Tag: Attribute.String & Attribute.DefaultTo<"Page name">;
    LottieLG: Attribute.JSON;
    Bullets: Attribute.Component<"components.bullets", true>;
    LottieSM: Attribute.JSON;
    Description_1: Attribute.String & Attribute.DefaultTo<"14-day free trial ">;
    Description_2: Attribute.String &
      Attribute.DefaultTo<"No credit card needed.">;
    Description_3: Attribute.String &
      Attribute.DefaultTo<"2-click signup with GitHub/GitLab.">;
    ListTitle: Attribute.String & Attribute.DefaultTo<"Why choose CodeRabbit?">;
    BackedBy: Attribute.String & Attribute.DefaultTo<"We\u2019re backed by">;
    BackedByImages: Attribute.Media<"images", true>;
    BackedByImagesDark: Attribute.Media<"images", true>;
  };
}

export interface LayoutHeroCardsSection extends Schema.Component {
  collectionName: "components_layout_hero_cards_sections";
  info: {
    displayName: "Hero Cards Section";
  };
  attributes: {
    Cards: Attribute.Component<"components.hero-card", true>;
  };
}

export interface LayoutGetStarted extends Schema.Component {
  collectionName: "components_layout_get_starteds";
  info: {
    displayName: "Get Started Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Get started today">;
    Description_1: Attribute.String & Attribute.DefaultTo<"14-day free trial ">;
    Buttons: Attribute.Component<"components.link", true>;
    TextDetails: Attribute.String &
      Attribute.DefaultTo<"2-click signup with GitHub/GitLab.">;
    Image: Attribute.Media<"images">;
    ImageDark: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
    Description_2: Attribute.String;
  };
}

export interface LayoutGdprFormSection extends Schema.Component {
  collectionName: "components_layout_gdpr_form_sections";
  info: {
    displayName: "GDPR Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please fill out this form to request access:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    NumberOfDevelopers: Attribute.Component<"components.input-select-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: "components_layout_features_sections";
  info: {
    displayName: "Features Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"">;
    Description: Attribute.String & Attribute.DefaultTo<"">;
    Features: Attribute.Component<"components.feature", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutFeatureGridSection extends Schema.Component {
  collectionName: "components_layout_features_grid_sections";
  info: {
    displayName: "Features Grid Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"">;
    Features: Attribute.Component<"components.feature-card", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: "components_layout_faq";
  info: {
    displayName: "FAQ Section";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Frequently asked questions">;
    Description: Attribute.String;
    Faqs: Attribute.Component<"components.faq-item", true>;
    SplitIntoTwoHalves: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutFaqSection extends Schema.Component {
  collectionName: "components_layout_faq_sections";
  info: {
    displayName: "FAQ Section";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Frequently asked questions">;
    Button: Attribute.Component<"components.link">;
    Faqs: Attribute.Component<"components.faq-item", true>;
  };
}

export interface LayoutEventCard extends Schema.Component {
  collectionName: "components_layout_event_cards";
  info: {
    displayName: "Event Card";
    icon: "check";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface LayoutEnterprisePlatformSection extends Schema.Component {
  collectionName: "components_layout_enterprise_platform_sections";
  info: {
    displayName: "Enterprise Platform Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Send your reports to any Platform">;
    Image: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
    ImageDark: Attribute.Media<"images">;
    ImageSMDark: Attribute.Media<"images">;
  };
}

export interface LayoutEnterpriseImpactSection extends Schema.Component {
  collectionName: "components_layout_enterprise_impact_sections";
  info: {
    displayName: "Enterprise Impact Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Proven Enterprise Impact">;
    Slider: Attribute.Component<"components.impact-slider", true>;
  };
}

export interface LayoutEnterpriseHeroWithVideo extends Schema.Component {
  collectionName: "components_layout_enterprise_hero_with_videos";
  info: {
    displayName: "Enterprise Hero With Video";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut Code Review Time & Bugs in Half">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Supercharge your entire team with AI-driven contextual feedback. Supports all languages.">;
    Buttons: Attribute.Component<"components.link", true>;
    Tag: Attribute.String & Attribute.DefaultTo<"Page name">;
    Description_1: Attribute.String & Attribute.DefaultTo<"14-day free trial ">;
    Description_2: Attribute.String &
      Attribute.DefaultTo<"No credit card needed.">;
    Description_3: Attribute.String &
      Attribute.DefaultTo<"2-click signup with GitHub/GitLab.">;
    YTVideoUrl: Attribute.String;
  };
}

export interface LayoutCustomersSection extends Schema.Component {
  collectionName: "components_layout_customers_sections";
  info: {
    displayName: "Customers Section";
    description: "";
  };
  attributes: {
    Customers: Attribute.Component<"components.link", true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Title: Attribute.String &
      Attribute.DefaultTo<"Trusted by 1000+ organizations">;
    Grayscale: Attribute.Boolean & Attribute.DefaultTo<true>;
    CustomersDark: Attribute.Component<"components.link", true>;
  };
}

export interface LayoutCustomFeaturesSection extends Schema.Component {
  collectionName: "components_layout_custom_features_sections";
  info: {
    displayName: "Custom Features Section";
    icon: "dashboard";
  };
  attributes: {
    CustomLayout: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Features: Attribute.Component<"components.custom-feature", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutContactUsSection extends Schema.Component {
  collectionName: "components_layout_contact_us_sections";
  info: {
    displayName: "Contact Us Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Still have questions?">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutContactSupportFormSection extends Schema.Component {
  collectionName: "components_layout_contact_support_form_sections";
  info: {
    displayName: "Support Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please complete this form so we can assist you more effectively:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    HowCanWeHelp: Attribute.Component<"components.input-text-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutContactFormSection extends Schema.Component {
  collectionName: "components_layout_contact_form_sections";
  info: {
    displayName: "Contact Form Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Please fill out this form to schedule a demo:">;
    FirstName: Attribute.Component<"components.input-text-field">;
    LastName: Attribute.Component<"components.input-text-field">;
    CompanyName: Attribute.Component<"components.input-text-field">;
    WorkEmail: Attribute.Component<"components.input-text-field">;
    JobTitle: Attribute.Component<"components.input-text-field">;
    NumberOfDevelopers: Attribute.Component<"components.input-select-field">;
    HowCanWeHelp: Attribute.Component<"components.input-text-field">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface LayoutCollapsibleBoxesSection extends Schema.Component {
  collectionName: "components_layout_collapsible_boxes_sections";
  info: {
    displayName: "Collapsible Boxes Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"">;
    Features: Attribute.Component<"components.collapsible", true>;
  };
}

export interface LayoutCaseStudySection extends Schema.Component {
  collectionName: "components_layout_case_study_sections";
  info: {
    displayName: "Case Study Section";
  };
  attributes: {
    Cases: Attribute.Component<"components.case-study", true> &
      Attribute.Required;
    Button: Attribute.Component<"components.link"> & Attribute.Required;
  };
}

export interface LayoutBrandGuidelineHeroSection extends Schema.Component {
  collectionName: "components_brand-guideline_hero_sections";
  info: {
    displayName: "Hero Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"CodeRabbit Brand Assets">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Feel free to use the CodeRabbit logos provided below just keep them as-is to help us stay consistent. ">;
    Image: Attribute.Media<"images">;
  };
}

export interface LayoutBrandGuidelineAssetSection extends Schema.Component {
  collectionName: "components_asset_sections";
  info: {
    displayName: "Asset Section";
    description: "";
  };
  attributes: {
    AssetCard: Attribute.Component<"components.asset-card", true>;
  };
}

export interface LayoutBlogSliderSection extends Schema.Component {
  collectionName: "components_layout_blog_slider_sections";
  info: {
    displayName: "Blog Slider Section";
    description: "";
  };
  attributes: {
    Slider: Attribute.Component<"components.blog-slider", true>;
  };
}

export interface LayoutBlogHeroSection extends Schema.Component {
  collectionName: "components_layout_blog_hero_sections";
  info: {
    displayName: "Blog Hero Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"CodeRabbit Blog">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Dig into insights about our products, use cases, and POVs.">;
    SearchPlaceholder: Attribute.String &
      Attribute.DefaultTo<"Search articles">;
  };
}

export interface LayoutBlogBanners extends Schema.Component {
  collectionName: "components_layout_blog_banners";
  info: {
    displayName: "Blog Banners";
    description: "";
  };
  attributes: {
    Banner: Attribute.Component<"components.blog-banner", true>;
  };
}

export interface LayoutArchitecture extends Schema.Component {
  collectionName: "components_layout_architecture";
  info: {
    displayName: "Architecture Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Get started today">;
    Image: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
    ImageDark: Attribute.Media<"images">;
    ImageDarkSM: Attribute.Media<"images">;
  };
}

export interface LayoutAlternatedContent extends Schema.Component {
  collectionName: "components_layout_alternated_contents";
  info: {
    displayName: "Alternated Content";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    ContentWithImages: Attribute.Component<
      "components.content-with-image",
      true
    >;
  };
}

export interface ComponentsTrustCard extends Schema.Component {
  collectionName: "components_components_trust_cards";
  info: {
    displayName: "Trust Card";
    description: "";
  };
  attributes: {
    Icon: Attribute.Media<"images">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur.Reviews only the essential code">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: "components_components_testimonials";
  info: {
    displayName: "Testimonial";
    description: "";
  };
  attributes: {
    Name: Attribute.String & Attribute.DefaultTo<"Marguerite Bergnaum">;
    Avatar: Attribute.Media<"images">;
    Job: Attribute.String &
      Attribute.DefaultTo<"Marketing Director @Metadata.io ">;
    Opinion: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    EmbedCode: Attribute.Text;
  };
}

export interface ComponentsSocials extends Schema.Component {
  collectionName: "components_components_socials";
  info: {
    displayName: "Socials";
  };
  attributes: {
    Socials: Attribute.Component<"components.link", true>;
  };
}

export interface ComponentsSecurity extends Schema.Component {
  collectionName: "components_components_securities";
  info: {
    displayName: "Security Card";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<"images">;
    Button: Attribute.Component<"components.link">;
    ImageDark: Attribute.Media<"images">;
  };
}

export interface ComponentsPromoCard extends Schema.Component {
  collectionName: "components_components_promo_card";
  info: {
    displayName: "promo-card";
    description: "";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut code review time & bugs by 50%">;
    Description1: Attribute.Text &
      Attribute.DefaultTo<"Most installed AI app on GitHub and GitLab">;
    Description2: Attribute.Text & Attribute.DefaultTo<"Free 14-day trial">;
    Button: Attribute.Component<"components.link"> & Attribute.Required;
  };
}

export interface ComponentsPrivacyPolicyQuestions extends Schema.Component {
  collectionName: "components_components_privacy_policy_questions";
  info: {
    displayName: "Privacy Policy Questions";
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
    Bullets: Attribute.Component<"components.bullets", true>;
  };
}

export interface ComponentsPlan extends Schema.Component {
  collectionName: "components_components_plans";
  info: {
    displayName: "Plan";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Price: Attribute.String;
    Detail: Attribute.String;
    Button: Attribute.Component<"components.link">;
    IncludesTitle: Attribute.String;
    Bullets: Attribute.Component<"components.bullets", true>;
    Recommended: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsPill extends Schema.Component {
  collectionName: "components_components_pills";
  info: {
    displayName: "Pill";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<"images">;
    Link: Attribute.Component<"components.link">;
  };
}

export interface ComponentsNotification extends Schema.Component {
  collectionName: "components_components_notifications";
  info: {
    displayName: "Notification";
    description: "";
  };
  attributes: {
    Text: Attribute.String &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.">;
    Link: Attribute.Component<"components.link">;
    Show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: "components_components_newsletters";
  info: {
    displayName: "Select Option";
    description: "";
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<"Label">;
    Value: Attribute.String & Attribute.DefaultTo<"Value">;
  };
}

export interface ComponentsMetric extends Schema.Component {
  collectionName: "components_components_metrics";
  info: {
    displayName: "Stat";
    description: "";
  };
  attributes: {
    Number: Attribute.String & Attribute.DefaultTo<"10k">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Repositories in review">;
  };
}

export interface ComponentsMember extends Schema.Component {
  collectionName: "components_components_members";
  info: {
    displayName: "Member";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Name: Attribute.String;
    Position: Attribute.String;
  };
}

export interface ComponentsLogoTextPair extends Schema.Component {
  collectionName: "components_components_logo_text_pairs";
  info: {
    displayName: "Logo Text Pair";
    description: "A component for displaying a logo with its associated text";
  };
  attributes: {
    Logo: Attribute.Media<"images"> & Attribute.Required;
    Text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"IDE Name">;
    LogoHref: Attribute.String & Attribute.DefaultTo<"/">;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLogoGuideline extends Schema.Component {
  collectionName: "components_components_logo_guideline";
  info: {
    displayName: "logo_guideline";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Logo">;
    Description: Attribute.Text & Attribute.DefaultTo<"Lorem ">;
    LogoLayoutCard: Attribute.Component<"components.logo-asset-card", true>;
  };
}

export interface ComponentsLogoAssetCard extends Schema.Component {
  collectionName: "components_components_logo_asset_card";
  info: {
    displayName: "Logo Asset Card";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Logo">;
    Description: Attribute.Text & Attribute.DefaultTo<"Lorem ">;
    Image: Attribute.Media<"images">;
    Image1: Attribute.Media<"images">;
    Image2: Attribute.Media<"images">;
    Image3: Attribute.Media<"images">;
  };
}

export interface ComponentsLinksColumn extends Schema.Component {
  collectionName: "components_components_links_columns";
  info: {
    displayName: "Links Column";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Column title">;
    Links: Attribute.Component<"components.link", true>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: "components_components_links";
  info: {
    displayName: "Link";
    description: "";
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<"Lorem ipsum">;
    Url: Attribute.String & Attribute.DefaultTo<"/">;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Image: Attribute.Media<"images">;
    Hyperlink: Attribute.Component<"components.hyperlink">;
  };
}

export interface ComponentsLinkMenu extends Schema.Component {
  collectionName: "components_components_link_menus";
  info: {
    displayName: "Link Menu";
  };
  attributes: {
    Link: Attribute.Component<"components.link">;
    hasSubmenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    Submenu: Attribute.Component<"components.link", true>;
  };
}

export interface ComponentsLinkCard extends Schema.Component {
  collectionName: "components_components_link_card_s";
  info: {
    displayName: "Link Card ";
    description: "";
  };
  attributes: {
    Icon: Attribute.Media<"images">;
    Title: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsLeadInputBanner extends Schema.Component {
  collectionName: "components_components_lead_input_banner";
  info: {
    displayName: "Lead Capture Button Banner";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Build better code, faster.">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Join thousands of developers using Code Rabbit to accelerate their workflow.">;
    Newsletter: Attribute.Component<"components.input-text-field">;
  };
}

export interface ComponentsLeadButtonBanner extends Schema.Component {
  collectionName: "components_components_lead_button_banner";
  info: {
    displayName: "Lead Capture email Banner";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Build better code, faster.">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Join thousands of developers using Code Rabbit to accelerate their workflow.">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsInputTextField extends Schema.Component {
  collectionName: "components_components_input_text_fields";
  info: {
    displayName: "Input Text Field";
    description: "";
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
  collectionName: "components_components_input_select_fields";
  info: {
    displayName: "Input Select Field";
    description: "";
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<"Label">;
    Placeholder: Attribute.String & Attribute.DefaultTo<"Placeholder">;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    Options: Attribute.Component<"components.newsletter", true>;
  };
}

export interface ComponentsInputCheckboxField extends Schema.Component {
  collectionName: "components_components_input_checkbox_fields";
  info: {
    displayName: "Input Checkbox Field";
  };
  attributes: {
    Label: Attribute.String & Attribute.DefaultTo<"Label">;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsInfoGraphics extends Schema.Component {
  collectionName: "components_components_info_graphics";
  info: {
    displayName: "Info Graphics";
    description: "";
  };
  attributes: {
    Icon: Attribute.Media<"images">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Repositories in review">;
  };
}

export interface ComponentsImpactSlider extends Schema.Component {
  collectionName: "components_components_impact_sliders";
  info: {
    displayName: "Impact Slider";
    description: "";
  };
  attributes: {
    Company: Attribute.Media<"images">;
    Opinion: Attribute.Text;
    Name: Attribute.String;
    Avatar: Attribute.Media<"images">;
    Job: Attribute.String;
    Button: Attribute.Component<"components.link">;
    CompanyDark: Attribute.Media<"images">;
  };
}

export interface ComponentsHyperlink extends Schema.Component {
  collectionName: "components_components_hyperlink";
  info: {
    displayName: "Hyperlink";
    description: "";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<"Lorem ipsum">;
    HyperlinkText: Attribute.String & Attribute.DefaultTo<"Hyperlink text">;
    HyperlinkUrl: Attribute.String &
      Attribute.DefaultTo<"https://www.coderabbit.ai">;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsHowItWorks extends Schema.Component {
  collectionName: "components_components_how_it_works";
  info: {
    displayName: "How It Works";
    description: "";
  };
  attributes: {
    Tab: Attribute.String & Attribute.DefaultTo<"SaaS">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Effortless Scaling with SaaS">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"This is placeholder content. Leverage the power of CodeRabbit\u2019s cloud-based solution with SaaS. Access real-time code reviews, automated suggestions, and seamless integration with your development pipeline\u2014all without the need to manage your own infrastructure. ">;
    Image: Attribute.Media<"images">;
    Bullets: Attribute.Component<"components.bullets", true>;
    Cta: Attribute.Component<"components.link"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ComponentsHoppyQuote extends Schema.Component {
  collectionName: "components_components_hoppy_quote";
  info: {
    displayName: "Quotes";
    icon: "";
    description: "";
  };
  attributes: {
    Icon: Attribute.Media<"images">;
    Title: Attribute.String & Attribute.DefaultTo<"Refactoring.">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"No one will understand this code, not even Future Me.">;
    Image: Attribute.Media<"images">;
  };
}

export interface ComponentsHoppyHero extends Schema.Component {
  collectionName: "components_components_hoppy_hero";
  info: {
    displayName: "Hero Section";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Meet Hoppy, Your Dev Sidekick">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Fast, smart, and always by your side \u2014 helping you level up your coding skills.">;
    Image: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
  };
}

export interface ComponentsHoppyCreative extends Schema.Component {
  collectionName: "components_components_hoppy_creative";
  info: {
    displayName: "Hoppy Creative";
    icon: "";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Meet Hoppy, Your Dev Sidekick">;
    CreativeImage: Attribute.Media<"images">;
    UserImage: Attribute.Media<"images">;
  };
}

export interface ComponentsHoppyComic extends Schema.Component {
  collectionName: "components_components_hoppy_comic";
  info: {
    displayName: "Hoppy Comic";
    icon: "";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<"Hoppy Comic">;
    brief: Attribute.Text &
      Attribute.DefaultTo<"A fun and engaging comic strip featuring Hoppy, the AI sidekick.">;
    slug: Attribute.String & Attribute.DefaultTo<"/">;
    coverImage: Attribute.Media<"images">;
    Pdf: Attribute.Media<"files">;
    publishedAt: Attribute.Date;
  };
}

export interface ComponentsHoppyBanner extends Schema.Component {
  collectionName: "components_components_hoppy_banner";
  info: {
    displayName: "Hoppy Banner";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut code review time & bugs by 50%">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Most installed AI app on GitHub and GitLab">;
    Button: Attribute.Component<"components.link">;
    email: Attribute.Component<"components.banner-text-fields">;
    Image: Attribute.Media<"images">;
    ImagePositionLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsHeroCard extends Schema.Component {
  collectionName: "components_components_hero_cards";
  info: {
    displayName: "Hero Card";
    description: "";
  };
  attributes: {
    Icon: Attribute.Media<"images">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Reviews only the essential code">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Your data stays confidential and solely fine-tunes your reviews. You can opt out of data storage.">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsFormSideSection extends Schema.Component {
  collectionName: "components_components_form_side_sections";
  info: {
    displayName: "Form Side Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ListTitle: Attribute.String;
    Bullets: Attribute.Component<"components.bullets", true>;
  };
}

export interface ComponentsFilterSection extends Schema.Component {
  collectionName: "components_components_filter_section";
  info: {
    displayName: "Filter section";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut code review time & bugs by 50%">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Most installed AI app on GitHub and GitLab">;
    SearchPlaceholder: Attribute.String &
      Attribute.DefaultTo<"Search articles">;
    categories: Attribute.Component<"components.filter-category", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ComponentsFilterCategory extends Schema.Component {
  collectionName: "components_components_filter_categories";
  info: {
    displayName: "Filter Category";
    description: "";
  };
  attributes: {
    categoryName: Attribute.String & Attribute.DefaultTo<"Filter Categories">;
    Description: Attribute.Component<"components.description-item", true>;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: "components_components_features";
  info: {
    displayName: "Feature";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Feature title">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    Bullets: Attribute.Component<"components.bullets", true>;
    ImageXL: Attribute.Media<"images">;
    ImageLG: Attribute.Media<"images">;
    ImageMD: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsFeatureCard extends Schema.Component {
  collectionName: "components_components_features-card";
  info: {
    displayName: "Feature-card";
    description: "";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Title: Attribute.String & Attribute.DefaultTo<"Feature title">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsFaqItem extends Schema.Component {
  collectionName: "components_components_faq_items";
  info: {
    displayName: "Faq Item";
    description: "";
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
    Category: Attribute.String &
      Attribute.DefaultTo<"Popular, Product, Security">;
  };
}

export interface ComponentsDescriptionItem extends Schema.Component {
  collectionName: "components_components_description_items";
  info: {
    displayName: "Description Item";
    icon: "bulletList";
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface ComponentsCustomFeature extends Schema.Component {
  collectionName: "components_components_custom_features";
  info: {
    displayName: "Custom Feature";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Feature title">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    Bullets: Attribute.Component<"components.bullets", true>;
    ImageXL: Attribute.Media<"images">;
    ImageLG: Attribute.Media<"images">;
    ImageMD: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
    CardType: Attribute.Enumeration<["medium", "small", "big"]> &
      Attribute.DefaultTo<"big">;
  };
}

export interface ComponentsContentWithImage extends Schema.Component {
  collectionName: "components_components_content_with_images";
  info: {
    displayName: "Content with Image";
    description: "";
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<"images">;
    Button: Attribute.Component<"components.link">;
    ImageDark: Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface ComponentsContactSuccess extends Schema.Component {
  collectionName: "components_components_contact_successes";
  info: {
    displayName: "Contact Success";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Title: Attribute.String & Attribute.DefaultTo<"Hooray! ">;
    Description: Attribute.RichText &
      Attribute.DefaultTo<"Your message has been sent. We\u2019ll get back to you shortly.">;
    Button: Attribute.Component<"components.link">;
    SocialsTitle: Attribute.String &
      Attribute.DefaultTo<"In the meantime, follow along:">;
    Socials: Attribute.Component<"components.link", true>;
  };
}

export interface ComponentsColorPalette extends Schema.Component {
  collectionName: "components_color-palette";
  info: {
    displayName: "Color Palette Section";
    description: "";
  };
  attributes: {
    AssetCard: Attribute.Component<"components.color-palette-card", true>;
    Title: Attribute.String & Attribute.DefaultTo<"Logo">;
    Description: Attribute.Text & Attribute.DefaultTo<"Lorem.">;
  };
}

export interface ComponentsColorPaletteCard extends Schema.Component {
  collectionName: "components_color-palette-card";
  info: {
    displayName: "asset-card";
    description: "";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Title: Attribute.String & Attribute.DefaultTo<"Logo">;
    Color: Attribute.String & Attribute.DefaultTo<"Logo">;
    ColorName: Attribute.String & Attribute.DefaultTo<"Logo">;
    Hex: Attribute.String & Attribute.DefaultTo<"Logo">;
    Rgb: Attribute.String & Attribute.DefaultTo<"Logo">;
    Cmyk: Attribute.String & Attribute.DefaultTo<"Logo">;
    isDarkMode: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsCollapsible extends Schema.Component {
  collectionName: "components_components_collapsibles";
  info: {
    displayName: "Collapsible";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Feature title">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    ImageXL: Attribute.Media<"images">;
    ImageLG: Attribute.Media<"images">;
    ImageMD: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
  };
}

export interface ComponentsCaseSummaryCard extends Schema.Component {
  collectionName: "components_components_case_internal_summary_card";
  info: {
    displayName: "Case Summary Card";
  };
  attributes: {
    Name: Attribute.String & Attribute.DefaultTo<"Lorem ipsum">;
    Logo: Attribute.Media<"images">;
    LogoDark: Attribute.Media<"images">;
    Location: Attribute.String &
      Attribute.DefaultTo<"San Fransisco, United States">;
    WebAddress: Attribute.String &
      Attribute.DefaultTo<"https://www.example.com">;
    Pointers: Attribute.Component<"components.case-overview", true>;
    Button: Attribute.Component<"components.link">;
  };
}

export interface ComponentsCaseStudy extends Schema.Component {
  collectionName: "components_components_case_studies";
  info: {
    displayName: "Case Study";
  };
  attributes: {
    CustomerLight: Attribute.Media<"images"> & Attribute.Required;
    CustomerDark: Attribute.Media<"images"> & Attribute.Required;
    CoverLight: Attribute.Media<"images"> & Attribute.Required;
    CoverDark: Attribute.Media<"images"> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Button: Attribute.Component<"components.link"> & Attribute.Required;
  };
}

export interface ComponentsCaseStudyFeatured extends Schema.Component {
  collectionName: "components_components_featured_case_study";
  info: {
    displayName: "Featured Section";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Featured ">;
  };
}

export interface ComponentsCaseOverview extends Schema.Component {
  collectionName: "components_components_case_overview";
  info: {
    displayName: "Case Overview";
    description: "";
  };
  attributes: {
    Heading: Attribute.String & Attribute.DefaultTo<"Challenge">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Some challenge that company has been facing for a very long time and it has been bothering.">;
  };
}

export interface ComponentsCaseInternalHero extends Schema.Component {
  collectionName: "components_components_case_internal_hero";
  info: {
    displayName: "Hero Section";
  };
  attributes: {
    ClientName: Attribute.String & Attribute.DefaultTo<"Lorem ipsum">;
    ClientLogo: Attribute.Media<"images">;
    ClientLogoDark: Attribute.Media<"images">;
    CaseTitle: Attribute.String &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ">;
    CaseDescription: Attribute.String &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">;
    ImageXL: Attribute.Media<"images">;
    ImageLG: Attribute.Media<"images">;
    ImageMD: Attribute.Media<"images">;
    ImageSM: Attribute.Media<"images">;
  };
}

export interface ComponentsCaseContactCard extends Schema.Component {
  collectionName: "components_components_casestudy_contact_card";
  info: {
    displayName: "Contact Card";
    description: "";
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut code review time & bugs by 50%">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Most installed AI app on GitHub and GitLab">;
    name: Attribute.Component<"components.banner-text-fields">;
    Button: Attribute.Component<"components.link">;
    email: Attribute.Component<"components.banner-text-fields">;
    Hyperlink: Attribute.Component<"components.hyperlink">;
  };
}

export interface ComponentsCaseCategory extends Schema.Component {
  collectionName: "components_components_casestudy_categories";
  info: {
    displayName: "Category";
    description: "";
  };
  attributes: {
    categoryName: Attribute.String & Attribute.DefaultTo<"Category Name">;
    Description: Attribute.String & Attribute.DefaultTo<"description">;
  };
}

export interface ComponentsCapsule extends Schema.Component {
  collectionName: "components_components_capsule";
  info: {
    displayName: "Capsule";
    description: "";
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<"Lorem ipsum">;
    Url: Attribute.String & Attribute.DefaultTo<"/">;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsBullets extends Schema.Component {
  collectionName: "components_components_bullets";
  info: {
    displayName: "Bullet";
    description: "";
  };
  attributes: {
    Text: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac.">;
    Description: Attribute.RichText;
  };
}

export interface ComponentsBlogSlider extends Schema.Component {
  collectionName: "components_components_blog_sliders";
  info: {
    displayName: "Blog Slider";
  };
  attributes: {
    Title: Attribute.String;
    Category: Attribute.String;
  };
}

export interface ComponentsBlogBanner extends Schema.Component {
  collectionName: "components_components_blog_banner";
  info: {
    displayName: "Blog Banner";
    description: "";
  };
  attributes: {
    widgetNameFromHashnode: Attribute.String & Attribute.DefaultTo<"">;
    Title: Attribute.String &
      Attribute.DefaultTo<"Cut code review time & bugs by 50%">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Most installed AI app on GitHub and GitLab">;
    Button: Attribute.Component<"components.link">;
    email: Attribute.Component<"components.banner-text-fields">;
    Image: Attribute.Media<"images">;
    ImagePositionLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsBannerTextFields extends Schema.Component {
  collectionName: "components_components_banner_input_text_fields";
  info: {
    displayName: "Input Text Field";
    description: "";
  };
  attributes: {
    Label: Attribute.String;
    Placeholder: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    isTextarea: Attribute.Boolean & Attribute.DefaultTo<false>;
    isEmail: Attribute.Boolean & Attribute.DefaultTo<false>;
    isWebsite: Attribute.Boolean & Attribute.DefaultTo<false>;
    SuccessMessage: Attribute.Text &
      Attribute.DefaultTo<"Thank you for signing up!">;
  };
}

export interface ComponentsAssetCard extends Schema.Component {
  collectionName: "components_components_asset_card";
  info: {
    displayName: "asset-card";
    description: "";
  };
  attributes: {
    Image: Attribute.Media<"images">;
    Title: Attribute.String & Attribute.DefaultTo<"Logo">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    SvgIcon: Attribute.Media<"images">;
    PngIcon: Attribute.Media<"images">;
    isDarkMode: Attribute.Boolean & Attribute.DefaultTo<false>;
    isIcon: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsAnnouncment extends Schema.Component {
  collectionName: "components_components_announcment";
  info: {
    displayName: "Announcment";
    description: "";
  };
  attributes: {
    Text: Attribute.String & Attribute.DefaultTo<"Logo">;
    isClosable: Attribute.Boolean & Attribute.DefaultTo<true>;
    Button: Attribute.Component<"components.link"> & Attribute.Required;
  };
}

export interface EventVenue extends Schema.Component {
  collectionName: "components_components_event_venue";
  info: {
    displayName: "Venue";
    description: "Venue section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    VenueTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Javits Convention Center">;
    VenueName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Javits Convention Center">;
    Website: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"https://javitscenter.com">;
    AddressTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"429 11th Ave">;
    Address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"429 11th Ave">;
    City: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"New York City NY 10001">;
    googleMapsUrl: Attribute.Text;
    coordinates: Attribute.Text;
  };
}

export interface EventSpeaker extends Schema.Component {
  collectionName: "components_components_event_speaker";
  info: {
    displayName: "Speaker";
    description: "Speaker section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"John Doe">;
    Role: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Software Engineer">;
    Image: Attribute.Media<"images">;
  };
}

export interface EventRegisterForm extends Schema.Component {
  collectionName: "components_components_event_register_form";
  info: {
    displayName: "Register Form";
    description: "Register form for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Secure your spot">;
    Description: Attribute.Text &
      Attribute.DefaultTo<"Join industry experts and transform your development workflow.">;
    FirstName: Attribute.Component<"components.banner-text-fields">;
    LastName: Attribute.Component<"components.banner-text-fields">;
    Email: Attribute.Component<"components.banner-text-fields">;
    JobTitle: Attribute.Component<"components.banner-text-fields">;
    Company: Attribute.Component<"components.banner-text-fields">;
    Hyperlink: Attribute.Component<"components.hyperlink">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface EventLearn extends Schema.Component {
  collectionName: "components_components_event_learn";
  info: {
    displayName: "Learn";
    description: "Learn section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Pointers: Attribute.Component<"components.bullets", true>;
    FeaturingTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Speakers: Attribute.Component<"event.speaker", true>;
  };
}

export interface EventInternalHome extends Schema.Component {
  collectionName: "components_components_event_internal_home";
  info: {
    displayName: "Home";
    description: "Home section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Image: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    EventTime: Attribute.Component<"event.event-time">;
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Description: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. ">;
    RegisterForm: Attribute.Component<"event.register-form">;
    Success: Attribute.Component<"components.contact-success"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface EventInternalEvent extends Schema.Component {
  collectionName: "components_components_event_internal_event";
  info: {
    displayName: "Internal Event";
    description: "Internal event section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Home: Attribute.Component<"event.internal-home">;
    Details: Attribute.Component<"event.learn">;
    EventExploreCard: Attribute.Component<"event.card"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface EventExternalHome extends Schema.Component {
  collectionName: "components_components_event_external_home";
  info: {
    displayName: "Home";
    description: "Home section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Image: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    EventTime: Attribute.Component<"event.event-time">;
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Location: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Booth #544/ Javits Convention Center \u2014 New York City, NY">;
    Description: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit is an AI code review tool that integrates with version control platforms like GitHub, GitLab, and Azure DevOps. ">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface EventExternalEvent extends Schema.Component {
  collectionName: "components_components_event_external_event";
  info: {
    displayName: "External Event";
    description: "External event section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Home: Attribute.Component<"event.external-home">;
    Details: Attribute.Component<"event.details">;
    EventExploreCard: Attribute.Component<"event.card"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface EventEventTime extends Schema.Component {
  collectionName: "components_event_time_event_time";
  info: {
    displayName: "Event Date & Time";
    description: "Event date and time with AM/PM and timezone options";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Date: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Time: Attribute.Time & Attribute.Required;
    Period: Attribute.Enumeration<["AM", "PM"]> &
      Attribute.Required &
      Attribute.DefaultTo<"AM">;
    Timezone: Attribute.Enumeration<
      [
        "PST",
        "PDT",
        "MST",
        "MDT",
        "CST",
        "CDT",
        "EST",
        "EDT",
        "IST",
        "UTC",
        "GMT",
        "CET",
        "CEST",
        "JST",
        "AEST",
        "AEDT",
        "Other",
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"EST">;
  };
}

export interface EventDetails extends Schema.Component {
  collectionName: "components_components_event_details";
  info: {
    displayName: "Details";
    description: "Details section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Description1: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"">;
    Description2: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"">;
    Venue: Attribute.Component<"event.venue">;
  };
}

export interface EventCard extends Schema.Component {
  collectionName: "components_components_event_card";
  info: {
    displayName: "Explore Event Card";
    description: "Explore Event card section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Image: Attribute.Media<"images">;
    Button: Attribute.Component<"components.link">;
  };
}

export interface EventFeaturing extends Schema.Component {
  collectionName: "components_components_event_featuring";
  info: {
    displayName: "Featuring";
    description: "Featuring section for events";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"CodeRabbit at AI Summit">;
    Speakers: Attribute.Component<"event.speaker", true>;
  };
}

export interface CasestudyTestimonial extends Schema.Component {
  collectionName: "components_components_case_testimonial";
  info: {
    displayName: "Testimonial Card";
    description: "";
  };
  attributes: {
    testimonial: Attribute.RichText &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
  };
}

export interface CasestudyStats extends Schema.Component {
  collectionName: "components_components_case_studies_stats";
  info: {
    singularName: "case-study-stat";
    pluralName: "case-studies-stats";
    displayName: "Stats";
    description: "";
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
    Stats: Attribute.Component<"components.metric", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Brief: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
  };
}

export interface CasestudySection4 extends Schema.Component {
  collectionName: "components_components_case_section4";
  info: {
    displayName: "Section 4";
    description: "";
  };
  attributes: {
    Description: Attribute.RichText &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
  };
}

export interface CasestudySection3 extends Schema.Component {
  collectionName: "components_components_case_section3";
  info: {
    displayName: "Section 3";
    description: "";
  };
  attributes: {
    SectionName: Attribute.String & Attribute.DefaultTo<"Section 3">;
    Title: Attribute.String & Attribute.DefaultTo<"Ways to Work Together">;
    SubHeading: Attribute.String & Attribute.DefaultTo<"Ways to Work Together">;
    Description: Attribute.RichText &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    Image: Attribute.Media<"images">;
  };
}

export interface CasestudySection2 extends Schema.Component {
  collectionName: "components_components_case_section2";
  info: {
    displayName: "Section 2";
    description: "";
  };
  attributes: {
    SectionName: Attribute.String & Attribute.DefaultTo<"Section 2 ">;
    Title: Attribute.String & Attribute.DefaultTo<"Before CodeRabbit ">;
    Description: Attribute.String &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
    Bullets: Attribute.Component<"components.bullets", true>;
    Paragraph: Attribute.RichText &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
  };
}

export interface CasestudySection1 extends Schema.Component {
  collectionName: "components_components_case_section1";
  info: {
    displayName: "Section 1";
    description: "";
  };
  attributes: {
    SectionName: Attribute.String & Attribute.DefaultTo<"Section 1 ">;
    Title: Attribute.String & Attribute.DefaultTo<"Ways to Work Together">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Here\u2019s how teams can close the gap:">;
    Image: Attribute.Media<"images">;
    NameAndPosition: Attribute.String &
      Attribute.DefaultTo<"Before CodeRabbit ">;
    Testimonial: Attribute.RichText &
      Attribute.DefaultTo<"lorem ipsum dolor sit amet consectetur. Nunc porta non nunc curabitur ac. Adipiscing diam condimentum viverra cum mi mattis nunc a.">;
  };
}

export interface CasestudyConclusion extends Schema.Component {
  collectionName: "components_components_case_conculision";
  info: {
    singularName: "case-conclusion";
    pluralName: "case-conclusions";
    displayName: "Conclusion";
    description: "";
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
    SectionName: Attribute.String & Attribute.DefaultTo<"Section 1 ">;
    Title: Attribute.String & Attribute.DefaultTo<"Ways to Work Together">;
    Description: Attribute.String &
      Attribute.DefaultTo<"Here\u2019s how teams can close the gap:">;
    Conclusion: Attribute.Component<"casestudy.case-conclusion-card", true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface CasestudyCaseHome extends Schema.Component {
  collectionName: "components_components_case_homes";
  info: {
    displayName: "Case Home";
    description: "Home section for case studies";
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    ClientName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Lorem ipsum">;
    ClientLogo: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ClientLogoDark: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CaseTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ">;
    CaseDescription: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">;
    Image: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ImageSM: Attribute.Media<"images"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface CasestudyCaseConclusionCard extends Schema.Component {
  collectionName: "components_components_case_conclusion_card";
  info: {
    displayName: "Case Conclusion Card";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<"Before CodeRabbit ">;
    Bullets: Attribute.Component<"components.bullets", true>;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "shared.slider": SharedSlider;
      "shared.seo": SharedSeo;
      "shared.rich-text": SharedRichText;
      "shared.quote": SharedQuote;
      "shared.media": SharedMedia;
      "layout.whitepaper-form-section": LayoutWhitepaperFormSection;
      "layout.vs-feature-section": LayoutVsFeatureSection;
      "layout.vs-code-hero-section": LayoutVsCodeHeroSection;
      "layout.trust-section": LayoutTrustSection;
      "layout.testimonials": LayoutTestimonials;
      "layout.startup-form-section": LayoutStartupFormSection;
      "layout.soc-form-section": LayoutSocFormSection;
      "layout.simple-hero": LayoutSimpleHero;
      "layout.security-section": LayoutSecuritySection;
      "layout.privacy-policy-section": LayoutPrivacyPolicySection;
      "layout.plans-section": LayoutPlansSection;
      "layout.pills-section": LayoutPillsSection;
      "layout.partnership-form-section": LayoutPartnershipFormSection;
      "layout.newsletter-blog-section": LayoutNewsletterBlogSection;
      "layout.metrics-section": LayoutMetricsSection;
      "layout.members-section": LayoutMembersSection;
      "layout.markdown-card-section": LayoutMarkdownCardSection;
      "layout.lead-capture-layout": LayoutLeadCaptureLayout;
      "layout.join-us-section": LayoutJoinUsSection;
      "layout.hs-embeded-calendar": LayoutHsEmbededCalendar;
      "layout.how-it-works-section": LayoutHowItWorksSection;
      "layout.hoppy-mood": LayoutHoppyMood;
      "layout.hoppy-fan-creatives": LayoutHoppyFanCreatives;
      "layout.hoppy-comic-section": LayoutHoppyComicSection;
      "layout.hero": LayoutHero;
      "layout.hero-cards-section": LayoutHeroCardsSection;
      "layout.get-started": LayoutGetStarted;
      "layout.gdpr-form-section": LayoutGdprFormSection;
      "layout.features-section": LayoutFeaturesSection;
      "layout.feature-grid-section": LayoutFeatureGridSection;
      "layout.faq": LayoutFaq;
      "layout.faq-section": LayoutFaqSection;
      "layout.event-card": LayoutEventCard;
      "layout.enterprise-platform-section": LayoutEnterprisePlatformSection;
      "layout.enterprise-impact-section": LayoutEnterpriseImpactSection;
      "layout.enterprise-hero-with-video": LayoutEnterpriseHeroWithVideo;
      "layout.customers-section": LayoutCustomersSection;
      "layout.custom-features-section": LayoutCustomFeaturesSection;
      "layout.contact-us-section": LayoutContactUsSection;
      "layout.contact-support-form-section": LayoutContactSupportFormSection;
      "layout.contact-form-section": LayoutContactFormSection;
      "layout.collapsible-boxes-section": LayoutCollapsibleBoxesSection;
      "layout.case-study-section": LayoutCaseStudySection;
      "layout.brand-guideline-hero-section": LayoutBrandGuidelineHeroSection;
      "layout.brand-guideline-asset-section": LayoutBrandGuidelineAssetSection;
      "layout.blog-slider-section": LayoutBlogSliderSection;
      "layout.blog-hero-section": LayoutBlogHeroSection;
      "layout.blog-banners": LayoutBlogBanners;
      "layout.architecture": LayoutArchitecture;
      "layout.alternated-content": LayoutAlternatedContent;
      "components.trust-card": ComponentsTrustCard;
      "components.testimonial": ComponentsTestimonial;
      "components.socials": ComponentsSocials;
      "components.security": ComponentsSecurity;
      "components.promo-card": ComponentsPromoCard;
      "components.privacy-policy-questions": ComponentsPrivacyPolicyQuestions;
      "components.plan": ComponentsPlan;
      "components.pill": ComponentsPill;
      "components.notification": ComponentsNotification;
      "components.newsletter": ComponentsNewsletter;
      "components.metric": ComponentsMetric;
      "components.member": ComponentsMember;
      "components.logo-text-pair": ComponentsLogoTextPair;
      "components.logo-guideline": ComponentsLogoGuideline;
      "components.logo-asset-card": ComponentsLogoAssetCard;
      "components.links-column": ComponentsLinksColumn;
      "components.link": ComponentsLink;
      "components.link-menu": ComponentsLinkMenu;
      "components.link-card": ComponentsLinkCard;
      "components.lead-input-banner": ComponentsLeadInputBanner;
      "components.lead-button-banner": ComponentsLeadButtonBanner;
      "components.input-text-field": ComponentsInputTextField;
      "components.input-select-field": ComponentsInputSelectField;
      "components.input-checkbox-field": ComponentsInputCheckboxField;
      "components.info-graphics": ComponentsInfoGraphics;
      "components.impact-slider": ComponentsImpactSlider;
      "components.hyperlink": ComponentsHyperlink;
      "components.how-it-works": ComponentsHowItWorks;
      "components.hoppy-quote": ComponentsHoppyQuote;
      "components.hoppy-hero": ComponentsHoppyHero;
      "components.hoppy-creative": ComponentsHoppyCreative;
      "components.hoppy-comic": ComponentsHoppyComic;
      "components.hoppy-banner": ComponentsHoppyBanner;
      "components.hero-card": ComponentsHeroCard;
      "components.form-side-section": ComponentsFormSideSection;
      "components.filter-section": ComponentsFilterSection;
      "components.filter-category": ComponentsFilterCategory;
      "components.feature": ComponentsFeature;
      "components.feature-card": ComponentsFeatureCard;
      "components.faq-item": ComponentsFaqItem;
      "components.description-item": ComponentsDescriptionItem;
      "components.custom-feature": ComponentsCustomFeature;
      "components.content-with-image": ComponentsContentWithImage;
      "components.contact-success": ComponentsContactSuccess;
      "components.color-palette": ComponentsColorPalette;
      "components.color-palette-card": ComponentsColorPaletteCard;
      "components.collapsible": ComponentsCollapsible;
      "components.case-summary-card": ComponentsCaseSummaryCard;
      "components.case-study": ComponentsCaseStudy;
      "components.case-study-featured": ComponentsCaseStudyFeatured;
      "components.case-overview": ComponentsCaseOverview;
      "components.case-internal-hero": ComponentsCaseInternalHero;
      "components.case-contact-card": ComponentsCaseContactCard;
      "components.case-category": ComponentsCaseCategory;
      "components.capsule": ComponentsCapsule;
      "components.bullets": ComponentsBullets;
      "components.blog-slider": ComponentsBlogSlider;
      "components.blog-banner": ComponentsBlogBanner;
      "components.banner-text-fields": ComponentsBannerTextFields;
      "components.asset-card": ComponentsAssetCard;
      "components.announcment": ComponentsAnnouncment;
      "event.venue": EventVenue;
      "event.speaker": EventSpeaker;
      "event.register-form": EventRegisterForm;
      "event.learn": EventLearn;
      "event.internal-home": EventInternalHome;
      "event.internal-event": EventInternalEvent;
      "event.external-home": EventExternalHome;
      "event.external-event": EventExternalEvent;
      "event.event-time": EventEventTime;
      "event.details": EventDetails;
      "event.card": EventCard;
      "event.featuring": EventFeaturing;
      "casestudy.testimonial": CasestudyTestimonial;
      "casestudy.stats": CasestudyStats;
      "casestudy.section-4": CasestudySection4;
      "casestudy.section-3": CasestudySection3;
      "casestudy.section-2": CasestudySection2;
      "casestudy.section-1": CasestudySection1;
      "casestudy.conclusion": CasestudyConclusion;
      "casestudy.case-home": CasestudyCaseHome;
      "casestudy.case-conclusion-card": CasestudyCaseConclusionCard;
    }
  }
}