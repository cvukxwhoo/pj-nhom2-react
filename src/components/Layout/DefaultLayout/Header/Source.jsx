const Source = [
  {
    src: "/",
    title: "Home",
  },
  {
    src: "/destination",
    title: "Destination",
  },
  {
    src: "/listings",
    title: "Listing",
  },
  {
    src: "/activities",
    title: "Activities",
  },
  {
    src: "/shop",
    title: "Shop",
  },
  {
    src: "/blog",
    title: "Blog",
  },
  {
    src: "/contact",
    title: "Contact",
  },
];

export default Source;

// {Source.map((source, index) => {
//     return (
//       <li>
//         <Link
//           key={index}
//           className={cx("nav-child")}
//           to={source.src}
//         >
//           {source.title}
//         </Link>
//       </li>
//     );
//   })}

//   <li>
//                 <Link className={cx("nav-child")} to="/">
//                   Home
//                 </Link>
