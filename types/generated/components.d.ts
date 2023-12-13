import type { Schema, Attribute } from '@strapi/strapi';

export interface AfterloginAfterLogin extends Schema.Component {
  collectionName: 'components_afterlogin_after_logins';
  info: {
    displayName: 'After Login';
  };
  attributes: {
    Text1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'FIRST DEPOSIT BONUS'>;
    Text2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+180% REWARDS'>;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    BannerItem: Attribute.Component<'banneritem.banner-item', true>;
  };
}

export interface BanneritemBannerItem extends Schema.Component {
  collectionName: 'components_banneritem_banner_items';
  info: {
    displayName: 'BannerItem';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.Text;
  };
}

export interface BeforeloginBeforeLogin extends Schema.Component {
  collectionName: 'components_beforelogin_before_logins';
  info: {
    displayName: 'Before Login';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'SIGN UP & GET REWARD'>;
  };
}

export interface CarditemCardItem extends Schema.Component {
  collectionName: 'components_carditem_card_items';
  info: {
    displayName: 'CardItem';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface CardsectionCardSection extends Schema.Component {
  collectionName: 'components_cardsection_card_sections';
  info: {
    displayName: 'CardSection';
  };
  attributes: {
    CardItem: Attribute.Component<'carditem.card-item', true>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    BeforeLogin: Attribute.Component<'beforelogin.before-login'>;
    AfterLogin: Attribute.Component<'afterlogin.after-login'>;
    HeroImage: Attribute.Media & Attribute.Required;
  };
}

export interface ItemcomponentItemComponent extends Schema.Component {
  collectionName: 'components_itemcomponent_item_components';
  info: {
    displayName: 'ItemComponent';
    description: '';
  };
  attributes: {
    Theme: Attribute.Enumeration<['primary', 'second', 'third']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface LogoLogo extends Schema.Component {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required & Attribute.DefaultTo<'logo'>;
    color: Attribute.Enumeration<['primary', 'second', 'third']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SidebarSidebar extends Schema.Component {
  collectionName: 'components_sidebar_sidebars';
  info: {
    displayName: 'Sidebar';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'second', 'third']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    shadow: Attribute.Enumeration<['thin', 'normal', 'thick']> &
      Attribute.Required &
      Attribute.DefaultTo<'normal'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'afterlogin.after-login': AfterloginAfterLogin;
      'banner.banner': BannerBanner;
      'banneritem.banner-item': BanneritemBannerItem;
      'beforelogin.before-login': BeforeloginBeforeLogin;
      'carditem.card-item': CarditemCardItem;
      'cardsection.card-section': CardsectionCardSection;
      'hero.hero': HeroHero;
      'itemcomponent.item-component': ItemcomponentItemComponent;
      'logo.logo': LogoLogo;
      'sidebar.sidebar': SidebarSidebar;
    }
  }
}
