import Content from '../models/Content.js';

const getOrCreateContent = async () => {
  let content = await Content.findOne();
  if (!content) {
    content = await Content.create({});
  }
  return content;
};

export const getContent = async (req, res) => {
  const content = await getOrCreateContent();
  return res.json(content);
};

export const updateContent = async (req, res) => {
  const updates = req.body || {};
  const content = await getOrCreateContent();

  Object.assign(content, updates);
  await content.save();

  return res.json(content);
};
