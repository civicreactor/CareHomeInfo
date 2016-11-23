import {New} from '../models/news';

export class NewList {
  news = [{
    title: 'Whatever',
    content: 'sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad '
  },
  {
    title: 'Whatever23',
    content: 'sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad '
  },
  {
    title: 'Whatever3',
    content: 'sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad '
  },
  {
    title: 'Whatever4',
    content: 'sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad sdasdsadsadsadsad sdasda d dssa dsd sadsd sad '
  },
  ];

  get(): New[] {
    return this.news;
  }

}
