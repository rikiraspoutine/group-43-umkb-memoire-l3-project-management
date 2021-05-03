import { CogIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import User from "../../../../models/User";

const UserCardHorizantal = ({imgProfile,userDetails}:{imgProfile:string,userDetails:User}) => {
    const {t} = useTranslation("dashboard");
    return (
        <Link href="/dashboard/profile">
          <div className="cursor-pointer hover:bg-gray-200 p-2 transition duration-200 rounded-xl  select-none	flex flex-row bg-white items-center justify-center">
            <img  height="30" width="30" className="rounded-3xl flex-initial ml-4" src={imgProfile}/>
            <div className="flex-1 px-5">
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold">{userDetails.firstname+' '+userDetails.lastname}</h3>
                    <h6 className="text-xs"> {t('view-profile')}</h6>
                </div>
            </div>            
        </div>
        </Link>
    );
}

UserCardHorizantal.defaultProps = {
    imgProfile:'/icons/default-avatar.jpg',
}

export default UserCardHorizantal;