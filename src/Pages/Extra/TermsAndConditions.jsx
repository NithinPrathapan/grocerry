import React, { useEffect } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const image =
    "https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg";
  return (
    <div className="extrapage">
      <Navbar />
      <SingleBanner heading="Terms & conditions" image={image} />
      <div className="pgcont1">
        <h3>What is lorem Lipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          recusandae iusto? Recusandae quisquam nam, placeat enim autem beatae.
          Corrupti libero obcaecati architecto temporibus atque dolores, vero
          aliquam aut quam nihil labore sint consequatur pariatur exercitationem
          eaque molestiae eveniet magni quidem id iure nostrum. Ipsum, corrupti!
        </p>
      </div>
      <div className="pgcont1">
        <h3>What is lorem Lipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          recusandae iusto? Recusandae quisquam nam, placeat enim autem beatae.
          Corrupti libero obcaecati architecto temporibus atque dolores, vero
          aliquam aut quam nihil labore sint consequatur pariatur exercitationem
          eaque molestiae eveniet magni quidem id iure nostrum. Ipsum, corrupti!
        </p>
      </div>
      <div className="pgcont1">
        <h3>What is lorem Lipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          recusandae iusto? Recusandae quisquam nam, placeat enim autem beatae.
          Corrupti libero obcaecati architecto temporibus atque dolores, vero
          aliquam aut quam nihil labore sint consequatur pariatur exercitationem
          eaque molestiae eveniet magni quidem id iure nostrum. Ipsum, corrupti!
        </p>
      </div>
      <div className="pgcont1">
        <h3>What is lorem Lipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          recusandae iusto? Recusandae quisquam nam, placeat enim autem beatae.
          Corrupti libero obcaecati architecto temporibus atque dolores, vero
          aliquam aut quam nihil labore sint consequatur pariatur exercitationem
          eaque molestiae eveniet magni quidem id iure nostrum. Ipsum, corrupti!
        </p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default TermsAndConditions;
