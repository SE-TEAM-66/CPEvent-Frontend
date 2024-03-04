import Navbar from "../components/Navbar";
import { Image } from "@mantine/core";
import { Divider } from "@mantine/core";
import { MemberList } from "../components/MemberList";
import { MemberRequire } from "../components/MemberRequire";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { repository } from "../repository/repository";
import ApplicantsContent from "../components/ApplicantsContent";

export default function EventSettingPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-7 h-8">
        <div className="sm:mx-40 md:mx-52 lg:mx-64 pb-24">
          <p className="font-poppin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-left md:text-left  sm:text-center text-green-600">
            {"Topic name goes here"}
          </p>
          <div className="font-poppin text-sm pt-2 flex flex-col text-gray-500">
            <div className="flex flex-row">
              <p className="mb-2 sm:mb-0 pr-3">Date goes here </p>
            </div>
          </div>
          <Divider my="md" />
          <div className="flex justify-center items-center">
            <Image src="..\src\images\Event1.png" style={{ width: "70%" }} />
          </div>
          <Divider my="md" />
          <div className="font-poppin  text-lg pt-2 flex flex-col">
            <p>Date : dd/mm/yy</p>
            <p>Location : Bannpor</p>
            <p className="font-poppin text-md pt-2 flex flex-col text-left mt-3">
              Description goes here
            </p>
            <div className="pt-10">
              <div className="flex flex-col">กลุ่มที่เข้าร่วม</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
