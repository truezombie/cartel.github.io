export const PAGE_TITLE =
  'Cartel круглосуточный обмен валют в Харькове по лучшему курсу. Прием ветхих купюр. Монет. Все валюты мира.';

export const CITY_KEYS = {
  kharkiv: '/kharkiv',
  pokrowsk: '/pokrowsk',
  lviv: '/lviv'
};

export const CITIES = {
  [CITY_KEYS.kharkiv]: {
    title: 'Харьков',
    tableUrl:
      'https://spreadsheets.google.com/feeds/list/1kuQeHmD3bLeYYtH5-okltD_IOzAj07W7KXiAm6XWdQM/1/public/values?alt=json',
    googleMap:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.9953961076137!2d36.225933458257636!3d50.011527794854295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAwJzQxLjUiTiAzNsKwMTMnMzcuMyJF!5e0!3m2!1sru!2sua!4v1560088841427!5m2!1sru!2sua',
    telegram: 'https://t.me/cartel_obmen',
    purKeyWhosale: 'gsx$харьковопт',
    selKeyWhosale: 'gsx$_cre1l',
    purKeyRetail: 'gsx$харьков',
    selKeyRetail: 'gsx$_cokwr',
    deskKey: 'gsx$_ciyn3',
    phoneNumbers: ['+38 (099) 903-9003', '+38 (068) 903-9003'],
    cityInfo: [
      {
        label: 'г. Харьков, пр Науки 7',
        icon: 'fa-map-marked'
      },
      {
        label: 'станция метро Научная',
        icon: 'fa-subway'
      }
    ]
  },
  [CITY_KEYS.pokrowsk]: {
    title: 'Покровск',
    tableUrl:
      'https://spreadsheets.google.com/feeds/list/1w9xh5QSJRqHKgMHvubJ-HtOZmvDj9Q8468o6B0A6aZk/1/public/values?alt=json',
    googleMap:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.46819015046!2d37.17610711565387!3d48.27460797923455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40de381ee02c4bbb%3A0x5467f06b204c33bd!2z0YPQuy4g0JvQuNGF0LDRh9GR0LLQsCwgMTQsINCf0L7QutGA0L7QstGB0YzQuiwg0JTQvtC90LXRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgODUzMDA!5e0!3m2!1sru!2sua!4v1572548593847!5m2!1sru!2sua',
    telegram: 'https://t.me/pokrovskobmen_cartel',
    purKeyWhosale: 'gsx$покровскопт',
    selKeyWhosale: 'gsx$_cre1l',
    purKeyRetail: 'gsx$покровск',
    selKeyRetail: 'gsx$_cokwr',
    deskKey: 'gsx$_ciyn3',
    phoneNumbers: [
      '+38 (095) 550-9090',
      '+38 (098) 550-9090',
      '+38 (063) 550-9090'
    ],
    cityInfo: [
      {
        label: 'г. Покровск, ул Лихачева 14',
        icon: 'fa-map-marked'
      }
    ]
  },
  [CITY_KEYS.lviv]: {
    title: 'Львов',
    tableUrl:
      'https://spreadsheets.google.com/feeds/list/1x08F3c-RqLlsJyzZj1Q292Mp476GQz50hjq6myPz1cY/1/public/values?alt=json',
    googleMap:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.8217408370256!2d24.02284501570959!3d49.84580687939649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7348730921%3A0xbec3834cc813896c!2z0L_RgNC-0YHQvy4g0JLRj9GH0LXRgdC70LDQstCwINCn0LXRgNC90L7QstC-0LvQsCwgNywg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1575650972313!5m2!1sru!2sua',
    telegram: 'https://t.me/cartel_lviv',
    purKeyWhosale: 'gsx$покровскопт',
    selKeyWhosale: 'gsx$_cre1l',
    purKeyRetail: 'gsx$львов',
    selKeyRetail: 'gsx$_cokwr',
    deskKey: 'gsx$_ciyn3',
    phoneNumbers: ['+38 (068) 440-6644', '+38 (099) 440-6644'],
    cityInfo: [
      {
        label: 'г. Львов, пр Вячеслава Черновола 7',
        icon: 'fa-map-marked'
      },
      {
        label: 'Отель "Львов" (с правой стороны от входа)',
        icon: 'fa-building'
      }
    ]
  }
};
