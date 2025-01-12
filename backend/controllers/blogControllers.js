import Blog from "../models/blog.js";
const blogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find().populate("author", "fullname email");
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createBlog = async (req, res) => {
  const { title, content, tags, author } = req.body;
  try {
    if (!title || !content || !tags) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const blog = {
      title,
      content,
      tags,
      author: req.user.id,
    };

    const blogCreationResponse = await Blog.create(blog);

    if (blogCreationResponse && blogCreationResponse._id) {
      return res.status(201).send({ message: "Blog Created" });
    } else {
      return res.status(400).send({ message: "Blog creation failed" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { blogs, createBlog };
