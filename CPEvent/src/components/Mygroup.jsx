import React from "react";
import { Avatar } from "flowbite-react";

export default function Mygroup() {
  return (
    <div class="flex-none mx-2">
      <button class="m-2">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            {/* online:green busy:red offline:gray away:yellow */}
            <Avatar
              img="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              rounded
              status="away"
              statusPosition="bottom-right"
              size="sm"
            />
          </div>
          <div class="items-center font-poppin my-auto text-baseblue-300 text-sm whitespace-nowrap">
            Group name
          </div>
          <div class="font-poppin my-auto text-baseblue-300 text-sm whitespace-nowrap">
            3/5
          </div>
        </div>
      </button>
    </div>
  );
}
