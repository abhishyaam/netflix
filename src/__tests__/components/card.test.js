import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP',
      },
    ],
  },
];

describe('<Card /> ', () => {
  it('renders <Card /> with popluated data', () => {
    const { queryByText, container } = render(
      <Card.Group>
        {slideRows.map((sildeItem) => (
          <Card key={`category-${sildeItem.title.toLowerCase()}`}>
            <Card.Title>{sildeItem.title}</Card.Title>
            <Card.Entities>
              {sildeItem.data.map((item) => (
                <Card.Item key={item.id} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('Documentaries')).toBeTruthy();
    expect(queryByText('Tiger King')).toBeTruthy();
    expect(queryByText('Tiger King description')).toBeTruthy();
    expect(queryByText('Feel Good')).toBeTruthy();
    expect(queryByText('Juno')).toBeTruthy();
    expect(queryByText('Juno description')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a <Card /> clicks card feature', () => {
    const { queryByText, container, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((sildeItem) => (
          <Card key={`category-${sildeItem.title.toLowerCase()}`}>
            <Card.Title>{sildeItem.title}</Card.Title>
            <Card.Entities>
              {sildeItem.data.map((item) => (
                <Card.Item
                  key={item.id}
                  item={item}
                  data-testid={`${item.slug}-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('18'));
    fireEvent.click(getByTestId('tiger-king-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('close'));
    expect(queryByText('PG')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
