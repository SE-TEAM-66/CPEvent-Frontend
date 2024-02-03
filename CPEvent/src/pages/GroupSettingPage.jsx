import Navbar from "../components/Navbar";
import { Image } from "@mantine/core";
import { Divider } from "@mantine/core";
import { MemberList } from "../components/MemberList";
import { MemberRequire } from "../components/MemberRequire";

export default function GroupSettingPage() {
  return (
    <div className="text-center">
      {" "}
      {/* Center the content */}
      <Navbar />
      <Image
        src="..\src\images\Rectangle 133.png"
        style={{ height: "35vh", width: "100%", objectFit: "cover" }}
      />
      <div className="flex flex-col pt-7 h-8">
        <div className="sm:mx-40 md:mx-52 lg:mx-64">
          <div>
            <p className="font-poppin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-left md:text-left  sm:text-center">
              CPEvent
            </p>
            <div className="font-poppin text-sm pt-2 flex flex-col sm:flex-row justify-between">
              <div className="flex flex-row">
                <p className="mb-2 sm:mb-0 pr-3">Written by </p>
                <p className="mb-2 sm:mb-0 font-semibold ">
                  NATACHA RUNGBANPANT
                </p>
              </div>
              <p>12:30 PM · Jan 5, 2024</p>
            </div>

            <Divider my="md" />

            <p className="font-poppin text-md pt-2 flex flex-col text-left">
              Academic network and collaboration platform, that allows students
              and professors to show their hard skills and connect with each
              other in various academic projects such as events, research, and
              development projects. It can also be called &quot;LinkedIn for
              academic purposes&quot;
            </p>
          </div>

          <div className="pt-10">
            <div className="flex flex-col">
              <p className="font-poppin font-medium text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl xl:text-left md:text-left  sm:text-center">
                My brain is not braining
              </p>
              <p className="mb-2 sm:mb-0 font-normal text-sm md:text-left  sm:text-center">
                สมาชิก
              </p>
            </div>
          </div>

          <div className="text-left pt-5">
            <div className="my-4">
              <MemberList
                name="NATACHA RUNGBANPANT"
                badges={[
                  { color: "#FAB49E", text: "project manager" },
                  { color: "#C3ADEB", text: "front end" },
                  { color: "#9EC4FA", text: "Design" },
                ]}
              />
            </div>
            <div className="my-4">
              <MemberList
                name="Harriette Spoonlicker"
                badges={[
                  { color: "#C3ADEB", text: "front end" },
                  { color: "#B0E8E4", text: "Design" },
                ]}
              />
            </div>
          </div>

          <div className="text-left pt-5">
            <div className="my-4">
              <MemberRequire
                name="Front end"
                badges={[
                  { color: "#FAB49E", text: "JavaScript" },
                  { color: "#C3ADEB", text: "HTML/CSS" },
                  { color: "#9EC4FA", text: "Design" },
                ]}
              />
            </div>
            <div className="my-4">
              <MemberRequire
                name="Back end"
                badges={[
                  { color: "#C3ADEB", text: "Golang" },
                  { color: "#B0E8E4", text: "MySQL" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
