exports.handler = async () => {
  try {
    const data = [
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' },
      { id: 1, title: 'Title 1', description: 'lorem' }
    ]; // await
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Error while getting data from YT'
    };
  }
};
