import React from "react";
import FriendStatus from "./FriendStatus";

export default function FriendList() {
  return (
    <div>
      <div class="size-44 bg-baseblue-100 w-100 h-128 mx-auto m-5 rounded-xl p-10 font-poppin  text-baseblue-300">
        {/* Top */}
        <div class="mt-5">
          <div class="flex items-center justify-between mb-8">
            <h5 class="text-xl font-bold leading-none">Friend</h5>
            <a
              href="#"
              class="text-sm font-medium text-black opacity-20 hover:underline"
            >
              View all
            </a>
          </div>
          {/* Friend list */}
          <div>
            <FriendStatus />
            <div class="border-t my-6 border-black opacity-5"></div>
            <FriendStatus />
            <div class="border-t my-6 border-black opacity-5"></div>
            <FriendStatus />
            <div class="border-t my-6 border-black opacity-5"></div>
            <FriendStatus />
          </div>
        </div>
      </div>
    </div>
  );
}
