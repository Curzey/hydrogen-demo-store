import type {Localizations} from '~/lib/type';

export const countries: Localizations = {
  default: {
    label: 'Denmark (DKK)',
    language: 'DA',
    country: 'DK',
    currency: 'DKK',
  },
  '/da-eu': {
    label: 'Europe (EUR €)',
    language: 'DA',
    country: 'DK',
    currency: 'EUR',
  },
  '/da-se': {
    label: 'Danish (SEK)',
    language: 'DA',
    country: 'SE',
    currency: 'SEK',
  },
  '/sv-se': {
    label: 'Sweden (SEK)',
    language: 'SV',
    country: 'SE',
    currency: 'SEK',
  },
  '/da-de': {
    label: 'Danish (EUR €)',
    language: 'DA',
    country: 'DE',
    currency: 'EUR',
  },
};
