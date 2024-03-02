import React from "react";

export default function FriendStatus() {
  return (
    <div>
      <div class="flow-root text-baseblue-300 font-poppin">
        <div class="flex items-center">
          <div class="relative">
            <img
              class="w-14 h-14 rounded-full object-cover"
              src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <span class="bottom-0 left-10 absolute size-3 bg-status-100 border-2 border-baseblue-100 rounded-full"></span>
          </div>
          <div class="flex-1 min-w-0 ms-4 space-y-1">
            <p class="text-sm truncate ">Neil Sims</p>
            <p class="text-xs truncate ">online</p>
          </div>
          <div class="inline-flex items-center text-xs">1 min</div>
        </div>
      </div>
    </div>
  );
}
