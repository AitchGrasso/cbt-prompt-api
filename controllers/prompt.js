const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Prompt");

module.exports = {
  getRandomPrompt: async (req, res) => {
    try {
      const currentDate = new Date().toDateString();
      const prompts = await Prompt.find();

      const randomIndex = Math.floor(Math.random() * prompts.length);
      const prompt = prompts[randomIndex];

      res.render("daily-prompt", { prompt });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  },
  likePrompt: async (req, res) => {
    try {
      await Prompt.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  }
};
