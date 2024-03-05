import React from "react";
import PropTypes from "prop-types";
import OpenPosition from "./OpenPosition";
import { useState, useEffect } from "react";
import { repository } from "../repository/repository";
import { useNavigate } from "react-router-dom";

GroupCard.propTypes = {
  gid: PropTypes.number,
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  gname: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  OwnerPicURL: PropTypes.string,
  description: PropTypes.string,
  positions: PropTypes.array
};

export default function GroupCard(props) {
  const navigate = useNavigate();
  const { gid, fname, lname, gname, topic, OwnerPicURL, description, positions } = props;

  const handleReadMore = async (e) => {
    e.preventDefault();
    try {
      navigate("/group/" + gid);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const copyLink = (group) => {
    const linkToCopy = "http://localhost:5173/group" + "/" + gid;
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => alert("Link copied to clipboard: " + linkToCopy))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <div className="p-5 h-full">
        {/* Profile */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src={
                  OwnerPicURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="user photo"
              />
            </button>
            <div className="ml-2">
              <strong className="block font-poppin text-basegreen-200 text-lg uppercase font-medium">
                {fname + " " + (lname || "").charAt(0).toUpperCase() + "."}
              </strong>
            </div>
          </div>

          <div className="flex justify-end align-top">
            <div className="flex justify-end">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.41797 4.16667C3.41797 3.50363 3.68136 2.86775 4.1502 2.3989C4.61904 1.93006 5.25493 1.66667 5.91797 1.66667H14.2513C14.9143 1.66667 15.5502 1.93006 16.0191 2.3989C16.4879 2.86775 16.7513 3.50363 16.7513 4.16667V17.5233C16.7513 18.54 15.6013 19.1317 14.7746 18.5408L10.0846 15.1908L5.39464 18.5408C4.56714 19.1325 3.41797 18.5408 3.41797 17.5242V4.16667ZM5.91797 3.33334C5.69695 3.33334 5.48499 3.42114 5.32871 3.57742C5.17243 3.7337 5.08464 3.94566 5.08464 4.16667V16.7142L9.35797 13.6617C9.56999 13.5102 9.82406 13.4288 10.0846 13.4288C10.3452 13.4288 10.5993 13.5102 10.8113 13.6617L15.0846 16.7142V4.16667C15.0846 3.94566 14.9968 3.7337 14.8406 3.57742C14.6843 3.42114 14.4723 3.33334 14.2513 3.33334H5.91797Z"
                  fill="#B2DB75"
                />
              </svg>
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={copyLink}
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M20.8652 9.15461L13.3652 16.6546C13.2603 16.7596 13.1266 16.8311 12.981 16.8601C12.8355 16.8891 12.6846 16.8743 12.5474 16.8175C12.4103 16.7606 12.2931 16.6644 12.2107 16.541C12.1283 16.4175 12.0844 16.2724 12.0845 16.124V12.3956C6.73141 12.6993 3.0611 16.1709 2.03079 17.2705C1.869 17.4433 1.65685 17.5607 1.42451 17.6059C1.19217 17.6511 0.951488 17.6219 0.736716 17.5224C0.521944 17.4229 0.344025 17.2582 0.228279 17.0517C0.112533 16.8453 0.0648575 16.6076 0.0920377 16.3724C0.43985 13.3481 2.09641 10.439 4.75704 8.18149C6.96672 6.30649 9.65266 5.1168 12.0845 4.90868V1.12399C12.0844 0.975567 12.1283 0.830447 12.2107 0.707002C12.2931 0.583556 12.4103 0.487336 12.5474 0.430522C12.6846 0.373707 12.8355 0.358854 12.981 0.387842C13.1266 0.416829 13.2603 0.488355 13.3652 0.593363L20.8652 8.09336C20.9349 8.16302 20.9902 8.24573 21.028 8.33678C21.0657 8.42783 21.0851 8.52543 21.0851 8.62399C21.0851 8.72255 21.0657 8.82015 21.028 8.91119C20.9902 9.00224 20.9349 9.08496 20.8652 9.15461Z"
                  fill="#B2DB75"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
        {/* content */}
        <div className="flex flex-col h- justify-between">
          <div className="flex flex-col py-2">
            <a href="#">
              <h5 className="text-xl tracking-tight text-basegreen-200 font-poppin font-semibold line-clamp-2">
                {topic}
              </h5>
              <span className="inline-block mb-3 text-basegreen-200 font-poppin font-normal">
                {gname}
              </span>
            </a>
            <p className="font-poppin text-black line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 rounded p-2">
            <span className="inline-block font-poppin font-meduim">
              ตำแหน่งที่เปิดรับ
            </span>
            <hr />
            {positions.slice(0, 2).map((pos) => (
              <OpenPosition role={pos.role} />
            ))}
            <div className="flex justify-between items-center mt-1">
              <span className="inline-block text-gray-500 text-sm font-poppin font-thin">
                {positions.length > 0
                  ? positions.length > 2
                    ? `อีก ${positions.length - 2} ตำแหน่ง...`
                    : ""
                  : "ยังไม่เปิดรับ ณ ขณะนี้"}
              </span>
              <button
                type="button"
                className="flex text-base font-light text-basegreen-200 bg-basegreen-100 rounded-full font-poppin py-1 px-3"
                id="user-menu-button"
                onClick={handleReadMore}
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
