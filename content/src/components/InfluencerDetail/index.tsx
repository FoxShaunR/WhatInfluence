import { get } from 'lodash';
import React from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import { getInfluencer } from '../../actions/actions';
import { IInfluencer } from '../../types/influencer';
import InfluencerDetail from './InfluencerDetail';

const InfluencerDetailController = ({
  match,
}: RouteComponentProps) => {
  const id = get(match, 'params.id');
  const [influencer, setInfluencer] = React.useState({} as IInfluencer);
  const getNews = async () => {
    if (id) {
      const results = await getInfluencer(id);
      setInfluencer(results);
    }
  };
  React.useEffect(() => {
    getNews();
  }, [id]);
  return (
    <InfluencerDetail {...influencer} />
  );
};

export default withRouter(InfluencerDetailController);
