import moment from "moment";
import React from "react";
import { NewsTypes } from "../redux/getNewsSlice";

const NewsCard: React.FC<NewsTypes> = ({
  name,
  description,
  image,
  provider,
  datePublished,
  url,
}) => {
  return (
    <a href={url} target="_blank">
      <article className="bg-white p-4 rounded">
        <div className="flex justify-betweeen gap-[5px]">
          <h3 className="font-semibold text-lg">{name}</h3>
          {image?.thumbnail && (
            <img
              src={image?.thumbnail.contentUrl}
              alt=""
              className="w-[120px] min-h-[80px] bg-red-400 object-cover ml-auto"
            />
          )}
        </div>
        <span className="block mt-4">
          {description.length > 50
            ? `${description.substring(0, 90)}...`
            : description}
        </span>

        <div className="flex items-center mt-4  justify-between text-zinc-700">
          <div className="flex gap-4 items-center">
            <img
              src={
                provider[0].image ? provider[0].image.thumbnail.contentUrl : ""
              }
              alt=""
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <span>{provider[0].name}</span>
          </div>
          <span>{moment(datePublished, "YYYYMMDD").fromNow()}</span>
        </div>
      </article>
    </a>
  );
};

export default NewsCard;
