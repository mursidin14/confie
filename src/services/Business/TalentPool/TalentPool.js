import ModalError from 'components/Modal/ModalError';
import { httpAuthClient } from 'utils/http-common';

export const getAllTalentPool = async () => {
  try {
    const response = await httpAuthClient.get('/api/talents');
    return {items: response.data.data.data, response: response};
  } catch (error) {
	return (
		<ModalError
			title="Error"
			error_msg={error.response.data.message}
			error={true}
			onClose={() => {
				// back to previous page
				window.history.back();
			}}
		/>
	)
  }
};

export const getFilteredTalentPool = async (filter) => {
  try {
    const response = await httpAuthClient.get(`/api/talents${filter}`);
    return response.data.data.data
  } catch (error) {
    return error.response;
  }
}

export const getNextTalentPool = async (nextPage) => {
  try {
    const response = await httpAuthClient.get(`/api/talents?page=${nextPage}`);
    return {items: response.data.data.data, response: response.data.data}
  } catch (error) {
    return error.response;
  }
}

export const getPreviousTalentPool = async (previousPage) => {
  try {
    const response = await httpAuthClient.get(`/api/talents?page=${previousPage}`);
    return {items: response.data.data.data, response: response.data.data}
  } catch (error) {
    return error.response;
  }
}
