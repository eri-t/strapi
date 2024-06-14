import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCardWithDescription extends Schema.Component {
  collectionName: 'components_card_card_with_descriptions';
  info: {
    displayName: 'CardWithDescription';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CardFullList extends Schema.Component {
  collectionName: 'components_card_full_lists';
  info: {
    displayName: 'FullCard';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Label: Attribute.String;
    SecondaryImage: Attribute.Media<'images'>;
    Subtitle: Attribute.String;
  };
}

export interface CardSimpleCard extends Schema.Component {
  collectionName: 'components_card_simple_cards';
  info: {
    displayName: 'SimpleCard';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card-with-description': CardCardWithDescription;
      'card.full-list': CardFullList;
      'card.simple-card': CardSimpleCard;
    }
  }
}
