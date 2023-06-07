// Get Post by Tag
import Post from '../models/Post.js';

export const getIncome = async (req, res) => {
    try {
    const postsIncome = await Post.find({tag: req.params.tag});
    res.json({postsIncome});
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить статьи',
    });
  }
  }
