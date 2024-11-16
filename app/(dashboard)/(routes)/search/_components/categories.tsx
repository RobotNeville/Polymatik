"use client";

import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
    FcBiotech,
    FcDiploma1,
    FcBusiness,
    FcCollaboration
    
} from "react-icons/fc"
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap : Record<Category["name"], IconType> = {
    "Legal Studies": FcDiploma1,
    "Chemistry": FcBiotech,
    "Medical Sciences": FcSportsMode,
    "Economics": FcBusiness,
    "Computer Science": FcMultipleDevices,
    "Psychology": FcCollaboration,
};

export const Categories = ({
    items,
} : CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
           {items.map((item)=> (
            <CategoryItem 
                key={item.id}
                label={item.name}
                icon={iconMap[item.name]}
                value={item.id}
            />
           ))}
        </div>
    )
}