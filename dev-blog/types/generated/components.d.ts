import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_featured_courses';
  info: {
    displayName: 'featuredCourse';
    icon: 'server';
    description: '';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-course',
      'oneToOne',
      'api::course.course'
    >;
    heading: Attribute.String;
    announcement: Attribute.Text;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'layout';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'videos', true>;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutServicesPreview extends Schema.Component {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'layer';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.services-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
