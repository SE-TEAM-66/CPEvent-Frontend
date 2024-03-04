import PropTypes from "prop-types";

EventCard.propTypes = {
  picUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default function EventCard(props) {
  const { picUrl, title, desc, date, time } = props;
  const separated_date = date.split("-");
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <div className="mx-3 my-4">
        <div>
          <div>
            <a href="#">
              <img
                className="object-cover mt-2 mb-2 bg-gray-200 h-auto w-auto rounded"
                src={picUrl}
                alt="EventBanner"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <h5 className="mb-2 text-2xl text-[#546B34] break-words font-poppin font-bold">
                {title}
              </h5>
            </a>
            <p className="mb-3 text-[#8E9186] line-clamp-3">{desc}</p>
            <p className="mb-3 text-[#8E9186] text-xs">
              {time} ·{" "}
              {`${separated_date[0]}/${separated_date[1]}/${separated_date[2]}`}{" "}
              (Date)
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <svg
            className="w-6 h-6 text-basegreen"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"
            />
          </svg>
          <svg
            className="w-6 h-6 text-basegreen"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 10.9a8.7 8.7 0 0 1 6.4-3.6V6a2 2 0 0 1 2.3-2c.4 0 .7.1 1 .3l5.5 4.3a2.1 2.1 0 0 1 0 3.3l-5.5 4.3a2 2 0 0 1-2 .3 2 2 0 0 1-1.2-1.9v-1C6 15 5.2 19 5.2 19.3a1 1 0 0 1-1 .8 1 1 0 0 1-1-.7A10.2 10.2 0 0 1 5 10.9Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
