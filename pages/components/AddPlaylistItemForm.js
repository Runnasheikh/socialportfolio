// components/AddPlaylistItemForm.js
import { useState } from "react";

export default function AddPlaylistItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoId, setVideoId] = useState(Math.random());
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      snippet: {
        publishedAt: new Date().toISOString(),
        title,
        description,
        thumbnails: {
          medium: {
            url: thumbnailUrl,
            width: 320,
            height: 180,
          },
        },
        resourceId: {
          kind: "youtube#video",
          videoId,
        },
      },
    };

    try {
      const response = await fetch("/api/addPlaylistItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      const result = await response.json();
      setMessage(result.message);

      if (response.ok) {
        // Clear the form
        setTitle("");
        setDescription("");
        setThumbnailUrl("");
      }
    } catch (error) {
      setMessage("Error adding item");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full p-2 border  border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Thumbnail URL:
        </label>
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Item
      </button>
      {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
    </form>
  );
}
