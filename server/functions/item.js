exports.handler = async context => {
  try {
    let id = context.path.split('/').pop();
    const data = { id, title: 'Title 1', description: 'lorem' };
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Error while getting the item'
    };
  }
};
