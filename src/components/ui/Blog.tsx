"use client";

import Image from "next/image";
import Link from "next/link";

const BlogComponent = () => {
  const articles = [
    {
      id: 1,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
    {
      id: 2,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
    {
      id: 3,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
    {
      id: 4,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
    {
      id: 5,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
    {
      id: 6,
      title: "Empowering Students with AI: Shaping the Future of Education",
      image: "/blog/blog-1.png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      authorImage: "/blog/blog-2.jpg",
    },
  ];
  return (
    <>
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[var(--subtitle)] text-2xl font-semibold">
            Choose Your Country
          </h4>
          <h1 className="text-5xl font-bold text-black mb-10">
            The World is your Campus!
          </h1>
          <div className="flex flex-col lg:flex-row flex-wrap gap-3">
            <div>
              <Link
                href="#"
                className="bg-[var(--banner-btn)] p-2 rounded-lg text-white text-xl border border-[#D7F7D8]"
              >
                All Categories
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className=" p-2 rounded-lg  text-xl border border-[#D7F7D8]"
              >
                Trending
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className=" p-2 rounded-lg text-xl border border-[#D7F7D8]"
              >
                Announcement
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className=" p-2 rounded-lg text-xl border border-[#D7F7D8]"
              >
                Exams
              </Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden p-2"
                >
                  {/* Image Section */}
                  <div className="w-full h-48 relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <span className="text-green-600 font-medium bg-green-100 px-2 py-1 rounded-lg text-sm">
                      Trending
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 mt-2">
                      {article.title}
                    </h2>

                    {/* Author & Date */}
                    <div className="flex items-center mt-4 text-gray-600 text-sm">
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="ml-2">{article.author}</span>
                      <span className="ml-auto">{article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
