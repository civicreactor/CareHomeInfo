import {New} from '../models/news';

export class NewList {
  news = [
    {
      type: 'audio',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 1a',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'video',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 2a',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'text',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 3a',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'blog',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 4a',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'audio',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 1b',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'video',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 2b',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'text',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 3b',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    },
    {
      type: 'blog',
      link: 'http://www.bbc.co.uk/news/uk-england-london-38145000',
      title: 'Concern for future of... 4b',
      content: 'The Auchinlee home in Campbeltown is run by Crossreach, a social care charity linked to the Church of Scotland\'s Social Care Council.' +
              'But it has been losing hundreds of thousands of pounds and could close without extra taxpayer-funded support.'
    }
  ];

  get(): New[] {
    return this.news;
  }

}
