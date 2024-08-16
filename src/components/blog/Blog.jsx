import React from "react";
import Modal from "react-modal";
// import cancelImg from "../../assets/img/cancel.svg";
// import UseData from "../../Hooks/UseData";
// import blogQuote from "../../assets/img/blog/quote.svg";
import error from "../../assets/img/error.png";

Modal.setAppElement("#root");

const Blog = () => {
  // const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } =
  //   UseData();
  // const handleModle = (id) => {
  //   handleBlogsData(id);
  // };
  return (
    <>
<div className="row justify-content-center text-center">
      <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50" >
      Oops!  This page is still in the oven<br /> Stay tuned while we cook up something awesome!
          </p>
          <img src={error} alt="Error" style={{ width: "75%", height: "auto" }} />
          
        {/* {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article
              className="post-container"
              onClick={() => handleModle(item?.id)}
            >
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item?.img} className="img-fluid" alt="item.title" />
                </div>
              </div>
   
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item?.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item?.description1.slice(0, 100)}</p>
                </div>
              </div>
            </article>

            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
            >
              <div>
                <button
                  className="close-modal"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={cancelImg} alt="close icon" />
                </button>

                <div className="box_inner blog-post">
                  <article>
                    <div className="title-section text-left text-sm-center">
                      <h1>
                        Post <span>Details</span>
                      </h1>
                      <span className="title-bg">posts</span>
                    </div>

                    <div className="meta open-sans-font">
                      <span>
                        <i className="fa fa-user"></i> {singleData.commentor}
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i> {singleData.date}
                      </span>
                      <span>
                        <i className="fa fa-tags"></i> {singleData.tag}
                      </span>
                    </div>

                    <h1>{singleData?.title}</h1>
                    <img
                      src={singleData?.img}
                      className="img-fluid"
                      alt="Blog"
                    />
                    <div className="blog-excerpt open-sans-font pb-5">
                      <p>{singleData?.description1}</p>
                      <div className="quotebox">
                        <div className="icon">
                          <img src={blogQuote} alt="blog quote" />
                        </div>
                        <p>{singleData?.description2}</p>
                      </div>
                      <p>{singleData?.description3}</p>
                      <p>{singleData?.description4}</p>
                    </div>
                  </article>
                </div>
              </div>
            </Modal>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Blog;
