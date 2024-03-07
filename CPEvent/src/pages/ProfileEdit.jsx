import React from "react";
import Navbar from "../components/Navbar";
import Mygroup from "../components/Mygroup";
import { Link } from "react-router-dom";
import Photo from "../images/loginimage.png";
import {useNavigate,} from "react-router-dom";
import { useState, useEffect } from "react";
import { repository } from "../repository/repository";
import { useParams } from 'react-router-dom';

export default function ProfileEdit() {
  const { profileID } = useParams(); 
  const [profile, setProfile] = useState({});
  const [exp, setEXP] = useState([]);
  const [softskill, setSoftskill] = useState({softSkills:[]});
  const [langskill, setLangskill] = useState({languageSkills:[]});
  const [DataAna,setDataAna] = useState({dataAnalysisSkills:[]})
  

  const [EditProfile, setEditProfile] = useState({
        ProfilePicture: "",
        Fname: "", 
        Lname: "", 
        Faculty: "",
        Bio: "",
        Phone: "",
        Email: "",
        Facebook: "",
        Line: "",
  });
  const [EditSoftskill, setEditSoftskill] = useState({
        softSkills:[{Title:""}] ,
  });
  const [EditLangskill, setEditLangskill] = useState({
        languageSkills:[{Title:""}] ,
  })
  const [EditExp,setEditExp] = useState([
    {
      Description: ""
    }
  ]);
  const [EditTechnicalSkill, setEditTechnicalSkill] = useState({
    dataAnalysisSkills:[{DataAna: ""}],
  })

  //get profile information
  const fetchProfile = async () => {  
    try {
      const response = await repository.get("/profile/" + profileID);
      console.log(response.data)
      setProfile(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [profileID]);
  
  //get experiment
  const fetchExp = async () => {  
    try {
      const response = await repository.get("/profiles/" + profileID + "/exp");
      console.log(response.data)
      console.log("-------------------------------")
      setEXP(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExp();
  }, [profileID]);

  //get softskills
  const fetchSoft = async () => {  
    try {
      const response = await repository.get("/profiles/" + profileID + "/soft-skills");
      console.log(response.data)
      console.log("-------------------------------")
      setSoftskill(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSoft();
  }, [profileID]);


  //get language skills
  const fetchLang = async () => {  
    try {
      const response = await repository.get("/profiles/" + profileID + "/lang-skills");
      console.log(response.data)
      console.log("-------------------------------")
      setLangskill(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLang();
  }, [profileID]);

  //get DataAna 
  const fetchDataAna = async () => {  
    try {
      const response = await repository.get("/profiles/" + profileID + "/dataAna");
      console.log(response.data)
      setDataAna(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataAna();
  }, [profileID]);
  

  const updateProfile = async () => {
    try {
      console.log("/profile/" + profileID)
      const response = await repository.put("/profile/" + profileID, {
        ProfilePicture: EditProfile.ProfilePicture,
        Fname: EditProfile.Fname,
        Lname: EditProfile.Lname,
        Faculty: EditProfile.Faculty,
        Bio: EditProfile.Bio,
        Phone: EditProfile.Phone,
        Email: EditProfile.Email,
        Facebook: EditProfile.Facebook,
        Line: EditProfile.Line,
      });
      console.log(response.data);
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      setEditProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSoftskill = async () => {
    try {
      const response = await repository.put("/profiles/"+ profileID +"/soft-skills"  ,{
        Title : EditSoftskill.Title,
      });
      console.log(response.data);
      console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
      setEditSoftskill(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLangskill = async () => {
    try {
      const response = await repository.put("/profiles/"+ profileID +"/lang-skills"   ,{
        Title : EditLangskill.Title,
      });
      console.log(response.data);
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      setEditLangskill(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateExp = async () => {
    try {
      const response = await repository.put("/profiles/"+ profileID +"/exp"  ,{
        Description : EditExp.Description,
      });
      console.log(response.data);
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      setEditExp(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTechnicalskill = async () => {
    try {
      const response = await repository.put("/profiles/"+ profileID+"/dataAna"  ,{
        DataAna : EditTechnicalSkill.DataAna,
      });
      console.log(response.data);
      console.log("ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
      setEditTechnicalSkill(response.data);
    } catch (err) {
      console.log(err);
    }
  };


  // useEffect(() => {
  //   updateProfile();
  // }, [profileID]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      if (EditTechnicalSkill?.DataAna?.trim() !== undefined && EditTechnicalSkill.DataAna.trim() !== "") {
        updateTechnicalskill();
      }
      if (EditExp?.Description?.trim() !== undefined && EditExp.Description.trim() !== "") {
        updateExp();
      }
      if (EditSoftskill?.Title?.trim() !== undefined && EditSoftskill.Title.trim() !== "") {
        updateSoftskill();
      }
      if (EditLangskill?.Title?.trim() !== undefined && EditLangskill.Title.trim() !== "") {
        updateLangskill();
      }
      updateProfile();
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("edit profile Error:", error);
    }
  };
  


  
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div class="hidden xl:block ">
        {/* Mygroup */}
        <div class="flex justify-center space-x-12 m-5 max-w-screen-xl mx-auto">
          <div class="my-auto text-baseblue-300 font-poppin font-bold whitespace-nowrap">
            My group
          </div>
          <div class="flex overflow-x-auto">
            {[...Array(8)].map((_, index) => (
              <Mygroup key={index} class="flex-none" />
            ))}
          </div>
        </div>
        {/* Line */}
        <div class="border border-1 border-basegray-300 max-w-screen-xl mx-auto "></div>
      </div>

      {/* Profile frame*/}
      <div class="flex:block mx-auto max-w-screen-xl min-h-full mb-10 bg-baseblue-300 mt-10 rounded-xl shadow-md font-poppin text-white">
        {/* Cover */}
        <div class="rounded-t-xl h-48 overflow-hidden bg-gray-200">
          <img class="object-cover object-top w-full opacity-50" />
        </div>
        <div class="relative">
          <button
            type="button"
            class="text-white border bg-baseblue-300 border-white font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2 absolute right-4 -top-16 hidden sm:block"
          >
            edit cover
          </button>
          <button
            type="button"
            class="text-white border bg-baseblue-300 border-white font-medium rounded-lg text-sm  px-2 py-2.5 text-center me-2 mb-2 absolute right-0 -top-16 sm:hidden whitespace-normal"
          >
            edit
            <br />
            cover
          </button>
        </div>
        {/* Done button */}
        <Link to={"/profile/" + profileID}>
          <div class="relative">
            <button
              type="submit"
              class="text-white bg-[#B2DB75] font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2 absolute right-4 top-4 shadow-md"
            >
              DONE
            </button>
          </div>
        </Link>
        {/* Profile pic*/}
        <div class="relative size-60 mx-auto">
          <div class="size-60 absolute -top-28 rounded-full overflow-hidden bg-baseblue-300 ">
            <div class="size-48 rounded-full overflow-hidden mx-auto my-6">
           
              <img
                class="object-cover object-center size-48 opacity-100"
                src={profile.ProfilePicture}
              />
            </div>
          </div>
          {/* <button class="size-60 absolute -top-28 flex items-center justify-center">
            
            <svg
              class="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                d="M40.25 36.4167V9.58333C40.25 7.475 38.525 5.75 36.4167 5.75H9.58333C7.475 5.75 5.75 7.475 5.75 9.58333V36.4167C5.75 38.525 7.475 40.25 9.58333 40.25H36.4167C38.525 40.25 40.25 38.525 40.25 36.4167ZM17.0583 26.795L21.0833 31.6442L27.025 23.9967C27.4083 23.4983 28.175 23.4983 28.5583 24.0158L35.2858 32.9858C35.3926 33.1282 35.4576 33.2975 35.4736 33.4748C35.4896 33.652 35.4559 33.8302 35.3763 33.9894C35.2967 34.1486 35.1744 34.2825 35.023 34.376C34.8716 34.4696 34.6971 34.5192 34.5192 34.5192H11.5383C10.7333 34.5192 10.2925 33.5992 10.7908 32.9667L15.5633 26.8333C15.9275 26.335 16.6558 26.3158 17.0583 26.795Z"
                fill="white"
              />
            </svg>
            
           
          </button> */}
          <textarea
              value={EditProfile.ProfilePicture} 
              onChange={(e) => setEditProfile({ ...EditProfile, ProfilePicture: e.target.value })}
              type="text"
              id="input-name"
              class="block w-full h-[38px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs absolute -top-28 flex items-center justify-center"
              placeholder="URL Picture"
            />
          
        </div>
        {/* Profile data */}
        <div class="flex-block text-center font-poppin -mt-28">
          <div class="w-full max-w-[490px] mx-auto mb-4">
            <input
             
              value={EditProfile.Fname||profile.Fname} 
              onChange={(e) => setEditProfile({ ...EditProfile, Fname: e.target.value })}
              type="text"
              id="input-name"
              class="block w-full h-[38px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs text-center"
              placeholder="Name"
            />
            
          </div>
          <div class="w-full max-w-[313px] mx-auto">
            <input
              value={EditProfile.Faculty||profile.Faculty}
              onChange={(e) => setEditProfile({ ...EditProfile, Faculty: e.target.value })}
              type="text"
              id="input-faculty"
              class="block w-full h-[30px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs text-center"
              placeholder="Faculty or Department"
            />
          </div>
        </div>

        {/* personal data */}
        <div class="border-t mx-4 md:mx-8 my-5 border-baseblue-400"></div>
        <div class="uppercase text-white font-semibold text-center p-4">
          Personal data
        </div>

        <div class="border-t mx-8 my-5 border-baseblue-400"></div>

        <div class="flex flex-col md:flex-row ">
          <div class="w-full md:w-1/2 md:mx-8">
            {/* contact */}
            <div>
              {/* Phone */}
              <div class="max-w-md mx-auto m-5 md:ml-16">
                <div class="flex items-center space-x-3 mb-4">
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_930_4419)">
                      <path
                        d="M17.5 0.780029C7.83501 0.780029 0 8.61504 0 18.28C0 27.945 7.83501 35.78 17.5 35.78C27.165 35.78 35 27.945 35 18.28C35 8.61504 27.165 0.780029 17.5 0.780029ZM11.2109 7.73132C11.5715 7.71006 11.8974 7.92557 12.1445 8.30809L14.537 12.8454C14.789 13.3831 14.6458 13.9588 14.27 14.3429L13.1741 15.4388C13.1065 15.5315 13.062 15.6359 13.0609 15.7507C13.4812 17.3775 14.756 18.878 15.8808 19.91C17.0055 20.9419 18.2144 22.339 19.7836 22.67C19.9776 22.7241 20.2152 22.7435 20.354 22.6145L21.6272 21.3178C22.0667 20.9847 22.7025 20.8232 23.1717 21.0956H23.193L27.5103 23.6441C28.1441 24.0413 28.2097 24.8092 27.756 25.2762L24.7824 28.2263C24.3433 28.6767 23.7599 28.8281 23.1931 28.8287C20.6863 28.7536 18.3177 27.5233 16.3721 26.2589C13.1787 23.9356 10.2494 21.0542 8.41035 17.5729C7.70505 16.1132 6.87651 14.2506 6.95558 12.6212C6.96264 12.0082 7.12848 11.4077 7.56015 11.0126L10.5338 8.039C10.7654 7.84189 10.9946 7.7441 11.2109 7.73132Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_930_4419">
                        <rect
                          width="35"
                          height="35"
                          fill="white"
                          transform="translate(0 0.780029)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div class="uppercase font-semibold">phone</div>
                </div>
                <input
                  value={EditProfile.Phone||profile.Phone}
                  onChange={(e) => setEditProfile({ ...EditProfile, Phone: e.target.value })}
                  type="text"
                  id="input-faculty"
                  class="block w-full md:w-[300px] h-[30px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                  placeholder="phone number"
                />
              </div>
              {/* Email */}
              <div class="max-w-md mx-auto m-5 md:ml-16">
                <div class="flex items-center space-x-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 4h8c.143 0 .281.031.409.088L8 9.231L3.591 4.088A.982.982 0 0 1 4 4m-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A.967.967 0 0 1 3 11m9 1H4c-.088 0-.175-.012-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a.967.967 0 0 1-.258.034zm1-1c0 .088-.012.175-.034.258l-2.9-2.9l2.932-3.421L13 5z"
                    />
                  </svg>

                  <div class="uppercase font-semibold">Email</div>
                </div>
                <input
                  value={EditProfile.Email||profile.Email}
                  onChange={(e) => setEditProfile({ ...EditProfile, Email: e.target.value })}
                  type="text"
                  id="input-faculty"
                  class="block w-full md:w-[300px] md:h-[30px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                  placeholder="example@hotmail.com"
                />
              </div>
              {/* Facebook */}
              <div class="max-w-md mx-auto m-5 md:ml-16">
                <div class="flex items-center space-x-2 mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0833 17.8001C32.0833 9.75013 25.55 3.2168 17.5 3.2168C9.44996 3.2168 2.91663 9.75013 2.91663 17.8001C2.91663 24.8585 7.93329 30.7355 14.5833 32.0918V22.1751H11.6666V17.8001H14.5833V14.1543C14.5833 11.3397 16.8729 9.05013 19.6875 9.05013H23.3333V13.4251H20.4166C19.6145 13.4251 18.9583 14.0814 18.9583 14.8835V17.8001H23.3333V22.1751H18.9583V32.3105C26.3229 31.5814 32.0833 25.3689 32.0833 17.8001Z"
                      fill="white"
                    />
                  </svg>

                  <div class="uppercase font-semibold">Facebook</div>
                </div>
                <input
                  value={EditProfile.Facebook||profile.Facebook}
                  onChange={(e) => setEditProfile({ ...EditProfile, Facebook: e.target.value })}
                  type="text"
                  id="input-faculty"
                  class="block w-full md:w-[300px] md:h-[30px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                  placeholder="account name"
                />
              </div>
              {/* Line */}
              <div class="max-w-md mx-auto m-5 md:ml-16">
                <div class="flex items-center space-x-2 mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0481 18.8164C18.8966 18.8164 18.7726 18.8687 18.677 18.9741C18.5815 19.0792 18.5338 19.2365 18.5338 19.4465V23.489C18.5338 23.6992 18.5821 23.8572 18.6789 23.9632C18.7754 24.0698 18.8984 24.1224 19.0481 24.1224C19.2044 24.1224 19.3309 24.0701 19.4274 23.9647C19.5239 23.8596 19.5724 23.7013 19.5724 23.4887V19.4462C19.5724 19.2338 19.5242 19.0758 19.4274 18.9716C19.3309 18.8684 19.2044 18.8164 19.0481 18.8164Z"
                      fill="white"
                    />
                    <path
                      d="M24.557 18.8164C24.4126 18.8164 24.2975 18.8662 24.2129 18.9652C24.1277 19.0645 24.0852 19.2133 24.0852 19.4113V22.4635L22.0877 19.4394C22.0316 19.3508 21.9775 19.2659 21.925 19.184C21.8725 19.1021 21.8212 19.0358 21.7711 18.9848C21.721 18.9334 21.6627 18.8925 21.5964 18.8619C21.5301 18.8317 21.4498 18.8167 21.3567 18.8167C21.2373 18.8167 21.127 18.85 21.0244 18.9166C20.9218 18.9829 20.8479 19.0688 20.8036 19.1736C20.7667 19.2692 20.748 19.4012 20.748 19.569V23.5275C20.748 23.7212 20.7923 23.8685 20.8812 23.9699C20.9694 24.0713 21.087 24.1224 21.2342 24.1224C21.3762 24.1224 21.4932 24.072 21.5839 23.9717C21.6752 23.8715 21.7204 23.7233 21.7204 23.5275V20.5211L23.669 23.51C23.7246 23.5919 23.7805 23.6717 23.8367 23.7499C23.8928 23.8281 23.9536 23.8963 24.0187 23.9546C24.0843 24.013 24.1539 24.0555 24.2288 24.0824C24.3036 24.1092 24.3876 24.1227 24.4804 24.1227C24.8539 24.1227 25.0405 23.8975 25.0405 23.4474V19.4113C25.0405 19.213 24.9968 19.0642 24.911 18.9652C24.8243 18.8662 24.7061 18.8164 24.557 18.8164Z"
                      fill="white"
                    />
                    <path
                      d="M17.2888 23.181H15.1829V19.4465C15.1829 19.2341 15.1346 19.0761 15.0372 18.9719C14.9407 18.8684 14.8143 18.8164 14.6579 18.8164C14.504 18.8164 14.38 18.8687 14.2857 18.9741C14.1907 19.0792 14.1437 19.2365 14.1437 19.4465V23.3979C14.1437 23.6219 14.1931 23.7844 14.2921 23.8847C14.3916 23.9849 14.5538 24.035 14.7807 24.035H17.2888C17.4589 24.035 17.5881 23.9962 17.6769 23.9177C17.7652 23.8391 17.8101 23.7371 17.8101 23.6112C17.8101 23.4877 17.7649 23.3851 17.6748 23.3032C17.585 23.2219 17.4564 23.181 17.2888 23.181Z"
                      fill="white"
                    />
                    <path
                      d="M22.0002 4.32849C12.2458 4.32849 4.33887 12.2402 4.33887 22C4.33887 31.7594 12.2461 39.6715 22.0002 39.6715C31.7537 39.6715 39.6615 31.7591 39.6615 22C39.6612 12.2402 31.7537 4.32849 22.0002 4.32849ZM32.646 23.147C32.096 24.6654 31.0965 26.0193 29.7767 27.1003C27.8681 28.8903 25.6654 30.298 24.286 31.2819C21.7082 33.1201 21.1601 32.9768 20.9329 32.7458C20.6852 32.494 21.3897 31.4154 21.4511 30.4278C21.4838 29.8894 20.9417 29.729 20.7866 29.7015C15.2128 29.1955 10.8737 25.2416 10.8737 20.4392C10.8737 15.293 15.8547 11.1213 21.9993 11.1213C28.1432 11.1213 33.1249 15.293 33.1249 20.4392C33.1542 21.4051 32.9752 22.3062 32.646 23.147Z"
                      fill="white"
                    />
                    <path
                      d="M29.6362 23.2091H27.2157V21.7494H29.3708C29.5311 21.7494 29.6505 21.7125 29.7269 21.6391C29.8044 21.5658 29.8426 21.4708 29.8426 21.3541C29.8426 21.2373 29.8038 21.1435 29.7256 21.0723C29.6475 21.0014 29.5287 20.9657 29.3708 20.9657H27.2157V19.7056H29.5555C29.7214 19.7056 29.8441 19.6686 29.9247 19.5953C30.0054 19.5219 30.0454 19.4245 30.0454 19.3032C30.0454 19.184 30.0054 19.0878 29.9247 19.0144C29.8441 18.9411 29.7214 18.9041 29.5555 18.9041H26.8132C26.6666 18.9041 26.546 18.9258 26.451 18.9689C26.3567 19.0123 26.2877 19.0807 26.2428 19.1754C26.1985 19.2702 26.1765 19.3918 26.1765 19.5412V23.3982C26.1765 23.6222 26.226 23.7848 26.3249 23.885C26.4239 23.9852 26.5866 24.0353 26.8129 24.0353H29.6359C29.7992 24.0353 29.9223 23.9971 30.0051 23.9213C30.0875 23.8459 30.129 23.7472 30.129 23.6259C30.129 23.4997 30.0872 23.3988 30.0051 23.3231C29.9226 23.2467 29.7998 23.2091 29.6362 23.2091Z"
                      fill="white"
                    />
                  </svg>

                  <div class="uppercase font-semibold">Line</div>
                </div>
                <input
                  value={EditProfile.Line||profile.Line}
                  onChange={(e) => setEditProfile({ ...EditProfile, Line: e.target.value })}
                  type="text"
                  id="input-faculty"
                  class="block w-full md:w-[300px] md:h-[30px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                  placeholder="line id"
                />
              </div>
            </div>
          </div>
          {/* Aboutme box */}
          <div class="w-full md:w-1/2 mx-auto md:mx-8">
            {/* about me */}
            <div class="max-w-md m-5 mx-auto md:ml-16">
              <div class="flex items-center space-x-3 mb-4">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 2.91675C9.44996 2.91675 2.91663 9.45008 2.91663 17.5001C2.91663 25.5501 9.44996 32.0834 17.5 32.0834C25.55 32.0834 32.0833 25.5501 32.0833 17.5001C32.0833 9.45008 25.55 2.91675 17.5 2.91675ZM17.5 8.75008C20.3145 8.75008 22.6041 11.0397 22.6041 13.8542C22.6041 16.6688 20.3145 18.9584 17.5 18.9584C14.6854 18.9584 12.3958 16.6688 12.3958 13.8542C12.3958 11.0397 14.6854 8.75008 17.5 8.75008ZM17.5 29.1667C14.5395 29.1667 11.0395 27.9709 8.54579 24.9667C11.1002 22.9626 14.2532 21.8733 17.5 21.8733C20.7468 21.8733 23.8997 22.9626 26.4541 24.9667C23.9604 27.9709 20.4604 29.1667 17.5 29.1667Z"
                    fill="white"
                  />
                </svg>
                <div class="uppercase font-semibold">About me</div>
              </div>
              <div>
                <textarea
                  value={EditProfile.Bio||profile.Bio}
                  onChange={(e) => setEditProfile({ ...EditProfile, Bio: e.target.value })}
                  id="multiline-input"
                  rows="16"
                  placeholder="introduce yourself..."
                  class="p-2 block w-full border text-gray-900 border-gray-300 rounded-md text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* skill & experience data */}
        <div class="border-t mx-8 my-5 border-baseblue-400"></div>
        <div class="uppercase text-white font-semibold text-center p-4">
          SKILL & EXPERIENCE
        </div>
        <div class="border-t mx-8 my-5 border-baseblue-400"></div>

        <div class="flex flex-col md:flex-row ">
          <div class="w-full md:w-1/2 md:mx-8">
            {/* Technical skill */}
            <div class="max-w-md mx-auto m-5 md:ml-16">
              <div class="flex items-center space-x-3 mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9932 35.9865C27.9306 35.9865 35.9865 27.9306 35.9865 17.9932C35.9865 8.05585 27.9306 0 17.9932 0C8.05585 0 0 8.05585 0 17.9932C0 27.9306 8.05585 35.9865 17.9932 35.9865Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.287963"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2127 24.6749C14.8347 22.5152 14.0383 21.7863 13.2689 21.0709C12.3645 20.261 11.5141 19.4916 11.5141 16.8594C11.5141 13.2823 14.4298 10.3802 17.9933 10.3802C21.5704 10.3802 24.4725 13.2823 24.4725 16.8594C24.4725 19.4916 23.6356 20.261 22.7312 21.0709C21.9618 21.7863 21.1519 22.5152 20.7875 24.6749H15.2127ZM17.9933 9.34082C17.7503 9.34082 17.5614 9.15184 17.5614 8.90887V6.92462C17.5614 6.68165 17.7503 6.49268 17.9933 6.49268C18.2363 6.49268 18.4388 6.68165 18.4388 6.92462V8.90887C18.4388 9.15184 18.2363 9.34082 17.9933 9.34082ZM22.5557 10.5692C22.4747 10.5692 22.3938 10.5422 22.3263 10.5017C22.1238 10.3802 22.0428 10.1102 22.1643 9.90775L23.1632 8.19346C23.2846 7.97749 23.5411 7.91 23.7571 8.03148C23.9731 8.15297 24.0406 8.42293 23.9191 8.62541L22.9337 10.3397C22.8527 10.4747 22.7042 10.5692 22.5557 10.5692ZM25.8763 13.8898C25.7278 13.8898 25.5794 13.8088 25.4984 13.6738C25.3769 13.4713 25.4579 13.2013 25.6603 13.0799L27.3746 12.0945C27.5771 11.973 27.8471 12.0405 27.9686 12.243C28.09 12.4589 28.0226 12.7289 27.8066 12.8504L26.1058 13.8358C26.0383 13.8763 25.9573 13.8898 25.8763 13.8898ZM29.0754 18.4522H27.1047C26.8617 18.4522 26.6592 18.2497 26.6592 18.0067C26.6592 17.7638 26.8617 17.5748 27.1047 17.5748H29.0754C29.3184 17.5748 29.5209 17.7638 29.5209 18.0067C29.5209 18.2497 29.3184 18.4522 29.0754 18.4522ZM27.5906 23.9865C27.5096 23.9865 27.4421 23.973 27.3746 23.9325L25.6603 22.9336C25.4579 22.8256 25.3769 22.5557 25.4984 22.3397C25.6199 22.1372 25.8898 22.0562 26.1058 22.1777L27.8066 23.1631C28.0226 23.2846 28.09 23.5545 27.9686 23.7705C27.9011 23.9055 27.7526 23.9865 27.5906 23.9865ZM13.4444 10.5692C13.2959 10.5692 13.1474 10.4747 13.0664 10.3397L12.081 8.62541C11.9596 8.42293 12.0271 8.15297 12.243 8.03148C12.4455 7.91 12.7155 7.97749 12.837 8.19346L13.8223 9.90775C13.9438 10.1102 13.8763 10.3802 13.6603 10.5017C13.5929 10.5422 13.5254 10.5692 13.4444 10.5692ZM10.1103 13.8898C10.0428 13.8898 9.96181 13.8763 9.89432 13.8358L8.18004 12.8504C7.97756 12.7289 7.89657 12.4589 8.01806 12.243C8.13954 12.0405 8.40951 11.973 8.62548 12.0945L10.3263 13.0799C10.5422 13.2013 10.6097 13.4713 10.4882 13.6738C10.4208 13.8088 10.2723 13.8898 10.1103 13.8898ZM8.89545 18.4522H6.91119C6.68172 18.4522 6.47925 18.2497 6.47925 18.0067C6.47925 17.7638 6.68172 17.5748 6.91119 17.5748H8.89545C9.13842 17.5748 9.32739 17.7638 9.32739 18.0067C9.32739 18.2497 9.13842 18.4522 8.89545 18.4522ZM8.39601 23.9865C8.24753 23.9865 8.09905 23.9055 8.01806 23.7705C7.89657 23.5545 7.97756 23.2846 8.18004 23.1631L9.89432 22.1777C10.0968 22.0562 10.3668 22.1372 10.4882 22.3397C10.6097 22.5557 10.5422 22.8256 10.3263 22.9336L8.62548 23.9325C8.55799 23.973 8.477 23.9865 8.39601 23.9865ZM18.5332 29.5073H17.4669C16.9404 29.5073 16.522 29.0889 16.5085 28.5759H19.4781C19.4646 29.0889 19.0462 29.5073 18.5332 29.5073ZM20.0855 28.2115H15.9146C15.7391 28.2115 15.6041 28.0765 15.6041 27.9145V27.2936H20.3825V27.9145C20.3825 28.0765 20.2475 28.2115 20.0855 28.2115ZM20.3825 26.9291H15.6176C15.4421 26.9291 15.3071 26.7941 15.3071 26.6187V25.3363C15.3071 25.1743 15.4421 25.0259 15.6176 25.0259H20.3825C20.5445 25.0259 20.693 25.1743 20.693 25.3363V26.6187C20.693 26.7941 20.5445 26.9291 20.3825 26.9291ZM17.9933 18.3172C18.9247 18.3172 19.6941 17.5613 19.6941 16.6299C19.6941 15.6985 18.9247 14.9426 17.9933 14.9426C17.0619 14.9426 16.306 15.6985 16.306 16.6299C16.306 17.5613 17.0619 18.3172 17.9933 18.3172ZM17.9933 15.2801C18.7492 15.2801 19.3431 15.8875 19.3431 16.6299C19.3431 17.3723 18.7492 17.9797 17.9933 17.9797C17.2509 17.9797 16.6435 17.3723 16.6435 16.6299C16.6435 15.8875 17.2509 15.2801 17.9933 15.2801ZM18.7087 20.5444C18.7897 20.5444 18.8707 20.4769 18.8707 20.3824L18.9517 19.4511L19.0327 19.4241C19.3431 19.3026 19.6401 19.1271 19.8966 18.9111L19.9641 18.8571L20.8145 19.2756C20.8954 19.3161 20.9899 19.2756 21.0304 19.2081L21.7458 17.9797C21.7863 17.8988 21.7593 17.8043 21.6918 17.7503L20.9089 17.2103L20.9224 17.1293C20.9494 16.9674 20.9629 16.8054 20.9629 16.6299C20.9629 16.4679 20.9494 16.2925 20.9224 16.1305L20.9089 16.0495L21.6918 15.5095C21.7593 15.4691 21.7863 15.3611 21.7458 15.2936L21.0304 14.0652C20.9899 13.9842 20.8954 13.9572 20.8145 13.9977L19.9641 14.4027L19.8966 14.3487C19.6401 14.1327 19.3431 13.9572 19.0327 13.8493L18.9517 13.8088L18.8707 12.8774C18.8707 12.7829 18.7897 12.7154 18.7087 12.7154H17.2914C17.1969 12.7154 17.1294 12.7829 17.1159 12.8774L17.0484 13.8088L16.9674 13.8493C16.657 13.9572 16.36 14.1327 16.1035 14.3487L16.0361 14.4027L15.1857 13.9977C15.1047 13.9572 15.0102 13.9842 14.9562 14.0652L14.2543 15.2936C14.2138 15.3611 14.2273 15.4691 14.3083 15.5095L15.0777 16.0495L15.0642 16.1305C15.0372 16.2925 15.0237 16.4679 15.0237 16.6299C15.0237 16.8054 15.0372 16.9674 15.0642 17.1293L15.0777 17.2103L14.3083 17.7503C14.2273 17.8043 14.2138 17.8988 14.2543 17.9797L14.9562 19.2081C15.0102 19.2756 15.1047 19.3161 15.1857 19.2756L16.0361 18.8571L16.1035 18.9111C16.36 19.1271 16.657 19.3026 16.9674 19.4241L17.0484 19.4511L17.1159 20.3824C17.1294 20.4769 17.1969 20.5444 17.2914 20.5444H18.7087ZM17.4534 20.207L17.3724 19.3026C17.3724 19.2351 17.3184 19.1811 17.2509 19.1541C16.8594 19.0326 16.4815 18.8166 16.1845 18.5332C16.1305 18.4927 16.063 18.4792 15.9956 18.5062L15.1722 18.8976L14.6322 17.9392L15.3746 17.4263C15.4286 17.3858 15.4556 17.3183 15.4421 17.2508C15.3881 17.0484 15.3746 16.8459 15.3746 16.6299C15.3746 16.4274 15.3881 16.2115 15.4421 16.009C15.4556 15.9415 15.4286 15.874 15.3746 15.8335L14.6322 15.3206L15.1722 14.3622L15.9956 14.7536C16.063 14.7941 16.1305 14.7806 16.1845 14.7266C16.4815 14.4432 16.8594 14.2272 17.2509 14.1057C17.3184 14.0922 17.3724 14.0247 17.3724 13.9572L17.4534 13.0529H18.5467L18.6142 13.9572C18.6277 14.0247 18.6682 14.0922 18.7357 14.1057C19.1407 14.2272 19.5051 14.4432 19.8156 14.7266C19.8561 14.7806 19.9371 14.7941 20.0046 14.7536L20.8145 14.3622L21.3679 15.3206L20.6255 15.8335C20.558 15.874 20.531 15.9415 20.558 16.009C20.5985 16.2115 20.6255 16.4274 20.6255 16.6299C20.6255 16.8459 20.5985 17.0484 20.558 17.2508C20.531 17.3183 20.558 17.3858 20.6255 17.4263L21.3679 17.9392L20.8145 18.8976L20.0046 18.5062C19.9371 18.4792 19.8561 18.4927 19.8156 18.5332C19.5051 18.8166 19.1407 19.0326 18.7357 19.1541C18.6682 19.1811 18.6277 19.2351 18.6142 19.3026L18.5467 20.207H17.4534Z"
                    fill="#37628D"
                  />
                </svg>
                <div class="uppercase font-semibold">TECHNICAL SKILL</div>
              </div>
              <div>
                {/* get techical information */}
                
                <textarea
                value={EditTechnicalSkill.DataAna || DataAna.dataAnalysisSkills.join('\n')} 
                onChange={(e) => setEditTechnicalSkill({ ...EditTechnicalSkill, DataAna: e.target.value })}
                id="multiline-input"
                rows="3"
                // placeholder="descript your technical skills..."
                className="p-2 block w-full border text-gray-900 border-gray-300 rounded-md text-sm"
              >
              </textarea> 

              </div>
            </div>

            {/* Soft Skill */}
            <div class="max-w-md mx-auto m-5 md:ml-16">
              <div class="flex items-center space-x-3 mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1459_2000)">
                    <path
                      d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.1305 29.5184H15.4208C15.2453 29.5184 15.1103 29.3698 15.1103 29.2078V25.6834C14.6646 25.6969 14.2595 25.6969 13.895 25.6969C13.5574 25.7104 13.2603 25.7104 12.9902 25.7104C11.9775 25.7104 11.3968 25.6429 11.0322 25.2783C10.6136 24.8327 10.6406 24.117 10.6811 22.6722C10.6947 22.1455 10.7217 21.5109 10.7217 20.7682L8.27755 20.0255C8.18302 19.9985 8.102 19.931 8.075 19.8365C8.03449 19.7419 8.04799 19.6474 8.0885 19.5664L10.3436 15.826C10.3166 14.9077 10.3706 8.11552 17.5814 6.71117C18.3376 6.56263 18.9182 6.49512 19.4718 6.49512C20.174 6.49512 20.8492 6.60314 21.6729 6.8327C23.8064 7.44035 27.4388 9.24981 27.952 14.5836C27.952 14.5836 27.952 14.5971 27.952 14.6106C28.006 17.1763 27.0607 19.1208 26.1425 20.9842C25.0487 23.2393 23.901 25.5619 24.4276 29.1133C24.4411 29.1403 24.4411 29.1673 24.4411 29.2078C24.4411 29.3698 24.3061 29.5184 24.1305 29.5184ZM21.0382 23.1583C21.1328 23.1583 21.2138 23.0773 21.2138 22.9827C21.2138 22.8882 21.1328 22.8072 21.0382 22.8072H14.9752C14.8672 22.8072 14.7862 22.8882 14.7862 22.9827C14.7862 23.0773 14.8672 23.1583 14.9752 23.1583H21.0382ZM21.0382 22.0375C21.1328 22.0375 21.2138 21.9565 21.2138 21.862C21.2138 21.7539 21.1328 21.6729 21.0382 21.6729H14.9752C14.8672 21.6729 14.7862 21.7539 14.7862 21.862C14.7862 21.9565 14.8672 22.0375 14.9752 22.0375H21.0382ZM22.3616 24.2521C22.4561 24.2521 22.5371 24.171 22.5371 24.0765V20.7682C22.5371 20.6602 22.4561 20.5791 22.3616 20.5791H13.6519C13.5439 20.5791 13.4628 20.6602 13.4628 20.7682V24.0765C13.4628 24.171 13.5439 24.2521 13.6519 24.2521H22.3616ZM13.8274 23.901V20.9437H22.186V23.901H13.8274ZM19.5394 16.2716C20.6331 16.2716 21.5379 15.3803 21.5379 14.2866C21.5379 13.1793 20.6331 12.2881 19.5394 12.2881C18.4456 12.2881 17.5409 13.1793 17.5409 14.2866C17.5409 15.3803 18.4456 16.2716 19.5394 16.2716ZM19.5394 12.6527C20.4441 12.6527 21.1733 13.3818 21.1733 14.2866C21.1733 15.1778 20.4441 15.9205 19.5394 15.9205C18.6346 15.9205 17.9055 15.1778 17.9055 14.2866C17.9055 13.3818 18.6346 12.6527 19.5394 12.6527ZM20.3496 19.5799C20.4306 19.5799 20.5116 19.5259 20.5251 19.4449L20.9437 17.6084L20.9977 17.5814C21.2273 17.4734 21.4568 17.3383 21.6594 17.1898L21.7134 17.1493L23.5094 17.7164C23.5904 17.7434 23.6849 17.7164 23.7254 17.6354L24.5356 16.2311C24.5761 16.1635 24.5626 16.069 24.5086 16.015L23.1178 14.7322V14.6647C23.1313 14.5431 23.1448 14.4081 23.1448 14.2866C23.1448 14.1515 23.1313 14.03 23.1178 13.9085V13.841L24.5086 12.5581C24.5626 12.5041 24.5761 12.4096 24.5356 12.3421L23.7254 10.9242C23.6849 10.8567 23.5904 10.8162 23.5094 10.8432L21.7134 11.4103L21.6594 11.3698C21.4568 11.2213 21.2273 11.0998 20.9977 10.9917L20.9437 10.9647L20.5251 9.12828C20.5116 9.04726 20.4306 8.97974 20.3496 8.97974H18.7292C18.6481 8.97974 18.5671 9.04726 18.5536 9.12828L18.1485 10.9647L18.081 10.9917C17.8514 11.0998 17.6219 11.2213 17.4193 11.3698L17.3653 11.4103L15.5694 10.8432C15.4884 10.8162 15.3938 10.8567 15.3533 10.9242L14.5431 12.3421C14.5026 12.4096 14.5161 12.5041 14.5701 12.5581L15.961 13.841V13.9085C15.9475 14.03 15.934 14.1515 15.934 14.2866C15.934 14.4081 15.9475 14.5431 15.961 14.6647V14.7322L14.5701 16.015C14.5161 16.069 14.5026 16.1635 14.5431 16.2311L15.3533 17.6354C15.3938 17.7164 15.4884 17.7434 15.5694 17.7164L17.3653 17.1493L17.4193 17.1898C17.6219 17.3383 17.8514 17.4734 18.081 17.5814L18.135 17.6084L18.5536 19.4449C18.5671 19.5259 18.6481 19.5799 18.7292 19.5799H20.3496ZM18.8777 19.2288L18.4726 17.4329C18.4591 17.3788 18.4186 17.3248 18.3646 17.2978C18.054 17.1898 17.7704 17.0142 17.5139 16.8117C17.4733 16.7712 17.4058 16.7577 17.3518 16.7847L15.5964 17.3383L14.9212 16.177L16.285 14.9347C16.3256 14.8942 16.3391 14.8267 16.3391 14.7727C16.3121 14.6106 16.2986 14.4486 16.2986 14.2866C16.2986 14.1245 16.3121 13.9625 16.3391 13.8004C16.3391 13.7329 16.3256 13.6789 16.285 13.6384L14.9212 12.3961L15.5964 11.2348L17.3518 11.7884C17.4058 11.8019 17.4733 11.7884 17.5139 11.7479C17.7704 11.5454 18.054 11.3833 18.3646 11.2618C18.4186 11.2483 18.4591 11.1943 18.4726 11.1403L18.8777 9.34433H20.2145L20.6061 11.1403C20.6196 11.1943 20.6601 11.2483 20.7142 11.2618C21.0247 11.3833 21.3083 11.5454 21.5649 11.7479C21.6054 11.7884 21.6729 11.8019 21.7269 11.7884L23.4823 11.2348L24.1575 12.3961L22.7937 13.6384C22.7532 13.6789 22.7397 13.7329 22.7397 13.8004C22.7667 13.9625 22.7802 14.1245 22.7802 14.2866C22.7802 14.4486 22.7667 14.6106 22.7397 14.7727C22.7397 14.8267 22.7532 14.8942 22.7937 14.9347L24.1575 16.177L23.4823 17.3383L21.7269 16.7847C21.6729 16.7712 21.6054 16.7712 21.5649 16.8117C21.3083 17.0142 21.0247 17.1898 20.7142 17.2978C20.6601 17.3248 20.6196 17.3788 20.6061 17.4329L20.2145 19.2288H18.8777Z"
                      fill="#37628D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1459_2000">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div class="uppercase font-semibold">SOFT SKILL</div>
              </div>
              <div>
                {/* get softskill infomation */}
                <ul>
                  {softskill.softSkills.map((skill, index) => (
                    <div key={index}>
                    {skill}
                  </div>
                  ))}
                </ul>

                <textarea
                  value={EditSoftskill.Title || softskill.softSkills.join('\n')}
                  onChange={(e) => setEditSoftskill({ ...EditSoftskill, Title: e.target.value })}
                  id="multiline-input"
                  rows="3"
                  // placeholder="descript your soft skills..."
                  class="p-2 block w-full border text-gray-900 border-gray-300 rounded-md text-sm"
                ></textarea>
              </div>
            </div>

            {/* Language  */}
            <div class="max-w-md mx-auto m-5 md:ml-16">
              <div class="flex items-center space-x-3 mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0064 36.0127C27.951 36.0127 36.0127 27.951 36.0127 18.0064C36.0127 8.06172 27.951 0 18.0064 0C8.06172 0 0 8.06172 0 18.0064C0 27.951 8.06172 36.0127 18.0064 36.0127Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6527 18.0063C11.5765 18.0063 11.5129 17.9809 11.4621 17.9428L10.1024 16.8626H8.00569C7.54823 16.8626 7.1543 16.4687 7.1543 16.0112V10.1658C7.1543 9.70838 7.54823 9.31445 8.00569 9.31445H13.8511C14.3086 9.31445 14.7025 9.70838 14.7025 10.1658V16.0112C14.7025 16.4687 14.3086 16.8626 13.8511 16.8626H11.945V17.7013C11.945 17.8157 11.8814 17.9173 11.7798 17.9682C11.7417 17.9936 11.6908 18.0063 11.6527 18.0063ZM12.4533 15.2869C12.3389 15.2869 12.2245 15.2234 12.1737 15.109L11.6908 13.8891H10.1659L9.68306 15.109C9.63224 15.2234 9.51787 15.2869 9.4035 15.2869C9.36538 15.2869 9.32726 15.2869 9.28914 15.2742C9.13665 15.2107 9.07311 15.0328 9.12394 14.8803L9.65765 13.5587C9.67036 13.5079 9.68306 13.4571 9.70848 13.4189L10.6488 11.0681C10.6742 11.0299 10.6869 11.0045 10.7251 10.9664C10.7505 10.941 10.7759 10.9156 10.814 10.9029C10.8394 10.9029 10.8521 10.8902 10.8776 10.8902H10.8903C10.903 10.8902 10.903 10.8902 10.903 10.8902H10.9157H10.9284H10.9411H10.9538H10.9665H10.9792C11.0046 10.8902 11.0173 10.9029 11.0428 10.9029C11.0809 10.9283 11.1063 10.941 11.1444 10.9791C11.1698 11.0045 11.1952 11.0299 11.208 11.0681L12.1483 13.4189C12.1737 13.4571 12.1864 13.5079 12.1991 13.5587L12.7328 14.8803C12.7837 15.0328 12.7201 15.2107 12.5676 15.2742C12.5295 15.2869 12.4914 15.2869 12.4533 15.2869ZM11.4621 13.3046L10.9284 11.983L10.3947 13.3046H11.4621Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3601 24.9064C24.3092 24.9064 24.2711 24.8937 24.233 24.881C24.1313 24.8302 24.0551 24.7285 24.0551 24.6142V23.7628H22.149C21.6915 23.7628 21.3103 23.3688 21.3103 22.9114V17.066C21.3103 16.6085 21.6915 16.2273 22.149 16.2273H27.9944C28.4518 16.2273 28.8458 16.6085 28.8458 17.066V22.9114C28.8458 23.3688 28.4518 23.7628 27.9944 23.7628H25.8977L24.538 24.8429C24.4871 24.881 24.4236 24.9064 24.3601 24.9064ZM26.8126 19.2262H26.2789C26.1772 19.5693 25.9358 20.192 25.4529 20.8274C25.7198 21.1069 26.0502 21.3738 26.4441 21.6025C26.5839 21.6788 26.6347 21.8567 26.5584 22.0092C26.5076 22.0981 26.406 22.1489 26.3043 22.1489C26.2535 22.1489 26.2026 22.1362 26.1645 22.1108C25.7198 21.8694 25.364 21.5771 25.0717 21.2848C24.7794 21.5771 24.4236 21.8694 23.9916 22.1108C23.9407 22.1362 23.9026 22.1489 23.8518 22.1489C23.7374 22.1489 23.6485 22.0981 23.5849 21.9964C23.5087 21.8567 23.5595 21.6788 23.6993 21.6025C24.1059 21.3738 24.4236 21.1069 24.6905 20.8274C24.2076 20.192 23.9661 19.5566 23.8772 19.2262H23.3435C23.1783 19.2262 23.0385 19.0992 23.0385 18.934C23.0385 18.7688 23.1783 18.6417 23.3435 18.6417H24.7794V17.9555C24.7794 17.7903 24.9065 17.6632 25.0717 17.6632C25.2369 17.6632 25.3767 17.7903 25.3767 17.9555V18.6417H26.0247C26.0374 18.6417 26.0629 18.6417 26.0756 18.6417H26.8126C26.9778 18.6417 27.1049 18.7688 27.1049 18.934C27.1049 19.0992 26.9778 19.2262 26.8126 19.2262ZM25.0717 20.3572C25.3767 19.9251 25.5546 19.5058 25.6562 19.2262H25.0717H24.4999C24.5888 19.5058 24.7667 19.9251 25.0717 20.3572Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5743 26.6855C13.2538 26.6855 9.74658 23.1528 9.74658 18.8069C9.74658 18.3875 9.7847 17.9428 9.87366 17.4472H9.89907L10.2422 17.7268C9.91178 18.0699 9.74658 18.4384 9.74658 18.8069C9.74658 19.6964 10.598 20.497 12.1483 21.0688C12.8853 21.3484 13.7494 21.5517 14.6898 21.6915C14.8422 22.6445 15.0456 23.5213 15.3251 24.2711C15.9097 25.8341 16.7102 26.6855 17.5743 26.6855C19.7346 26.6855 21.7296 25.8468 23.1783 24.36H22.149C21.3738 24.36 20.713 23.6992 20.713 22.9114V21.666C20.6368 21.6787 20.5479 21.6915 20.4716 21.7042C20.3318 22.6572 20.1158 23.534 19.8362 24.2711C19.2771 25.8341 18.4638 26.6855 17.5743 26.6855ZM24.754 15.63C23.5087 12.809 20.7258 10.9664 17.5743 10.9664C16.7102 10.9664 15.9097 11.8305 15.3251 13.3808C15.3124 13.4062 15.2997 13.4444 15.287 13.4825V11.3222C16.024 11.0935 16.7992 10.9664 17.5743 10.9664C18.4638 10.9664 19.2644 11.8305 19.8362 13.3808C20.1158 14.1179 20.3318 14.9947 20.4716 15.935C20.7003 15.9731 20.9164 16.0113 21.1324 16.0621C21.3992 15.7952 21.7551 15.63 22.149 15.63H24.754ZM20.802 16.5958C20.713 16.5831 20.6368 16.5577 20.5479 16.545C20.6241 17.2693 20.6749 18.0317 20.6749 18.8069C20.6749 19.5947 20.6241 20.3699 20.5479 21.0942C20.5987 21.0942 20.6622 21.0815 20.713 21.0688V17.066C20.713 16.9008 20.7385 16.7483 20.802 16.5958ZM10.7123 18.0953C10.4709 18.3367 10.3438 18.5781 10.3438 18.8069C10.3438 19.7218 11.9704 20.6622 14.6135 21.0942C14.5246 20.3572 14.4864 19.5947 14.4864 18.8069C14.4864 18.2859 14.5118 17.7649 14.55 17.2693C14.3339 17.3837 14.1052 17.4472 13.8511 17.4472H12.5422V17.7013C12.5422 18.0444 12.3516 18.3494 12.0466 18.5019C11.9195 18.5654 11.7925 18.5909 11.6527 18.5909C11.4494 18.5909 11.2461 18.5273 11.0936 18.4002L10.7123 18.0953ZM17.5743 11.5637C16.6975 11.5637 15.7318 13.2283 15.2997 15.8588C15.9732 15.7825 16.7611 15.719 17.5743 15.719C18.3622 15.719 19.1246 15.7571 19.8617 15.8461C19.4423 13.2029 18.4893 11.5637 17.5743 11.5637ZM15.2235 16.4687C15.1345 17.193 15.0837 17.9809 15.0837 18.8069C15.0837 19.6456 15.1345 20.4461 15.2235 21.1705C15.9478 21.2594 16.7356 21.3102 17.587 21.3102C18.4384 21.3102 19.2263 21.2721 19.9379 21.1832C20.0268 20.4588 20.0777 19.6583 20.0777 18.8069C20.0777 17.9682 20.0268 17.1803 19.9379 16.456C19.1882 16.3544 18.3876 16.3035 17.5743 16.3035C16.7229 16.3035 15.897 16.3798 15.2235 16.4687ZM15.3124 21.7677C15.7318 24.4235 16.6975 26.0882 17.5743 26.0882C18.4893 26.0882 19.4423 24.449 19.8617 21.7804C19.1627 21.8567 18.4003 21.8948 17.5743 21.8948C16.7992 21.8948 16.0367 21.8567 15.3124 21.7677Z"
                    fill="#37628D"
                  />
                </svg>

                <div class="uppercase font-semibold">LANGUAGES</div>
              </div>
              <div>
                {langskill.languageSkills.map((skill, index) => (
                  <div key={index}>
                    {skill}
                  </div>
                ))}

                <textarea
                  value={EditLangskill.Title || langskill.languageSkills.join('\n') }
                  onChange={(e) => setEditLangskill({ ...EditLangskill, Title: e.target.value })}
                  id="multiline-input"
                  rows="3"
                  // placeholder="add a language that you can communicate in"
                  class="p-2 block w-full border text-gray-900 border-gray-300 rounded-md text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          {/* Experience*/}
          <div class="w-full md:w-1/2 mx-auto md:mx-8">
            <div class="max-w-md mx-auto m-5 md:ml-16">
              <div class="flex items-center space-x-3 mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.44 11.4353C19.3976 11.4353 19.3553 11.4353 19.3129 11.4353L18.5506 10.9694L17.7459 11.4353C17.6612 11.4777 17.5341 11.4353 17.4494 11.3929C17.3647 11.3506 17.3223 11.2235 17.3647 11.1388L17.5341 10.2494L16.8565 9.61412C16.8141 9.57177 16.7718 9.44471 16.8141 9.36C16.8141 9.2753 16.8988 9.19059 17.0259 9.19059L17.9153 9.06353L18.2965 8.25883C18.3388 8.17412 18.4235 8.08942 18.5506 8.08942C18.6353 8.08942 18.72 8.17412 18.7623 8.25883L19.1435 9.06353L20.0329 9.19059C20.16 9.19059 20.2447 9.2753 20.2871 9.36C20.2871 9.44471 20.2871 9.57177 20.2023 9.61412L19.5247 10.2494L19.6941 11.1388C19.7365 11.2235 19.6941 11.3506 19.6094 11.3929C19.5671 11.4353 19.5247 11.4353 19.44 11.4353Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2824 13.3835C12.1977 13.3835 12.1553 13.3412 12.1129 13.2988C12.0282 13.2565 11.9859 13.1718 12.0282 13.0447L12.1977 12.1553L11.52 11.5624C11.4353 11.4777 11.4353 11.393 11.4353 11.2659C11.4777 11.1812 11.5624 11.0965 11.6894 11.0965L12.5788 10.9694L12.96 10.1647C13.0024 10.08 13.0871 10.0377 13.1718 10.0377C13.2988 10.0377 13.3835 10.08 13.4259 10.1647L13.8071 10.9694L14.6965 11.0965C14.8235 11.0965 14.9082 11.1812 14.9082 11.2659C14.9506 11.393 14.9082 11.4777 14.8659 11.5624L14.1882 12.1553L14.3577 13.0447C14.4 13.1718 14.3577 13.2565 14.2729 13.2988C14.1882 13.3835 14.0612 13.3835 13.9765 13.3412L13.1718 12.9177L12.4094 13.3412C12.3671 13.3412 12.3247 13.3835 12.2824 13.3835Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9553 13.3835C22.9129 13.3835 22.8706 13.3412 22.8282 13.2988C22.7435 13.2565 22.7012 13.1718 22.7012 13.0447L22.8706 12.1553L22.2353 11.5624C22.1506 11.4777 22.1082 11.393 22.1506 11.2659C22.1929 11.1812 22.2776 11.0965 22.3624 11.0965L23.2518 10.9694L23.6329 10.1647C23.6753 10.08 23.76 10.0377 23.8871 10.0377C23.9718 10.0377 24.0565 10.08 24.0988 10.1647L24.48 10.9694L25.4118 11.0965C25.4965 11.0965 25.5812 11.1812 25.6235 11.2659C25.6659 11.393 25.6235 11.4777 25.5388 11.5624L24.9035 12.1553L25.0729 13.0447C25.0729 13.1718 25.0306 13.2565 24.9459 13.2988C24.8612 13.3835 24.7765 13.3835 24.6494 13.3412L23.8871 12.9177L23.0824 13.3412C23.04 13.3412 22.9976 13.3835 22.9553 13.3835Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6894 19.1435C10.8 19.1435 10.08 18.4235 10.08 17.5765C10.08 16.687 10.8 15.967 11.6894 15.967C12.5365 15.967 13.2565 16.687 13.2565 17.5765C13.2565 18.4235 12.5365 19.1435 11.6894 19.1435Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.6917 21.8541C24.0564 21.8541 23.5059 21.3035 23.5059 20.6682C23.5059 19.9906 24.0564 19.44 24.6917 19.44C25.3694 19.44 25.92 19.9906 25.92 20.6682C25.92 21.3035 25.3694 21.8541 24.6917 21.8541Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.4753 22.3623L16.7294 21.5576C17.1106 21.727 17.5765 21.8117 18 21.8117H19.0588C19.5247 21.8117 19.9482 21.727 20.3718 21.5576L20.5835 22.3623L18.5506 22.5317L16.4753 22.3623Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0588 21.2612H18C17.2376 21.2612 16.6447 21.007 16.1788 20.5412C15.6282 19.9906 15.3318 19.1435 15.3741 18.0423C15.3741 17.9153 15.4588 17.8306 15.5859 17.8306C15.7129 17.8306 15.7976 17.9576 15.7976 18.0423C15.7976 18.72 15.8823 19.6517 16.4753 20.2447C16.8565 20.6259 17.3647 20.7953 18 20.7953H19.0588C19.6941 20.7953 20.2023 20.6259 20.5835 20.2447C21.1765 19.6517 21.2612 18.72 21.2612 18.0423C21.2612 17.9153 21.3459 17.8306 21.4729 17.8306C21.6 17.8306 21.6847 17.9153 21.6847 18.0423C21.727 19.1435 21.4306 19.9906 20.88 20.5412C20.4565 21.007 19.8212 21.2612 19.0588 21.2612Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.4729 18.2541C21.4306 18.2541 21.3882 18.2541 21.3882 18.2541C21.3035 18.2118 21.2612 18.1271 21.2612 18.0424C21.2612 17.6188 21.1765 16.8988 20.9647 16.56C20.4988 16.7294 20.0329 16.7718 19.6518 16.7718C18.6353 16.7718 18 16.3906 17.6188 16.1365C17.4918 16.0941 17.3647 16.0094 17.3223 16.0094C16.6447 16.0094 16.1788 16.4753 16.1788 16.4753C15.8823 16.7294 15.7976 17.5765 15.7976 18.0424C15.7976 18.1271 15.7553 18.2118 15.7129 18.2541C15.6282 18.2965 15.5435 18.2541 15.4588 18.2541C14.7812 17.7883 14.3576 17.0683 14.3576 16.1365C14.3153 14.9506 14.9506 13.68 16.0518 12.8753C16.8141 12.3247 17.7459 12.0283 18.6353 12.0283C19.5671 12.0706 20.4565 12.4094 21.2188 13.0447C22.1929 13.8494 22.7859 15.0777 22.7012 16.2212C22.6588 17.1106 22.2776 17.7883 21.6 18.2118C21.5576 18.2541 21.5153 18.2541 21.4729 18.2541ZM15.4588 16.0094C15.4165 16.0094 15.3741 16.0094 15.3318 15.9671C15.2471 15.8824 15.2471 15.713 15.3318 15.6283C15.84 15.1624 16.6023 14.8236 17.3223 14.8236C17.7035 14.8236 17.9576 14.993 18.2118 15.12L18.2541 15.1624C18.4235 15.2471 18.5929 15.3741 18.8047 15.4165C18.8894 15.4588 18.9741 15.5859 18.9318 15.713C18.8894 15.84 18.7623 15.8824 18.6353 15.84C18.3812 15.7553 18.2118 15.6283 18 15.5012C17.7882 15.3741 17.5765 15.2471 17.3223 15.2471C16.7294 15.2471 16.0518 15.5436 15.6282 15.9671C15.5859 16.0094 15.5435 16.0094 15.4588 16.0094ZM21.6847 15.6283C21.5576 15.6283 21.4729 15.5436 21.4729 15.4588C21.3035 14.8659 20.9647 14.3577 20.4565 13.9341C19.3553 13.0024 17.9153 13.0024 16.7294 13.8494C16.6447 13.9341 16.5176 13.8918 16.4329 13.8071C16.3482 13.7224 16.3906 13.553 16.4753 13.5106C17.8306 12.4941 19.44 12.5365 20.7529 13.5953C21.3035 14.0612 21.6847 14.6965 21.8965 15.3318C21.8965 15.4588 21.8541 15.5859 21.7271 15.6283C21.6847 15.6283 21.6847 15.6283 21.6847 15.6283Z"
                    fill="#37628D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3106 27.9106H22.8283V25.6235C22.8283 25.4965 22.7436 25.3694 22.6165 25.3694C22.4894 25.3694 22.4047 25.4965 22.4047 25.6235V27.9106H19.8636L19.313 24.6494L20.2871 25.2424C20.3294 25.2424 20.3718 25.2424 20.4141 25.2424C20.4565 25.2424 20.4989 25.2424 20.5412 25.2424C20.5836 25.2 20.6259 25.1153 20.6259 25.0306V22.8706C20.6259 22.7859 20.5836 22.7435 20.5412 22.7012C20.4565 22.6588 20.3718 22.6588 20.2871 22.7012L18.5506 23.7177L16.7718 22.7012C16.6871 22.6588 16.6024 22.6588 16.56 22.7012C16.4753 22.7435 16.433 22.7859 16.433 22.8706V25.0306C16.433 25.1153 16.4753 25.2 16.56 25.2424C16.56 25.2424 16.6024 25.2424 16.6447 25.2424C16.6871 25.2424 16.7294 25.2424 16.7718 25.2424L17.7459 24.6494L17.2377 27.9106H14.6965V25.6235C14.6965 25.4965 14.5694 25.3694 14.4847 25.3694C14.3577 25.3694 14.2306 25.4965 14.2306 25.6235V27.9106H12.7483C12.6636 27.9106 12.5365 27.7835 12.5365 27.6988V25.1153C12.5365 23.5906 13.8071 22.3624 15.3318 22.3624H21.7271C23.2518 22.3624 24.5224 23.5906 24.5224 25.1153V27.6988C24.5224 27.7835 24.3953 27.9106 24.3106 27.9106ZM18.8471 24.3953L19.3977 27.9106H17.6612L18.2118 24.3953L18.5506 24.2259L18.8471 24.3953ZM18.9741 23.9718L20.2024 24.6494V23.2518L18.9741 23.9718ZM17.9577 24.0565C17.9153 24.0565 17.9153 24.0565 17.873 24.0988L16.8565 24.6494V23.2518L18.0847 23.9718L17.9577 24.0565Z"
                    fill="#37628D"
                  />
                </svg>

                <div class="uppercase font-semibold">EXPERIENCE</div>
              </div>
              <div>
                <textarea
                  value={EditExp.Description ||exp.map(item => item.Description).join('\n')}
                  onChange={(e) => setEditExp({ ...EditExp, Description: e.target.value })}
                  id="multiline-input"
                  rows="18"
                  // placeholder="describe your experience..."
                  class="p-2 block w-full border text-gray-900 border-gray-300 rounded-md text-sm"
                >
                  
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
