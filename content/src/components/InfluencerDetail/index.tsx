import { get } from 'lodash';
import React from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import {
  getInfluencer,
  getInfluencerNewsById,
} from '../../actions/actions';
import { IInfluencer } from '../../types/influencer';
import { ILatestNewsItem } from '../../types/news';
import InfluencerDetail from './InfluencerDetail';

const InfluencerDetailController = ({
  match,
}: RouteComponentProps) => {
  const id = get(match, 'params.id');
  const [influencer, setInfluencer] = React.useState({} as IInfluencer);
  const [news, setNews] = React.useState([] as ILatestNewsItem[]);
  const getData = React.useCallback(
    async () => {
      if (id) {
        const [inf, nw] = await Promise.all([
          getInfluencer(id),
          getInfluencerNewsById(id),
        ]);
        setInfluencer(inf);
        setNews(nw);
      }
    },
    [id],
  );
  React.useEffect(() => {
    getData();
  }, [id, getData]);
  return (
    <InfluencerDetail {...influencer} news={news} />
  );
};

export default withRouter(InfluencerDetailController);
