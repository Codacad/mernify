import React, { useState } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/paragraph_style.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/emoticons.min.js";
import "froala-editor/js/plugins/print.min.js";
import { useRef } from "react";
const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [model, setModel] = useState("");
  const [blogData, setBlogData] = useState({});
  const editorContentRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      content: model,
    };
    setBlogData(blog);

    editorContentRef.current.innerHTML = blog.content;

    console.log(blog);
    setTitle("");
    setModel("");
    setTags("");
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen w-full max-w-3xl">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Write a New Blog
      </h2>
      <div className="blog-contents" ref={editorContentRef}></div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* React-Quill Editor for Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Blog Content
          </label>
          <FroalaEditorComponent
            model={model}
            onModelChange={(e) => setModel(e)}
            tag="textarea"
            config={{
              placeholderText: "Write your blog content here...",
              toolbarButtons: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "subscript",
                "superscript",
                "fontFamily",
                "fontSize",
                "|",
                "color",
                "emoticons",
                "inlineStyle",
                "paragraphStyle",
                "|",
                "paragraphFormat",
                "align",
                "formatOL",
                "formatUL",
                "outdent",
                "indent",
                "quote",
                "-",
                "insertLink",
                "insertImage",
                "insertVideo",
                "insertFile",
                "insertTable",
                "|",
                "specialCharacters",
                "insertHR",
                "selectAll",
                "clearFormatting",
                "|",
                "print",
                "spellChecker",
                "help",
                "html",
                "|",
                "undo",
                "redo",
              ],
              moreRich: { buttons: ["insertLink", "insertImage"] },
            }}
          />
        </div>

        {/* Tags Field */}
        <div className="">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tags (comma-separated)
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, JavaScript, Programming"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteBlog;
