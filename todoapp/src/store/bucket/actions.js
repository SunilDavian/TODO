import { updateBucket } from '../../services/bucket';
import { FETCH_BUCKET_SUCCESS } from './type';

function fetchBanner() {
  return async (dispatch) => {
    try {
      // const banners = await getBanners();
      dispatch({ type: FETCH_BUCKET_SUCCESS });
    } catch (error) {

    }
  };
}

function createBucket(body) {
  return async (dispatch) => {
    try {
      const banners = await updateBucket(body);
      dispatch({ type: FETCH_BUCKET_SUCCESS, banners });
    } catch (error) {

    }
  };
}


export default {
  fetchBanner,
  createBucket
};
