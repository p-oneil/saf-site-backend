import type { Schema, Attribute } from '@strapi/strapi';

export interface FeatureFeature extends Schema.Component {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SocialMediaDisplayEmail extends Schema.Component {
  collectionName: 'components_social_media_display_emails';
  info: {
    displayName: 'DisplayEmail';
  };
  attributes: {
    DisplayEmail: Attribute.Email;
  };
}

export interface SocialMediaFacebook extends Schema.Component {
  collectionName: 'components_social_media_facebooks';
  info: {
    displayName: 'Facebook';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaGitHub extends Schema.Component {
  collectionName: 'components_social_media_git_hubs';
  info: {
    displayName: 'GitHub';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaInstagram extends Schema.Component {
  collectionName: 'components_social_media_instagrams';
  info: {
    displayName: 'Instagram';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaLinkedIn extends Schema.Component {
  collectionName: 'components_social_media_linked_ins';
  info: {
    displayName: 'LinkedIn';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaOther extends Schema.Component {
  collectionName: 'components_social_media_others';
  info: {
    displayName: 'Other';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaTwitter extends Schema.Component {
  collectionName: 'components_social_media_twitters';
  info: {
    displayName: 'Twitter';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SubsectionsSubsections extends Schema.Component {
  collectionName: 'components_subsections_subsections';
  info: {
    displayName: 'Subsections';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VersionHistoryCis extends Schema.Component {
  collectionName: 'components_version_history_cis';
  info: {
    displayName: 'CIS';
    description: '';
  };
  attributes: {
    version: Attribute.String;
  };
}

export interface VersionHistoryStigReady extends Schema.Component {
  collectionName: 'components_version_history_stig_readies';
  info: {
    displayName: 'STIG-Ready';
    description: '';
  };
  attributes: {
    version: Attribute.String;
  };
}

export interface VersionHistoryStig extends Schema.Component {
  collectionName: 'components_version_history_stigs';
  info: {
    displayName: 'STIG';
    description: '';
  };
  attributes: {
    version: Attribute.String;
  };
}

export interface VersionHistoryVendor extends Schema.Component {
  collectionName: 'components_version_history_vendors';
  info: {
    displayName: 'Vendor';
    description: '';
  };
  attributes: {
    version: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'feature.feature': FeatureFeature;
      'social-media.display-email': SocialMediaDisplayEmail;
      'social-media.facebook': SocialMediaFacebook;
      'social-media.git-hub': SocialMediaGitHub;
      'social-media.instagram': SocialMediaInstagram;
      'social-media.linked-in': SocialMediaLinkedIn;
      'social-media.other': SocialMediaOther;
      'social-media.twitter': SocialMediaTwitter;
      'subsections.subsections': SubsectionsSubsections;
      'version-history.cis': VersionHistoryCis;
      'version-history.stig-ready': VersionHistoryStigReady;
      'version-history.stig': VersionHistoryStig;
      'version-history.vendor': VersionHistoryVendor;
    }
  }
}
