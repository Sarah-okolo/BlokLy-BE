const axios = require('axios');

const validateStoryblokPAT = async (pat) => {
  try {
    const res = await axios.get('https://mapi.storyblok.com/v1/spaces/', {
      headers: {
        Authorization: `${pat}`,
      },
    });

    console.log('Storyblok validation response:', res.data.spaces);
    return res.status === 200 && res.data.spaces;
  } catch (err) {
    console.error('Storyblok validation failed:', err.response?.data || err.message);
    return false;
  }
};

const fetchUserSpaces = async (pat) => {
  const res = await axios.get('https://mapi.storyblok.com/v1/spaces', {
    headers: {
      Authorization: `${pat}`,
    },
  });

  return res.data.spaces;
};

module.exports = {
  validateStoryblokPAT,
  fetchUserSpaces,
};