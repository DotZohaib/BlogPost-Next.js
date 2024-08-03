import { useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

// Initial posts data
const initialPosts = [
  {
    title: "Notice of Python Software Foundation Bylaws change",
    date: "10 August 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title:
      "Python’s Supportive and Welcoming Environment is Tightly Coupled to Its Progress",
    date: "July 26, 2024",
    description:
      "Read more about how the supportive environment of Python contributes to its progress.",
    link: "#",
  },
  {
    title: "PSF Board update on improvements to the PSF Grants program",
    date: "July 18, 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title: "Python 3.13.0 beta 4 released",
    date: "July 18, 2024",
    description:
      "Check out the new features and updates in Python 3.13.0 beta 4.",
    link: "#",
  },
  {
    title: "Notice of Python Software Foundation Bylaws change",
    date: "10 August 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title:
      "Python’s Supportive and Welcoming Environment is Tightly Coupled to Its Progress",
    date: "July 26, 2024",
    description:
      "Read more about how the supportive environment of Python contributes to its progress.",
    link: "#",
  },
  {
    title: "PSF Board update on improvements to the PSF Grants program",
    date: "July 18, 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title: "Python 3.13.0 beta 4 released",
    date: "July 18, 2024",
    description:
      "Check out the new features and updates in Python 3.13.0 beta 4.",
    link: "#",
  },
  {
    title:
      "Announcing the 2024 PSF Board Election & Proposed Bylaw Change Results",
    date: "July 17, 2024",
    description:
      "Find out the results of the 2024 PSF Board Election and the proposed bylaw changes.",
    link: "#",
  },
  {
    title: "Notice of Python Software Foundation Bylaws change",
    date: "10 August 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title:
      "Python’s Supportive and Welcoming Environment is Tightly Coupled to Its Progress",
    date: "July 26, 2024",
    description:
      "Read more about how the supportive environment of Python contributes to its progress.",
    link: "#",
  },
  {
    title: "PSF Board update on improvements to the PSF Grants program",
    date: "July 18, 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title: "Python 3.13.0 beta 4 released",
    date: "July 18, 2024",
    description:
      "Check out the new features and updates in Python 3.13.0 beta 4.",
    link: "#",
  },
  {
    title:
      "Announcing the 2024 PSF Board Election & Proposed Bylaw Change Results",
    date: "July 17, 2024",
    description:
      "Find out the results of the 2024 PSF Board Election and the proposed bylaw changes.",
    link: "#",
  },
  {
    title: "Notice of Python Software Foundation Bylaws change",
    date: "10 August 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title:
      "Python’s Supportive and Welcoming Environment is Tightly Coupled to Its Progress",
    date: "July 26, 2024",
    description:
      "Read more about how the supportive environment of Python contributes to its progress.",
    link: "#",
  },
  {
    title: "PSF Board update on improvements to the PSF Grants program",
    date: "July 18, 2024",
    description: "Learn about the latest updates to the PSF Grants program.",
    link: "#",
  },
  {
    title: "Python 3.13.0 beta 4 released",
    date: "July 18, 2024",
    description:
      "Check out the new features and updates in Python 3.13.0 beta 4.",
    link: "#",
  },
  {
    title:
      "Announcing the 2024 PSF Board Election & Proposed Bylaw Change Results",
    date: "July 17, 2024",
    description:
      "Find out the results of the 2024 PSF Board Election and the proposed bylaw changes.",
    link: "#",
  },
];

const Blog = () => {
  const [items, setItems] = useState(initialPosts.slice(0, 4)); // Show first 4 posts initially
  const [hasMore, setHasMore] = useState(true); // Set to true to allow scrolling

  const fetchMoreData = () => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      // Check if there are more posts to load
      if (items.length >= initialPosts.length) {
        setHasMore(false); // No more posts to load
        return;
      }

      // Load next set of posts
      setItems((prevItems) => {
        const nextItems = initialPosts.slice(
          prevItems.length,
          prevItems.length + 3
        ); // Load 3 more posts
        return [...prevItems, ...nextItems];
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>ZenZone | Blog</title>
        <meta name="description" content="Latest news and updates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/Hippie Monkey.jpeg" />
      </Head>
      <div className={styles.body}>
        <div className={styles.tag}>
          <InfiniteScroll
            dataLength={items.length} // This is important field to render the next data
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            refreshFunction={() => {}}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            <div className={styles.posts}>
              {items.map((post, index) => (
                <div key={index} className={styles.post}>
                  <Link href={post.link} className={styles.link}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p className={styles.date}>{post.date}</p>
                  </Link>
                </div>
              ))}
            </div>
          </InfiniteScroll>
          <h1>Blog</h1>
          <h2>Latest News</h2>
        </div>
      </div>
    </>
  );
};

export default Blog;
